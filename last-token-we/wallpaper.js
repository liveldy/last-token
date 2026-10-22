/* ==========================================================================
   最后的 Token · Wallpaper Engine 桥
   --------------------------------------------------------------------------
   Wallpaper Engine 只为 Web 壁纸额外提供两样东西：
     · wallpaperPropertyListener.applyUserProperties —— 属性面板里的每一项改动
     · wallpaperRegisterAudioListener               —— 音频频谱（在 ambience.js 里接的）
   这里负责第一件：把属性接到画面层的 settings 上。
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

  window.wallpaperPropertyListener = {
    applyUserProperties: function (props) {
      if (props.intensity)     settings.intensity = clamp(props.intensity.value / 100, 0, 2);
      if (props.lightstrength) settings.light     = clamp(props.lightstrength.value / 100, 0, 2);
      if (props.glow)          settings.glow      = clamp(props.glow.value / 100, 0, 2);
      if (props.parallax)      settings.parallax  = clamp(props.parallax.value / 100, 0, 2);
      if (props.panorama)      settings.panorama  = !!props.panorama.value;
      if (props.panspeed)      settings.panspeed  = clamp(props.panspeed.value / 100, 0, 2);
      if (props.dust)          settings.dust      = !!props.dust.value;
      if (props.drift)         settings.drift     = !!props.drift.value;
      if (props.audio)         settings.audio     = !!props.audio.value;
      if (props.lightcolor) {
        var c = parseColor(props.lightcolor.value);
        if (c) settings.warm = c;
      }
      if (props.interactive) {
        // 关掉之后热区不再响应，画面就是一张纯氛围壁纸
        var spots = document.getElementById('hotspots');
        if (spots) {
          spots.style.display = props.interactive.value ? '' : 'none';
        }
      }
      window.Ambience.apply();
    }
  };
}());
