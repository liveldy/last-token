/* ==========================================================================
   模型术语图鉴 · 五、能力与评测
   ========================================================================== */

(function () {
  'use strict';
  var T = window.GLOSSARY_TERMS || (window.GLOSSARY_TERMS = []);

  T.push(
    {
      id: 'capability',
      term: '能力',
      en: 'capability',
      group: 'bench',
      lead: '「这个模型强不强」不是一个数，而是一组分数。换个任务，排序就能翻过来。',
      body: [
        '同一个模型可以在数学题上排第 3、在写作上排第 40。所谓「综合能力」是把一堆不相干的分数按下注权重揉成一个数——它有用，但它掩盖了它做过什么取舍。',
        { bullets: [
          '看榜单前先问：这个榜考的是什么任务？我的任务和它像吗？',
          '「分高」和「好用」之间隔着一个后训练：有的模型分数很高但话很少、格式死板、拒答很多。',
          '同一家的不同档位常常不是简单的强弱关系，而是「擅长的事不一样」。'
        ] }
      ],
      related: ['benchmark', 'leaderboard', 'trueskill', 'model-family']
    },
    {
      id: 'benchmark',
      term: '基准测试',
      en: 'benchmark',
      group: 'bench',
      lead: '一套固定题目加一套固定评分。它的价值在于可比较，它的风险也全在「固定」这两个字上。',
      body: [
        '主流基准大致分五类，正好对应五类任务：',
        { head: ['类别', '代表', '在考什么'], rows: [
          ['学科知识', 'GPQA Diamond、MMMLU、HLE', '研究生级问答、多语言知识、跨学科专家题'],
          ['数学', 'AIME、FrontierMath', '竞赛数学与前沿研究题'],
          ['软件工程', 'SWE-bench Verified / Pro、SciCode、Terminal-Bench', '真实仓库改 bug、科学计算、终端实操'],
          ['智能体', 'OSWorld、τ-bench、Toolathlon、MCP Atlas、APEX Agents', '桌面操作、客服对话、多工具长流程'],
          ['多模态与检索', 'MMMU、MMMU-Pro、CharXiv-R、BrowseComp、SimpleQA、MRCR v2', '图文理解、图表推理、联网检索、长文检索']
        ] },
        { bullets: [
          '同一类里，越新的基准通常越难，分数也越低——跨类比分没有意义。',
          '「一次通过率」和「多次尝试后的通过率」是两种口径，混着看会得出完全不同的结论。',
          '工具型基准（能不能用工具把事办成）和知识型基准（知不知道）之间，常常差着一个数量级的表现。'
        ] }
      ],
      related: ['capability', 'contamination', 'leaderboard', 'self-reported']
    },
    {
      id: 'gpqa',
      term: 'GPQA Diamond',
      en: 'GPQA Diamond',
      group: 'bench',
      lead: '研究生水平的科学问答，四选一。题目由相关领域的博士出，且要求「上网也查不到答案」。',
      body: [
        '它是目前最常被引用的「硬知识」指标之一：区分生物、物理、化学三个方向，Diamond 是其中最难的一档。',
        { bullets: [
          '选择题意味着有 25% 的猜中率，所以低分的意义大于高分。',
          '博士在无辅助条件下也只有约七成的正确率，一度被当作人类对照线；这条线已经被前沿模型越过。',
          '它考的是「知道」，不是「能做」——用 GPQA 高来推断模型能替你写论文，跨度太大。'
        ] }
      ],
      related: ['benchmark', 'hle', 'capability']
    },
    {
      id: 'hle',
      term: 'Humanity\u2019s Last Exam',
      en: 'HLE',
      group: 'bench',
      lead: '「人类最后一场考试」：上千道跨学科专家题，设计目标就是让它很难——所以分数普遍很低。',
      body: [
        { bullets: [
          '题目覆盖数学、物理、生物、人文等几十个学科，很多需要多步推导。',
          '低分不代表模型没用：在 HLE 上从 5% 提到 15%，往往是很大的进步，但用户几乎感知不到。',
          '它常被当作「离人类专家还有多远」的粗略标尺，而不是产品选型依据。'
        ] },
        '看到「HLE 得分翻了三倍」这类消息，先看清是从多少提到多少——绝对值低的时候，倍数很唬人。'
      ],
      related: ['gpqa', 'benchmark', 'capability']
    },
    {
      id: 'aime-frontiermath',
      term: 'AIME 与 FrontierMath',
      en: 'AIME / FrontierMath',
      group: 'bench',
      lead: '数学的两把尺子：AIME 是竞赛难度的老题，FrontierMath 是研究级的新题。',
      body: [
        { bullets: [
          'AIME：答案是一个整数，判分绝对客观，因此成了推理模型进步最干净的证据。但题目公开、样式固定，容易被针对训练。',
          'FrontierMath：由数学家出题、答案不公开，考的是真正的研究级推理，分数远低于 AIME。',
          '两者的巨大落差本身就是一个结论：模型在「有套路的难」上很强，在「没套路的难」上还很弱。'
        ] }
      ],
      related: ['benchmark', 'contamination', 'reasoning-model']
    },
    {
      id: 'swe-bench',
      term: 'SWE-bench Verified 与 Pro',
      en: 'SWE-bench',
      group: 'bench',
      lead: '在真实开源仓库里修真实 bug：给定一个 issue，模型要改代码，改完跑测试通过才算数。',
      body: [
        { bullets: [
          'Verified 是人工筛过一遍的 500 来道题，去掉了描述不清和没法验证的；Pro 更难、更接近真实工程。',
          '它衡量的是「能不能在一整个代码库里定位并修改」，因此比写函数题更接近编程助手的实际价值。',
          '结果对脚手架极度敏感：同一个模型，给不给文件检索、允不允许反复跑测试，分数能差十几个点。'
        ] },
        '看到 SWE-bench 分数，一定要问清楚是「单次提交」还是「允许重试若干次」，这两种口径不可比。'
      ],
      related: ['agentic-bench', 'benchmark', 'tool-calling']
    },
    {
      id: 'agentic-bench',
      term: '智能体基准',
      en: 'agentic benchmarks',
      group: 'bench',
      lead: '不只考「知不知道」，还考「能不能把事做完」：用工具、看屏幕、点按钮、连续几十步不出错。',
      body: [
        { head: ['基准', '在考什么'], rows: [
          ['Terminal-Bench', '在真实终端里完成运维任务'],
          ['OSWorld', '操作一个完整桌面环境里的软件'],
          ['τ-bench（Retail 等）', '多轮客服对话，按最终业务结果判对错'],
          ['Toolathlon / MCP Atlas', '几十个工具的长流程调用'],
          ['APEX Agents', '综合性的代理任务']
        ] },
        { bullets: [
          '这类基准最贴近「智能体产品」的真实表现，也最不稳定：同样一次评测，工具超时率就能让分数上下五个点。',
          '它们普遍评分按「任务完成率」而不是「单步正确率」——一步错往往整条链都废。',
          '成本是隐含指标：完成同一批任务各花了多少钱，往往比完成率更有指导意义。'
        ] }
      ],
      related: ['agent', 'swe-bench', 'tool-calling', 'benchmark']
    },
    {
      id: 'multimodal-bench',
      term: 'MMMU 与多模态基准',
      en: 'MMMU',
      group: 'bench',
      lead: '带图的考试：图表的理解、界面元素的定位、图文混排的推理。',
      body: [
        { bullets: [
          'MMMU 走的是「大学水平学科题 + 配图」的路子；MMMU-Pro 把题目变得更难、更贴近真实排版。',
          'CharXiv-R 专考学术论文里的图表推理，ScreenSpot-Pro 专考「屏幕上那个按钮在哪」——后者是电脑操作类智能体的前置能力。',
          '多模态分数和文本分数不是一回事：一个文本很强的模型，看图可能明显更弱。'
        ] }
      ],
      related: ['multimodal', 'vision', 'benchmark', 'agentic-bench']
    },
    {
      id: 'arc-agi',
      term: 'ARC-AGI',
      en: 'ARC-AGI',
      group: 'bench',
      lead: '给几个彩色网格的变换例子，让你推出规则并给出答案。它刻意避开「靠见过的知识」这条路。',
      body: [
        { bullets: [
          '它测的是「从极少的例子里归纳规则」的能力，而不是知识量，出题人明确称其为「流体智力」测试。',
          '人类一般很容易，模型在很长一段时间里几乎做不出来——这正是它的价值所在。',
          '第二代（v2）难度更高，是观察「新方法」的重要窗口。'
        ] }
      ],
      related: ['benchmark', 'capability', 'reasoning-model']
    },
    {
      id: 'browsecomp-simpleqa',
      term: 'BrowseComp 与 SimpleQA',
      en: 'BrowseComp / SimpleQA',
      group: 'bench',
      lead: '两个问「知不知道」的极端：一个要你上网翻很久才能查到，一个是一句话就该答上来的冷知识。',
      body: [
        { bullets: [
          'BrowseComp：答案藏在网页深处，考的是检索与追线索的耐心，而不是记忆。',
          'SimpleQA：短问答，主要用来量「事实性」和「幻觉率」——分低通常意味着爱编。',
          '两个一起看才有意思：检索强的模型在 SimpleQA 上未必好，因为后者不许查。'
        ] }
      ],
      related: ['hallucination', 'rag', 'benchmark', 'multimodal-bench']
    },
    {
      id: 'leaderboard',
      term: '排行榜与综合指数',
      en: 'leaderboard / index',
      group: 'bench',
      lead: '把几十个基准的分数加成一张表。它的用处是快速扫一眼，害处是让你忘记它做过哪些取舍。',
      body: [
        '聚合的做法通常有两种：等权平均（简单，但对简单基准不公平），以及统计模型（把每个基准当成一场多人比赛，算相对强弱）。本站的能力图鉴用的就是后者。',
        { bullets: [
          '同一个模型在不同榜上的名次能差几十名，因为权重的取法不同。',
          '名次是相对的：别人变强，你的名次会掉，分数却没变。',
          '榜单对「新出的高分基准」有滞后，对「被污染的旧基准」有惯性。'
        ] }
      ],
      related: ['trueskill', 'benchmark', 'capability', 'self-reported']
    },
    {
      id: 'trueskill',
      term: 'TrueSkill 与 μ − 3σ',
      en: 'TrueSkill',
      group: 'bench',
      lead: '一套从对局结果反推实力的统计模型：每个模型有两个数，μ 是估计的实力，σ 是不确定度。',
      body: [
        '把每个基准当成一局多人比赛：谁在这份卷子上比谁强，就产生一次胜负，用贝叶斯更新去调整所有人的 μ 与 σ。',
        { bullets: [
          'μ 高 = 估计强；σ 大 = 样本少、还说不准。',
          '报告常用的「保守估计」是 μ − 3σ：把不确定度当成扣分项。',
          '所以参加得少的模型会被压低——这不是惩罚，而是「没有证据就别吹」。',
          '好处是跨厂商、跨基准可比；代价是它对基准的选择和数量敏感。'
        ] },
        '看到分数旁边一个 ±，就该知道：**比较两个模型的分数时分差要大于两边的不确定度才有意义**。'
      ],
      related: ['leaderboard', 'capability', 'benchmark']
    },
    {
      id: 'contamination',
      term: '基准污染',
      en: 'benchmark contamination',
      group: 'bench',
      lead: '基准题目（或它的答案）出现在训练数据里了，模型等于提前看过卷子。分数因此虚高，而且无从觉察。',
      body: [
        { bullets: [
          '最常见的来源：数据集直接从网上抓，而基准题目本身就在网上。',
          '难发现的形态：题目被改写、被翻译、被当成训练语料的一部分，原始文本查不到了，但模式还在。',
          '处理手段：用新题（动态生成）、留不公开的私有集、把训练数据里的题目删掉。'
        ] },
        '对使用者来说，可靠的信号反而是「别人复现过没有」，以及「换一套题还能不能保持」。'
      ],
      pitfall: '看到某个模型在某基准上比全场高出一大截，先怀疑污染，再怀疑突破。',
      related: ['benchmark', 'self-reported', 'aime-frontiermath']
    },
    {
      id: 'self-reported',
      term: '自报分与第三方复现',
      en: 'self-reported vs independent',
      group: 'bench',
      lead: '分数是厂商自己跑的还是别人复现的。同一张表里，这两种数的可信度不一样。',
      body: [
        { bullets: [
          '自报分：厂商在发布博客里给出的数，评测条件（提示词、重试次数、是否给工具）由厂商决定。',
          '第三方复现：同一套脚手架、同一批题、同样的超时设置重跑一遍。',
          '最大的差异常常来自脚手架：允不允许使用工具、允许多少次尝试、超时给多少，能带来十几分的差距。'
        ] },
        '实用规则：拿同一个脚手架横着比一排模型，比拿一堆厂商博客里的数做横向对比可靠得多。'
      ],
      related: ['benchmark', 'contamination', 'eval-regression']
    },
    {
      id: 'arena',
      term: '盲测竞技场与 Elo',
      en: 'arena / Elo',
      group: 'bench',
      lead: '让真人同时看两个匿名模型的回答，投票选更好的那个，用胜负累积成排名。',
      body: [
        { bullets: [
          '优点：贴近「人觉得哪个好」，能捕捉到基准测不出的东西（语气、条理、啰嗦程度）。',
          '缺点：偏好长篇、爱用列表、语气讨好的回答；对纯技术正确性不敏感。',
          '作弊（刷票、针对性优化风格）一直是这类榜单要防的事。'
        ] },
        '当基准排名和竞技场排名打架时，通常说明「考得好」和「讨人喜欢」在这批模型上确实不是一回事。'
      ],
      related: ['leaderboard', 'capability', 'self-reported']
    }
  );
}());
