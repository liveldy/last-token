/* ==========================================================================
   最后的 Token · 画面氛围层
   --------------------------------------------------------------------------
   把这张静态的“最后的晚餐”做成会呼吸的画面：
     1. 照片本体       —— 缓慢推拉（呼吸）+ 轻微鼠标视差
     2. 阳光光柱       —— 与画中真实光斑对齐的叠加发光，缓慢闪烁
     3. 后墙三扇窗     —— 日落光缓慢呼吸、窗框外溢光晕、远处城市灯火闪烁
     4. 尘埃粒子       —— 只在被照亮的地方浮出来
     5. 暖光雾 / 冷调  —— 左上角漏光、右下沉入冷色阴影
     6. 跟随鼠标的提灯
     7. 暗角 + 胶片颗粒
   屏幕比例把画面裁掉太多时（16:9 会切掉左右两侧），按住左键拖动——触摸屏上直接用手指，
   效果一样——就能把被裁掉的部分拉进视野；松手后画面停在原处，只顺着势头滑一小段。
   画面不会自己左右移动。角色热区挂在 #space 里，因此自动跟着这些位移一起走。
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- 1. 基础常量 ---------- */

  var IMG_ASPECT = 2;        // 原图 2880x1440
  var BASE_ZOOM  = 1.055;    // 基础放大，给视差和呼吸留出余量
  var MOTES_INSET = 0.06;    // #motes 画布四边外扩 6%
  var DRAG_SLOP   = 6;       // 指针移动超过这么多像素才算拖动，免得把点击当成拖动
  var PAN_FRICTION = 0.006;  // 松手滑行时速度每秒衰减到的比例（越小停得越快）
  var PAN_FOLLOW   = 0.002;  // 画面追向目标位置时每秒剩下的残差
  var PAN_VMAX     = 900;    // 松手瞬间的速度上限（px/s）

  var settings = {
    intensity: 1,
    light: 1,
    glow: 1,
    parallax: 1,
    panorama: true,
    dust: true,
    drift: true,
    audio: true,
    warm: [255, 202, 148]
  };

  /* ---------- 2. 场景数据（百分比坐标基于原图，由像素分析标定） ---------- */

  var BEAMS = [
    { x: -3.0, y: -6,  w:  9.5, h: 54, rot: -13, op: 0.60, sp: 0.10, ph: 0.0 },
    { x: 10.0, y: 13,  w:  7.5, h: 26, rot: -17, op: 0.42, sp: 0.15, ph: 1.9 },
    { x: 16.5, y: 23,  w:  7.5, h: 22, rot: -19, op: 0.30, sp: 0.12, ph: 3.4 },
    { x:  2.0, y: 26,  w: 22.0, h: 26, rot: -10, op: 0.16, sp: 0.06, ph: 0.8 },
    { x: -2.0, y: 80,  w: 27.0, h: 24, rot:  -8, op: 0.34, sp: 0.08, ph: 2.4 },
    { x:  0.5, y: 50,  w: 29.0, h: 20, rot:  -6, op: 0.20, sp: 0.09, ph: 4.1 }
  ];

  var LIGHT_ZONES = [
    { x:  1.5, y: 20, r: 0.34, w: 1.00 },
    { x: 13.0, y: 26, r: 0.24, w: 0.75 },
    { x: 20.0, y: 34, r: 0.20, w: 0.50 },
    { x: 12.0, y: 94, r: 0.30, w: 0.85 },
    { x:  6.0, y: 60, r: 0.26, w: 0.45 }
  ];

  var WINDOWS = [
    { x: 33.4, y: 24.4, w: 7.3, h: 17.0, drift: 26, ph: 0.0, city:  6 },
    { x: 45.3, y: 24.4, w: 9.0, h: 17.0, drift: 33, ph: 1.4, city:  8 },
    { x: 59.3, y: 24.4, w: 7.1, h: 17.0, drift: 21, ph: 2.7, city: 11 }
  ];

  /* ---------- 3. DOM ---------- */

  var stage      = document.getElementById('stage');
  var space      = document.getElementById('space');
  var beamsBox   = document.getElementById('beams');
  var windowsBox = document.getElementById('windows');
  var motesCv    = document.getElementById('motes');
  var grainCv    = document.getElementById('grain');
  var coolEl     = document.getElementById('cool');
  var washEl     = document.getElementById('wash');
  var ambientEl  = document.getElementById('ambient');
  var lanternEl  = document.getElementById('lantern');
  var vignetteEl = document.getElementById('vignette');
  var fadeEl     = document.getElementById('fade');

  if (!stage || !space) return;

  /* ---------- 4. 小工具 ---------- */

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function warmCss(alpha) {
    var w = settings.warm;
    return 'rgb(' + w[0] + ' ' + w[1] + ' ' + w[2] + ' / ' + alpha + ')';
  }

  /* ---------- 5. 光柱 ---------- */

  var beamEls = BEAMS.map(function (b) {
    var el = document.createElement('div');
    el.className = 'beam';
    el.style.left = b.x + '%';
    el.style.top = b.y + '%';
    el.style.width = b.w + '%';
    el.style.height = b.h + '%';
    el.style.transform = 'rotate(' + b.rot + 'deg)';
    beamsBox.appendChild(el);
    return el;
  });

  function paintBeams() {
    BEAMS.forEach(function (b, i) {
      beamEls[i].style.background =
        'linear-gradient(to bottom, ' + warmCss(b.op) + ', ' +
        warmCss(Number((b.op * 0.55).toFixed(3))) + ' 46%, ' + warmCss(0) + ')';
    });
  }

  /* ---------- 6. 窗户 ---------- */

  var winEls = WINDOWS.map(function (o) {
    var wrap = document.createElement('div');
    wrap.className = 'winwrap';
    wrap.style.left = o.x + '%';
    wrap.style.top = o.y + '%';
    wrap.style.width = o.w + '%';
    wrap.style.height = o.h + '%';

    var halo = document.createElement('div');
    halo.className = 'win-halo';

    var win = document.createElement('div');
    win.className = 'win';

    var sky = document.createElement('div');
    sky.className = 'win-sky';
    sky.style.animationDuration = o.drift + 's';

    var tw = document.createElement('div');
    tw.className = 'win-tw';

    for (var i = 0; i < o.city; i++) {
      var dot = document.createElement('i');
      dot.style.left = (6 + Math.random() * 88).toFixed(1) + '%';
      dot.style.top = (8 + Math.random() * 78).toFixed(1) + '%';
      dot.style.animationDuration = (2.6 + Math.random() * 4.4).toFixed(1) + 's';
      dot.style.animationDelay = (-Math.random() * 6).toFixed(1) + 's';
      dot.style.width = dot.style.height = (2.6 + Math.random() * 2.2).toFixed(1) + 'px';
      tw.appendChild(dot);
    }

    win.appendChild(sky);
    win.appendChild(tw);
    wrap.appendChild(halo);
    wrap.appendChild(win);
    windowsBox.appendChild(wrap);

    return { halo: halo, win: win, sky: sky, tw: tw };
  });

  /* ---------- 7. 尺寸与布局 ---------- */

  var vw = 1, vh = 1, fitW = 1, fitH = 1, dpr = 1;

  function layout() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    var w = vw, h = vw / IMG_ASPECT;
    if (h < vh) { h = vh; w = vh * IMG_ASPECT; }
    fitW = w;
    fitH = h;

    space.style.width = w + 'px';
    space.style.height = h + 'px';
    space.style.left = ((vw - w) / 2) + 'px';
    space.style.top = ((vh - h) / 2) + 'px';

    var mw = Math.round(vw * (1 + MOTES_INSET * 2) * dpr);
    var mh = Math.round(vh * (1 + MOTES_INSET * 2) * dpr);
    if (motesCv.width !== mw || motesCv.height !== mh) {
      motesCv.width = mw;
      motesCv.height = mh;
    }

    initMotes();
  }

  /* ---------- 8. 尘埃 ---------- */

  var moteCtx = motesCv.getContext('2d');
  var motes = [];

  function initMotes() {
    var n = Math.round(clamp(vw / 24, 40, 100));
    motes = [];
    for (var i = 0; i < n; i++) {
      motes.push({
        u: Math.random(),
        v: Math.random(),
        r: 0.6 + Math.random() * 2.2,
        a: 0.30 + Math.random() * 0.60,
        vy: 0.004 + Math.random() * 0.016,
        sway: 0.003 + Math.random() * 0.010,
        ph: Math.random() * Math.PI * 2,
        sp: 0.10 + Math.random() * 0.40,
        glint: Math.random() < 0.18
      });
    }
  }

  function zonePositions(tX, tY, zoom) {
    var out = [];
    for (var i = 0; i < LIGHT_ZONES.length; i++) {
      var z = LIGHT_ZONES[i];
      var sx = vw / 2 + (z.x / 100 - 0.5) * fitW * zoom + tX;
      var sy = vh / 2 + (z.y / 100 - 0.5) * fitH * zoom + tY;
      out.push({ x: sx + vw * MOTES_INSET, y: sy + vh * MOTES_INSET, r: z.r * (vh * 0.34), w: z.w });
    }
    return out;
  }

  function drawMotes(dt, tX, tY, zoom, bright) {
    var cw = motesCv.width, ch = motesCv.height;
    var zones = zonePositions(tX, tY, zoom);
    var w = settings.warm;
    var ox = tX * 1.35 * dpr, oy = tY * 1.35 * dpr;
    var boost = settings.audio ? 1 + 0.45 * audio : 1;

    moteCtx.clearRect(0, 0, cw, ch);
    moteCtx.globalCompositeOperation = 'lighter';

    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.v -= m.vy * dt * boost;
      m.u += Math.sin(clock * m.sp + m.ph) * m.sway * dt * 6;
      if (m.v < -0.03) { m.v = 1.03; m.u = Math.random(); }
      if (m.u < -0.03) m.u += 1.06;
      if (m.u > 1.03) m.u -= 1.06;

      var x = ((m.u * cw + ox) % cw + cw) % cw;
      var y = ((m.v * ch + oy) % ch + ch) % ch;

      var lit = 0;
      for (var j = 0; j < zones.length; j++) {
        var z = zones[j];
        var dx = x - z.x, dy = y - z.y;
        lit += z.w * Math.exp(-(dx * dx + dy * dy) / (2 * z.r * z.r));
      }
      lit = clamp(lit, 0, 1);

      var a = m.a * (0.16 + 0.84 * lit) * settings.intensity * bright * boost;
      if (a < 0.01) continue;

      var r = m.r * dpr * (1 + 0.25 * lit);
      moteCtx.fillStyle = 'rgb(' + w[0] + ' ' + (w[1] - 8) + ' ' + (w[2] - 26) + ' / ' + a.toFixed(3) + ')';
      moteCtx.beginPath();
      moteCtx.arc(x, y, r, 0, 6.2832);
      moteCtx.fill();

      if (m.glint && lit > 0.45) {
        moteCtx.fillStyle = 'rgb(' + w[0] + ' ' + (w[1] + 20) + ' ' + w[2] + ' / ' + (a * 0.22).toFixed(3) + ')';
        moteCtx.beginPath();
        moteCtx.arc(x, y, r * 3.4, 0, 6.2832);
        moteCtx.fill();
      }
    }
  }

  /* ---------- 9. 胶片颗粒 ---------- */

  var grainCtx = grainCv.getContext('2d');
  var grainW = 220, grainH = 124;
  grainCv.width = grainW;
  grainCv.height = grainH;
  var grainImg = grainCtx.createImageData(grainW, grainH);

  function refreshGrain(strength) {
    var d = grainImg.data;
    for (var i = 0; i < d.length; i += 4) {
      var n = 128 + (Math.random() - 0.5) * 255 * strength;
      d[i] = d[i + 1] = d[i + 2] = n;
      d[i + 3] = 255;
    }
    grainCtx.putImageData(grainImg, 0, 0);
  }

  /* ---------- 10. 鼠标 ---------- */

  var mx = 0, my = 0, curX = 0, curY = 0;
  var lanternX = 0, lanternY = 0, lanternAlpha = 0, lanternTarget = 0, idle = 0;

  window.addEventListener('mousemove', function (e) {
    mx = (e.clientX / vw - 0.5) * 2;
    my = (e.clientY / vh - 0.5) * 2;
    lanternX = e.clientX;
    lanternY = e.clientY;
    lanternTarget = 1;
    idle = 0;
  }, { passive: true });

  window.addEventListener('mouseleave', function () { lanternTarget = 0; }, { passive: true });

  /* ---------- 10a. 拖动画面 ---------- */

  /* 屏幕比例把画面裁掉时（16:9 会切掉左右两侧），按住左键或手指拖动去看被裁掉的部分。
     用 Pointer Events，鼠标、触摸、触控笔一套写；只认左键，右键留给系统菜单。
     松手后画面停在原处，只顺着最后的势头滑一小段，绝不自己动。 */

  var panX = 0, panY = 0;       // 画面当前偏移
  var panTX = 0, panTY = 0;     // 目标偏移（拖动时直接跟着指针走）
  var panVX = 0, panVY = 0;     // 松手瞬间的速度（px/s），用来做滑行
  var dragging = false;
  var dragMove = 0;             // 本次按下累计移动的像素
  var dragSlop = false;         // 是否已经越过 DRAG_SLOP，够格算拖动
  var swallowClick = false;     // 拖动结束时吞掉随之而来的那次 click
  var dragLastX = 0, dragLastY = 0, dragLastT = 0;

  /* 画面能移动的范围：扣掉留给鼠标视差的余量，剩下多少就能拖多少 */
  function panBounds() {
    var slackX = Math.max(0, (fitW * zoom - vw) / 2);
    var slackY = Math.max(0, (fitH * zoom - vh) / 2);
    var maxX = Math.min(vw * 0.014, slackX * 0.7);
    var maxY = Math.min(vh * 0.010, slackY * 0.7);
    return {
      slackX: slackX, slackY: slackY, maxX: maxX, maxY: maxY,
      x: Math.max(0, slackX - maxX),
      y: Math.max(0, slackY - maxY)
    };
  }

  function dragBegin(e) {
    if (!settings.panorama) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;   // 只认鼠标左键
    if (e.isPrimary === false) return;                          // 多指时只跟第一根手指
    swallowClick = false;
    dragging = true;
    dragSlop = false;
    dragMove = 0;
    panVX = panVY = 0;
    dragLastX = e.clientX;
    dragLastY = e.clientY;
    dragLastT = e.timeStamp || performance.now();
    stage.classList.add('is-dragging');
  }

  function dragTo(e) {
    if (!dragging) return;
    var dx = e.clientX - dragLastX;
    var dy = e.clientY - dragLastY;
    dragLastX = e.clientX;
    dragLastY = e.clientY;

    var t = e.timeStamp || performance.now();
    var dt = Math.max(1, t - dragLastT) / 1000;
    dragLastT = t;

    dragMove += Math.abs(dx) + Math.abs(dy);
    if (!dragSlop && dragMove > DRAG_SLOP) dragSlop = true;

    var B = panBounds();
    panTX = clamp(panTX + dx, -B.x, B.x);
    panTY = clamp(panTY + dy, -B.y, B.y);
    panVX = clamp(panVX * 0.6 + (dx / dt) * 0.4, -PAN_VMAX, PAN_VMAX);
    panVY = clamp(panVY * 0.6 + (dy / dt) * 0.4, -PAN_VMAX, PAN_VMAX);
  }

  function dragEnd() {
    if (!dragging) return;
    dragging = false;
    stage.classList.remove('is-dragging');
    // 松手前就停住不动了，说明不是甩出去的，别让它自己滑
    if (performance.now() - dragLastT > 90) { panVX = panVY = 0; }
    if (dragSlop) swallowClick = true;
    dragSlop = false;
  }

  /* 拖过一次的那次 click 要吞掉，否则会顺手打开角色档案 */
  window.addEventListener('click', function (e) {
    if (!swallowClick) return;
    swallowClick = false;
    e.stopPropagation();
    e.preventDefault();
  }, true);

  stage.addEventListener('pointerdown', dragBegin);
  window.addEventListener('pointermove', dragTo, { passive: true });
  window.addEventListener('pointerup', dragEnd, { passive: true });
  window.addEventListener('pointercancel', dragEnd, { passive: true });
  window.addEventListener('blur', dragEnd);

  /* ---------- 10b. 音频（只有 Wallpaper Engine 会提供） ---------- */

  var audio = 0;          // 缓动后的能量 0..1
  var audioRaw = 0;       // 最近一次收到的能量

  if (typeof window.wallpaperRegisterAudioListener === 'function') {
    window.wallpaperRegisterAudioListener(function (arr) {
      if (!arr || !arr.length) return;
      var n = arr.length;
      var half = Math.floor(n / 2);
      var sum = 0, cnt = 0, i;
      for (i = 0; i < Math.min(20, half); i++) { sum += arr[i]; cnt++; }
      for (i = half; i < Math.min(half + 20, n); i++) { sum += arr[i]; cnt++; }
      if (!cnt) return;
      audioRaw = clamp(sum / cnt * 1.7, 0, 1);
    });
  }

  /* ---------- 11. 主循环 ---------- */

  var clock = 0;
  var last = performance.now();
  var zoom = BASE_ZOOM;
  var grainTick = 0;
  var lastTX = 0;

  /* 聚焦：打开某位角色的档案时，把 TA 缓缓挪到画面空闲的一侧，
     免得被面板挡住；关掉面板后画面就停在这个位置，不会跳回去。 */
  var focusU = null, focusTX = 0, focusTarget = 0;

  function focus(u, targetX) {
    focusU = u;
    focusTarget = (typeof targetX === 'number') ? targetX : vw / 2;
    focusTX = lastTX;
  }

  function release() {
    // 把聚焦的偏移交还给拖动偏移，关掉面板后画面停在原处；
    // 关掉「拖动查看全图」时不留偏移，画面回到正中。
    if (focusU !== null) { panX = panTX = settings.panorama ? focusTX : 0; }
    focusU = null;
  }

  function frame(now) {
    requestAnimationFrame(frame);

    var dt = (now - last) / 1000;
    last = now;
    if (document.hidden) return;
    if (dt > 0.1) dt = 0.1;
    if (dt <= 0) return;
    clock += dt;

    var k = 1 - Math.pow(0.001, dt);
    curX += (mx - curX) * k * 0.85;
    curY += (my - curY) * k * 0.85;

    /* 音频能量：先平滑，再缓慢衰减 */
    audioRaw *= Math.pow(0.25, dt);
    audio += (audioRaw - audio) * (1 - Math.pow(0.02, dt));

    var drift = settings.drift ? 1 : 0;
    zoom = BASE_ZOOM + drift * (0.004 * Math.sin(clock / 39 + 0.4) + 0.002 * Math.sin(clock / 17 + 2.1));

    var B = panBounds();
    var slackX = B.slackX, slackY = B.slackY, maxX = B.maxX, maxY = B.maxY;
    var px = clamp(curX * maxX * settings.parallax, -maxX, maxX);
    var py = clamp(curY * maxY * settings.parallax, -maxY, maxY);
    var driftX = drift * fitW * 0.004 * Math.sin(clock / 61);
    var driftY = drift * fitH * 0.005 * Math.sin(clock / 47 + 1.1);

    /* 拖动：目标位置由指针写；松手后顺着势头滑一小段，然后永远停在那里 */
    if (!dragging) {
      if (Math.abs(panVX) > 2 || Math.abs(panVY) > 2) {
        panTX += panVX * dt;
        panTY += panVY * dt;
        var fr = Math.pow(PAN_FRICTION, dt);
        panVX *= fr;
        panVY *= fr;
      } else {
        panVX = panVY = 0;
      }
    }
    panTX = clamp(panTX, -B.x, B.x);
    panTY = clamp(panTY, -B.y, B.y);
    if (panTX <= -B.x || panTX >= B.x) panVX = 0;
    if (panTY <= -B.y || panTY >= B.y) panVY = 0;
    if (dragging) {
      panX = panTX;
      panY = panTY;
    } else {
      var kp = 1 - Math.pow(PAN_FOLLOW, dt);
      panX += (panTX - panX) * kp;
      panY += (panTY - panY) * kp;
    }

    var tX = clamp(panX + px + driftX, -slackX, slackX);
    var tY = clamp(panY + py + driftY, -slackY, slackY);

    if (focusU !== null) {
      // screenX = vw/2 + (u - 0.5) * fitW * zoom + tX  →  让 u 落到 focusTarget 上
      var want = clamp(focusTarget - vw / 2 - (focusU / 100 - 0.5) * fitW * zoom, -slackX, slackX);
      focusTX += (want - focusTX) * (1 - Math.pow(0.05, dt));
      tX = clamp(focusTX + px * 0.4 + driftX * 0.4, -slackX, slackX);
    }
    lastTX = tX;

    space.style.transform = 'translate3d(' + tX.toFixed(2) + 'px,' + tY.toFixed(2) +
      'px,0) scale(' + zoom.toFixed(5) + ')';

    var flick = 1 + 0.012 * Math.sin(clock * 2.1) + 0.007 * Math.sin(clock * 3.7 + 1.3) +
                0.005 * Math.sin(clock * 0.87 + 0.6);
    var pulse = 1 + 0.5 * settings.audio * audio;
    var I = settings.intensity, L = settings.light, G = settings.glow;

    for (var i = 0; i < beamEls.length; i++) {
      var b = BEAMS[i];
      var op = L * I * flick * pulse * (1 + 0.10 * Math.sin(clock * b.sp * 6.283 + b.ph));
      beamEls[i].style.opacity = clamp(op, 0, 1.5).toFixed(3);
    }

    for (var j = 0; j < winEls.length; j++) {
      var o = WINDOWS[j];
      var s = 0.5 + 0.5 * Math.sin(clock / 9 + o.ph);
      winEls[j].sky.style.opacity  = (0.78 * (0.55 + 0.45 * s) * I * L * flick).toFixed(3);
      winEls[j].halo.style.opacity = (0.85 * (0.70 + 0.30 * s) * G * I).toFixed(3);
    }

    if (settings.dust) {
      motesCv.style.display = '';
      drawMotes(dt, tX, tY, zoom, flick);
    } else {
      motesCv.style.display = 'none';
    }

    var nearX = px + driftX, nearY = py + driftY;
    washEl.style.transform = 'translate3d(' + (nearX * 0.6).toFixed(2) + 'px,' + (nearY * 0.6).toFixed(2) + 'px,0)';
    washEl.style.opacity = clamp(0.50 * I * flick * pulse, 0, 1.2).toFixed(3);
    ambientEl.style.opacity = clamp(0.32 * I * G * flick * (1 + 0.12 * Math.sin(clock * 1.13)), 0, 0.8).toFixed(3);
    vignetteEl.style.transform = 'translate3d(' + (nearX * 0.9).toFixed(2) + 'px,' + (nearY * 0.9).toFixed(2) + 'px,0)';

    idle += dt;
    if (idle > 2.5) lanternTarget = 0;
    lanternAlpha += (lanternTarget - lanternAlpha) * (1 - Math.pow(0.05, dt));
    lanternEl.style.transform = 'translate3d(' + lanternX.toFixed(1) + 'px,' + lanternY.toFixed(1) + 'px,0)';
    lanternEl.style.opacity = (lanternAlpha * 0.9 * G * I).toFixed(3);

    grainTick++;
    if (grainTick % 3 === 0) refreshGrain(0.9 + 0.3 * Math.sin(clock * 0.7));
  }

  /* ---------- 12. 应用设置 ---------- */

  function applySettings() {
    var root = document.documentElement.style;
    root.setProperty('--warm', settings.warm.join(' '));
    root.setProperty('--intensity', String(settings.intensity));
    root.setProperty('--light', String(settings.light));
    root.setProperty('--glow', String(settings.glow));
    paintBeams();
    winEls.forEach(function (w) {
      w.tw.style.opacity = (0.85 * settings.intensity * (0.6 + 0.4 * settings.light)).toFixed(3);
    });
    coolEl.style.opacity = clamp(0.55 + 0.4 * settings.intensity, 0, 1).toFixed(3);
    motesCv.style.display = settings.dust ? '' : 'none';
    grainCv.style.opacity = clamp(0.035 + 0.03 * settings.intensity, 0, 0.09).toFixed(3);

    // 关掉「拖动查看全图」就把画面收回正中，别停在半路
    if (!settings.panorama) { panTX = panX = 0; panVX = panVY = 0; }
  }

  /* ---------- 13. 启动 ---------- */

  window.addEventListener('resize', layout, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) last = performance.now();
  });

  layout();
  applySettings();
  refreshGrain(1);
  requestAnimationFrame(frame);

  var pre = new Image();
  pre.onload = function () { setTimeout(function () { fadeEl.style.opacity = '0'; }, 80); };
  pre.onerror = function () { fadeEl.style.opacity = '0'; };
  pre.src = 'assets/bg.jpg';
  setTimeout(function () { fadeEl.style.opacity = '0'; }, 3000);

  window.Ambience = { settings: settings, apply: applySettings, focus: focus, release: release };
}());
