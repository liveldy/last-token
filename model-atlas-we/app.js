/* ==========================================================================
   模型能力图鉴 · 交互层
   --------------------------------------------------------------------------
   左：能力-成本散点图（只画综合能力最靠前的那些）
   右：全部模型的排行榜
   两边的序号是同一个，点图上的点跳到榜上那一名并点亮，点榜上的行弹出详情。

   数据快照打包在 data/models-snapshot.js 里，file:// 直接打开也能用；
   挂在本地服务（tools/serve.cjs）下时会顺手拉一次实时数据。
   ========================================================================== */

(function () {
  'use strict';

  var WALLPAPER = !!window.MODEL_ATLAS_WALLPAPER;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var THEME_KEY = 'model-atlas.theme';

  var MD = window.ModelData;

  document.body.classList.toggle('wallpaper', WALLPAPER);

  /* ---------- 1. 数据 ---------- */

  var state = {
    data: window.MODEL_SNAPSHOT || null,
    byId: {},
    plotLimit: null,
    selectedId: null,
    org: null,
    query: '',
    live: false,
    frontier: true
  };

  if (!state.data) {
    document.body.innerHTML = '<p style="padding:40px;font:14px system-ui">' +
      '没找到数据快照 data/models-snapshot.js —— 先跑一次 <code>node tools/build-data.cjs</code>。</p>';
    return;
  }

  function indexData() {
    state.byId = {};
    for (var i = 0; i < state.data.models.length; i++) {
      state.byId[state.data.models[i].id] = state.data.models[i];
    }
    if (state.plotLimit == null) state.plotLimit = state.data.plotLimit || 50;
  }
  indexData();

  /* 图上画哪些点：按名次从高到低取有公开标价的；被跳过的（名次更靠前但没价）单独列出来 */
  function plottedModels() {
    var out = [], ids = state.data.withCostIds, n = Math.min(state.plotLimit, ids.length);
    for (var i = 0; i < n; i++) out.push(state.byId[ids[i]]);
    return out;
  }

  function skippedModels() {
    var plot = plottedModels();
    if (!plot.length) return [];
    var lastRank = plot[plot.length - 1].rank;
    return state.data.models.filter(function (m) {
      return m.cost === null && m.rank < lastRank;
    });
  }

  /* ---------- 2. 小工具 ---------- */

  function $(id) { return document.getElementById(id); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function svg(tag, attrs) {
    var n = document.createElementNS(SVGNS, tag);
    for (var k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    return n;
  }

  function tspan(cls, text) {
    var t = svg('tspan', { class: cls });
    t.textContent = text;
    return t;
  }

  function usd(v) {
    if (v == null) return '—';
    return '$' + v.toFixed(v < 1 ? 3 : 2);
  }

  /* 价格去掉多余的零：$0.090 → $0.09、$8.00 → $8（图上的标注用，详情里照旧保留两位） */
  function usdTight(v) {
    if (v == null) return '—';
    var s = (v < 1 ? v.toFixed(3) : v.toFixed(2)).replace(/\.?0+$/, '');
    return '$' + s;
  }

  function ctxFmt(n) {
    if (n == null) return '—';
    if (n >= 1e6) return (n / 1e6).toFixed(n % 1e6 ? 1 : 0) + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return String(n);
  }

  function paramFmt(n) {
    if (n == null) return '—';
    if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
    if (n >= 1e9) return Math.round(n / 1e9) + 'B';
    if (n >= 1e6) return Math.round(n / 1e6) + 'M';
    return String(n);
  }

  function when(iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    var p = function (n) { return (n < 10 ? '0' : '') + n; };
    return d.getFullYear() + '/' + p(d.getMonth() + 1) + '/' + p(d.getDate()) + ' ' +
      p(d.getHours()) + ':' + p(d.getMinutes());
  }

  function dateOnly(iso) {
    if (!iso) return '—';
    return String(iso).slice(0, 10).replace(/-/g, '/');
  }

  function licenseName(l) {
    if (!l) return '—';
    var map = {
      proprietary: '闭源 / 商业授权', mit: 'MIT', apache_2_0: 'Apache 2.0',
      apache2: 'Apache 2.0', llama3: 'Llama 3 社区协议', gemma: 'Gemma 协议',
      cc_by_nc_4_0: 'CC BY-NC 4.0', bsd_3_clause: 'BSD-3-Clause',
      mpl_2_0: 'MPL 2.0', cc_by_4_0: 'CC BY 4.0', other: '其它'
    };
    return map[l] || l;
  }

  function recScore(v) {
    if (v == null) return '—';
    return v > 1.5 ? String(Math.round(v)) : (v * 100).toFixed(1) + '%';
  }

  function orgColor(orgId) { return MD.orgColor(orgId); }

  /* ---------- 3. 图表 ---------- */

  var chartEl = $('chart');
  var wrapEl = $('chart-wrap');
  var tipEl = $('tip');
  var CH = { l: 46, r: 18, t: 16, b: 36 };

  var X_TICKS = [0.01, 0.02, 0.03, 0.05, 0.1, 0.2, 0.3, 0.5, 1, 2, 3, 5, 10, 20, 30, 50, 100];

  function xLabel(v) { return '$' + (v < 1 ? v.toFixed(2) : String(v)); }

  /* 画布量的是 SVG 自己的布局盒，不是 #chart-wrap —— wrap 带 padding（左右 12、上 4），
     拿 clientWidth/Height 会比 SVG 实际宽高多出这些，viewBox 就会偏大、图被按比例缩窄。
     用 clientWidth 减去 padding 来算，transform（手机竖屏整页旋转）也不影响它。 */
  function plotBox() {
    var cs = window.getComputedStyle(wrapEl);
    var w = wrapEl.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var h = wrapEl.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    return { w: Math.max(240, Math.round(w)), h: Math.max(200, Math.round(h)) };
  }

  function renderChart() {
    var box = plotBox();
    var W = box.w, H = box.h;
    state.chartSize = box;
    chartEl.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    chartEl.setAttribute('width', W);
    chartEl.setAttribute('height', H);
    while (chartEl.firstChild) chartEl.removeChild(chartEl.firstChild);

    var plot = plottedModels();
    if (!plot.length) return;

    var costs = plot.map(function (m) { return m.cost; });
    var scores = plot.map(function (m) { return m.score; });
    var x0 = Math.log10(Math.max(0.005, Math.min.apply(null, costs)) * 0.72);
    var x1 = Math.log10(Math.max.apply(null, costs) * 1.4);
    var yMin = Math.min.apply(null, scores), yMax = Math.max.apply(null, scores);
    var padY = Math.max(1.2, (yMax - yMin) * 0.12);
    var y0 = yMin - padY, y1 = yMax + padY;

    var iw = W - CH.l - CH.r, ih = H - CH.t - CH.b;
    var sx = function (c) { return CH.l + (Math.log10(c) - x0) / (x1 - x0) * iw; };
    var sy = function (s) { return CH.t + (y1 - s) / (y1 - y0) * ih; };
    var geo = { sx: sx, sy: sy, l: CH.l, t: CH.t, r: CH.l + iw, b: CH.t + ih };

    /* 网格 + 刻度 */
    var gGrid = svg('g');
    var xt = X_TICKS.filter(function (v) { return Math.log10(v) >= x0 && Math.log10(v) <= x1; });
    var lastTickX = -1e9;
    xt.forEach(function (v) {
      var x = sx(v);
      gGrid.appendChild(svg('line', { class: 'gl', x1: x, y1: CH.t, x2: x, y2: CH.t + ih }));
      /* 窄屏上刻度挤在一起就不写字，只留网格线 */
      if (x - lastTickX < 42) return;
      lastTickX = x;
      var t = svg('text', { class: 'tk', x: x, y: CH.t + ih + 15, 'text-anchor': 'middle' });
      t.textContent = xLabel(v);
      gGrid.appendChild(t);
    });

    var yStep = niceStep((y1 - y0) / 5.5);
    var yt = Math.ceil(y0 / yStep) * yStep;
    for (; yt <= y1; yt += yStep) {
      var y = sy(yt);
      gGrid.appendChild(svg('line', { class: 'gl', x1: CH.l, y1: y, x2: CH.l + iw, y2: y }));
      var t2 = svg('text', { class: 'tk', x: CH.l - 8, y: y + 3.2, 'text-anchor': 'end' });
      t2.textContent = String(Math.round(yt * 10) / 10);
      gGrid.appendChild(t2);
    }
    gGrid.appendChild(svg('line', { class: 'ax', x1: CH.l, y1: CH.t, x2: CH.l, y2: CH.t + ih }));
    gGrid.appendChild(svg('line', { class: 'ax', x1: CH.l, y1: CH.t + ih, x2: CH.l + iw, y2: CH.t + ih }));
    chartEl.appendChild(gGrid);

    /* 轴名 + 中位线：一眼看出谁“又便宜又强” */
    var ax1 = svg('text', { class: 'ax-title', x: CH.l + iw, y: CH.t + ih + 28, 'text-anchor': 'end' });
    ax1.textContent = '参考成本（美元 / 百万 token，输入:输出 = 3:1）';
    chartEl.appendChild(ax1);
    var ax2 = svg('text', { class: 'ax-title', x: 12, y: CH.t + 10, transform: 'rotate(-90 12 ' + (CH.t + 10) + ')' });
    ax2.textContent = '综合能力';
    chartEl.appendChild(ax2);

    var medCost = median(costs);
    var medScore = median(scores);
    var mx = sx(medCost);
    chartEl.appendChild(svg('line', { class: 'med-line', x1: mx, y1: CH.t, x2: mx, y2: CH.t + ih }));
    chartEl.appendChild(svg('line', { class: 'med-line', x1: CH.l, y1: sy(medScore), x2: CH.l + iw, y2: sy(medScore) }));
    var mtx = svg('text', { class: 'med-text', x: mx + 4, y: CH.t + 10 });
    mtx.textContent = '中位成本 ' + xLabel(Number(medCost.toFixed(3)));
    chartEl.appendChild(mtx);
    var mty = svg('text', { class: 'med-text', x: CH.l + iw - 4, y: sy(medScore) - 4, 'text-anchor': 'end' });
    mty.textContent = '中位能力 ' + medScore.toFixed(1);
    chartEl.appendChild(mty);

    /* 斩杀区域的底色铺在点下面，线和徽标最后画，压在点上 */
    var gKillShade = svg('g', { class: 'kill-shade' });
    chartEl.appendChild(gKillShade);

    /* 优势曲线也铺在点下面 */
    var gFrontier = svg('g', { class: 'frontier' });
    chartEl.appendChild(gFrontier);
    if (state.frontier) drawFrontier(gFrontier, geo);

    /* 点：按能力从低到高画，强者压在上面 */
    var gPt = svg('g');
    var sorted = plot.slice().sort(function (a, b) { return a.score - b.score; });
    var nodes = {};
    sorted.forEach(function (m) {
      var cx = sx(m.cost), cy = sy(m.score);
      var col = orgColor(m.org);
      var g = svg('g', { class: 'pt', tabindex: '0', role: 'button' });
      g.setAttribute('aria-label',
        m.name + '（' + m.orgName + '）—— 综合能力第 ' + m.rank + ' 名，' + m.score.toFixed(2) +
        '，参考成本 ' + usd(m.cost));
      g.dataset.id = m.id;
      g.style.setProperty('--pc', col);

      g.appendChild(svg('circle', { class: 'halo', cx: cx, cy: cy, r: 10.5 }));
      g.appendChild(svg('circle', { class: 'dot', cx: cx, cy: cy, r: 4.2 }));
      g.appendChild(svg('circle', { class: 'hit', cx: cx, cy: cy, r: 11 }));

      g.addEventListener('click', function () { jumpTo(m.id); });
      g.addEventListener('mouseenter', function () { showTip(m, cx, cy); });
      g.addEventListener('mouseleave', hideTip);
      g.addEventListener('focus', function () { showTip(m, cx, cy); });
      g.addEventListener('blur', hideTip);
      g.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); jumpTo(m.id); }
      });

      gPt.appendChild(g);
      nodes[m.id] = { id: m.id, g: g, cx: cx, cy: cy, r: 4.2, name: m.name, score: m.score };
    });
    chartEl.appendChild(gPt);

    /* 标签：贪心避让，放不下就不放 */
    var placed = [];
    var pts = Object.keys(nodes).map(function (k) { return nodes[k]; })
      .sort(function (a, b) { return b.score - a.score; });
    var gLabel = svg('g');
    chartEl.appendChild(gLabel);

    var PT_R = 5.5;
    pts.forEach(function (p) {
      var r = p.r;
      var anchors = [
        ['start', p.cx + r + 4, p.cy + 3.4],
        ['end', p.cx - r - 4, p.cy + 3.4],
        ['start', p.cx + r + 3, p.cy - r - 2],
        ['end', p.cx - r - 3, p.cy + r + 10],
        ['middle', p.cx, p.cy - r - 5],
        ['middle', p.cx, p.cy + r + 10.5],
        ['start', p.cx + r + 3, p.cy + r + 10],
        ['end', p.cx - r - 3, p.cy - r - 2]
      ];
      var t = svg('text', { class: 'pt-label' });
      t.textContent = p.name;
      t.__id = p.id;
      gLabel.appendChild(t);
      for (var i = 0; i < anchors.length; i++) {
        t.setAttribute('text-anchor', anchors[i][0]);
        t.setAttribute('x', anchors[i][1]);
        t.setAttribute('y', anchors[i][2]);
        var b;
        try { b = t.getBBox(); } catch (e) { b = null; }
        if (!b || !b.width) continue;
        var box = { x: b.x - 2, y: b.y - 1, w: b.width + 4, h: b.height + 2 };
        if (box.x < CH.l + 1 || box.x + box.w > CH.l + iw - 1) continue;
        if (box.y < CH.t + 1 || box.y + box.h > CH.t + ih - 1) continue;
        var hit = placed.some(function (q) { return overlaps(box, q); }) ||
          pts.some(function (q) {
            return overlaps(box, {
              x: q.cx - PT_R, y: q.cy - PT_R, w: PT_R * 2, h: PT_R * 2
            });
          });
        if (hit) continue;
        placed.push(box);
        return;
      }
      gLabel.removeChild(t);
    });

    state.chartNodes = nodes;
    state.medLines = { cost: medCost, score: medScore };
    state.geo = geo;
    /* 优势曲线的名字放在最上层，免得被点的标签压住 */
    var gFrontierLabel = svg('g', { class: 'frontier-names' });
    chartEl.appendChild(gFrontierLabel);
    if (state.frontier) drawFrontierLabel(gFrontierLabel, geo);
    var gKillMarks = svg('g', { class: 'kill-marks' });
    chartEl.appendChild(gKillMarks);
    state.killLayer = { shade: gKillShade, marks: gKillMarks };
    paintChartSelection();
    var note = $('chart-note');
    if (note) {
      note.textContent = plot.length + ' 个点 · 中位成本 ' + usd(medCost) + ' · 中位能力 ' + medScore.toFixed(1);
    }
  }

  function overlaps(a, b) {
    return !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y);
  }

  function median(arr) {
    var a = arr.slice().sort(function (x, y) { return x - y; });
    var n = a.length;
    if (!n) return 0;
    return n % 2 ? a[(n - 1) / 2] : (a[n / 2 - 1] + a[n / 2]) / 2;
  }

  function niceStep(raw) {
    var p = Math.pow(10, Math.floor(Math.log10(Math.max(raw, 1e-6))));
    var n = raw / p;
    var m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
    return m * p;
  }

  function showTip(m, cx, cy) {
    tipEl.textContent = '';
    tipEl.appendChild(el('b', null, m.name + '  '));
    tipEl.appendChild(el('span', 't-org', m.orgName));
    tipEl.appendChild(el('br'));
    var l1 = el('span', 't-num', '综合能力 ' + m.score.toFixed(2) + ' · 第 ' + m.rank + ' 名');
    tipEl.appendChild(l1);
    tipEl.appendChild(el('br'));
    tipEl.appendChild(el('span', 't-num', '参考成本 ' + usd(m.cost) + ' / 百万 token'));
    tipEl.style.left = cx + 'px';
    tipEl.style.top = cy + 'px';
    tipEl.hidden = false;
  }

  function hideTip() { tipEl.hidden = true; }

  /* ---------- 3b. 斩杀线与斩杀数 ----------
     选中一个模型，它能“斩杀”的是更贵、同时又不比它强的那些：把它的成本画成一条竖线、
     能力画成一条横线，两条线右下那一块就是斩杀区域。
     斩杀数写成两个数字、中间一道斜线：
       斜线前 —— 图上这几十个点里斩掉几个；
       斜线后 —— 全库有公开标价的那些模型里斩掉几个（没标价的排不出横轴位置，算不进斩杀）。 */

  function killCounts(m) {
    var plot = plottedModels(), p = 0, all = 0, priced = 0, i, x;
    for (i = 0; i < plot.length; i++) {
      x = plot[i];
      if (x.id !== m.id && x.cost >= m.cost && x.score <= m.score) p++;
    }
    for (i = 0; i < state.data.models.length; i++) {
      x = state.data.models[i];
      if (x.cost === null) continue;
      priced++;
      if (x.id !== m.id && x.cost >= m.cost && x.score <= m.score) all++;
    }
    return { plot: p, all: all, priced: priced };
  }

  function paintKill() {
    var layer = state.killLayer, g = state.geo;
    if (!layer || !g) return;
    clear(layer.shade);
    clear(layer.marks);

    var m = state.selectedId ? state.byId[state.selectedId] : null;
    if (!m || m.cost === null) return;
    /* 只给图上真有的点画：名次靠后、没画在图上（或没有标价）的模型，选中时图上什么都没有 */
    if (!state.chartNodes || !state.chartNodes[m.id]) return;

    var cx = g.sx(m.cost), cy = g.sy(m.score);
    /* 兜底：点被挤出画布边缘（换数据后可能出现）也不画，免得线贴着边框跑 */
    if (cx < g.l - 0.5 || cx > g.r + 0.5 || cy < g.t - 0.5 || cy > g.b + 0.5) return;

    var w = g.r - cx, h = g.b - cy;
    if (w > 0.5 && h > 0.5) {
      layer.shade.appendChild(svg('rect', { class: 'kill-zone', x: cx, y: cy, width: w, height: h }));
    }

    /* 两条阈值线贯穿全图，方便对着坐标轴读数 */
    layer.marks.appendChild(svg('line', { class: 'kill-line', x1: cx, y1: g.t, x2: cx, y2: g.b }));
    layer.marks.appendChild(svg('line', { class: 'kill-line', x1: g.l, y1: cy, x2: g.r, y2: cy }));
    /* 真正框住斩杀区域的那两条边，画实一点 */
    if (w > 0.5) layer.marks.appendChild(svg('line', { class: 'kill-edge', x1: cx, y1: cy, x2: g.r, y2: cy }));
    if (h > 0.5) layer.marks.appendChild(svg('line', { class: 'kill-edge', x1: cx, y1: cy, x2: cx, y2: g.b }));

    var costLabel = svg('text', {
      class: 'kill-label',
      x: cx + (cx > g.r - 100 ? -6 : 6),
      y: g.b - 6,
      'text-anchor': cx > g.r - 100 ? 'end' : 'start'
    });
    costLabel.textContent = '成本 ≥ ' + usdTight(m.cost);
    layer.marks.appendChild(costLabel);

    /* 选中的点靠左就把能力标签挪到右边，免得压住它自己的名字 */
    var scoreOnLeft = cx > (g.l + g.r) / 2;
    var scoreLabel = svg('text', {
      class: 'kill-label',
      x: scoreOnLeft ? g.l + 5 : g.r - 5,
      y: cy - 6 < g.t + 11 ? cy + 13 : cy - 6,
      'text-anchor': scoreOnLeft ? 'start' : 'end'
    });
    scoreLabel.textContent = '能力 ≤ ' + m.score.toFixed(2);
    layer.marks.appendChild(scoreLabel);

    paintKillBadge(m, cx, cy);
  }

  function paintKillBadge(m, cx, cy) {
    var g = state.geo;
    var c = killCounts(m);

    var badge = svg('g', { class: 'kill-badge' });
    var line1 = svg('text', { class: 'kill-title', x: 0, y: 0 });
    line1.appendChild(tspan('kill-word', '斩杀 '));
    line1.appendChild(tspan('kill-num', String(c.plot)));
    line1.appendChild(tspan('kill-sep', ' / '));
    line1.appendChild(tspan('kill-num', String(c.all)));
    var line2 = svg('text', { class: 'kill-sub', x: 0, y: 14 });
    line2.textContent = '图上 ' + plottedModels().length + ' 个 · 全库 ' + c.priced + ' 个有标价';
    badge.appendChild(line1);
    badge.appendChild(line2);
    state.killLayer.marks.appendChild(badge);

    var b;
    try { b = badge.getBBox(); } catch (e) { b = null; }
    if (!b || !b.width) return;

    var pad = 7;
    badge.insertBefore(svg('rect', {
      class: 'kill-badge-bg',
      x: b.x - pad, y: b.y - pad, width: b.width + pad * 2, height: b.height + pad * 2, rx: 7
    }), badge.firstChild);

    /* 贴着选中的点放：优先落在斩杀区域里（右下），区域太扁就贴它的下沿；
       点靠着图的右边时改放左侧，最后才退到区域的右下角和点上方 */
    var boxW = b.width + pad * 2, boxH = b.height + pad * 2;
    var gap = 12, edge = 4;
    var inset = 8;
    var spots = [
      [cx + gap, cy + gap],
      [cx + gap, g.b - inset - boxH],
      [cx - gap - boxW, cy + gap],
      [cx + gap, cy - gap - boxH],
      [cx - gap - boxW, cy - gap - boxH],
      [g.r - inset - boxW, g.b - inset - boxH]
    ];
    var pos = null;
    for (var i = 0; i < spots.length; i++) {
      var sx0 = spots[i][0], sy0 = spots[i][1];
      if (sx0 >= g.l + edge && sx0 + boxW <= g.r - edge &&
          sy0 >= g.t + edge && sy0 + boxH <= g.b - edge) { pos = spots[i]; break; }
    }
    if (!pos) {
      pos = [
        Math.min(Math.max(cx + gap, g.l + edge), g.r - edge - boxW),
        Math.min(Math.max(cy + gap, g.t + edge), g.b - edge - boxH)
      ];
    }
    badge.setAttribute('transform', 'translate(' + (pos[0] - (b.x - pad)).toFixed(1) + ' ' +
      (pos[1] - (b.y - pad)).toFixed(1) + ')');
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  /* ---------- 3c. 优势曲线 ----------
     把图上「最外沿」的那一串点连起来：从最便宜的一头走到最强的一头，只收
     “没有更便宜、同时又不比它强的模型压在头上”的那些——也就是斩杀线永远碰不到的几个。
     图上算，所以跟着「图上多少名」那个口径走。 */

  function frontierModels() {
    var sorted = plottedModels().slice().sort(function (a, b) {
      return a.cost - b.cost || b.score - a.score;
    });
    var out = [], best = -Infinity;
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i].score > best) { out.push(sorted[i]); best = sorted[i].score; }
    }
    return out;
  }

  function drawFrontier(g, geo) {
    var list = frontierModels();
    if (list.length < 2) return;
    var d = '';
    for (var i = 0; i < list.length; i++) {
      d += (i ? 'L' : 'M') + geo.sx(list[i].cost).toFixed(1) + ' ' + geo.sy(list[i].score).toFixed(1);
    }
    g.appendChild(svg('path', { class: 'frontier-line', d: d }));
  }

  function drawFrontierLabel(g, geo) {
    var list = frontierModels();
    if (list.length < 2) return;
    var last = list[list.length - 1];
    var x = geo.sx(last.cost), y = geo.sy(last.score);
    var t = svg('text', { class: 'frontier-name' });
    t.textContent = '优势曲线';
    g.appendChild(t);
    var spots = [[-10, 'end', -10], [10, 'start', -10], [-10, 'end', 15], [10, 'start', 15]];
    for (var i = 0; i < spots.length; i++) {
      t.setAttribute('text-anchor', spots[i][1]);
      t.setAttribute('x', x + spots[i][0]);
      t.setAttribute('y', y + spots[i][2]);
      var b;
      try { b = t.getBBox(); } catch (e) { b = null; }
      if (!b || !b.width) return;
      if (b.x < geo.l + 1 || b.x + b.width > geo.r - 1) continue;
      if (b.y < geo.t + 1 || b.y + b.height > geo.b - 1) continue;
      return;
    }
  }

  /* ---------- 3d. 优势曲线开关 ---------- */

  var FRONTIER_KEY = 'model-atlas.frontier';
  var frontierBtn = $('btn-frontier');

  function paintFrontierBtn() {
    if (!frontierBtn) return;
    frontierBtn.setAttribute('aria-pressed', state.frontier ? 'true' : 'false');
  }

  try {
    if (localStorage.getItem(FRONTIER_KEY) === 'off') state.frontier = false;
  } catch (e) { /* 忽略 */ }
  paintFrontierBtn();

  if (frontierBtn) {
    frontierBtn.addEventListener('click', function () {
      state.frontier = !state.frontier;
      paintFrontierBtn();
      try { localStorage.setItem(FRONTIER_KEY, state.frontier ? 'on' : 'off'); } catch (e) { /* 忽略 */ }
      renderChart();
    });
  }

  function paintChartSelection() {
    if (!state.chartNodes) return;
    var sel = state.selectedId, org = state.org;
    Object.keys(state.chartNodes).forEach(function (id) {
      var n = state.chartNodes[id];
      n.g.classList.toggle('is-sel', id === sel);
      n.g.classList.toggle('is-dimmed', !!(org && !orgMatches(state.byId[id], org)));
    });
    chartEl.querySelectorAll('.pt-label').forEach(function (t) {
      var id = t.__id;
      if (id == null) return;
      var m = state.byId[id];
      t.classList.toggle('is-sel', id === sel);
      t.classList.toggle('is-dimmed', !!(org && !orgMatches(m, org)));
      t.style.opacity = id === sel ? '1' : (org && !orgMatches(m, org) ? '.15' : '');
    });
    paintKill();
  }

  function orgMatches(m, org) { return !!m && m.org === org; }

  /* ---------- 4. 排行榜 ---------- */

  var boardEl = $('board');
  var rows = {};

  function renderBoard() {
    boardEl.textContent = '';
    rows = {};
    var frag = document.createDocumentFragment();
    state.data.models.forEach(function (m) {
      var li = el('li');
      var b = el('button', 'row');
      b.type = 'button';
      b.dataset.id = m.id;

      var rk = el('span', 'rk', String(m.rank));
      var nm = el('span', 'nm');
      nm.appendChild(el('span', 'n', m.name));
      nm.appendChild(el('span', 'o', m.orgName));
      var sc = el('span', 'sc', m.score.toFixed(2));
      var ct = el('span', 'ct', usd(m.cost));
      if (m.cost === null) ct.classList.add('is-none');
      if (m.delta && m.delta > 0) {
        rk.appendChild(el('span', 'up', ' ↑' + m.delta));
      }

      b.appendChild(rk); b.appendChild(nm); b.appendChild(sc); b.appendChild(ct);
      b.addEventListener('click', function () { openDetail(m.id); });

      li.appendChild(b);
      frag.appendChild(li);
      rows[m.id] = { li: li, btn: b };
    });
    boardEl.appendChild(frag);
    applyBoardFilter();
  }

  function visibleModels() {
    var q = state.query.trim().toLowerCase();
    return state.data.models.filter(function (m) {
      if (state.org && m.org !== state.org) return false;
      if (!q) return true;
      return m.name.toLowerCase().indexOf(q) >= 0 ||
        m.orgName.toLowerCase().indexOf(q) >= 0 ||
        m.org.toLowerCase().indexOf(q) >= 0;
    });
  }

  function applyBoardFilter() {
    var list = visibleModels();
    var show = {};
    list.forEach(function (m) { show[m.id] = true; });
    Object.keys(rows).forEach(function (id) {
      rows[id].li.hidden = !show[id];
    });
    $('board-count').textContent = list.length === state.data.total
      ? state.data.total + ' 个模型'
      : list.length + ' / ' + state.data.total + ' 个';
    var old = $('board-empty');
    if (old) old.remove();
    if (!list.length) {
      var li = el('li');
      li.id = 'board-empty';
      li.textContent = '没有匹配的模型。';
      boardEl.appendChild(li);
    }
  }

  /* ---------- 5. 选中与跳转 ---------- */

  var flashTimer = null;

  /* 只滚 #board 自己，不用 scrollIntoView —— 它会连同文档一起滚：窄屏时 #list-pane 是移出屏幕的
     固定抽屉，手机竖屏整页又转过 90°，一滚看上去就是整页右移、图跑出画面。
     也不能拿 getBoundingClientRect 算：整页转过 90° 后屏幕上的纵向差对应的其实是布局空间的横轴，
     所以改用 offsetTop 链条（不受 transform 影响）算出这一行在榜单内容里的位置。 */
  function docTop(node) {
    var y = 0;
    for (var n = node; n; n = n.offsetParent) y += n.offsetTop;
    return y;
  }

  function scrollBoardTo(btn, center) {
    var y = docTop(btn) - docTop(boardEl);
    var h = btn.offsetHeight;
    var view = boardEl.clientHeight;
    var target;
    if (center) {
      target = y - (view - h) / 2;
    } else if (y < boardEl.scrollTop) {
      target = y;
    } else if (y + h > boardEl.scrollTop + view) {
      target = y + h - view;
    } else {
      return;
    }
    boardEl.scrollTo({
      top: Math.max(0, Math.min(target, boardEl.scrollHeight - view)),
      behavior: 'smooth'
    });
  }

  function setSelected(id, opt) {
    opt = opt || {};
    var prev = state.selectedId;
    state.selectedId = id;

    if (prev && rows[prev]) rows[prev].btn.classList.remove('is-sel');
    var r = rows[id];
    if (r) {
      r.btn.classList.add('is-sel');
      scrollBoardTo(r.btn, !!opt.scroll);
      if (opt.flash) {
        r.btn.classList.remove('is-flash');
        void r.btn.offsetWidth;
        r.btn.classList.add('is-flash');
        clearTimeout(flashTimer);
        flashTimer = setTimeout(function () { r.btn.classList.remove('is-flash'); }, 1600);
      }
    }
    paintChartSelection();
  }

  function jumpTo(id) {
    if (!interactiveOn()) return;
    hideHint();
    setSelected(id, { scroll: true, flash: true });
  }

  function selectOrg(org) {
    state.org = (state.org === org) ? null : org;
    renderLegend();
    applyBoardFilter();
    paintChartSelection();
    var plot = plottedModels();
    var med = state.medLines;
    $('chart-note').textContent = state.org
      ? plot.filter(function (m) { return m.org === state.org; }).length + ' / ' + plot.length +
        ' 个点（只看 ' + orgNameOf(state.org) + '）'
      : plot.length + ' 个点' + (med ? ' · 中位成本 ' + usd(med.cost) + ' · 中位能力 ' + med.score.toFixed(1) : '');
  }

  function orgNameOf(orgId) {
    for (var i = 0; i < state.data.models.length; i++) {
      if (state.data.models[i].org === orgId) return state.data.models[i].orgName;
    }
    return orgId;
  }

  /* ---------- 6. 图例 ---------- */

  function renderLegend() {
    var legend = $('legend');
    legend.textContent = '';
    var plot = plottedModels();
    var counts = {};
    plot.forEach(function (m) { counts[m.org] = (counts[m.org] || 0) + 1; });
    var list = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
    legend.appendChild(el('span', 'head-note', '厂商'));
    list.forEach(function (orgId) {
      var b = el('button');
      b.type = 'button';
      b.style.setProperty('--lc', orgColor(orgId));
      b.setAttribute('aria-pressed', state.org === orgId ? 'true' : 'false');
      b.appendChild(el('i'));
      b.appendChild(el('span', null, orgNameOf(orgId)));
      b.appendChild(el('b', null, String(counts[orgId])));
      b.addEventListener('click', function () { selectOrg(orgId); });
      legend.appendChild(b);
    });
  }

  /* ---------- 7. 图的页脚：没画上的那些 ---------- */

  function renderFoot() {
    var foot = $('chart-foot');
    foot.textContent = '';
    var skip = skippedModels();
    var p = el('p');
    p.textContent = '图上取综合能力最高的 ' + plottedModels().length + ' 个有公开标价的模型；' +
      '另有 ' + state.data.withoutPrice + ' 个模型没有公开标价（含下面这些名次更靠前的），只在右侧排行榜里。';
    foot.appendChild(p);
    if (skip.length) {
      var box = el('div', 'chips');
      skip.slice(0, 14).forEach(function (m) {
        var b = el('button', 'mini');
        b.type = 'button';
        b.appendChild(el('b', null, '#' + m.rank));
        b.appendChild(el('span', null, m.name));
        b.addEventListener('click', function () { jumpTo(m.id); });
        box.appendChild(b);
      });
      foot.appendChild(box);
    }
    renderLegend();
  }

  /* ---------- 8. 详情弹窗 ---------- */

  var detail = $('detail');
  var dBody = $('d-body');

  function openDetail(id, keepScroll) {
    if (!interactiveOn()) return;
    var m = state.byId[id];
    if (!m) return;
    setSelected(id, { scroll: true });
    if (!keepScroll) dBody.scrollTop = 0;

    $('d-eyebrow').textContent = '综合能力第 ' + m.rank + ' 名 / 共 ' + state.data.total;
    $('d-name').textContent = m.name;
    $('d-org').textContent = m.orgName + ' · ' + dateOnly(m.released) + ' 发布' +
      (m.context ? ' · 上下文 ' + ctxFmt(m.context) : '');

    dBody.textContent = '';
    dBody.appendChild(abilitySection(m));
    dBody.appendChild(recordsSection(m));
    dBody.appendChild(specSection(m));
    dBody.appendChild(priceSection(m));
    dBody.appendChild(siblingsSection(m));
    dBody.appendChild(sourceSection());

    if (typeof detail.showModal === 'function') {
      if (!detail.open) detail.showModal();
    } else {
      detail.setAttribute('open', '');
    }
  }

  function sec(title, note) {
    var s = el('section', 'sec');
    var h = el('div', 'sec-head');
    h.appendChild(el('h3', null, title));
    if (note) h.appendChild(el('span', null, note));
    s.appendChild(h);
    return s;
  }

  function abilitySection(m) {
    var s = sec('综合能力', 'ZeroEval general · μ − 3σ');
    var card = el('div', 'ability');
    var top = el('div', 'ability-top');
    var num = el('div', 'ability-num');
    num.appendChild(document.createTextNode(m.score.toFixed(2)));
    num.appendChild(el('small', null, 'μ ' + m.mu.toFixed(2) + ' · σ ' + m.sigma.toFixed(2)));
    var who = el('div', 'ability-who');
    who.appendChild(el('b', null, '第 ' + m.rank + ' 名 / ' + state.data.total));
    who.appendChild(el('span', null,
      (m.delta && m.delta > 0 ? '两周内 ↑' + m.delta + ' · ' : '') +
      '共 ' + (m.games == null ? '—' : m.games) + ' 项基准参与评分'));
    top.appendChild(num); top.appendChild(who);
    card.appendChild(top);

    var lo = state.data.lowScore, hi = state.data.topScore;
    var pct = Math.max(0, Math.min(1, (m.score - lo) / ((hi - lo) || 1)));
    var bar = el('div', 'bar');
    var fill = el('i');
    fill.style.width = (pct * 100).toFixed(1) + '%';
    bar.appendChild(fill);
    card.appendChild(bar);

    var note = el('div', 'bar-note');
    var top1 = state.data.models[0];
    note.appendChild(el('span', null, '榜首 ' + top1.name + ' ' + top1.score.toFixed(2)));
    note.appendChild(el('span', null,
      m.score >= top1.score ? '就是榜首' : '落后 ' + (top1.score - m.score).toFixed(2) + ' 分'));
    card.appendChild(note);
    s.appendChild(card);
    return s;
  }

  function recordsSection(m) {
    var s = sec('基准记录', (m.records.length || m.benchCount || 0) + ' 项');
    if (!m.records.length) {
      s.appendChild(el('div', 'empty',
        'ZeroEval 的 general 分类里还没有这个模型的基准记录，它的综合分主要来自其它分类的样本。'));
      return s;
    }
    m.records.slice(0, 24).forEach(function (r) {
      var row = el('div', 'rec');
      var nm = el('div', 'rec-name', r.n);
      if (r.src && r.src !== 'self_reported') {
        nm.appendChild(el('em', null, r.src === 'independent' ? '第三方' : r.src));
      }
      row.appendChild(nm);
      row.appendChild(el('div', 'rec-val', recScore(r.s)));
      var rk = el('div', 'rec-rank', r.r === null ? '—' : '#' + r.r + (r.o ? ' / ' + r.o : ''));
      if (r.r === 1) rk.classList.add('is-first');
      row.appendChild(rk);
      if (r.s != null && r.s <= 1.5) {
        var bar = el('div', 'rec-bar');
        var i = el('i');
        i.style.width = Math.max(1, Math.min(100, r.s * 100)).toFixed(1) + '%';
        bar.appendChild(i);
        row.appendChild(bar);
      }
      s.appendChild(row);
    });
    if (m.records.length > 24) {
      s.appendChild(el('p', 'note', '只列了排在最前面的 24 项，ZeroEval 里还有 ' + (m.records.length - 24) + ' 项。'));
    }
    s.appendChild(el('p', 'note',
      '分数口径各家自报、尺度不一，所以这里只按“在多少家里排第几名”排序；' +
      '带「第三方」标记的是独立复现的结果。'));
    return s;
  }

  function specSection(m) {
    var s = sec('规格');
    var dl = el('dl', 'kv');
    var pairs = [
      ['发布', dateOnly(m.released)],
      ['上下文', ctxFmt(m.context) + ' tokens'],
      ['参数量', paramFmt(m.params) + (m.isMoe ? '（MoE）' : '')],
      ['多模态', m.multimodal ? '支持' : '—'],
      ['开源协议', licenseName(m.license)],
      ['知识截止', dateOnly(m.cutoff)]
    ];
    pairs.forEach(function (p) {
      dl.appendChild(el('dt', null, p[0]));
      dl.appendChild(el('dd', null, p[1]));
    });
    s.appendChild(dl);
    return s;
  }

  function priceSection(m) {
    var s = sec('参考成本', usd(m.cost) + ' / 百万 token');
    if (m.priceIn == null || m.priceOut == null) {
      s.appendChild(el('div', 'empty',
        'ZeroEval 与 OpenRouter 都没有收录这个模型的公开标价，所以它上不了能力图。'));
      return s;
    }
    var t = el('table', 'price');
    var thead = el('thead');
    var hr = el('tr');
    ['', '输入', '输出'].forEach(function (x) { hr.appendChild(el('th', x ? 'mono' : null, x || '每百万 token')); });
    thead.appendChild(hr);
    t.appendChild(thead);
    var tb = el('tbody');
    var r = el('tr');
    r.appendChild(el('td', null, '标价'));
    r.appendChild(el('td', 'mono', usd(m.priceIn)));
    r.appendChild(el('td', 'mono', usd(m.priceOut)));
    tb.appendChild(r);
    var r2 = el('tr');
    r2.appendChild(el('td', null, '加权（3:1）'));
    r2.appendChild(el('td', 'mono total', usd(m.cost)));
    r2.appendChild(el('td', 'mono', ''));
    tb.appendChild(r2);
    t.appendChild(tb);
    s.appendChild(t);

    var w = el('table', 'price');
    w.style.marginTop = '10px';
    var wh = el('thead');
    var wr = el('tr');
    wr.appendChild(el('th', null, '按这个价格算'));
    wr.appendChild(el('th', 'mono', 'tokens'));
    wr.appendChild(el('th', 'mono', '一次多少钱'));
    wh.appendChild(wr);
    w.appendChild(wh);
    var wb = el('tbody');
    (state.data.workloads || []).forEach(function (k) {
      var tr = el('tr');
      tr.appendChild(el('td', null, k.label));
      tr.appendChild(el('td', 'mono', (k.tokensIn / 1000) + 'K / ' + (k.tokensOut / 1000) + 'K'));
      tr.appendChild(el('td', 'mono total',
        usd((k.tokensIn * m.priceIn + k.tokensOut * m.priceOut) / 1e6)));
      wb.appendChild(tr);
    });
    w.appendChild(wb);
    s.appendChild(w);

    s.appendChild(el('p', 'note',
      '价格来自 ' + (m.priceFrom === 'openrouter' ? 'OpenRouter 的公开接口' : 'ZeroEval 收录的官方标价') +
      '；缓存命中、思考预算与批量折扣都会让实际账单更低或更高。'));
    return s;
  }

  function siblingsSection(m) {
    var sib = state.data.models.filter(function (x) { return x.org === m.org; })
      .sort(function (a, b) { return a.rank - b.rank; });
    var s = sec('同厂商其它模型', sib.length + ' 个');
    if (!sib.length) return s;
    var box = el('div', 'plist');
    sib.forEach(function (x) {
      var b = el('button', 'prow');
      b.type = 'button';
      if (x.id === m.id) b.setAttribute('aria-current', 'true');
      b.appendChild(el('span', 'prk', '#' + x.rank));
      b.appendChild(el('span', 'pnm', x.name));
      b.appendChild(el('span', 'psc', x.score.toFixed(2)));
      b.addEventListener('click', function () { openDetail(x.id); });
      box.appendChild(b);
    });
    s.appendChild(box);
    return s;
  }

  function sourceSection() {
    var s = sec('数据出处');
    s.appendChild(el('p', 'note',
      '综合能力与标价来自 ZeroEval / LLM Stats，缺价时退回 OpenRouter；快照时间 ' +
      when(state.data.snapshotAt) + '。'));
    return s;
  }

  /* ---------- 9. 关于弹窗 ---------- */

  function renderAbout() {
    var ul = $('about-sources');
    ul.textContent = '';
    var S = state.data.sources;
    ['index', 'models', 'openrouter'].forEach(function (k) {
      var src = S[k];
      if (!src) return;
      var li = el('li');
      var a = el('a', null, src.name);
      a.href = src.url; a.target = '_blank'; a.rel = 'noreferrer';
      li.appendChild(a);
      li.appendChild(document.createTextNode(' —— ' + src.note));
      ul.appendChild(li);
    });
    $('about-state').textContent =
      '数据快照：' + when(state.data.snapshotAt) + ' · 共 ' + state.data.total + ' 个模型，' +
      (state.data.total - state.data.withoutPrice) + ' 个有公开标价。';
  }

  var dataStatus = $('data-status');
  if (dataStatus) dataStatus.addEventListener('click', function () { refresh(false); });

  function setStatus(text, cls) {
    if (!dataStatus) return;
    dataStatus.textContent = '';
    dataStatus.appendChild(el('span', cls || null, text));
  }

  function isLocalHost() {
    var h = location.hostname;
    return h === 'localhost' || h === '127.0.0.1' || h === '[::1]' || h === '::1';
  }

  function fetchJSON(url, ms) {
    var ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = ctl ? setTimeout(function () { ctl.abort(); }, ms || 30000) : null;
    return fetch(url, { signal: ctl ? ctl.signal : undefined, headers: { accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (j) { if (timer) clearTimeout(timer); return j; },
        function (e) { if (timer) clearTimeout(timer); throw e; });
  }

  /* 能不能取实时数据，取决于页面是怎么打开的：
       file://      → 直接用快照，连试都不试
       localhost    → 走 tools/serve.cjs 的同源代理
       其它站点      → 没有代理，两个数据源都不发 CORS 头，同样跳过 */
  function canRefresh() {
    return location.protocol.indexOf('http') === 0 && isLocalHost() && !WALLPAPER;
  }

  function refresh(loud) {
    if (WALLPAPER) {
      setStatus('快照数据 · ' + when(state.data.snapshotAt) + '（壁纸版用工程内置数据，不联网）');
      return Promise.resolve(false);
    }
    if (!canRefresh()) {
      setStatus('快照数据 · ' + when(state.data.snapshotAt) +
        (location.protocol === 'file:' || isLocalHost()
          ? '（本地打开，用 node tools/serve.cjs 可取实时数据）'
          : '（本页没有数据代理，实时数据需本地跑 node tools/serve.cjs）'), 'warn');
      return Promise.resolve(false);
    }
    if (loud) setStatus('正在拉取实时数据…');
    var S = state.data.sources;
    return Promise.all([
      fetchJSON(S.index.proxy), fetchJSON(S.models.proxy), fetchJSON(S.openrouter.proxy)
    ]).then(function (res) {
      var modelsArr = Array.isArray(res[1]) ? res[1] : (res[1].models || res[1].data || []);
      var orArr = Array.isArray(res[2]) ? res[2] : (res[2].data || []);
      state.data = MD.buildDataset(modelsArr, res[0], orArr, state.data.plotLimit);
      indexData();
      state.live = true;
      rebuildAll();
      setStatus('实时数据 · ' + when(state.data.snapshotAt), 'ok');
      return true;
    }).catch(function (e) {
      setStatus('没能取到实时数据：' + e.message + '（继续用快照）', 'warn');
      return false;
    });
  }

  function rebuildAll() {
    state.selectedId = null;
    state.org = null;
    indexData();
    /* 图例与页脚先搭好再画图：它们的高度决定 #chart-wrap 还剩多少地方 */
    renderBoard();
    renderFoot();
    renderChart();
    renderAbout();
  }

  /* ---------- 10. 主题 ---------- */

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', !!dark);
    var icon = document.querySelector('[data-theme-icon]');
    if (icon) icon.textContent = dark ? '☾' : '☀';
  }

  try {
    var saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved ? saved === 'dark' : true);
  } catch (e) { applyTheme(true); }

  $('btn-theme').addEventListener('click', function () {
    var dark = !document.documentElement.classList.contains('dark');
    applyTheme(dark);
    try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (e) { /* 忽略 */ }
  });

  /* ---------- 11. 输入 ---------- */

  var searchEl = $('search');
  searchEl.addEventListener('input', function () {
    state.query = searchEl.value;
    applyBoardFilter();
    hideHint();
  });

  function hideHint() {
    if (WALLPAPER) return;
    var h = $('hint');
    if (h && !h.classList.contains('is-gone')) h.classList.add('is-gone');
  }
  $('d-close').addEventListener('click', function () { detail.close(); });
  detail.addEventListener('click', function (e) { if (e.target === detail) detail.close(); });

  var about = $('about');
  $('btn-about').addEventListener('click', function () {
    if (typeof about.showModal === 'function') about.showModal();
    else about.setAttribute('open', '');
  });
  $('about-close').addEventListener('click', function () { about.close(); });
  about.addEventListener('click', function (e) { if (e.target === about) about.close(); });

  /* ---------- 11b. 移动端的排行榜抽屉 ----------
     桌面端图与榜并排，顶栏那个按钮和遮罩都是 display:none；
     窄屏时排行榜变成右侧抽屉，靠按钮、遮罩或 Esc 收回去。 */

  var shelfBtn = $('btn-shelf');
  var shelfScrim = $('shelf-scrim');

  function shelfIsOpen() { return document.body.classList.contains('shelf-open'); }

  function setShelf(open) {
    document.body.classList.toggle('shelf-open', !!open);
    if (!shelfBtn) return;
    shelfBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    shelfBtn.setAttribute('aria-label', open ? '收起排行榜' : '打开排行榜');
    shelfBtn.title = open ? '收起排行榜' : '打开排行榜';
  }

  if (shelfBtn) {
    shelfBtn.addEventListener('click', function () { setShelf(!shelfIsOpen()); });
  }
  if (shelfScrim) {
    shelfScrim.addEventListener('click', function () { setShelf(false); });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (detail.open || about.open) return;
    if (shelfIsOpen()) { setShelf(false); return; }
    if (state.selectedId) setSelected(null, {});
  });

  /* 竖屏手机整页转过 90° 之后，浏览器仍按未旋转的坐标算滚动量：榜单只认屏幕上的「向右划」，
     上下划没反应、向左划也不动。旋转状态下干脆自己接管 #board 的手势：
     屏幕纵向的滑动换成榜单的上下滚动，横向的也一并接管（向右划 = 往下翻，向左划 = 往上翻），
     免得两个方向的手感一个用一个不用。没转过屏（横屏、桌面）时这些判断直接跳过，全交给浏览器。 */
  var portraitTurn = window.matchMedia('(max-width: 640px) and (orientation: portrait)');

  var boardTouch = null;
  boardEl.addEventListener('touchstart', function (e) {
    if (!portraitTurn.matches || e.touches.length !== 1) { boardTouch = null; return; }
    var t = e.touches[0];
    boardTouch = { x: t.clientX, y: t.clientY, top: boardEl.scrollTop, on: false };
  }, { passive: true });

  boardEl.addEventListener('touchmove', function (e) {
    if (!boardTouch || e.touches.length !== 1) return;
    var t = e.touches[0];
    var dx = t.clientX - boardTouch.x, dy = t.clientY - boardTouch.y;
    if (!boardTouch.on) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      boardTouch.on = true;
    }
    /* 屏幕纵向与横向都换算成榜单的纵向滚动：屏幕上「往前翻」的方向对应 scrollTop 变大 */
    var move = Math.abs(dy) >= Math.abs(dx) ? -dy : dx;
    boardEl.scrollTop = boardTouch.top + move;
    e.preventDefault();
  }, { passive: false });

  boardEl.addEventListener('touchend', function () { boardTouch = null; }, { passive: true });
  boardEl.addEventListener('touchcancel', function () { boardTouch = null; }, { passive: true });

  /* 画布尺寸变了就按新尺寸重画：换图例（厂商筛选）、拉实时数据、字体到位、手机转屏、
     排行榜抽屉收放都会改动 #chart-wrap 的高度，只靠 window.resize 是抓不到的。 */
  var chartTimer = null;

  function scheduleChart(delay) {
    clearTimeout(chartTimer);
    chartTimer = setTimeout(renderChart, delay == null ? 120 : delay);
  }

  function chartSizeChanged() {
    var box = plotBox();
    return !state.chartSize || box.w !== state.chartSize.w || box.h !== state.chartSize.h;
  }

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(function () {
      if (chartSizeChanged()) scheduleChart();
    }).observe(wrapEl);
  }
  window.addEventListener('resize', function () { scheduleChart(180); }, { passive: true });

  /* ---------- 12. 壁纸模式 ---------- */

  var settings = (window.Ambience && window.Ambience.settings) || null;
  var uiTimer = null, spotTimer = null, spotAcc = 0, spotPaused = 0;

  function poke() {
    if (!WALLPAPER) return;
    document.body.classList.remove('idle');
    clearTimeout(uiTimer);
    uiTimer = window.setTimeout(function () { document.body.classList.add('idle'); }, 5000);
    spotPaused = Date.now() + 22000;
  }

  function spotlight() {
    if (!WALLPAPER || !settings || !settings.spotlight) return;
    if (Date.now() < spotPaused) return;
    if (detail.open || about.open) return;
    if (document.body.classList.contains('idle') === false) return;
    var plot = plottedModels();
    if (!plot.length) return;
    var idx = state.spotIndex == null ? 0 : (state.spotIndex + 1) % plot.length;
    state.spotIndex = idx;
    setSelected(plot[idx].id, { scroll: true });
  }

  function startSpotlight() {
    if (!WALLPAPER) return;
    if (!settings || !settings.spotlight) {
      if (spotTimer) { clearInterval(spotTimer); spotTimer = null; }
      return;
    }
    if (spotTimer) return;
    spotAcc = 0;
    spotTimer = window.setInterval(function () {
      if (!settings) return;
      spotAcc++;
      var every = Math.max(2, Math.round(7 * settings.pace));
      if (spotAcc >= every) { spotAcc = 0; spotlight(); }
    }, 1000);
  }

  if (WALLPAPER) {
    ['mousemove', 'mousedown', 'wheel', 'keydown', 'touchstart'].forEach(function (t) {
      window.addEventListener(t, poke, { passive: true });
    });
    poke();
    startSpotlight();
  }

  /* 壁纸属性面板改动后由 wallpaper.js 调这里 */
  function applySettings() {
    if (!settings) return;
    var n = Math.max(1, Math.round(settings.points || 50));
    if (n !== state.plotLimit) {
      state.plotLimit = n;
      state.spotIndex = null;
      renderChart();
      renderFoot();
    }
    if (WALLPAPER) {
      // 关掉之后点与行都不再响应，只剩自动巡览在换高亮
      document.body.classList.toggle('no-interactive', settings.interactive === false);
      if (settings.interactive === false) hideTip();
    }
    startSpotlight();
  }

  /* 交互是否开着：普通浏览器里永远开着，壁纸版看属性面板 */
  function interactiveOn() {
    return !(WALLPAPER && settings && settings.interactive === false);
  }

  /* ---------- 13. 启动 ---------- */

  /* 先把榜单、图例与页脚搭好，再画图：图例与页脚的高度决定 #chart-wrap 还剩多少地方，
     反过来的话首屏会按偏大的画布画，图被按比例缩窄，点一下别处重画才恢复。 */
  renderBoard();
  renderFoot();
  renderChart();
  renderAbout();
  setStatus(WALLPAPER
    ? '快照数据 · ' + when(state.data.snapshotAt) + '（壁纸版用工程内置数据，不联网）'
    : '数据快照 · ' + when(state.data.snapshotAt));
  if (!WALLPAPER) {
    // 提示条看过一遍就够了，几秒后自己让位
    window.setTimeout(hideHint, 9000);
    // 挂在本地服务下时顺手拉一次实时数据；页面先用手上的快照渲染，不等人
    if (canRefresh()) window.setTimeout(function () { refresh(false); }, 900);
    else refresh(false);
  }

  /* 供无头浏览器验收 */
  window.ModelAtlas = {
    state: state,
    plotted: plottedModels,
    skipped: skippedModels,
    select: setSelected,
    jump: jumpTo,
    open: openDetail,
    filterOrg: selectOrg,
    rerender: function () { renderChart(); renderBoard(); renderFoot(); },
    applySettings: applySettings,
    refresh: refresh
  };
}());
