/* ==========================================================================
   最后的 Token · 交互层
   --------------------------------------------------------------------------
   把画里的 13 位角色做成可点的：点开一位，看到的是它的各个版本、
   综合能力（ZeroEval general 指数）与参考成本（每百万 tokens 的美元价）。
   页面先用打包好的快照渲染，随后在后台尝试拉一次实时数据覆盖。
   ========================================================================== */

(function () {
  'use strict';

  var MD = window.ModelData;
  var snapshot = window.MODEL_SNAPSHOT;
  var WALLPAPER = !!window.LAST_TOKEN_WALLPAPER;   // 壁纸版会先设这个标记

  if (!MD || !snapshot) {
    var st = document.getElementById('data-status');
    if (st) st.textContent = '数据文件没有加载成功';
    return;
  }
  if (WALLPAPER) document.body.classList.add('wallpaper');

  /* ---------- 1. 状态 ---------- */

  var state = {
    data: snapshot,          // 当前使用的数据集
    live: false,             // 是否已经换成实时数据
    charId: null,            // 当前打开的角色
    versionId: null,         // 当前选中的版本
    sort: 'date',            // date | ability
    onlyScored: false,
    trigger: null            // 打开面板前获得焦点的元素
  };

  /* ---------- 2. DOM ---------- */

  var hotspots = document.getElementById('hotspots');
  var panel = document.getElementById('panel');
  var pBody = document.getElementById('p-body');
  var pName = document.getElementById('p-name');
  var pOrg = document.getElementById('p-org');
  var pLook = document.getElementById('p-look');
  var pEyebrow = document.getElementById('p-eyebrow');
  var scrim = document.getElementById('scrim');
  var hint = document.getElementById('hint');
  var about = document.getElementById('about');
  var aboutList = document.getElementById('about-list');
  var aboutSources = document.getElementById('about-sources');
  var aboutState = document.getElementById('about-state');
  var dataStatus = document.getElementById('data-status');

  /* ---------- 3. 小工具 ---------- */

  var HOTSPOT_TOP = 27.5;      // 兜底热区上沿（原图百分比）
  var HOTSPOT_BOTTOM = 58.5;   // 兜底热区下沿

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function money(v, unit) {
    if (v === null || v === undefined) return '未公开';
    var s = v >= 100 ? v.toFixed(0) : (v >= 10 ? v.toFixed(2) : (v >= 1 ? v.toFixed(2) : v.toFixed(3)));
    return '$' + s + (unit === false ? '' : ' / 百万 tokens');
  }

  function cost(priceIn, priceOut, w) {
    if (priceIn === null && priceOut === null) return null;
    var c = (priceIn || 0) * w.tokensIn / 1e6 + (priceOut || 0) * w.tokensOut / 1e6;
    return c;
  }

  function usd(v) {
    if (v >= 100) return '$' + v.toFixed(0);
    if (v >= 1) return '$' + v.toFixed(2);
    return '$' + v.toFixed(3);
  }

  function tok(v) {
    if (v >= 1e6) return (v / 1e6) + 'M';
    return (v / 1e3) + 'K';
  }

  function ctx(v) {
    if (!v) return '未公开';
    if (v >= 1000000) return (v / 1000000).toFixed(v % 1000000 ? 1 : 0) + 'M tokens';
    return Math.round(v / 1000) + 'K tokens';
  }

  function params(v) {
    if (!v) return '未公开';
    if (v >= 1e12) return (v / 1e12).toFixed(1) + 'T';
    if (v >= 1e9) return Math.round(v / 1e9) + 'B';
    if (v >= 1e6) return Math.round(v / 1e6) + 'M';
    return String(v);
  }

  function when(iso) {
    if (!iso) return new Date().toLocaleString('zh-CN', { hour12: false });
    var d = new Date(iso);
    return d.toLocaleString('zh-CN', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  }

  function charById(id) {
    var list = state.data.characters;
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  /* ---------- 4. 热区 ---------- */

  /* 热区的上下沿来自 data/model-data.js 的标定：上沿是角色自己的 top——头顶连
     帽子、猫耳、光环都算；下沿是所有人共用的一条桌沿 TABLE_LINE。标定读不到就
     退回一个盖住整张桌子的兜底区间。 */
  function verticalRange(id) {
    var list = MD.CHARACTERS || [];
    var line = MD.TABLE_LINE;
    for (var i = 0; i < list.length; i++) {
      var def = list[i];
      if (def.id !== id) continue;
      if (def.top != null && line != null && line > def.top) return { top: def.top, bottom: line };
      break;
    }
    return { top: HOTSPOT_TOP, bottom: HOTSPOT_BOTTOM };
  }

  function buildHotspots() {
    hotspots.textContent = '';
    state.data.characters.forEach(function (c, i) {
      var v = verticalRange(c.id);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'spot';
      b.dataset.char = c.id;
      b.style.left = (c.band[0] + 0.4) + '%';
      b.style.width = (c.band[1] - c.band[0] - 0.8) + '%';
      b.style.top = v.top + '%';
      b.style.height = (v.bottom - v.top) + '%';
      b.setAttribute('aria-label',
        c.name + '（' + c.org + '）—— 共 ' + c.versionCount + ' 个版本，查看综合能力与参考成本');
      b.appendChild(el('span', 'spot-tag', c.name));
      b.addEventListener('click', function () { open(c.id, b); });
      hotspots.appendChild(b);
    });
  }

  function markActive() {
    var btns = hotspots.querySelectorAll('.spot');
    for (var i = 0; i < btns.length; i++) {
      var on = btns[i].dataset.char === state.charId;
      btns[i].classList.toggle('is-active', on);
      if (on) btns[i].setAttribute('aria-current', 'true');
      else btns[i].removeAttribute('aria-current');
    }
  }

  /* ---------- 5. 面板 ---------- */

  function open(id, trigger, keepVersion) {
    var c = charById(id);
    if (!c) return;
    state.charId = id;
    if (trigger) state.trigger = trigger;
    if (!keepVersion) {
      state.versionId = c.best ? c.best.id : (c.versions[0] ? c.versions[0].id : null);
    }
    hideHint();
    var dockLeft = pickSide(c);
    if (panel.classList.contains('dock-left') !== dockLeft) {
      panel.classList.add('no-anim');
      panel.classList.toggle('dock-left', dockLeft);
      requestAnimationFrame(function () { requestAnimationFrame(function () { panel.classList.remove('no-anim'); }); });
    }
    panel.hidden = false;
    scrim.hidden = false;
    requestAnimationFrame(function () {
      panel.classList.add('is-open');
      scrim.classList.add('is-on');
    });
    panel.setAttribute('aria-hidden', 'false');
    document.body.classList.toggle('panel-left', dockLeft);
    document.body.classList.toggle('panel-right', !dockLeft);
    render();
    markActive();
    focusCharacter(c, dockLeft);
    var close = document.getElementById('p-close');
    if (close && !keepVersion) close.focus({ preventScroll: true });
    else if (keepVersion) pBody.focus({ preventScroll: true });
  }

  /* 这位角色现在落在屏幕的哪半边，就把面板停到另一半去 */
  function pickSide(c) {
    if (window.innerWidth <= 640) return false;   // 手机上是从底部升起的抽屉
    var sp = document.getElementById('space');
    if (!sp) return false;
    var r = sp.getBoundingClientRect();
    if (!r.width) return false;
    return (r.left + r.width * c.x / 100) > window.innerWidth / 2;
  }

  /* 面板会盖住一条边，把刚点开的角色缓缓挪到剩下那片的中间 */
  function focusCharacter(c, dockLeft) {
    if (!window.Ambience || !window.Ambience.focus) return;
    var w = window.innerWidth;
    if (w <= 640) { window.Ambience.focus(c.x, w / 2); return; }
    var pw = panel.getBoundingClientRect().width || 0;
    var free = w - pw;
    var target = dockLeft ? pw + free / 2 : free / 2;
    window.Ambience.focus(c.x, Math.max(target, 80));
  }

  function close() {
    if (!state.charId) return;
    state.charId = null;
    if (window.Ambience && window.Ambience.release) window.Ambience.release();
    panel.classList.remove('is-open');
    scrim.classList.remove('is-on');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('panel-left', 'panel-right');
    markActive();
    window.setTimeout(function () {
      if (!state.charId) { panel.hidden = true; scrim.hidden = true; }
    }, 260);
    var t = state.trigger;
    state.trigger = null;
    if (t && document.contains(t)) t.focus({ preventScroll: true });
  }

  function hideHint() {
    if (WALLPAPER) return;   // 壁纸模式下提示条跟着 idle 走，动一下鼠标还会回来
    if (hint && !hint.classList.contains('is-gone')) hint.classList.add('is-gone');
  }

  /* 壁纸模式：鼠标停下几秒就把浮层收干净，桌面只剩画面；
     档案面板也在一分半没人碰之后自动收起来。 */
  var uiTimer = null, panelTimer = null;

  function poke() {
    if (!WALLPAPER) return;
    document.body.classList.remove('idle');
    clearTimeout(uiTimer);
    clearTimeout(panelTimer);
    uiTimer = window.setTimeout(function () { document.body.classList.add('idle'); }, 5000);
    panelTimer = window.setTimeout(function () { if (state.charId) close(); }, 90000);
  }

  function curChar() { return charById(state.charId); }

  function curVersion(c) {
    for (var i = 0; i < c.versions.length; i++) if (c.versions[i].id === state.versionId) return c.versions[i];
    return c.versions[0] || null;
  }

  function visibleVersions(c) {
    var list = c.versions.slice();
    if (state.onlyScored) list = list.filter(function (v) { return v.ability; });
    if (state.sort === 'ability') {
      list.sort(function (a, b) {
        var x = a.ability ? a.ability.score : -1e9;
        var y = b.ability ? b.ability.score : -1e9;
        if (y !== x) return y - x;
        return (b.released || '').localeCompare(a.released || '');
      });
    }
    return list;
  }

  function render() {
    var c = curChar();
    if (!c) return;
    var v = curVersion(c);

    pEyebrow.textContent = '角色档案 · 第 ' + (state.data.characters.indexOf(c) + 1) + ' / ' + state.data.characters.length + ' 位';
    pName.textContent = c.name;
    pOrg.textContent = c.org + ' · ' + c.orgId + ' · 共 ' + c.versionCount + ' 个版本';
    pLook.textContent = c.look;

    var keepScroll = pBody.scrollTop;
    pBody.textContent = '';
    pBody.tabIndex = -1;

    pBody.appendChild(abilitySection(c, v));
    pBody.appendChild(versionsSection(c));
    if (v) {
      pBody.appendChild(detailSection(v));
      pBody.appendChild(costSection(v, c));
    }
    pBody.appendChild(sourcesSection(c));
    pBody.scrollTop = keepScroll;
  }

  /* 5.1 综合能力 */
  function abilitySection(c, v) {
    var sec = el('section', 'sec');
    var head = el('div', 'sec-head');
    head.appendChild(el('h3', null, '综合能力'));
    head.appendChild(el('span', null, 'ZeroEval general 指数'));
    sec.appendChild(head);

    var card = el('div', 'ability');

    if (!v || !v.ability) {
      card.appendChild(el('p', 'empty',
        c.orgId === 'perplexity'
          ? 'ZeroEval 未收录这家厂商，因此没有可比的综合分与基准分。右侧价格来自 OpenRouter。'
          : '这个版本还没有进入基准榜，暂无综合分。'));
      sec.appendChild(card);
      return sec;
    }

    var top = state.data.generalTop;
    var total = v.ability.of;
    var pct = top ? Math.max(2, Math.min(100, v.ability.score / top.score * 100)) : 50;

    var topRow = el('div', 'ability-top');
    var num = el('div', 'ability-num', v.ability.score.toFixed(2));
    num.appendChild(el('small', null, 'μ ' + v.ability.mu + ' / σ ' + v.ability.sigma));
    topRow.appendChild(num);

    var who = el('div', 'ability-who');
    who.appendChild(el('b', null, v.name));
    who.appendChild(el('span', null, '全局第 ' + v.ability.rank + ' / ' + total + ' 名'));
    topRow.appendChild(who);
    card.appendChild(topRow);

    var bar = el('div', 'bar');
    var fill = el('i');
    fill.style.width = pct.toFixed(1) + '%';
    bar.appendChild(fill);
    card.appendChild(bar);

    var note = el('div', 'bar-note');
    note.appendChild(el('span', null, 'TrueSkill 保守估计 μ−3σ，' + total + ' 个模型同一标尺'));
    if (top) note.appendChild(el('span', null, '榜首 ' + top.name + ' ' + top.score.toFixed(2)));
    card.appendChild(note);

    if (c.best && c.best.id !== v.id) {
      var alt = el('p', 'note', '这一族里综合分最高的是 ' + c.best.name + '（' + c.best.ability.score.toFixed(2) + '）。');
      card.appendChild(alt);
    }

    sec.appendChild(card);
    return sec;
  }

  /* 5.2 版本列表 */
  function versionsSection(c) {
    var sec = el('section', 'sec');
    var head = el('div', 'sec-head');
    head.appendChild(el('h3', null, '版本'));
    head.appendChild(el('span', null, c.versionCount + ' 个 · 点一行看详情'));

    var chips = el('div', 'chips');
    var c1 = el('button', 'chip', '按发布日期');
    var c2 = el('button', 'chip', '按综合能力');
    var c3 = el('button', 'chip', '只看有综合分的');
    c1.type = c2.type = c3.type = 'button';
    c1.setAttribute('aria-pressed', String(state.sort === 'date'));
    c2.setAttribute('aria-pressed', String(state.sort === 'ability'));
    c3.setAttribute('aria-pressed', String(state.onlyScored));
    c1.addEventListener('click', function () { state.sort = 'date'; render(); });
    c2.addEventListener('click', function () { state.sort = 'ability'; render(); });
    c3.addEventListener('click', function () {
      state.onlyScored = !state.onlyScored;
      // 打开筛选时，当前选中的那一版可能刚好被滤掉，那就退回到综合分最高的版本
      if (state.onlyScored) {
        var cv = curVersion(c);
        if (!cv || !cv.ability) state.versionId = c.best ? c.best.id : state.versionId;
      }
      render();
    });
    chips.appendChild(c1); chips.appendChild(c2); chips.appendChild(c3);

    sec.appendChild(head);
    sec.appendChild(chips);

    var list = visibleVersions(c);
    var box = el('div', 'vlist');
    box.setAttribute('role', 'list');

    if (!list.length) {
      box.appendChild(el('p', 'empty', '这个筛选下没有版本。'));
      sec.appendChild(box);
      return sec;
    }

    list.forEach(function (v) {
      var row = el('button', 'vrow');
      row.type = 'button';
      row.setAttribute('role', 'listitem');
      if (v.id === state.versionId) row.setAttribute('aria-current', 'true');

      var name = el('span', 'vname');
      name.appendChild(document.createTextNode(v.name));
      if (c.best && c.best.id === v.id) {
        var pill = el('span', 'badge', '最高');
        pill.style.marginLeft = '6px';
        name.appendChild(pill);
      }
      row.appendChild(name);
      row.appendChild(el('span', 'vdate', v.released || '日期未知'));

      var sc = el('span', 'vscore' + (v.ability ? '' : ' is-none'), v.ability ? v.ability.score.toFixed(2) : '—');
      row.appendChild(sc);

      row.addEventListener('click', function () {
        state.versionId = v.id;
        render();
      });
      box.appendChild(row);
    });

    sec.appendChild(box);
    return sec;
  }

  /* 5.3 版本详情 */
  function detailSection(v) {
    var sec = el('section', 'sec');
    var head = el('div', 'sec-head');
    head.appendChild(el('h3', null, '版本详情'));
    head.appendChild(el('span', null, v.name));
    sec.appendChild(head);

    var kv = el('dl', 'kv');
    function pair(k, val) { kv.appendChild(el('dt', null, k)); kv.appendChild(el('dd', null, val)); }
    pair('发布日期', v.released || '未知');
    pair('上下文', ctx(v.context));
    pair('参数量', params(v.params) + (v.isMoe ? '（MoE）' : ''));
    pair('知识截止', v.cutoff || '未公开');
    pair('开源协议', v.license ? v.license.replace(/_/g, ' ') : '闭源 / 未公开');
    pair('多模态', v.multimodal ? '支持' : '文本为主');
    if (v.ability) {
      pair('综合能力', v.ability.score.toFixed(2) + '（第 ' + v.ability.rank + ' / ' + v.ability.of + '）');
      pair('指数依据', v.ability.games + ' 个基准对局（TrueSkill）');
    }
    sec.appendChild(kv);

    if (v.benchmarks && v.benchmarks.length) {
      var bench = el('div', 'bench');
      v.benchmarks.slice().sort(function (a, b) { return b.score - a.score; }).forEach(function (b) {
        var row = el('div', 'bench-row');
        var nm = el('span', 'bench-name', b.name);
        nm.appendChild(el('em', null, b.zh));
        row.appendChild(nm);
        row.appendChild(el('span', 'bench-val', b.pct.toFixed(1) + '%'));
        var bar = el('div', 'bench-bar');
        var f = el('i');
        f.style.width = Math.max(1, Math.min(100, b.score * 100)).toFixed(1) + '%';
        bar.appendChild(f);
        row.appendChild(bar);
        bench.appendChild(row);
      });
      sec.appendChild(bench);
      sec.appendChild(el('p', 'note', '基准分来自 ZeroEval / LLM Stats 汇总的公开结果，多为 0–1 的比例，部分为厂商自报。'));
    } else {
      sec.appendChild(el('p', 'empty', '这一版没有可比的公开基准分。'));
    }

    return sec;
  }

  /* 5.4 参考成本 */
  function costSection(v, c) {
    var sec = el('section', 'sec');
    var head = el('div', 'sec-head');
    head.appendChild(el('h3', null, '参考成本'));
    head.appendChild(el('span', null, v.priceIn === null && v.priceOut === null ? '未公开价格' : '每百万 tokens'));
    sec.appendChild(head);

    var t = el('table', 'price');
    var thead = el('thead');
    var hr = el('tr');
    hr.appendChild(el('th', null, '方向'));
    hr.appendChild(el('th', null, '单价'));
    thead.appendChild(hr);
    t.appendChild(thead);
    var tb = el('tbody');
    [['输入', v.priceIn], ['输出', v.priceOut]].forEach(function (p) {
      var tr = el('tr');
      tr.appendChild(el('td', null, p[0]));
      tr.appendChild(el('td', 'mono', money(p[1])));
      tb.appendChild(tr);
    });
    t.appendChild(tb);
    sec.appendChild(t);

    if (v.extra && v.extra.webSearch != null) {
      sec.appendChild(el('p', 'note',
        '联网检索另计：' + usd(v.extra.webSearch).replace(/\.00$/, '') + ' / 千次（OpenRouter 标价）。'));
    }

    if (v.priceIn === null && v.priceOut === null) {
      sec.appendChild(el('p', 'empty', '接口没有给出这一版的价格，可能只在厂商自己的订阅里提供。'));
      return sec;
    }

    var rows = MD.WORKLOADS.map(function (w) {
      return { w: w, c: cost(v.priceIn, v.priceOut, w) };
    }).filter(function (r) { return r.c !== null; });

    if (rows.length) {
      var t2 = el('table', 'price');
      t2.style.marginTop = '10px';
      var th2 = el('thead');
      var r2 = el('tr');
      r2.appendChild(el('th', null, '示例工作量'));
      r2.appendChild(el('th', null, 'tokens'));
      r2.appendChild(el('th', null, '估算'));
      th2.appendChild(r2);
      t2.appendChild(th2);
      var tb2 = el('tbody');
      rows.forEach(function (r) {
        var tr = el('tr');
        tr.appendChild(el('td', null, r.w.label));
        tr.appendChild(el('td', 'mono', tok(r.w.tokensIn) + ' / ' + tok(r.w.tokensOut)));
        tr.appendChild(el('td', 'mono total', usd(r.c)));
        tb2.appendChild(tr);
      });
      t2.appendChild(tb2);
      sec.appendChild(t2);
      sec.appendChild(el('p', 'note',
        '按官方 API 标价线性估算：输入 ' + (v.priceIn === null ? '—' : '$' + v.priceIn) +
        '、输出 ' + (v.priceOut === null ? '—' : '$' + v.priceOut) + ' 每百万 tokens。' +
        '中文按 1 token ≈ 1.5 个汉字折算，缓存命中、思考预算与批量折扣都会让实际账单更低或更高。'));
    }

    sec.appendChild(el('p', 'note',
      c.orgId === 'perplexity'
        ? '价格来自 OpenRouter 的公开接口，不含订阅额度。'
        : '价格来自 ZeroEval / LLM Stats 汇总的官方标价，单位为美元 / 百万 tokens。'));
    return sec;
  }

  /* 5.5 数据出处 */
  function sourcesSection(c) {
    var sec = el('section', 'sec');
    var head = el('div', 'sec-head');
    head.appendChild(el('h3', null, '数据出处'));
    sec.appendChild(head);
    var S = state.data.sources;
    var ul = el('ul', 'about-sources');
    [S.models, S.index, S.openrouter].forEach(function (s) {
      var li = el('li');
      var a = el('a', null, s.name);
      a.href = s.url; a.target = '_blank'; a.rel = 'noreferrer';
      li.appendChild(a);
      li.appendChild(document.createTextNode(' —— ' + s.note));
      ul.appendChild(li);
    });
    sec.appendChild(ul);
    sec.appendChild(el('p', 'note',
      '角色形象来自 genderswapai.com 的 AI 拟人图鉴，作者 ZipZipPipe 等，CC BY-NC-SA 4.0；' +
      '本站为非商业同人展示。数据快照时间：' + when(state.data.snapshotAt) + '。'));
    return sec;
  }

  /* ---------- 6. 实时数据 ---------- */

  function setStatus(html, cls) {
    dataStatus.textContent = '';
    var s = el('span', cls || null, html);
    dataStatus.appendChild(s);
  }

  function fetchJSON(url, ms) {
    var ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = ctl ? setTimeout(function () { ctl.abort(); }, ms || 20000) : null;
    return fetch(url, { signal: ctl ? ctl.signal : undefined, headers: { accept: 'application/json' } })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(function (j) { if (timer) clearTimeout(timer); return j; },
        function (e) { if (timer) clearTimeout(timer); throw e; });
  }

  /* 能不能取实时数据，取决于页面是怎么打开的：
       file://          → 浏览器一律不放行跨域，直接用快照，连试都不试（免得控制台一片红）
       localhost 的 http → 先走本地服务的同源代理，再退回直连
       其它 http(s)      → 没有代理可用，两个数据源都不发 CORS 头，直连也只会刷一屏红，直接跳过 */
  function isLocalHost() {
    var h = location.hostname;
    return h === 'localhost' || h === '127.0.0.1' || h === '[::1]' || h === '::1';
  }

  function candidates(src) {
    var proto = location.protocol;
    if (proto === 'file:') return [];
    if (proto === 'http:' || proto === 'https:') {
      return isLocalHost() ? [src.proxy, src.url] : [];
    }
    return [src.url];
  }

  // 三个来源各自挑第一个能用的地址
  function pick(keys) {
    var out = [];
    for (var i = 0; i < keys.length; i++) {
      var list = candidates(state.data.sources[keys[i]]);
      out.push(list.length ? list : [null]);
    }
    // 展开成候选组合，逐个组合试过去
    var combos = [[]];
    out.forEach(function (opts) {
      var next = [];
      combos.forEach(function (c) { opts.forEach(function (o) { next.push(c.concat([o])); }); });
      combos = next;
    });
    return combos;
  }

  function tryCombo(combo) {
    if (combo.indexOf(null) >= 0) return Promise.reject(new Error('本地文件打开，跳过网络请求'));
    return Promise.all(combo.map(function (u) { return fetchJSON(u); }));
  }

  function refresh(silent) {
    if (WALLPAPER) {
      setStatus('快照数据 · ' + when(state.data.snapshotAt) + '（壁纸版用工程内置数据，不联网）');
      dataStatus.title = '壁纸版读的是工程里打包好的数据快照；要更新，在工程目录里跑 node tools/build-data.cjs。';
      return Promise.resolve(false);
    }

    var combos = pick(['models', 'index', 'openrouter']).filter(function (c) {
      return c.indexOf(null) < 0;
    });

    if (!combos.length) {
      var local = location.protocol === 'file:' || isLocalHost();
      setStatus('快照数据 · ' + when(state.data.snapshotAt) +
        (local ? '（本地打开，用 node tools/serve.cjs 可取实时数据）'
               : '（本页没有数据代理，实时数据需本地跑 node tools/serve.cjs）'), 'warn');
      dataStatus.title = local
        ? '浏览器不让 file:// 页面跨域取数，这里是打包好的快照。' +
          '想拿实时数据：在工程目录里跑 node tools/serve.cjs，再打开 http://localhost:8787/；' +
          '或者跑 node tools/build-data.cjs 重新生成快照。'
        : '两个数据源都不发 CORS 头，只有挂在本地服务（node tools/serve.cjs）下才取得到实时数据。' +
          '本页显示的是打包好的快照；要更新，在工程目录里跑 node tools/build-data.cjs。';
      return Promise.resolve(false);
    }

    if (!silent) setStatus('正在拉取实时数据…');
    else setStatus('正在拉取实时数据…（眼下显示的是本地快照）');
    var lastErr = null;

    function step(i) {
      if (i >= combos.length) return Promise.reject(lastErr || new Error('没有可用的数据地址'));
      return tryCombo(combos[i]).catch(function (e) { lastErr = e; return step(i + 1); });
    }

    return step(0).then(function (res) {
      var models = Array.isArray(res[0]) ? res[0] : (res[0].models || res[0].data || []);
      var or = Array.isArray(res[2]) ? res[2] : (res[2].data || []);
      if (!models.length || !res[1] || !res[1].general) throw new Error('返回内容不完整');
      state.data = MD.buildDataset(models, res[1], or);
      state.live = true;
      setStatus('实时数据 · ' + when(state.data.snapshotAt), 'ok');
      dataStatus.title = '刚刚从 ZeroEval / LLM Stats 与 OpenRouter 拉到的最新数据';
      buildHotspots();
      if (state.charId) { render(); markActive(); }
      renderAbout();
      return true;
    }).catch(function (e) {
      state.live = false;
      setStatus('快照数据 · ' + when(state.data.snapshotAt) + ' · 实时更新失败，点这里重试', 'warn');
      dataStatus.title = '没能取到实时数据：' + e.message +
        '。用 node tools/serve.cjs 起本地服务打开本页即可；也可以用 node tools/build-data.cjs 重新生成快照。';
      return false;
    });
  }

  /* ---------- 7. 图鉴与来源 ---------- */

  function renderAbout() {
    aboutList.textContent = '';
    state.data.characters.forEach(function (c, i) {
      var li = el('li');
      var b = el('button');
      b.type = 'button';
      b.appendChild(el('span', 'num', (i + 1) < 10 ? '0' + (i + 1) : String(i + 1)));
      b.appendChild(el('span', 'who', c.name));
      b.appendChild(el('span', 'where', c.org + ' · ' + c.versionCount + ' 版'));
      b.addEventListener('click', function () {
        about.close();
        var spot = hotspots.querySelector('.spot[data-char="' + c.id + '"]');
        open(c.id, spot);
      });
      li.appendChild(b);
      aboutList.appendChild(li);
    });

    aboutSources.textContent = '';
    var S = state.data.sources;
    [S.models, S.index, S.openrouter].forEach(function (s) {
      var li = el('li');
      var a = el('a', null, s.name);
      a.href = s.url; a.target = '_blank'; a.rel = 'noreferrer';
      li.appendChild(a);
      li.appendChild(document.createTextNode(' —— ' + s.note));
      aboutSources.appendChild(li);
    });

    aboutState.textContent =
      '当前使用的数据：' + (state.live ? '实时拉取' : '本地快照') +
      '（' + when(state.data.snapshotAt) + '）。综合能力取自 ' + state.data.generalTotal + ' 个模型共用的 general 指数。';
  }

  /* ---------- 8. 主题 ---------- */

  var THEME_KEY = 'last-token-theme';

  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    var ic = document.querySelector('[data-theme-icon]');
    if (ic) ic.textContent = dark ? '☾' : '☀';
    try { localStorage.setItem(THEME_KEY, dark ? 'dark' : 'light'); } catch (e) { /* 无痕模式 */ }
  }

  /* ---------- 9. 事件 ---------- */

  document.getElementById('p-close').addEventListener('click', close);
  scrim.addEventListener('click', close);

  document.getElementById('btn-theme').addEventListener('click', function () {
    applyTheme(!document.documentElement.classList.contains('dark'));
  });

  document.getElementById('btn-about').addEventListener('click', function () {
    if (typeof about.showModal === 'function') about.showModal();
    else about.setAttribute('open', '');
  });
  document.getElementById('about-close').addEventListener('click', function () { about.close(); });
  about.addEventListener('click', function (e) { if (e.target === about) about.close(); });

  dataStatus.addEventListener('click', function () { refresh(false); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (about.open) return;
      if (state.charId) { close(); }
      return;
    }
    if (!state.charId) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var ids = state.data.characters.map(function (c) { return c.id; });
      var i = ids.indexOf(state.charId) + (e.key === 'ArrowRight' ? 1 : -1);
      if (i < 0 || i >= ids.length) return;
      e.preventDefault();
      var spot = hotspots.querySelector('.spot[data-char="' + ids[i] + '"]');
      open(ids[i], spot);
    }
  });

  hotspots.addEventListener('mousemove', function () {
    if (state.charId) return;
    hideHint();
  }, { passive: true });

  if (WALLPAPER) {
    ['mousemove', 'mousedown', 'wheel', 'keydown', 'touchstart'].forEach(function (t) {
      window.addEventListener(t, poke, { passive: true });
    });
    poke();
  }

  /* ---------- 10. 启动 ---------- */

  try {
    var saved = localStorage.getItem(THEME_KEY);
    applyTheme(saved ? saved === 'dark' : true);
  } catch (e) { applyTheme(true); }

  buildHotspots();
  renderAbout();
  setStatus('快照数据 · ' + when(state.data.snapshotAt));

  // 页面稳定后再悄悄试一次实时数据；被跨域拦住就继续用快照
  if (!WALLPAPER) window.setTimeout(function () { refresh(true); }, 1200);

  // 供无头浏览器验收
  window.LastToken = {
    state: state,
    open: open,
    close: close,
    refresh: refresh,
    render: render,
    poke: poke
  };
}());
