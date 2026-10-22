/* ==========================================================================
   模型能力图鉴 · 氛围层
   --------------------------------------------------------------------------
   内容是一张数据图，所以氛围只做背景：两团很慢的光晕、一层很淡的点阵、
   暗角与胶片颗粒，外加跟随鼠标的极轻微视差。认真读图的时候它不该抢戏。

   壁纸模式下还可以更活一点（画面呼吸、自动巡览），具体开关由 wallpaper.js
   从 Wallpaper Engine 的属性面板写进 settings。
   ========================================================================== */

(function () {
  'use strict';

  var WALLPAPER = !!window.MODEL_ATLAS_WALLPAPER;

  var settings = {
    intensity: 1,          // 氛围强度：光晕、点阵、颗粒的总强度
    glow: 1,               // 只影响两团光晕与暗角
    accent: [66, 133, 244],// 强调色（壁纸版的「强调色」属性）
    motion: true,          // 画面呼吸：光晕与点阵缓慢漂移
    points: 50,            // 能力图画多少个点
    spotlight: true,       // 自动巡览（只在壁纸模式生效）
    pace: 1,               // 巡览节奏：数值越大换得越慢
    lights: false,         // 浅色主题
    interactive: true      // 可点模型档案（只在壁纸模式生效）
  };

  var glowA  = document.getElementById('glow-a');
  var glowB  = document.getElementById('glow-b');
  var dotsEl = document.getElementById('dots');
  var vignEl = document.getElementById('vignette');
  var grainCv = document.getElementById('grain');
  if (!glowA || !dotsEl || !grainCv) return;

  var clamp = function (v, a, b) { return v < a ? a : (v > b ? b : v); };

  /* ---------- 1. 胶片颗粒（小画布拉伸，省性能） ---------- */

  var GW = 200, GH = 112;
  grainCv.width = GW;
  grainCv.height = GH;
  var gctx = grainCv.getContext('2d');
  var gimg = gctx.createImageData(GW, GH);

  function refreshGrain(strength) {
    var d = gimg.data;
    for (var i = 0; i < d.length; i += 4) {
      var n = 128 + (Math.random() - 0.5) * 255 * strength;
      d[i] = d[i + 1] = d[i + 2] = n;
      d[i + 3] = 255;
    }
    gctx.putImageData(gimg, 0, 0);
  }

  /* ---------- 2. 跟随鼠标的极轻微视差 ---------- */

  var mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', function (e) {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  /* ---------- 3. 应用设置 ---------- */

  function applySettings() {
    var root = document.documentElement.style;
    var a = settings.accent;
    root.setProperty('--accent', a[0] + ' ' + a[1] + ' ' + a[2]);
    root.setProperty('--accent-hex', 'rgb(' + a[0] + ',' + a[1] + ',' + a[2] + ')');

    var I = settings.intensity, G = settings.glow;
    glowA.style.opacity = clamp(0.55 * I * G, 0, 1).toFixed(3);
    glowB.style.opacity = clamp(0.42 * I * G, 0, 1).toFixed(3);
    dotsEl.style.opacity = clamp(0.5 * I, 0, 1).toFixed(3);
    vignEl.style.opacity = clamp(0.55 * G, 0, 1).toFixed(3);
    grainCv.style.opacity = clamp(0.026 + 0.03 * I, 0, 0.07).toFixed(3);

    document.body.classList.toggle('no-motion', !settings.motion);
    // 主题：壁纸版跟着属性面板走；网页版由 app.js 的明暗按钮管，这里不插手
    if (WALLPAPER) {
      document.body.classList.toggle('lights', !!settings.lights);
      document.documentElement.classList.toggle('dark', !settings.lights);
    }
  }

  /* ---------- 4. 主循环 ---------- */

  var last = performance.now();
  var tick = 0;

  function frame(now) {
    requestAnimationFrame(frame);
    var dt = (now - last) / 1000;
    last = now;
    if (document.hidden) return;
    if (dt <= 0) return;
    if (dt > 0.1) dt = 0.1;

    var k = 1 - Math.pow(0.02, dt);
    cx += (mx - cx) * k * 0.8;
    cy += (my - cy) * k * 0.8;

    var amt = settings.motion ? 12 : 0;
    glowA.style.transform = 'translate3d(' + (cx * amt).toFixed(2) + 'px,' + (cy * amt).toFixed(2) + 'px,0)';
    glowB.style.transform = 'translate3d(' + (-cx * amt * 0.7).toFixed(2) + 'px,' + (-cy * amt * 0.7).toFixed(2) + 'px,0)';
    dotsEl.style.transform = 'translate3d(' + (cx * amt * 0.25).toFixed(2) + 'px,' + (cy * amt * 0.25).toFixed(2) + 'px,0)';

    tick++;
    if (tick % 3 === 0) refreshGrain(0.85 + 0.3 * Math.sin(now / 1400));
  }

  /* ---------- 5. 启动 ---------- */

  applySettings();
  refreshGrain(1);
  requestAnimationFrame(frame);

  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) document.body.classList.add('no-motion');

  window.Ambience = {
    settings: settings,
    apply: applySettings,
    isWallpaper: WALLPAPER
  };
}());
