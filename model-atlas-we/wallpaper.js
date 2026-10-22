/* ==========================================================================
   模型能力图鉴 · Wallpaper Engine 桥
   --------------------------------------------------------------------------
   Wallpaper Engine 只为 Web 壁纸额外提供一样东西：
     · wallpaperPropertyListener.applyUserProperties —— 属性面板里的每一项改动
   （音频接口 wallpaperRegisterAudioListener 这个工程用不上，画面里没有跟着声音动的东西。）

   这里负责把属性接到画面层的 settings 上，再让 ambience 与 app 各应用一次。
   用普通浏览器打开时没人调用它，这个文件等于不存在。
   ========================================================================== */

(function () {
  'use strict';

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

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

  if (!window.Ambience) return;
  var settings = window.Ambience.settings;

  function push() {
    if (window.Ambience && window.Ambience.apply) window.Ambience.apply();
    if (window.ModelAtlas && window.ModelAtlas.applySettings) window.ModelAtlas.applySettings();
  }

  window.wallpaperPropertyListener = {
    applyUserProperties: function (props) {
      if (props.intensity) settings.intensity = clamp(props.intensity.value / 100, 0, 2);
      if (props.glow)      settings.glow      = clamp(props.glow.value / 100, 0, 2);
      if (props.motion)    settings.motion    = !!props.motion.value;
      if (props.points)    settings.points    = Math.max(2, Math.round(props.points.value) || 50);
      if (props.spotlight) settings.spotlight = !!props.spotlight.value;
      if (props.pace)      settings.pace      = clamp(props.pace.value / 100, 0.1, 10);
      if (props.lights)    settings.lights    = !!props.lights.value;
      if (props.interactive) settings.interactive = !!props.interactive.value;
      if (props.accent) {
        var c = parseColor(props.accent.value);
        if (c) settings.accent = c;
      }
      push();
    }
  };

  // 属性面板推来之前，先让 app 侧按默认值对齐一次（点数、巡览节奏都在那边）
  push();
}());
