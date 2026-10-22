# 模型能力图鉴 · Model Atlas

把 AI 模型的**综合能力**和**参考成本**画成一张能点的网页：左边是能力 - 成本散点图（横轴参考成本、
纵轴综合能力），右边是全部 **395 个模型**的排行榜。**点图上的点，右侧榜单跳到那一名并把它点亮；
点榜单任意一行，弹出它的详情。**

同仓库还带着这份页面的 **Wallpaper Engine 壁纸版**（[`../model-atlas-we`](../model-atlas-we)）。

## 仓库里有什么

| 目录 | 是什么 | 怎么用 |
| --- | --- | --- |
| 本目录 | 网页版。纯静态，无依赖、无构建 | 在线看：<https://liveldy.github.io/last-token/model-atlas/> ；或双击 `index.html` |
| [`../model-atlas-we`](../model-atlas-we) | 同一页面的 Wallpaper Engine 壁纸版（自包含 WE 工程，9 个用户属性） | WE 编辑器里「打开工程」选 `model-atlas-we/project.json` |

```
model-atlas/
├── index.html                 页面骨架（氛围层 + 顶栏 + 左图右榜 + 两个弹窗）
├── styles.css                 氛围层样式 + 界面设计令牌与组件
├── ambience.js                氛围运行时：光晕、点阵、暗角、颗粒、鼠标视差
├── app.js                     交互层：散点图、排行榜、详情弹窗、实时数据与快照切换
├── data/
│   ├── model-data.js          数据集构建逻辑 + 厂商配色（浏览器与 Node 共用）
│   └── models-snapshot.js     数据快照（由 tools/build-data.cjs 生成，可离线使用）
└── tools/
    ├── build-data.cjs         拉 ZeroEval / OpenRouter 的公开接口，生成上面的快照
    └── serve.cjs              本地预览服务，并把两个接口代理到同源 /api/ 下
```

## 怎么打开

**在线**：<https://liveldy.github.io/last-token/model-atlas/>

**本地**：双击 `index.html`（`file://`）就能用，快照已经打包在 `data/models-snapshot.js` 里。
但浏览器不允许 `file://` 页面跨域取数，所以这种打开方式只能看快照，取不到「实时数据」。

想让它真的去拉实时数据，用自带的本地服务（它顺便把两个接口代理到同源 `/api/` 下）：

```bash
node tools/serve.cjs          # 默认 http://localhost:8901/，端口被占用会自动顺延
```

`api.zeroeval.com` 与 `openrouter.ai/api` 都不发 CORS 响应头，浏览器从任何页面直接 fetch 都会被拦，
代理是唯一能让网页自己取数的办法。右下角的「关于与数据来源」里能看到当前用的是快照还是实时数据，
那行状态本身就是按钮，点一下重新拉。

重新生成快照（不依赖页面，也不需要密钥）：

```bash
node tools/build-data.cjs               # 联网拉取
node tools/build-data.cjs --offline DIR # 改用 DIR 下三个 JSON 备份
node tools/build-data.cjs --limit 30    # 只画前 30 个点
```

## 图怎么读

- **横轴**：参考成本，美元 / 百万 token，**输入 : 输出 = 3 : 1** 加权，log 刻度。
- **纵轴**：综合能力，ZeroEval general 指数（TrueSkill 保守估计 μ − 3σ）。
- 两条虚线是中位成本与中位能力，右上角那一片就是「又贵又强」，左下角是「又便宜又弱」。
  真正值得看的是**左上角**：便宜且强。
- 每个点按厂商着色，标签贪心避让，放不下就不放（50 个点里通常能放下 45 个左右）。
- 图上只画**综合能力最靠前的 50 个有公开标价的模型**；名次更靠前但没有公开标价、因此上不了图的，
  单独列在图下面的小标签里（当前 10 个）。没标价的总共 220 个，它们只在右侧排行榜里。

## 交互

- **点图上的点** → 右侧榜单滚到那一名，把它点亮并闪一下；被选中的点本身也会加圈。
- **点榜单任意一行** → 弹出详情：综合能力卡（分数、μ、σ、名次、与榜首的距离）、基准记录
  （最多 24 条，带名次与「第三方」标记）、规格（发布、上下文、参数量、多模态、协议、知识截止）、
  参考成本（官方标价 + 按三个示例工作量算出来的一次要花多少钱）、同厂商其它模型（可直接点着换）、数据出处。
- **点图例里的厂商** → 图与榜同时过滤，只留这一家；再点一次取消。
- **搜索框** → 按模型名、厂商名过滤榜单。
- **键盘**：`Tab` 走遍图上的点，`Enter` 跳到榜上；`Esc` 清空选中。

## 数据是怎么来的

| 字段 | 来源 |
| --- | --- |
| 综合能力、全局排名、σ、参与评分的基准数、两周名次变化 | `api.zeroeval.com/leaderboard/indexes/all` 的 `general` 分类 |
| 版本、发布日期、上下文、参数量、知识截止、开源协议、官方标价、各基准分 | `api.zeroeval.com/leaderboard/models/full` |
| ZeroEval 没收录标价时的兜底价格 | `openrouter.ai/api/v1/models` |

- **综合能力**用的是 ZeroEval 的 general 指数：把每个合格基准当成一局多人 TrueSkill 比赛，
  所有模型从同一先验出发，取保守估计 `μ − 3σ`，所以基准跑得少的模型会被压得低一些。
  当前榜首 Claude Opus 5.5 = 60.42，最低 −13.87。
- **参考成本**取官方标价（美元 / 百万 token），按 `(3 × 输入价 + 输出价) / 4` 加权。
  这份快照里 395 个模型只有 **175 个**在 ZeroEval 或 OpenRouter 上有公开标价，其余 220 个算不出成本，
  也就上不了能力图。
- 详情弹窗里的三个工作量估算：一次长对话（20K 输入 / 4K 输出）、一份长报告（200K / 20K）、
  批量 100 万 tokens 输入。中文按 1 token ≈ 1.5 个汉字折算；缓存命中、思考预算与批量折扣
  都会让实际账单偏离这个估算。

## 说明与限制

- 视觉规范用的是 GitHub 式克制语言：实底、1px 描边、系统字体、单一蓝色强调，明暗两套主题。
- 数据来自 **ZeroEval / LLM Stats** 与 **OpenRouter** 的公开接口，均为各来源自行汇总的口径，
  本站不做二次加权，也不保证与厂商官网完全一致。分数与价格都会随时间变动，
  页面上显示的是打包在工程里的快照（会写明快照时间）。
- 原页参考了 [TokenDance 的模型排行](https://tokendance.space/rankings#benchmarks) 的呈现方式：
  横轴参考成本、纵轴综合能力、按厂商着色。
- 非商业的第三方整理，与任何一家模型厂商无关。请勿用于商业用途。

## 与壁纸版的关系

`../model-atlas-we` 是从本目录复制出来的、自包含的壁纸工程。两边共享 `styles.css`、`ambience.js`、
`app.js`、`data/`、`tools/build-data.cjs`，改动时**保持逐字节一致**（改完用 `cmp` 复核一遍）。
差别只有三处：壁纸版多一行 `MODEL_ATLAS_WALLPAPER` 标记、多一个 `wallpaper.js`、
多一份 `project.json` 与 `preview.jpg`。`app.js` 与 `ambience.js` 里壁纸相关的分支都在 `WALLPAPER`
这个开关后面，普通浏览器打开时等于不存在。
