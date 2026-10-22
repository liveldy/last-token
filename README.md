# 最后的 Token · The Last Token

把 AI 模型拟人化的「最后的晚餐」做成一个**能用鼠标点角色的网页**：点画面里的任意一位角色，
就看到她所代表的模型家族里每个版本的综合能力（ZeroEval general 指数）与参考成本（每百万 tokens 的美元价）。
同仓库还带着这份画面的 **Wallpaper Engine 壁纸版**。

底图 2880×1440，黄昏宴会厅：光柱、窗光、尘埃、暗角、胶片颗粒，以及屏幕比例裁掉两端时按住拖动就能看到的部分。

## 仓库里有什么

| 目录 | 是什么 | 怎么用 |
| --- | --- | --- |
| [`last-token/`](last-token/) | 网页版。纯静态，无依赖、无构建 | 在线看：<https://liveldy.github.io/last-token/> ；或双击 `last-token/index.html` |
| [`last-token-we/`](last-token-we/) | 同一页面的 Wallpaper Engine 壁纸版（自包含 WE 工程，11 个用户属性） | WE 编辑器里「打开工程」选 `last-token-we/project.json` |
| `banquet-dusk/` | 更早一版的纯氛围壁纸工程 | —— |
| `bg.jpeg` | 原始底图 | —— |

## 网页版

**在线**：<https://liveldy.github.io/last-token/>

**本地**：双击 `last-token/index.html` 就能用，数据快照已经打包在 `data/models-snapshot.js` 里。
但浏览器不允许 `file://` 页面跨域取数，所以这种打开方式只能看快照，取不到「实时数据」。

想让它真的去拉实时数据，用自带的本地服务（它顺便把两个数据源代理到同源 `/api/` 下）：

```bash
node last-token/tools/serve.cjs        # 默认 http://localhost:8787/，端口被占用会自动顺延
```

重新生成数据快照：

```bash
node last-token/tools/build-data.cjs
```

两个工程共用画面运行时（`styles.css` / `ambience.js` / `app.js` / `data/model-data.js` / `tools/build-data.cjs`），
改动时两边保持逐字节一致。

## 数据与授权

- 角色形象来自 [genderswapai.com 的 AI 拟人图鉴](https://genderswapai.com/zh-CN/ai-gijinka)，
  作者 ZipZipPipe 及社区画师，[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)，
  本站为非商业同人展示，角色形象版权归原作者所有。
- 综合能力取自 [ZeroEval / LLM Stats](https://zeroeval.com/) 汇总的 public indexes（TrueSkill 保守估计 μ−3σ）。
- 模型价格为 [ZeroEval / LLM Stats](https://zeroeval.com/) 与 [OpenRouter](https://openrouter.ai/) 的公开标价，
  按官方 API 标价线性估算，缓存命中、思考预算与批量折扣都会让实际账单更低或更高。
