# 最后的 Token · The Last Token

一张 AI 模型拟人化的“最后的晚餐”，做成可以用鼠标点角色的网页：**点画面里的任意一位角色，
就看到她所代表的模型家族里每个版本的综合能力（ZeroEval general 指数）与参考成本（每百万 tokens 的美元价）。**

画面本身沿用上一版壁纸的氛围层——光柱、窗光、尘埃、暗角、胶片颗粒，以及画面裁掉时的全景往返滚动。

```
last-token/
├── index.html                 页面骨架（画面层 + 界面层）
├── styles.css                 画面氛围层样式 + 界面设计令牌与组件
├── ambience.js                画面运行时：呼吸、视差、全景滚动、尘埃、颗粒、音频、聚焦
├── app.js                     交互层：角色热区、档案面板、实时数据与快照切换
├── assets/bg.jpg              原图 2880×1440
├── data/
│   ├── model-data.js          13 位角色的标定坐标 + 数据集构建逻辑（浏览器与 Node 共用）
│   └── models-snapshot.js     数据快照（由 tools/build-data.cjs 生成，可离线使用）
└── tools/
    ├── build-data.cjs         拉 ZeroEval / OpenRouter 的公开接口，生成上面的快照
    └── serve.cjs              本地预览服务，并把两个接口代理到同源 /api/ 下
```

同目录的 `../last-token-we` 是同一个页面的 **Wallpaper Engine 壁纸版**（自包含的 WE 工程）。

## 怎么打开

**直接双击 `index.html`**（`file://`）就能用，快照数据已经打包在 `data/models-snapshot.js` 里。
但浏览器不允许 `file://` 页面跨域取数，所以这种打开方式取不到“实时数据”。

想让它真的去拉实时数据，用自带的本地服务：

```bash
node tools/serve.cjs          # 默认 http://localhost:8787/，端口被占用会自动顺延
```

它顺便把 `api.zeroeval.com` 与 `openrouter.ai/api` 代理到同源路径下——这两个接口都不发
CORS 响应头，浏览器从任何页面直接 fetch 都会被拦，所以代理是唯一能让网页自己取数的办法。
页面打开后会在后台试一次实时数据，成不成可以在右上角 ⋯ 菜单的「版权与数据」里看到。

重新生成快照（不依赖页面，也不需要密钥）：

```bash
node tools/build-data.cjs              # 联网拉取
node tools/build-data.cjs --offline DIR # 改用 DIR 下三个 JSON 备份
```

## 画里有谁

画里 13 位，从左到右：DeepSeek、Qwen、Llama、Seed、Grok、Kimi、GPT（中央主位）、
Perplexity、Gemini、Claude、Mistral、GLM、文心一言。页面里一律用模型名称，不加拟人化的后缀。

对应关系的确定方法：先用带百分比标尺的放大截图逐段量出每位角色的头部中心与左右边界，
再拿 [genderswapai.com 的 AI 拟人图鉴](https://genderswapai.com/zh-CN/ai-gijinka) 的立绘逐项核对——
发色、发型、兽耳、徽章字母（Kimi 的“K”、Mistral 的“M”、GLM 的“Z”、Perplexity 的“P”）、
手持物（Seed 的工牌挂绳、Qwen 的折扇与香囊、文心一言的蓝色立方体发夹与轮椅）。标定坐标写在
`data/model-data.js` 的 `CHARACTERS` 里，`band` 是相邻角色之间的中线，热区就由它生成。

## 数据是怎么来的

| 面板上的字段 | 来源 |
| --- | --- |
| 版本、发布日期、上下文、参数量、知识截止、开源协议、各基准分 | `api.zeroeval.com/leaderboard/models/full`（418 个模型） |
| 综合能力与全局排名 | `api.zeroeval.com/leaderboard/indexes/all` 的 `general` 分类 |
| Perplexity 的价格与上下文 | `openrouter.ai/api/v1/models` |

- **综合能力**用的是 ZeroEval 的 general 指数：把每个合格基准当成一局多人 TrueSkill 比赛，
  所有模型从同一先验出发，取保守估计 `μ − 3σ`。它比单一基准稳，且能在同一标尺下比较
  跨厂商的模型，所以面板上的“全局第 N / 395 名”就是它在这个指数里的名次。条形长度按榜首
  （当前 Claude Opus 5.5，60.42）归一，不代表百分比。
- **参考成本**取官方标价（美元 / 百万 tokens），再按三个示例工作量线性估算：
  一次长对话（20K 输入 / 4K 输出）、一份长报告（200K / 20K）、批量 100 万 tokens 输入。
  中文按 1 token ≈ 1.5 个汉字折算；缓存命中、思考预算、批量折扣都会让实际账单偏离这个估算，
  面板上也写明了。
- **Perplexity** 这一族 ZeroEval 没有收录，所以面板只给 OpenRouter 的价格与上下文，
  并明确标注“没有可比的综合分与基准分”，不拿别家的数字替它凑。

## 交互

- 鼠标移到角色身上，会出现暖色高亮框和名字；点一下就打开档案。
- 打开后会做两件事：把刚点开的角色缓缓挪进画面、**并把面板停到她对面那一侧**，
  免得档案把本人盖住；关掉面板后全景滚动恢复。
- 键盘：`Tab` 走遍 13 位角色，`Enter` 打开，`←` `→` 直接切换上一位/下一位，`Esc` 关闭并把焦点还回去。
- 右上角只有两个圆形图标：**⋯** 打开「图鉴与来源」（里面是全部 13 位角色、数据来源、当前用的是快照
  还是实时数据，以及形象授权与版权声明——点一行角色同样能打开档案，也用来兜住偶尔滚出画面的角色）；
  另一个切换明暗主题，选择记在 `localStorage`。
- 画面是 2:1、屏幕是 16:9 或 21:9 时，两端会被裁掉——这是原图比例决定的，不是 bug；
  画面会沿被裁的方向缓慢往返，一段时间里能看到整张图，两端角色也就轮流转回画面里。

## 说明与限制

- 视觉规范用的是 GitHub 式克制语言：实底、1px 描边、系统字体、单一蓝色强调，明暗两套主题。
- 角色形象来自 **genderswapai.com 的 AI 拟人图鉴**，原画作者为 ZipZipPipe 及社区画师，
  [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 授权；
  本工程是非商业的同人展示，角色形象版权归原作者所有。画中人物的造型由原图作者绘制，
  本工程只是把她们与厂商对应起来并配上数据。
- 能力与价格数据来自 **ZeroEval / LLM Stats** 与 **OpenRouter**，均为公开接口；
  数据是各来源自行汇总的口径，本站不做二次加权，也不保证与厂商官网完全一致。
- 请勿用于商业用途。
