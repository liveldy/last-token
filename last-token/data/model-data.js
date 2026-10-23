/* ==========================================================================
   最后的 Token · 角色定义与数据集构建
   --------------------------------------------------------------------------
   这个文件同时被两边加载：
     · 浏览器   —— <script src="data/model-data.js">，挂到 window.ModelData
     · Node     —— tools/build-data.cjs require 它来生成快照
   因此用最朴素的写法：没有 import / export。
   ========================================================================== */

(function (root) {
  'use strict';

  /* ---------- 1. 角色 ----------
     x / y 是头部中心在原图（2880x1440）上的百分比，由带标尺的放大截图逐个标定；
     band 是该角色在水平方向上的“列”范围（相邻角色之间的中线）——
     band 加 top 一起圈出点击热区：band 管左右，top 管上沿。
     top 是角色头顶（帽子、猫耳、光环这些伸出来的部分也算）在高度上的百分比，
     逐位量自底图；下沿则是所有人共用的 TABLE_LINE——角色被桌子挡住的那条线。
     形象描述取自 genderswapai.com 图鉴的立绘说明。 */

  /* 桌面远端那条线：站在桌后的角色从它往下就被桌布挡住，
     因此热区一律收在这里，高度才等于角色露出来的高度。 */
  var TABLE_LINE = 59.5;

  var CHARACTERS = [
    {
      id: 'deepseek', name: 'DeepSeek', org: '深度求索', orgId: 'deepseek',
      look: '蓝发 · 鲸尾鳍耳与黑白女仆装', x: 10, y: 41, band: [0, 13], top: 31.4
    },
    {
      id: 'qwen', name: 'Qwen', org: '阿里通义千问', orgId: 'qwen',
      look: '紫发与中国风 · 圆形发饰、手持折扇与香囊', x: 16, y: 40, band: [13, 18.8], top: 33.6
    },
    {
      id: 'llama', name: 'Llama', org: 'Meta', orgId: 'meta',
      look: '白色猫耳与宽松外套 · 蓝色“∞”发夹、毛球抽绳', x: 21.5, y: 41, band: [18.8, 25.3], top: 34.8
    },
    {
      id: 'seed', name: 'Seed', org: '字节跳动 · 豆包', orgId: 'bytedance',
      look: '紫蓝渐变长发与青色圆环 · 工牌挂绳与记录板', x: 29, y: 44, band: [25.3, 32.3], top: 39.8
    },
    {
      id: 'grok', name: 'Grok', org: 'xAI', orgId: 'xai',
      look: '金发与黑色礼服 · 蝠翼、新月与行星环王冠', x: 35.5, y: 43, band: [32.3, 38], top: 36.5
    },
    {
      id: 'kimi', name: 'Kimi', org: '月之暗面', orgId: 'moonshotai',
      look: '银紫长发与非对称女仆装 · “K”徽章、彩虹缎带', x: 40.5, y: 43, band: [38, 44.5], top: 38.5
    },
    {
      id: 'gpt', name: 'GPT', org: 'OpenAI', orgId: 'openai',
      look: '白发精灵与龙角 · 白衣主位（这幅画的中心）', x: 48.5, y: 41, band: [44.5, 54.8], top: 30.9
    },
    {
      id: 'perplexity', name: 'Perplexity', org: 'Perplexity', orgId: 'perplexity',
      look: '青绿长发与“P”耳机 · 绿衣法师、星形法杖', x: 60.5, y: 42, band: [54.8, 62.8], top: 35
    },
    {
      id: 'gemini', name: 'Gemini', org: 'Google', orgId: 'google',
      look: '紫发猫耳与异色瞳 · 蓝色四角星发饰', x: 65, y: 44, band: [62.8, 68], top: 36.4
    },
    {
      id: 'claude', name: 'Claude', org: 'Anthropic', orgId: 'anthropic',
      look: '橘发与花朵发饰 · 橘色雏菊、白橘长裙', x: 71.5, y: 42, band: [68, 77], top: 35.5
    },
    {
      id: 'mistral', name: 'Mistral', org: 'Mistral AI', orgId: 'mistral',
      look: '戴红帽的金发法师 · 红色宽檐帽与“M”徽章', x: 82.5, y: 41, band: [77, 85.5], top: 32.1
    },
    {
      id: 'glm', name: 'GLM', org: '智谱 Z.ai', orgId: 'zai-org',
      look: '黑发猫耳与黑白哥特装 · 多个“Z”徽章', x: 88.5, y: 42, band: [85.5, 91.8], top: 35.3
    },
    {
      id: 'wenxin', name: '文心一言', org: '百度', orgId: 'baidu',
      look: '深蓝长发与中式衣裙 · 蓝色立方体发夹、轮椅', x: 95, y: 43, band: [91.8, 100], top: 38.3
    }
  ];

  /* ---------- 2. 数据源 ---------- */

  /* proxy 是 tools/serve.cjs 提供的同源转发路径：这两个公开接口都不发 CORS 头，
     浏览器从网页里直接 fetch 会被拦下，所以走本地服务时改从 /api/ 取。 */
  var SOURCES = {
    models: {
      name: 'ZeroEval / LLM Stats · 模型元数据',
      url: 'https://api.zeroeval.com/leaderboard/models/full',
      proxy: '/api/zeroeval/leaderboard/models/full',
      note: '版本、发布日期、上下文、参数量、开源协议与各基准分'
    },
    index: {
      name: 'ZeroEval / LLM Stats · general 指数',
      url: 'https://api.zeroeval.com/leaderboard/indexes/all',
      proxy: '/api/zeroeval/leaderboard/indexes/all',
      note: '综合能力：TrueSkill 保守估计（mu − 3σ），同一标尺下的全局排名'
    },
    openrouter: {
      name: 'OpenRouter · 模型价格',
      url: 'https://openrouter.ai/api/v1/models',
      proxy: '/api/openrouter/v1/models',
      note: 'Perplexity 等 ZeroEval 未收录厂商的价格与上下文'
    }
  };

  /* ---------- 3. 基准分字段 ---------- */

  var BENCHMARKS = [
    { key: 'gpqa_score', name: 'GPQA Diamond', zh: '研究生级科学问答' },
    { key: 'hle_score', name: 'Humanity\'s Last Exam', zh: '跨学科专家难题' },
    { key: 'aime_2025_score', name: 'AIME 2025', zh: '竞赛数学' },
    { key: 'frontiermath_score', name: 'FrontierMath', zh: '前沿数学研究题' },
    { key: 'swe_bench_verified_score', name: 'SWE-bench Verified', zh: '真实仓库修 bug' },
    { key: 'swe_bench_pro_score', name: 'SWE-bench Pro', zh: '更难的软件工程任务' },
    { key: 'scicode_score', name: 'SciCode', zh: '科学计算代码' },
    { key: 'terminal_bench_score', name: 'Terminal-Bench', zh: '终端实操' },
    { key: 'arc_agi_v2_score', name: 'ARC-AGI v2', zh: '抽象推理' },
    { key: 'mcp_atlas_score', name: 'MCP Atlas', zh: '工具调用' },
    { key: 'toolathlon_score', name: 'Toolathlon', zh: '多工具长流程' },
    { key: 'tau_bench_retail_score', name: 'τ-bench Retail', zh: '客服代理对话' },
    { key: 'apex_agents_score', name: 'APEX Agents', zh: '代理任务' },
    { key: 'browsecomp_score', name: 'BrowseComp', zh: '联网检索' },
    { key: 'simpleqa_score', name: 'SimpleQA', zh: '事实性短问答' },
    { key: 'osworld_score', name: 'OSWorld', zh: '桌面操作' },
    { key: 'mmmu_score', name: 'MMMU', zh: '多模态理解' },
    { key: 'mmmu_pro_score', name: 'MMMU-Pro', zh: '多模态理解（难）' },
    { key: 'mmmlu_score', name: 'MMMLU', zh: '多语言知识' },
    { key: 'charxiv_r_score', name: 'CharXiv-R', zh: '图表推理' },
    { key: 'screenspot_pro_score', name: 'ScreenSpot-Pro', zh: '界面定位' },
    { key: 'mrcr_v2_score', name: 'MRCR v2', zh: '长上下文检索' }
  ];

  /* ---------- 4. 参考成本的示例工作量 ----------
     中文按经验值 1 token ≈ 1.5 个汉字换算。 */

  var WORKLOADS = [
    { id: 'chat', label: '一次长对话', tokensIn: 20000, tokensOut: 4000, note: '读约 3 万汉字，写约 6 千字' },
    { id: 'doc', label: '一份长报告', tokensIn: 200000, tokensOut: 20000, note: '读约 30 万汉字，写约 3 万字' },
    { id: 'bulk', label: '批量跑 100 万 tokens 输入', tokensIn: 1000000, tokensOut: 200000, note: '大规模离线推理' }
  ];

  /* ---------- 5. 构建数据集 ---------- */

  function num(v) {
    return (typeof v === 'number' && isFinite(v)) ? v : null;
  }

  function round(v, d) {
    var f = Math.pow(10, d == null ? 2 : d);
    return Math.round(v * f) / f;
  }

  function benchList(model) {
    var out = [];
    for (var i = 0; i < BENCHMARKS.length; i++) {
      var b = BENCHMARKS[i];
      var s = num(model[b.key]);
      if (s === null) continue;
      out.push({ key: b.key, name: b.name, zh: b.zh, score: s, pct: round(s * 100, 1) });
    }
    return out;
  }

  /**
   * 把三个接口的原始返回整理成本站使用的结构。
   * @param {Array}  modelsFull  /leaderboard/models/full 的数组
   * @param {Object} indexesAll  /leaderboard/indexes/all 的对象（键为分类）
   * @param {Array}  openRouter  /api/v1/models 的 data 数组（可缺省）
   */
  function buildDataset(modelsFull, indexesAll, openRouter) {
    var general = (indexesAll && indexesAll.general && indexesAll.general.models) || [];
    var chatIdx = (indexesAll && indexesAll.chat && indexesAll.chat.models) || [];

    // 综合能力：按 conservative 从高到低排序后取名次
    var ranked = general.slice().sort(function (a, b) { return b.conservative - a.conservative; });
    var byId = {}, rankOf = {};
    ranked.forEach(function (m, i) {
      if (!(m.model_id in byId)) { byId[m.model_id] = m; rankOf[m.model_id] = i + 1; }
    });
    var chatById = {};
    (chatIdx.slice().sort(function (a, b) { return b.conservative - a.conservative; }))
      .forEach(function (m, i) { if (!(m.model_id in chatById)) { chatById[m.model_id] = m; chatById[m.model_id]._rank = i + 1; } });

    var generalTotal = ranked.length;
    var top = ranked[0] || null;

    function abilityOf(id) {
      var g = byId[id];
      if (g) {
        return {
          index: 'general', score: round(g.conservative, 2), mu: round(g.mu, 2), sigma: round(g.sigma, 2),
          rank: rankOf[id], of: generalTotal, games: g.games_played
        };
      }
      var c = chatById[id];
      if (c) {
        return {
          index: 'chat', score: round(c.conservative, 2), mu: round(c.mu, 2), sigma: round(c.sigma, 2),
          rank: c._rank, of: chatIdx.length, games: c.games_played
        };
      }
      return null;
    }

    function versionFromModel(m) {
      return {
        id: m.model_id,
        name: m.name,
        released: m.release_date || null,
        announced: m.announcement_date || null,
        context: num(m.context),
        params: num(m.params),
        license: m.license || null,
        cutoff: m.knowledge_cutoff || null,
        isMoe: !!m.is_moe,
        multimodal: !!m.multimodal,
        priceIn: num(m.input_price),
        priceOut: num(m.output_price),
        ability: abilityOf(m.model_id),
        benchmarks: benchList(m)
      };
    }

    function versionFromOpenRouter(m) {
      var P = m.pricing || {};
      var inPerTok = parseFloat(P.prompt), outPerTok = parseFloat(P.completion);
      return {
        id: m.id,
        name: (m.name || m.id).replace(/^[^:]+:\s*/, ''),
        released: m.created ? new Date(m.created * 1000).toISOString().slice(0, 10) : null,
        announced: null,
        context: num(m.context_length),
        params: null,
        license: null,
        cutoff: m.knowledge_cutoff || null,
        isMoe: false,
        multimodal: !!(m.architecture && (m.architecture.input_modalities || []).length > 1),
        priceIn: isFinite(inPerTok) ? round(inPerTok * 1e6, 4) : null,
        priceOut: isFinite(outPerTok) ? round(outPerTok * 1e6, 4) : null,
        ability: null,
        benchmarks: [],
        extra: P.web_search ? { webSearch: round(parseFloat(P.web_search) * 1000, 3), unit: '美元/千次检索' } : null
      };
    }

    var characters = CHARACTERS.map(function (c) {
      var list;
      if (c.orgId === 'perplexity') {
        list = (openRouter || [])
          .filter(function (m) { return m.id.indexOf('perplexity/') === 0; })
          .map(versionFromOpenRouter)
          .sort(function (a, b) { return (b.released || '').localeCompare(a.released || ''); });
      } else {
        list = modelsFull
          .filter(function (m) { return m.organization_id === c.orgId; })
          .map(versionFromModel);
        // 同名版本（接口里偶有重复）只留综合分更高的那条
        var seen = {};
        list = list.filter(function (v) {
          var prev = seen[v.name];
          if (!prev) { seen[v.name] = v; return true; }
          if ((v.ability ? v.ability.score : -1e9) > (prev.ability ? prev.ability.score : -1e9)) {
            list[list.indexOf(prev)] = v; seen[v.name] = v;
          }
          return false;
        });
        list.sort(function (a, b) {
          if (a.released && b.released) return b.released.localeCompare(a.released);
          if (a.released) return -1;
          if (b.released) return 1;
          return a.name.localeCompare(b.name);
        });
      }

      var withAbility = list.filter(function (v) { return v.ability; });
      var best = withAbility.length
        ? withAbility.reduce(function (a, b) { return b.ability.score > a.ability.score ? b : a; })
        : (list[0] || null);

      return {
        id: c.id, name: c.name, org: c.org, orgId: c.orgId, look: c.look,
        x: c.x, y: c.y, band: c.band,
        abilityIndex: c.orgId === 'perplexity' ? null : 'general',
        versionCount: list.length,
        best: best ? { id: best.id, name: best.name, ability: best.ability, priceIn: best.priceIn, priceOut: best.priceOut } : null,
        versions: list
      };
    });

    return {
      snapshotAt: new Date().toISOString(),
      generalTotal: generalTotal,
      generalTop: top ? { name: top.model_name, score: round(top.conservative, 2) } : null,
      sources: SOURCES,
      benchmarks: BENCHMARKS,
      workloads: WORKLOADS,
      characters: characters
    };
  }

  /* ---------- 6. 对外 ---------- */

  var api = {
    CHARACTERS: CHARACTERS,
    TABLE_LINE: TABLE_LINE,
    BENCHMARKS: BENCHMARKS,
    WORKLOADS: WORKLOADS,
    SOURCES: SOURCES,
    buildDataset: buildDataset
  };

  root.ModelData = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;

}(typeof window !== 'undefined' ? window : globalThis));
