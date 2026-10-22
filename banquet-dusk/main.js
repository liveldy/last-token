/* ==========================================================================
   宴会厅的黄昏 · Wallpaper Engine Web 壁纸
   --------------------------------------------------------------------------
   氛围分层（由远到近）：
     1. 照片本体           —— 缓慢推拉（呼吸）+ 轻微鼠标视差
     2. 阳光光柱           —— 与照片中真实光斑对齐的叠加发光，缓慢闪烁
     3. 后墙三扇窗         —— 日落光缓慢呼吸、窗框外溢光晕、远处城市灯火闪烁
     4. 尘埃粒子           —— 在光斑里被照亮的漂浮微粒
     5. 暖光雾 / 冷调      —— 左上角漏光、右下沉入冷色阴影
     6. 跟随鼠标的提灯
     7. 暗角 + 胶片颗粒
   另外：屏幕比例把图片裁掉太多时（例如 16:9 会切掉左右两侧），画面会沿被裁的方向缓慢往返，
   让人在一段时间里看到整张图；鼠标一动滚动就放慢，静止后恢复。
   所有参数都可以在 Wallpaper Engine 的属性面板里调。
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- 1. 基础常量 ---------- */

  var IMG_ASPECT = 2;        // 原图 2880x1440
  var BASE_ZOOM  = 1.055;    // 基础放大，给视差和渲染呼吸留出余量
  var MOTES_INSET = 0.06;    // #motes 画布四边外扩 6%（与样式表一致）

  var PAN_LIMIT  = 0.08;     // 某个方向被裁掉超过 8% 就启用全景滚动
  var PAN_PERIOD = 96;       // 100% 滚动速度下一个完整往返的秒数

  /* ---------- 2. 可调参数（会被 Wallpaper Engine 的用户属性覆盖） ---------- */

  var settings = {
    intensity: 1,                    // 氛围强度
    light: 1,                        // 光线强度
    glow: 1,                         // 柔光强度
    parallax: 1,                     // 视差强度
    panorama: true,                  // 全景滚动
    panspeed: 1,                     // 滚动速度
    dust: true,                      // 尘埃粒子
    drift: true,                     // 画面呼吸
    audio: true,                     // 随音乐起伏
    warm: [255, 202, 148]            // 光线颜色
  };

  /* ---------- 3. 场景数据（百分比坐标基于原图，由像素分析标定） ---------- */

  // 阳光光柱：x/y/w/h 为原图百分比，rot 为倾角，op 为基准强度，sp/ph 控制闪烁节奏
  // op 直接就是发光强度（渐变本身的不透明度），元素不透明度只做呼吸浮动
  var BEAMS = [
    { x: -3.0, y: -6,  w:  9.5, h: 54, rot: -13, op: 0.60, sp: 0.10, ph: 0.0 }, // 左墙主光带
    { x: 10.0, y: 13,  w:  7.5, h: 26, rot: -17, op: 0.42, sp: 0.15, ph: 1.9 }, // 红墙板上的光斑
    { x: 16.5, y: 23,  w:  7.5, h: 22, rot: -19, op: 0.30, sp: 0.12, ph: 3.4 }, // 光斑右半
    { x:  2.0, y: 26,  w: 22.0, h: 26, rot: -10, op: 0.16, sp: 0.06, ph: 0.8 }, // 左墙整体暖光
    { x: -2.0, y: 80,  w: 27.0, h: 24, rot:  -8, op: 0.34, sp: 0.08, ph: 2.4 }, // 地面光斑
    { x:  0.5, y: 50,  w: 29.0, h: 20, rot:  -6, op: 0.20, sp: 0.09, ph: 4.1 }  // 长桌上的光
  ];

  // 尘埃被照亮的位置（原图百分比）
  var LIGHT_ZONES = [
    { x:  1.5, y: 20, r: 0.34, w: 1.00 },  // 左墙主光带
    { x: 13.0, y: 26, r: 0.24, w: 0.75 },  // 红墙光斑
    { x: 20.0, y: 34, r: 0.20, w: 0.50 },
    { x: 12.0, y: 94, r: 0.30, w: 0.85 },  // 地面光斑
    { x:  6.0, y: 60, r: 0.26, w: 0.45 }   // 桌布上的光
  ];

  // 后墙三扇窗的玻璃区域（city 为窗内灯火数量）
  var WINDOWS = [
    { x: 33.4, y: 24.4, w: 7.3, h: 17.0, drift: 26, ph: 0.0, city:  6 },
    { x: 45.3, y: 24.4, w: 9.0, h: 17.0, drift: 33, ph: 1.4, city:  8 },
    { x: 59.3, y: 24.4, w: 7.1, h: 17.0, drift: 21, ph: 2.7, city: 11 }
  ];

  /* ---------- 4. DOM 引用 ---------- */

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

  /* ---------- 5. 小工具 ---------- */

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function smoothstep(x) {
    x = clamp(x, 0, 1);
    return x * x * (3 - 2 * x);
  }

  // 全景滚动的往返节奏：两端各停留一会儿，中间平滑扫过（返回 -1..1）
  function panEase(u) {
    var t = u - Math.floor(u);
    if (t < 0.06) return -1;
    if (t < 0.44) return -1 + 2 * smoothstep((t - 0.06) / 0.38);
    if (t < 0.56) return 1;
    if (t < 0.94) return 1 - 2 * smoothstep((t - 0.56) / 0.38);
    return -1;
  }

  function warmCss(alpha) {
    var w = settings.warm;
    return 'rgb(' + w[0] + ' ' + w[1] + ' ' + w[2] + ' / ' + alpha + ')';
  }

  function parseColor(value) {
    if (typeof value !== 'string') return null;
    var parts = value.trim().split(/[\s,]+/).map(Number);
    if (parts.length < 3 || parts.some(function (n) { return isNaN(n); })) return null;
    var scale = Math.max.apply(null, parts) <= 1.001 ? 255 : 1;
    return [
      clamp(Math.round(parts[0] * scale), 0, 255),
      clamp(Math.round(parts[1] * scale), 0, 255),
      clamp(Math.round(parts[2] * scale), 0, 255)
    ];
  }

  /* ---------- 6. 构建光柱 ---------- */

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

  /* ---------- 7. 构建窗户 ---------- */

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

    // 玻璃左下角的城市更密，右窗（画面里那座圆顶城）灯火最多
    for (var i = 0; i < o.city; i++) {
      var dot = document.createElement('i');
      var left = 6 + Math.random() * 88;
      var top = 8 + Math.random() * 78;
      dot.style.left = left.toFixed(1) + '%';
      dot.style.top = top.toFixed(1) + '%';
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

  /* ---------- 8. 尺寸与布局 ---------- */

  var vw = 1, vh = 1;        // 视口
  var fitW = 1, fitH = 1;    // 图片按 cover 铺满视口后的尺寸
  var dpr = 1;

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

  /* ---------- 9. 尘埃粒子 ---------- */

  var moteCtx = motesCv.getContext('2d');
  var motes = [];

  function initMotes() {
    var n = Math.round(clamp(vw / 24, 40, 100));
    motes = [];
    for (var i = 0; i < n; i++) {
      motes.push({
        u: Math.random(),                        // 画布内横向位置 0..1
        v: Math.random(),                        // 画布内纵向位置 0..1
        r: 0.6 + Math.random() * 2.2,            // 半径（CSS 像素）
        a: 0.30 + Math.random() * 0.60,          // 基准亮度
        vy: 0.004 + Math.random() * 0.016,       // 上升速度（每秒占比）
        sway: 0.003 + Math.random() * 0.010,     // 横向摆动
        ph: Math.random() * Math.PI * 2,
        sp: 0.10 + Math.random() * 0.40,
        glint: Math.random() < 0.18              // 少数微粒会偶尔闪一下
      });
    }
  }

  // 把“被照亮的位置”换算到画布自身坐标（画布四边比屏幕各外扩 6%，位置固定）
  function zonePositions(tX, tY, zoom) {
    var out = [];
    for (var i = 0; i < LIGHT_ZONES.length; i++) {
      var z = LIGHT_ZONES[i];
      var sx = vw / 2 + (z.x / 100 - 0.5) * fitW * zoom + tX;
      var sy = vh / 2 + (z.y / 100 - 0.5) * fitH * zoom + tY;
      out.push({
        x: sx + vw * MOTES_INSET,
        y: sy + vh * MOTES_INSET,
        r: z.r * (vh * 0.34),
        w: z.w
      });
    }
    return out;
  }

  function drawMotes(dt, tX, tY, zoom, bright) {
    var cw = motesCv.width;
    var ch = motesCv.height;
    var zones = zonePositions(tX, tY, zoom);
    var w = settings.warm;
    var audioBoost = settings.audio ? 1 + 0.45 * audio : 1;
    // 尘埃跟着画面一起移动；画布外 6% 处换位，屏幕上看不到跳变
    var ox = tX * 1.35 * dpr;
    var oy = tY * 1.35 * dpr;

    moteCtx.clearRect(0, 0, cw, ch);
    moteCtx.globalCompositeOperation = 'lighter';

    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.v -= m.vy * dt * audioBoost;
      m.u += Math.sin(clock * m.sp + m.ph) * m.sway * dt * 6;
      if (m.v < -0.03) { m.v = 1.03; m.u = Math.random(); }
      if (m.u < -0.03) m.u += 1.06;
      if (m.u > 1.03) m.u -= 1.06;

      var x = ((m.u * cw + ox) % cw + cw) % cw;
      var y = ((m.v * ch + oy) % ch + ch) % ch;

      // 距离光斑越近越亮
      var lit = 0;
      for (var j = 0; j < zones.length; j++) {
        var z = zones[j];
        var dx = x - z.x;
        var dy = y - z.y;
        var d2 = dx * dx + dy * dy;
        var s2 = z.r * z.r;
        lit += z.w * Math.exp(-d2 / (2 * s2));
      }
      lit = clamp(lit, 0, 1);

      var a = m.a * (0.16 + 0.84 * lit) * settings.intensity * bright * audioBoost;
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

  /* ---------- 10. 胶片颗粒 ---------- */

  var grainCtx = grainCv.getContext('2d');
  var grainW = 220, grainH = 124;
  var grainImg = null;
  grainCv.width = grainW;
  grainCv.height = grainH;
  grainImg = grainCtx.createImageData(grainW, grainH);

  function refreshGrain(strength) {
    var d = grainImg.data;
    for (var i = 0; i < d.length; i += 4) {
      var n = 128 + (Math.random() - 0.5) * 255 * strength;
      d[i] = d[i + 1] = d[i + 2] = n;
      d[i + 3] = 255;
    }
    grainCtx.putImageData(grainImg, 0, 0);
  }

  /* ---------- 11. 鼠标 / 提灯 ---------- */

  var mx = 0, my = 0;                 // 归一化视线偏移 -1..1
  var curX = 0, curY = 0;             // 缓动后的视线偏移
  var lanternX = 0, lanternY = 0;
  var lanternAlpha = 0, lanternTarget = 0, idle = 0;

  window.addEventListener('mousemove', function (e) {
    mx = (e.clientX / vw - 0.5) * 2;
    my = (e.clientY / vh - 0.5) * 2;
    lanternX = e.clientX;
    lanternY = e.clientY;
    lanternTarget = 1;
    idle = 0;
  }, { passive: true });

  window.addEventListener('mouseleave', function () { lanternTarget = 0; }, { passive: true });

  /* ---------- 12. 音频（仅 Wallpaper Engine 提供） ---------- */

  var audio = 0;          // 缓动后的能量 0..1
  var audioRaw = 0;       // 最近一次收到的能量

  if (typeof window.wallpaperRegisterAudioListener === 'function') {
    window.wallpaperRegisterAudioListener(function (arr) {
      if (!arr || !arr.length) return;
      var n = arr.length;
      var half = Math.floor(n / 2);
      var sum = 0, cnt = 0, i;
      for (i = 0; i < Math.min(20, half); i++) { sum += arr[i]; cnt++; }              // 左声道低频
      for (i = half; i < Math.min(half + 20, n); i++) { sum += arr[i]; cnt++; }       // 右声道低频
      if (!cnt) return;
      audioRaw = clamp(sum / cnt * 1.7, 0, 1);
    });
  }

  /* ---------- 13. 主循环 ---------- */

  var clock = 0;
  var last = performance.now();
  var zoom = BASE_ZOOM;
  var grainTick = 0;
  var panClock = 0;      // 全景滚动的自身计时（鼠标动时走慢，静止后恢复）
  var panFactor = 0;
  var panAmp = 0;        // 滚动幅度（关掉或调 0 时平滑收回中央）

  function frame(now) {
    requestAnimationFrame(frame);

    var dt = (now - last) / 1000;
    last = now;
    if (document.hidden) return;
    if (dt > 0.1) dt = 0.1;
    if (dt <= 0) return;
    clock += dt;

    /* 视线缓动（与帧率无关） */
    var k = 1 - Math.pow(0.001, dt);
    curX += (mx - curX) * k * 0.85;
    curY += (my - curY) * k * 0.85;

    /* 音频能量：先平滑，再缓慢衰减 */
    audioRaw *= Math.pow(0.25, dt);
    audio += (audioRaw - audio) * (1 - Math.pow(0.02, dt));

    /* 画面呼吸：缓慢推拉与轻微平移 */
    var drift = settings.drift ? 1 : 0;
    zoom = BASE_ZOOM + drift * (0.004 * Math.sin(clock / 39 + 0.4) + 0.002 * Math.sin(clock / 17 + 2.1));

    var slackX = Math.max(0, (fitW * zoom - vw) / 2);
    var slackY = Math.max(0, (fitH * zoom - vh) / 2);
    var maxX = Math.min(vw * 0.014, slackX * 0.7);
    var maxY = Math.min(vh * 0.010, slackY * 0.7);
    var px = clamp(curX * maxX * settings.parallax, -maxX, maxX);
    var py = clamp(curY * maxY * settings.parallax, -maxY, maxY);
    var driftX = drift * fitW * 0.004 * Math.sin(clock / 61);
    var driftY = drift * fitH * 0.005 * Math.sin(clock / 47 + 1.1);

    /* 全景滚动：被裁得太多的一侧缓慢往返，把整张图带进视野 */
    panFactor += ((idle > 1.2 ? 1 : 0.12) - panFactor) * (1 - Math.pow(0.2, dt));
    panClock += dt * panFactor;
    panAmp += (((settings.panorama && settings.panspeed > 0) ? 1 : 0) - panAmp) * (1 - Math.pow(0.15, dt));
    var panX = 0, panY = 0;
    if (panAmp > 0.001) {
      var period = PAN_PERIOD / clamp(settings.panspeed, 0.1, 3);
      var rangeX = Math.max(0, slackX - maxX);
      var rangeY = Math.max(0, slackY - maxY);
      if (vw / (fitW * zoom) < 1 - PAN_LIMIT) panX = panEase(panClock / period) * rangeX * panAmp;
      if (vh / (fitH * zoom) < 1 - PAN_LIMIT) panY = panEase(panClock / period + 0.5) * rangeY * panAmp;
    }

    var tX = clamp(panX + px + driftX, -slackX, slackX);
    var tY = clamp(panY + py + driftY, -slackY, slackY);

    space.style.transform = 'translate3d(' + tX.toFixed(2) + 'px,' + tY.toFixed(2) +
      'px,0) scale(' + zoom.toFixed(5) + ')';

    /* 烛光般的整体呼吸 */
    var flick = 1 + 0.012 * Math.sin(clock * 2.1) + 0.007 * Math.sin(clock * 3.7 + 1.3) +
                0.005 * Math.sin(clock * 0.87 + 0.6);
    var pulse = 1 + 0.5 * settings.audio * audio;
    var I = settings.intensity, L = settings.light, G = settings.glow;

    /* 光柱：各自缓慢闪烁 */
    for (var i = 0; i < beamEls.length; i++) {
      var b = BEAMS[i];
      var op = L * I * flick * pulse * (1 + 0.10 * Math.sin(clock * b.sp * 6.283 + b.ph));
      beamEls[i].style.opacity = clamp(op, 0, 1.5).toFixed(3);
    }

    /* 窗户：日落光缓慢呼吸 */
    for (var j = 0; j < winEls.length; j++) {
      var o = WINDOWS[j];
      var s = 0.5 + 0.5 * Math.sin(clock / 9 + o.ph);
      winEls[j].sky.style.opacity  = (0.78 * (0.55 + 0.45 * s) * I * L * flick).toFixed(3);
      winEls[j].halo.style.opacity = (0.85 * (0.70 + 0.30 * s) * G * I).toFixed(3);
    }

    /* 尘埃：跟着画面一起平移（在绘制里换位），因此不移动画布元素 */
    if (settings.dust) {
      motesCv.style.display = '';
      drawMotes(dt, tX, tY, zoom, flick);
    } else {
      motesCv.style.display = 'none';
    }

    /* 屏幕空间的氛围层（漏光雾、暗角）不跟着全景滚动走，只保留相对照片的视差 */
    var nearX = px + driftX;
    var nearY = py + driftY;
    washEl.style.transform = 'translate3d(' + (nearX * 0.6).toFixed(2) + 'px,' + (nearY * 0.6).toFixed(2) + 'px,0)';
    washEl.style.opacity = clamp(0.50 * I * flick * pulse, 0, 1.2).toFixed(3);
    ambientEl.style.opacity = clamp(0.32 * I * G * flick * (1 + 0.12 * Math.sin(clock * 1.13)), 0, 0.8).toFixed(3);
    vignetteEl.style.transform = 'translate3d(' + (nearX * 0.9).toFixed(2) + 'px,' + (nearY * 0.9).toFixed(2) + 'px,0)';

    /* 提灯：跟随鼠标，静止一会儿后收暗 */
    idle += dt;
    if (idle > 2.5) lanternTarget = 0;
    lanternAlpha += (lanternTarget - lanternAlpha) * (1 - Math.pow(0.05, dt));
    lanternEl.style.transform = 'translate3d(' + lanternX.toFixed(1) + 'px,' + lanternY.toFixed(1) + 'px,0)';
    lanternEl.style.opacity = (lanternAlpha * 0.9 * G * I).toFixed(3);

    /* 颗粒：低帧率刷新，轻微抖动 */
    grainTick++;
    if (grainTick % 3 === 0) refreshGrain(0.9 + 0.3 * Math.sin(clock * 0.7));
  }

  /* ---------- 14. 应用设置 ---------- */

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
  }

  /* ---------- 15. Wallpaper Engine 用户属性 ---------- */

  window.wallpaperPropertyListener = {
    applyUserProperties: function (props) {
      if (props.intensity)     settings.intensity = clamp(props.intensity.value / 100, 0, 2);
      if (props.lightstrength) settings.light = clamp(props.lightstrength.value / 100, 0, 2);
      if (props.glow)          settings.glow = clamp(props.glow.value / 100, 0, 2);
      if (props.parallax)      settings.parallax = clamp(props.parallax.value / 100, 0, 2);
      if (props.panorama)      settings.panorama = !!props.panorama.value;
      if (props.panspeed)      settings.panspeed = clamp(props.panspeed.value / 100, 0, 2);
      if (props.dust)          settings.dust = !!props.dust.value;
      if (props.drift)         settings.drift = !!props.drift.value;
      if (props.audio)         settings.audio = !!props.audio.value;
      if (props.lightcolor) {
        var c = parseColor(props.lightcolor.value);
        if (c) settings.warm = c;
      }
      applySettings();
    }
  };

  /* ---------- 16. 启动 ---------- */

  window.addEventListener('resize', layout, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) last = performance.now();
  });

  layout();
  applySettings();
  paintBeams();
  refreshGrain(1);
  requestAnimationFrame(frame);

  // 图片就绪后淡入
  var pre = new Image();
  pre.onload = function () { setTimeout(function () { fadeEl.style.opacity = '0'; }, 80); };
  pre.onerror = function () { fadeEl.style.opacity = '0'; };
  pre.src = 'assets/bg.jpg';
  setTimeout(function () { fadeEl.style.opacity = '0'; }, 3000);
}());
