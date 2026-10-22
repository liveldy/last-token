/* ==========================================================================
   模型术语图鉴 · 交互层
   --------------------------------------------------------------------------
   左：术语正文（按分组排的卡片流）
   右：目录（分组 + 术语索引，可搜索）
   两边是同一批条目：点目录滚到那条并点亮，滚动正文时目录里自动跟着亮。

   内容全部打包在 data/terms-*.js 里，file:// 直接打开就能用，页面不联网。
   ========================================================================== */

(function () {
  'use strict';

  var GROUPS = window.GLOSSARY_GROUPS || [];
  var TERMS = window.GLOSSARY_TERMS || [];
  var THEME_KEY = 'model-glossary.theme';

  var byId = {};
  TERMS.forEach(function (t) { byId[t.id] = t; });

  var state = { group: null, query: '', selected: null, hidden: false };

  /* ---------- 小工具 ---------- */

  function $(id) { return document.getElementById(id); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  /* 只认一种行内记号：**加粗** */
  function rich(text) {
    var frag = document.createDocumentFragment();
    var parts = String(text).split('**');
    for (var i = 0; i < parts.length; i++) {
      if (!parts[i]) continue;
      if (i % 2) frag.appendChild(el('strong', null, parts[i]));
      else frag.appendChild(document.createTextNode(parts[i]));
    }
    return frag;
  }

  function groupOf(id) {
    for (var i = 0; i < GROUPS.length; i++) if (GROUPS[i].id === id) return GROUPS[i];
    return { id: id, title: id, note: '' };
  }

  function termsIn(gid) {
    return TERMS.filter(function (t) { return t.group === gid; });
  }

  function matches(t, q) {
    if (!q) return true;
    var hay = [t.term, t.en, t.lead].concat(
      (t.body || []).map(function (b) {
        if (typeof b === 'string') return b;
        if (b.bullets) return b.bullets.join(' ');
        if (b.rows) return b.head.join(' ') + ' ' + b.rows.map(function (r) { return r.join(' '); }).join(' ');
        return '';
      })
    ).join(' ').toLowerCase();
    return hay.indexOf(q) >= 0;
  }

  function visible() {
    var q = state.query.trim().toLowerCase();
    return TERMS.filter(function (t) {
      if (state.group && t.group !== state.group) return false;
      return matches(t, q);
    });
  }

  /* ---------- 1. 正文卡片 ---------- */

  var termsEl = $('terms');
  var navEl = $('toc');
  var cards = {};
  var navItems = {};

  function termCard(t) {
    var art = el('article', 'term');
    art.id = 'term-' + t.id;
    art.dataset.id = t.id;

    var head = el('div', 'term-head');
    var h = el('h3');
    h.appendChild(document.createTextNode(t.term));
    if (t.en) h.appendChild(el('span', 'en', t.en));
    head.appendChild(h);
    head.appendChild(el('span', 'tag', groupOf(t.group).title));
    art.appendChild(head);

    art.appendChild(el('p', 'lead', t.lead));

    var body = el('div', 'body');
    (t.body || []).forEach(function (b) {
      if (typeof b === 'string') {
        var p = el('p');
        p.appendChild(rich(b));
        body.appendChild(p);
        return;
      }
      if (b.bullets) {
        var ul = el('ul', 'bul');
        b.bullets.forEach(function (x) {
          var li = el('li');
          li.appendChild(rich(x));
          ul.appendChild(li);
        });
        body.appendChild(ul);
        return;
      }
      if (b.rows) {
        var tbl = el('table', 'price grid');
        var thead = el('thead');
        var hr = el('tr');
        (b.head || []).forEach(function (x, i) { hr.appendChild(el('th', i ? 'mono' : null, x)); });
        thead.appendChild(hr);
        tbl.appendChild(thead);
        var tb = el('tbody');
        b.rows.forEach(function (r) {
          var tr = el('tr');
          r.forEach(function (x, i) { tr.appendChild(el('td', i ? 'mono' : null, x)); });
          tb.appendChild(tr);
        });
        tbl.appendChild(tb);
        body.appendChild(tbl);
      }
    });
    if (body.childNodes.length) art.appendChild(body);

    if (t.pitfall) {
      var pit = el('p', 'pitfall');
      pit.appendChild(el('b', null, '常见的坑　'));
      pit.appendChild(rich(t.pitfall));
      art.appendChild(pit);
    }

    var rel = (t.related || []).filter(function (id) { return byId[id]; });
    if (rel.length) {
      var box = el('div', 'rel');
      box.appendChild(el('span', null, '相关'));
      rel.forEach(function (id) {
        var b = el('button', null, byId[id].term);
        b.type = 'button';
        b.addEventListener('click', function () { jumpTo(id); });
        box.appendChild(b);
      });
      art.appendChild(box);
    }
    return art;
  }

  function renderTerms() {
    termsEl.textContent = '';
    cards = {};
    var list = visible();
    if (!list.length) {
      termsEl.appendChild(el('p', 'empty', '没有匹配的术语。换个词试试，或者点右上角的目录清掉筛选。'));
      return;
    }
    var frag = document.createDocumentFragment();
    var lastGroup = null;
    list.forEach(function (t) {
      if (!state.group && t.group !== lastGroup) {
        lastGroup = t.group;
        var g = groupOf(t.group);
        var bar = el('div', 'group-bar');
        bar.appendChild(el('h2', null, g.title));
        bar.appendChild(el('span', null, g.note));
        frag.appendChild(bar);
      }
      var c = termCard(t);
      frag.appendChild(c);
      cards[t.id] = c;
    });
    termsEl.appendChild(frag);
  }

  /* ---------- 2. 目录 ---------- */

  function renderNav() {
    navEl.textContent = '';
    navItems = {};
    var list = visible();
    var show = {};
    list.forEach(function (t) { show[t.id] = true; });
    var n = 0;

    GROUPS.forEach(function (g) {
      var items = termsIn(g.id).filter(function (t) { return show[t.id]; });
      if (!items.length) return;
      n += items.length;

      var li = el('li', 'toc-group');
      var head = el('div', 'toc-head');
      head.appendChild(el('span', null, g.title));
      head.appendChild(el('b', null, String(items.length)));
      li.appendChild(head);

      var sub = el('ol', 'toc-sub');
      items.forEach(function (t) {
        var item = el('li');
        var b = el('button', 'toc-item');
        b.type = 'button';
        b.dataset.id = t.id;
        b.appendChild(el('span', 'zh', t.term));
        if (t.en) b.appendChild(el('span', 'en', t.en));
        b.addEventListener('click', function () { jumpTo(t.id); });
        item.appendChild(b);
        navItems[t.id] = b;
        sub.appendChild(item);
      });
      li.appendChild(sub);
      navEl.appendChild(li);
    });

    $('nav-count').textContent = n === TERMS.length
      ? TERMS.length + ' 条'
      : n + ' / ' + TERMS.length + ' 条';
  }

  /* ---------- 3. 分组筛选 ---------- */

  function renderChips() {
    var box = $('group-chips');
    box.textContent = '';
    box.appendChild(el('span', 'head-note', '分组'));
    GROUPS.forEach(function (g) {
      var b = el('button');
      b.type = 'button';
      b.setAttribute('aria-pressed', state.group === g.id ? 'true' : 'false');
      b.appendChild(el('i'));
      b.appendChild(el('span', null, g.title));
      b.appendChild(el('b', null, String(termsIn(g.id).length)));
      b.addEventListener('click', function () { selectGroup(g.id); });
      box.appendChild(b);
    });
  }

  function currentNote() {
    if (state.query.trim()) {
      return '搜索「' + state.query.trim() + '」——命中 ' + visible().length + ' 条。';
    }
    if (state.group) {
      var g = groupOf(state.group);
      return g.title + '：' + g.note;
    }
    return GROUPS.length + ' 个分组、' + TERMS.length + ' 条术语，从上往下就是它们之间的关系：先有词元，才有窗口和账单；先有模型，才谈得上能力和边界。';
  }

  function selectGroup(gid) {
    state.group = (state.group === gid) ? null : gid;
    renderChips();
    renderTerms();
    renderNav();
    updateDocHead();
    termsEl.scrollTop = 0;
    if (!state.group) return;
    var g = groupOf(state.group);
    $('doc-sub').textContent = currentNote();
    var first = termsIn(g.id)[0];
    if (first) setSelected(null, {});
  }

  function updateDocHead() {
    $('doc-sub').textContent = currentNote();
    $('doc-count').textContent = visible().length + ' / ' + TERMS.length + ' 条';
  }

  /* ---------- 4. 选中与跳转 ---------- */

  var flashTimer = null;

  function setSelected(id, opt) {
    opt = opt || {};
    if (state.selected && navItems[state.selected]) navItems[state.selected].classList.remove('is-sel');
    if (cards[state.selected]) cards[state.selected].classList.remove('is-sel');
    state.selected = id;
    if (id && navItems[id]) {
      var b = navItems[id];
      b.classList.add('is-sel');
      b.scrollIntoView({ block: 'nearest', behavior: opt.instant ? 'auto' : 'smooth' });
    }
    if (id && cards[id]) cards[id].classList.add('is-sel');
  }

  function jumpTo(id, opt) {
    opt = opt || {};
    if (!byId[id]) return;
    hideHint();
    // 目标可能被搜索或分组挡住了，先把它放出来
    if (!cards[id]) {
      state.group = null;
      state.query = '';
      var s = $('search');
      if (s) s.value = '';
      renderChips();
      renderTerms();
      renderNav();
      updateDocHead();
    }
    var c = cards[id];
    if (!c) return;
    setSelected(id, { instant: opt.instant });
    c.scrollIntoView({ block: 'start', behavior: opt.instant ? 'auto' : 'smooth' });
    if (!opt.instant) {
      c.classList.remove('is-flash');
      void c.offsetWidth;
      c.classList.add('is-flash');
      clearTimeout(flashTimer);
      flashTimer = setTimeout(function () { c.classList.remove('is-flash'); }, 1600);
    }
    try { history.replaceState(null, '', '#term-' + id); } catch (e) { /* file:// 下忽略 */ }
  }

  /* 滚动正文时，目录里跟着亮 */
  var spyTimer = null;
  termsEl.addEventListener('scroll', function () {
    if (spyTimer) return;
    spyTimer = setTimeout(function () {
      spyTimer = null;
      var top = termsEl.getBoundingClientRect().top + 12;
      var best = null;
      Object.keys(cards).forEach(function (id) {
        var r = cards[id].getBoundingClientRect();
        if (r.top <= top && r.bottom > top) best = id;
      });
      if (!best) return;
      var firstVisible = Object.keys(cards).filter(function (id) { return cards[id].getBoundingClientRect().bottom > top; })[0];
      if (firstVisible && !best) best = firstVisible;
      if (best && best !== state.selected) setSelected(best, { instant: true });
    }, 120);
  }, { passive: true });

  /* ---------- 5. 输入 ---------- */

  var searchEl = $('search');
  searchEl.addEventListener('input', function () {
    state.query = searchEl.value;
    renderTerms();
    renderNav();
    updateDocHead();
    hideHint();
  });

  function hideHint() {
    var h = $('hint');
    if (h && !h.classList.contains('is-gone')) h.classList.add('is-gone');
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (about.open) return;
    if (searchEl.value) {
      searchEl.value = '';
      state.query = '';
      renderTerms(); renderNav(); updateDocHead();
      return;
    }
    if (state.group) selectGroup(state.group);
  });

  /* ---------- 6. 关于 ---------- */

  var about = $('about');
  $('btn-about').addEventListener('click', function () {
    if (typeof about.showModal === 'function') about.showModal();
    else about.setAttribute('open', '');
  });
  $('about-close').addEventListener('click', function () { about.close(); });
  about.addEventListener('click', function (e) { if (e.target === about) about.close(); });

  /* 三个页面在仓库里是平级目录（双击打开、本地起服务都是这样），
     在站点上则是「宴会厅在根 + 另两个是它的子目录」。按这一点选相对地址。 */
  var LOCAL = location.protocol === 'file:' ||
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  function pageHref(name) {
    // 三个目录在本页上一级：仓库里是三个平级目录，站点上则是 `/last-token/` 这一层
    if (name === 'dinner') return LOCAL ? '../last-token/' : '../';
    return '../' + name + '/';
  }

  function renderAboutPages() {
    var box = $('about-pages');
    if (!box) return;
    box.textContent = '';
    [
      { name: '模型能力图鉴', href: pageHref('model-atlas'), note: '把能力与参考成本画成一张散点图，配全部模型的排行榜' },
      { name: '最后的 Token', href: pageHref('dinner'), note: '一张 AI 模型拟人化的「最后的晚餐」，点角色看它的能力与成本' }
    ].forEach(function (p) {
      var li = el('li');
      var a = el('a', null, p.name);
      a.href = p.href;
      li.appendChild(a);
      li.appendChild(document.createTextNode(' —— ' + p.note));
      box.appendChild(li);
    });
  }

  /* ---------- 7. 主题 ---------- */

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

  /* ---------- 8. 启动 ---------- */

  if (!TERMS.length) {
    document.body.innerHTML = '<p style="padding:40px;font:14px system-ui">' +
      '没找到术语数据 data/terms-*.js。</p>';
    return;
  }

  renderChips();
  renderTerms();
  renderNav();
  renderAboutPages();
  updateDocHead();
  window.setTimeout(hideHint, 9000);

  var hash = String(location.hash || '');
  var m = /^#term-(.+)$/.exec(hash);
  if (m && byId[m[1]]) window.setTimeout(function () { jumpTo(m[1], { instant: true }); }, 60);
  else {
    var g = /^#group-(.+)$/.exec(hash);
    if (g && groupOf(g[1]).title) selectGroup(g[1]);
  }

  /* 供无头浏览器验收 */
  window.TermAtlas = {
    state: state,
    groups: GROUPS,
    terms: TERMS,
    visible: visible,
    jump: jumpTo,
    filterGroup: selectGroup,
    setQuery: function (q) {
      searchEl.value = q;
      state.query = q;
      renderTerms(); renderNav(); updateDocHead();
    },
    links: { pageHref: pageHref, local: LOCAL }
  };
}());
