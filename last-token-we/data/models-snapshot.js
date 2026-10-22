/* 由 tools/build-data.cjs 生成，请勿手改。
   数据来源：ZeroEval / LLM Stats（api.zeroeval.com）、OpenRouter（openrouter.ai）。
   快照时间：2026-10-22T13:30:57.855Z */
window.MODEL_SNAPSHOT = {
 "snapshotAt": "2026-10-22T13:30:57.855Z",
 "generalTotal": 395,
 "generalTop": {
  "name": "Claude Opus 5.5",
  "score": 60.42
 },
 "sources": {
  "models": {
   "name": "ZeroEval / LLM Stats · 模型元数据",
   "url": "https://api.zeroeval.com/leaderboard/models/full",
   "proxy": "/api/zeroeval/leaderboard/models/full",
   "note": "版本、发布日期、上下文、参数量、开源协议与各基准分"
  },
  "index": {
   "name": "ZeroEval / LLM Stats · general 指数",
   "url": "https://api.zeroeval.com/leaderboard/indexes/all",
   "proxy": "/api/zeroeval/leaderboard/indexes/all",
   "note": "综合能力：TrueSkill 保守估计（mu − 3σ），同一标尺下的全局排名"
  },
  "openrouter": {
   "name": "OpenRouter · 模型价格",
   "url": "https://openrouter.ai/api/v1/models",
   "proxy": "/api/openrouter/v1/models",
   "note": "Perplexity 等 ZeroEval 未收录厂商的价格与上下文"
  }
 },
 "benchmarks": [
  {
   "key": "gpqa_score",
   "name": "GPQA Diamond",
   "zh": "研究生级科学问答"
  },
  {
   "key": "hle_score",
   "name": "Humanity's Last Exam",
   "zh": "跨学科专家难题"
  },
  {
   "key": "aime_2025_score",
   "name": "AIME 2025",
   "zh": "竞赛数学"
  },
  {
   "key": "frontiermath_score",
   "name": "FrontierMath",
   "zh": "前沿数学研究题"
  },
  {
   "key": "swe_bench_verified_score",
   "name": "SWE-bench Verified",
   "zh": "真实仓库修 bug"
  },
  {
   "key": "swe_bench_pro_score",
   "name": "SWE-bench Pro",
   "zh": "更难的软件工程任务"
  },
  {
   "key": "scicode_score",
   "name": "SciCode",
   "zh": "科学计算代码"
  },
  {
   "key": "terminal_bench_score",
   "name": "Terminal-Bench",
   "zh": "终端实操"
  },
  {
   "key": "arc_agi_v2_score",
   "name": "ARC-AGI v2",
   "zh": "抽象推理"
  },
  {
   "key": "mcp_atlas_score",
   "name": "MCP Atlas",
   "zh": "工具调用"
  },
  {
   "key": "toolathlon_score",
   "name": "Toolathlon",
   "zh": "多工具长流程"
  },
  {
   "key": "tau_bench_retail_score",
   "name": "τ-bench Retail",
   "zh": "客服代理对话"
  },
  {
   "key": "apex_agents_score",
   "name": "APEX Agents",
   "zh": "代理任务"
  },
  {
   "key": "browsecomp_score",
   "name": "BrowseComp",
   "zh": "联网检索"
  },
  {
   "key": "simpleqa_score",
   "name": "SimpleQA",
   "zh": "事实性短问答"
  },
  {
   "key": "osworld_score",
   "name": "OSWorld",
   "zh": "桌面操作"
  },
  {
   "key": "mmmu_score",
   "name": "MMMU",
   "zh": "多模态理解"
  },
  {
   "key": "mmmu_pro_score",
   "name": "MMMU-Pro",
   "zh": "多模态理解（难）"
  },
  {
   "key": "mmmlu_score",
   "name": "MMMLU",
   "zh": "多语言知识"
  },
  {
   "key": "charxiv_r_score",
   "name": "CharXiv-R",
   "zh": "图表推理"
  },
  {
   "key": "screenspot_pro_score",
   "name": "ScreenSpot-Pro",
   "zh": "界面定位"
  },
  {
   "key": "mrcr_v2_score",
   "name": "MRCR v2",
   "zh": "长上下文检索"
  }
 ],
 "workloads": [
  {
   "id": "chat",
   "label": "一次长对话",
   "tokensIn": 20000,
   "tokensOut": 4000,
   "note": "读约 3 万汉字，写约 6 千字"
  },
  {
   "id": "doc",
   "label": "一份长报告",
   "tokensIn": 200000,
   "tokensOut": 20000,
   "note": "读约 30 万汉字，写约 3 万字"
  },
  {
   "id": "bulk",
   "label": "批量跑 100 万 tokens 输入",
   "tokensIn": 1000000,
   "tokensOut": 200000,
   "note": "大规模离线推理"
  }
 ],
 "characters": [
  {
   "id": "deepseek",
   "name": "DeepSeek",
   "org": "深度求索",
   "orgId": "deepseek",
   "look": "蓝发 · 鲸尾鳍耳与黑白女仆装",
   "x": 10,
   "y": 41,
   "band": [
    0,
    13
   ],
   "abilityIndex": "general",
   "versionCount": 29,
   "best": {
    "id": "deepseek-v4.1-flash-1017",
    "name": "DeepSeek-V4.1-Flash-1017",
    "ability": {
     "index": "general",
     "score": 51.2,
     "mu": 55.32,
     "sigma": 1.38,
     "rank": 15,
     "of": 395,
     "games": 11
    },
    "priceIn": 0.3,
    "priceOut": 1.2
   },
   "versions": [
    {
     "id": "deepseek-v4.1-flash-1017",
     "name": "DeepSeek-V4.1-Flash-1017",
     "released": "2026-10-17",
     "announced": "2026-10-17",
     "context": 1048576,
     "params": 763205315794,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.3,
     "priceOut": 1.2,
     "ability": {
      "index": "general",
      "score": 51.2,
      "mu": 55.32,
      "sigma": 1.38,
      "rank": 15,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.426,
       "pct": 42.6
      }
     ]
    },
    {
     "id": "deepseek-v4.1-flash",
     "name": "DeepSeek-V4.1-Flash",
     "released": "2026-09-10",
     "announced": "2026-09-10",
     "context": 1048576,
     "params": 763205315794,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.22,
     "priceOut": 0.66,
     "ability": {
      "index": "general",
      "score": 49.99,
      "mu": 53.21,
      "sigma": 1.08,
      "rank": 19,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.909,
       "pct": 90.9
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.368,
       "pct": 36.8
      }
     ]
    },
    {
     "id": "deepseek-v4-flash-vision-exp",
     "name": "DeepSeek-V4-Flash-Vision-Exp",
     "released": "2026-08-21",
     "announced": "2026-08-21",
     "context": 1048576,
     "params": null,
     "license": "unknown",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.44,
     "priceOut": 1.32,
     "ability": {
      "index": "general",
      "score": 44.16,
      "mu": 49.24,
      "sigma": 1.69,
      "rank": 52,
      "of": 395,
      "games": 7
     },
     "benchmarks": []
    },
    {
     "id": "deepseek-v4-pro-0813",
     "name": "DeepSeek-V4-Pro-0813",
     "released": "2026-08-13",
     "announced": "2026-08-13",
     "context": 1048576,
     "params": 1600000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 1.3,
     "priceOut": 2.6,
     "ability": {
      "index": "general",
      "score": 50.38,
      "mu": 54.52,
      "sigma": 1.38,
      "rank": 18,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.6,
       "pct": 60
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.741,
       "pct": 74.1
      }
     ]
    },
    {
     "id": "deepseek-v4-flash-0731",
     "name": "DeepSeek-V4-Flash-0731",
     "released": "2026-07-31",
     "announced": "2026-07-31",
     "context": 1048576,
     "params": 304000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.06,
     "priceOut": 0.18,
     "ability": {
      "index": "general",
      "score": 43.04,
      "mu": 47.8,
      "sigma": 1.59,
      "rank": 57,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.703,
       "pct": 70.3
      }
     ]
    },
    {
     "id": "deepseek-v4-flash-0423",
     "name": "DeepSeek-V4-Flash-0423",
     "released": "2026-04-23",
     "announced": "2026-04-23",
     "context": 1048576,
     "params": 284000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.09,
     "priceOut": 0.18,
     "ability": {
      "index": "general",
      "score": 35.88,
      "mu": 39.04,
      "sigma": 1.05,
      "rank": 99,
      "of": 395,
      "games": 19
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.874,
       "pct": 87.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.403,
       "pct": 40.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.786,
       "pct": 78.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.523,
       "pct": 52.3
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.674,
       "pct": 67.4
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.435,
       "pct": 43.5
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.535,
       "pct": 53.5
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.289,
       "pct": 28.9
      }
     ]
    },
    {
     "id": "deepseek-v4-flash-max",
     "name": "DeepSeek-V4-Flash-Max",
     "released": "2026-04-23",
     "announced": "2026-04-23",
     "context": 1048576,
     "params": 284000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.09,
     "priceOut": 0.18,
     "ability": {
      "index": "general",
      "score": 38.89,
      "mu": 42.03,
      "sigma": 1.05,
      "rank": 77,
      "of": 395,
      "games": 19
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.451,
       "pct": 45.1
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.79,
       "pct": 79
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.526,
       "pct": 52.6
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.69,
       "pct": 69
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.478,
       "pct": 47.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.732,
       "pct": 73.2
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.341,
       "pct": 34.1
      }
     ]
    },
    {
     "id": "deepseek-v4-pro-max",
     "name": "DeepSeek-V4-Pro-Max",
     "released": "2026-04-23",
     "announced": "2026-04-23",
     "context": 1048576,
     "params": 1600000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 1.3,
     "priceOut": 2.6,
     "ability": {
      "index": "general",
      "score": 42.82,
      "mu": 45.87,
      "sigma": 1.02,
      "rank": 60,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.901,
       "pct": 90.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.482,
       "pct": 48.2
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.806,
       "pct": 80.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.554,
       "pct": 55.4
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.736,
       "pct": 73.6
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.518,
       "pct": 51.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.834,
       "pct": 83.4
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.579,
       "pct": 57.9
      }
     ]
    },
    {
     "id": "deepseek-chat",
     "name": "DeepSeek-V3.2 (Non-thinking)",
     "released": "2025-12-01",
     "announced": "2025-12-01",
     "context": 131072,
     "params": 685000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.28,
     "priceOut": 0.42,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "deepseek-reasoner",
     "name": "DeepSeek-V3.2 (Thinking)",
     "released": "2025-12-01",
     "announced": "2025-12-01",
     "context": null,
     "params": 685000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 32.19,
      "mu": 35.65,
      "sigma": 1.15,
      "rank": 127,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.824,
       "pct": 82.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.251,
       "pct": 25.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.931,
       "pct": 93.1
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.731,
       "pct": 73.1
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.352,
       "pct": 35.2
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.514,
       "pct": 51.4
      }
     ]
    },
    {
     "id": "deepseek-v3.2",
     "name": "DeepSeek-V3.2",
     "released": "2025-12-01",
     "announced": "2025-12-01",
     "context": 163840,
     "params": 685000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.26,
     "priceOut": 0.38,
     "ability": {
      "index": "general",
      "score": 32.91,
      "mu": 36.2,
      "sigma": 1.1,
      "rank": 122,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.824,
       "pct": 82.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.408,
       "pct": 40.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.931,
       "pct": 93.1
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.731,
       "pct": 73.1
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.352,
       "pct": 35.2
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.514,
       "pct": 51.4
      }
     ]
    },
    {
     "id": "deepseek-v3.2-speciale",
     "name": "DeepSeek-V3.2-Speciale",
     "released": "2025-12-01",
     "announced": "2025-12-01",
     "context": null,
     "params": 685000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 33.55,
      "mu": 38.08,
      "sigma": 1.51,
      "rank": 117,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.306,
       "pct": 30.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.96,
       "pct": 96
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.731,
       "pct": 73.1
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.352,
       "pct": 35.2
      }
     ]
    },
    {
     "id": "deepseek-v3.2-exp",
     "name": "DeepSeek-V3.2-Exp",
     "released": "2025-09-29",
     "announced": "2025-09-29",
     "context": null,
     "params": 685000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 27.7,
      "mu": 31.21,
      "sigma": 1.17,
      "rank": 160,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.799,
       "pct": 79.9
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.198,
       "pct": 19.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.893,
       "pct": 89.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.678,
       "pct": 67.8
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.377,
       "pct": 37.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.401,
       "pct": 40.1
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.971,
       "pct": 97.1
      }
     ]
    },
    {
     "id": "deepseek-r1-0528",
     "name": "DeepSeek-R1-0528",
     "released": "2025-05-28",
     "announced": "2025-05-28",
     "context": 163840,
     "params": 671000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.5,
     "priceOut": 2.15,
     "ability": {
      "index": "general",
      "score": 23.62,
      "mu": 26.99,
      "sigma": 1.12,
      "rank": 192,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.81,
       "pct": 81
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.177,
       "pct": 17.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.875,
       "pct": 87.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.446,
       "pct": 44.6
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.057,
       "pct": 5.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.089,
       "pct": 8.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.923,
       "pct": 92.3
      }
     ]
    },
    {
     "id": "deepseek-v3-0324",
     "name": "DeepSeek-V3 0324",
     "released": "2025-03-25",
     "announced": "2025-03-25",
     "context": 163840,
     "params": 671000000000,
     "license": "mit_+_model_license_(commercial_use_allowed)",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.24,
     "priceOut": 0.9,
     "ability": {
      "index": "general",
      "score": 12.85,
      "mu": 18.43,
      "sigma": 1.86,
      "rank": 271,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.684,
       "pct": 68.4
      }
     ]
    },
    {
     "id": "deepseek-r1",
     "name": "DeepSeek-R1",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 671000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "deepseek-r1-distill-llama-70b",
     "name": "DeepSeek R1 Distill Llama 70B",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 70600000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 13.94,
      "mu": 20.14,
      "sigma": 2.07,
      "rank": 261,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.652,
       "pct": 65.2
      }
     ]
    },
    {
     "id": "deepseek-r1-distill-llama-8b",
     "name": "DeepSeek R1 Distill Llama 8B",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 8030000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 6.47,
      "mu": 12.71,
      "sigma": 2.08,
      "rank": 316,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.49,
       "pct": 49
      }
     ]
    },
    {
     "id": "deepseek-r1-distill-qwen-14b",
     "name": "DeepSeek R1 Distill Qwen 14B",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 14800000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 10.41,
      "mu": 16.6,
      "sigma": 2.07,
      "rank": 286,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.591,
       "pct": 59.1
      }
     ]
    },
    {
     "id": "deepseek-r1-distill-qwen-1.5b",
     "name": "DeepSeek R1 Distill Qwen 1.5B",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 1780000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -3.47,
      "mu": 3.06,
      "sigma": 2.18,
      "rank": 368,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.338,
       "pct": 33.8
      }
     ]
    },
    {
     "id": "deepseek-r1-distill-qwen-32b",
     "name": "DeepSeek R1 Distill Qwen 32B",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 32800000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 12.52,
      "mu": 18.71,
      "sigma": 2.07,
      "rank": 273,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.621,
       "pct": 62.1
      }
     ]
    },
    {
     "id": "deepseek-r1-distill-qwen-7b",
     "name": "DeepSeek R1 Distill Qwen 7B",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 7620000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 7.9,
      "mu": 14.12,
      "sigma": 2.07,
      "rank": 305,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.491,
       "pct": 49.1
      }
     ]
    },
    {
     "id": "deepseek-r1-zero",
     "name": "DeepSeek R1 Zero",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": 671000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 15.55,
      "mu": 21.76,
      "sigma": 2.07,
      "rank": 252,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.733,
       "pct": 73.3
      }
     ]
    },
    {
     "id": "deepseek-v3.1",
     "name": "DeepSeek-V3.1",
     "released": "2025-01-10",
     "announced": "2025-01-10",
     "context": 163840,
     "params": 671000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.25,
     "priceOut": 0.95,
     "ability": {
      "index": "general",
      "score": 21.59,
      "mu": 24.87,
      "sigma": 1.1,
      "rank": 206,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.749,
       "pct": 74.9
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.159,
       "pct": 15.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.498,
       "pct": 49.8
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.66,
       "pct": 66
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.313,
       "pct": 31.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.3,
       "pct": 30
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.934,
       "pct": 93.4
      }
     ]
    },
    {
     "id": "deepseek-v3",
     "name": "DeepSeek-V3",
     "released": "2024-12-25",
     "announced": "2024-12-25",
     "context": 163840,
     "params": 671000000000,
     "license": "mit_+_model_license_(commercial_use_allowed)",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.32,
     "priceOut": 0.89,
     "ability": {
      "index": "general",
      "score": 15.14,
      "mu": 18.51,
      "sigma": 1.12,
      "rank": 254,
      "of": 395,
      "games": 19
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.591,
       "pct": 59.1
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.42,
       "pct": 42
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.249,
       "pct": 24.9
      }
     ]
    },
    {
     "id": "deepseek-vl2",
     "name": "DeepSeek VL2",
     "released": "2024-12-13",
     "announced": "2024-12-13",
     "context": null,
     "params": 27000000000,
     "license": "deepseek",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 2.46,
      "mu": 6.21,
      "sigma": 1.25,
      "rank": 337,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.511,
       "pct": 51.1
      }
     ]
    },
    {
     "id": "deepseek-vl2-small",
     "name": "DeepSeek VL2 Small",
     "released": "2024-12-13",
     "announced": "2024-12-13",
     "context": null,
     "params": 16000000000,
     "license": "deepseek",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 0.79,
      "mu": 4.56,
      "sigma": 1.26,
      "rank": 347,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.48,
       "pct": 48
      }
     ]
    },
    {
     "id": "deepseek-vl2-tiny",
     "name": "DeepSeek VL2 Tiny",
     "released": "2024-12-13",
     "announced": "2024-12-13",
     "context": null,
     "params": 3000000000,
     "license": "deepseek",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -5.14,
      "mu": -1.03,
      "sigma": 1.37,
      "rank": 378,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.407,
       "pct": 40.7
      }
     ]
    },
    {
     "id": "deepseek-v2.5",
     "name": "DeepSeek-V2.5",
     "released": "2024-05-08",
     "announced": "2024-05-08",
     "context": null,
     "params": 236000000000,
     "license": "deepseek",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 7.6,
      "mu": 11.81,
      "sigma": 1.4,
      "rank": 307,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.168,
       "pct": 16.8
      }
     ]
    }
   ]
  },
  {
   "id": "qwen",
   "name": "Qwen",
   "org": "阿里通义千问",
   "orgId": "qwen",
   "look": "紫发与中国风 · 圆形发饰、手持折扇与香囊",
   "x": 16,
   "y": 40,
   "band": [
    13,
    18.8
   ],
   "abilityIndex": "general",
   "versionCount": 58,
   "best": {
    "id": "qwen3.8-max",
    "name": "Qwen3.8 Max",
    "ability": {
     "index": "general",
     "score": 50.67,
     "mu": 53.48,
     "sigma": 0.94,
     "rank": 17,
     "of": 395,
     "games": 33
    },
    "priceIn": 1.65,
    "priceOut": 4.951
   },
   "versions": [
    {
     "id": "qwen3.8-omni-flash",
     "name": "Qwen3.8 Omni Flash",
     "released": "2026-09-18",
     "announced": "2026-09-18",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 37.78,
      "mu": 48.99,
      "sigma": 3.74,
      "rank": 85,
      "of": 395,
      "games": 3
     },
     "benchmarks": []
    },
    {
     "id": "qwen3.8-flash",
     "name": "Qwen3.8 Flash",
     "released": "2026-08-26",
     "announced": "2026-08-26",
     "context": 1000000,
     "params": 125000000000,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.15,
     "priceOut": 0.47,
     "ability": {
      "index": "general",
      "score": 48.07,
      "mu": 51.07,
      "sigma": 1,
      "rank": 32,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.917,
       "pct": 91.7
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.359,
       "pct": 35.9
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.625,
       "pct": 62.5
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.735,
       "pct": 73.5
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.906,
       "pct": 90.6
      }
     ]
    },
    {
     "id": "qwen3.8-flash-next",
     "name": "Qwen3.8-Flash-Next",
     "released": "2026-08-26",
     "announced": "2026-08-26",
     "context": null,
     "params": 125000000000,
     "license": "qwen_community_1_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 48.13,
      "mu": 51.12,
      "sigma": 1,
      "rank": 31,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.917,
       "pct": 91.7
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.359,
       "pct": 35.9
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.625,
       "pct": 62.5
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.735,
       "pct": 73.5
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.906,
       "pct": 90.6
      }
     ]
    },
    {
     "id": "qwen3.8-27b",
     "name": "Qwen3.8-27B",
     "released": "2026-08-14",
     "announced": "2026-08-14",
     "context": 262144,
     "params": 27781427952,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.4,
     "priceOut": 3,
     "ability": {
      "index": "general",
      "score": 44.39,
      "mu": 47.37,
      "sigma": 1,
      "rank": 49,
      "of": 395,
      "games": 23
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.892,
       "pct": 89.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.308,
       "pct": 30.8
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.617,
       "pct": 61.7
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.902,
       "pct": 90.2
      }
     ]
    },
    {
     "id": "qwen3.8-2.4t-a95b",
     "name": "Qwen3.8-2.4T-A95B",
     "released": "2026-08-12",
     "announced": "2026-08-03",
     "context": null,
     "params": 2400000000000,
     "license": "qwen3_8_max",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "qwen3.8-max",
     "name": "Qwen3.8 Max",
     "released": "2026-08-02",
     "announced": "2026-08-02",
     "context": 1048576,
     "params": 2400000000000,
     "license": "qwen3_8_max",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 1.65,
     "priceOut": 4.951,
     "ability": {
      "index": "general",
      "score": 50.67,
      "mu": 53.48,
      "sigma": 0.94,
      "rank": 17,
      "of": 395,
      "games": 33
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.926,
       "pct": 92.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.436,
       "pct": 43.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.677,
       "pct": 67.7
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.725,
       "pct": 72.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.823,
       "pct": 82.3
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.845,
       "pct": 84.5
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.929,
       "pct": 92.9
      }
     ]
    },
    {
     "id": "qwen3.7-plus",
     "name": "Qwen3.7-Plus",
     "released": "2026-05-31",
     "announced": "2026-05-31",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 42.33,
      "mu": 44.53,
      "sigma": 0.73,
      "rank": 64,
      "of": 395,
      "games": 59
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.903,
       "pct": 90.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.347,
       "pct": 34.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.777,
       "pct": 77.7
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.576,
       "pct": 57.6
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.513,
       "pct": 51.3
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.732,
       "pct": 73.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.79,
       "pct": 79
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.89,
       "pct": 89
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.859,
       "pct": 85.9
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.79,
       "pct": 79
      }
     ]
    },
    {
     "id": "qwen3.7-max",
     "name": "Qwen3.7 Max",
     "released": "2026-05-19",
     "announced": "2026-05-19",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 1.25,
     "priceOut": 3.75,
     "ability": {
      "index": "general",
      "score": 45.12,
      "mu": 47.66,
      "sigma": 0.85,
      "rank": 43,
      "of": 395,
      "games": 37
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.924,
       "pct": 92.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.414,
       "pct": 41.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.804,
       "pct": 80.4
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.606,
       "pct": 60.6
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.535,
       "pct": 53.5
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.764,
       "pct": 76.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.903,
       "pct": 90.3
      }
     ]
    },
    {
     "id": "qwen3.6-27b",
     "name": "Qwen3.6-27B",
     "released": "2026-04-21",
     "announced": "2026-04-21",
     "context": 262144,
     "params": 27781427952,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.32,
     "priceOut": 3.2,
     "ability": {
      "index": "general",
      "score": 35.17,
      "mu": 37.47,
      "sigma": 0.77,
      "rank": 107,
      "of": 395,
      "games": 43
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.878,
       "pct": 87.8
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.24,
       "pct": 24
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.772,
       "pct": 77.2
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.535,
       "pct": 53.5
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.829,
       "pct": 82.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.758,
       "pct": 75.8
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.784,
       "pct": 78.4
      }
     ]
    },
    {
     "id": "qwen3.6-35b-a3b",
     "name": "Qwen3.6-35B-A3B",
     "released": "2026-04-16",
     "announced": "2026-04-16",
     "context": 262144,
     "params": 35000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.95,
     "ability": {
      "index": "general",
      "score": 32.04,
      "mu": 34.26,
      "sigma": 0.74,
      "rank": 128,
      "of": 395,
      "games": 49
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.86,
       "pct": 86
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.214,
       "pct": 21.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.734,
       "pct": 73.4
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.495,
       "pct": 49.5
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.628,
       "pct": 62.8
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.269,
       "pct": 26.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.817,
       "pct": 81.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.753,
       "pct": 75.3
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.78,
       "pct": 78
      }
     ]
    },
    {
     "id": "qwen3.6-plus",
     "name": "Qwen3.6 Plus",
     "released": "2026-03-31",
     "announced": "2026-04-02",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.5,
     "priceOut": 3,
     "ability": {
      "index": "general",
      "score": 38.98,
      "mu": 41.08,
      "sigma": 0.7,
      "rank": 76,
      "of": 395,
      "games": 64
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.904,
       "pct": 90.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.288,
       "pct": 28.8
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.788,
       "pct": 78.8
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.566,
       "pct": 56.6
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.741,
       "pct": 74.1
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.398,
       "pct": 39.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.86,
       "pct": 86
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.788,
       "pct": 78.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.895,
       "pct": 89.5
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.815,
       "pct": 81.5
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.682,
       "pct": 68.2
      }
     ]
    },
    {
     "id": "qwen3.5-0.8b",
     "name": "Qwen3.5-0.8B",
     "released": "2026-03-02",
     "announced": "2026-03-02",
     "context": null,
     "params": 800000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -6.7,
      "mu": -2.3,
      "sigma": 1.47,
      "rank": 388,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.119,
       "pct": 11.9
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.443,
       "pct": 44.3
      }
     ]
    },
    {
     "id": "qwen3.5-2b",
     "name": "Qwen3.5-2B",
     "released": "2026-03-02",
     "announced": "2026-03-02",
     "context": null,
     "params": 2000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 3.3,
      "mu": 6.98,
      "sigma": 1.23,
      "rank": 332,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.516,
       "pct": 51.6
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.631,
       "pct": 63.1
      }
     ]
    },
    {
     "id": "qwen3.5-4b",
     "name": "Qwen3.5-4B",
     "released": "2026-03-02",
     "announced": "2026-03-02",
     "context": null,
     "params": 4000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 19.03,
      "mu": 21.99,
      "sigma": 0.99,
      "rank": 229,
      "of": 395,
      "games": 25
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.762,
       "pct": 76.2
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.761,
       "pct": 76.1
      }
     ]
    },
    {
     "id": "qwen3.5-9b",
     "name": "Qwen3.5-9B",
     "released": "2026-03-02",
     "announced": "2026-03-02",
     "context": 262144,
     "params": 9000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.15,
     "ability": {
      "index": "general",
      "score": 24.22,
      "mu": 27.05,
      "sigma": 0.94,
      "rank": 187,
      "of": 395,
      "games": 25
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.817,
       "pct": 81.7
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.812,
       "pct": 81.2
      }
     ]
    },
    {
     "id": "qwen3.5-122b-a10b",
     "name": "Qwen3.5-122B-A10B",
     "released": "2026-02-24",
     "announced": "2026-02-24",
     "context": 262144,
     "params": 122000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.29,
     "priceOut": 2.4,
     "ability": {
      "index": "general",
      "score": 34.67,
      "mu": 36.72,
      "sigma": 0.68,
      "rank": 111,
      "of": 395,
      "games": 81
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.866,
       "pct": 86.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.475,
       "pct": 47.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.72,
       "pct": 72
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.638,
       "pct": 63.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.839,
       "pct": 83.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.769,
       "pct": 76.9
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.867,
       "pct": 86.7
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.772,
       "pct": 77.2
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.704,
       "pct": 70.4
      }
     ]
    },
    {
     "id": "qwen3.5-27b",
     "name": "Qwen3.5-27B",
     "released": "2026-02-24",
     "announced": "2026-02-24",
     "context": 262144,
     "params": 27000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.26,
     "priceOut": 2.6,
     "ability": {
      "index": "general",
      "score": 33.55,
      "mu": 35.57,
      "sigma": 0.67,
      "rank": 118,
      "of": 395,
      "games": 82
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.855,
       "pct": 85.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.485,
       "pct": 48.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.724,
       "pct": 72.4
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.61,
       "pct": 61
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.823,
       "pct": 82.3
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.75,
       "pct": 75
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.859,
       "pct": 85.9
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.795,
       "pct": 79.5
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.703,
       "pct": 70.3
      }
     ]
    },
    {
     "id": "qwen3.5-35b-a3b",
     "name": "Qwen3.5-35B-A3B",
     "released": "2026-02-24",
     "announced": "2026-02-24",
     "context": 262144,
     "params": 35000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.14,
     "priceOut": 1,
     "ability": {
      "index": "general",
      "score": 30.5,
      "mu": 32.57,
      "sigma": 0.69,
      "rank": 138,
      "of": 395,
      "games": 81
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.842,
       "pct": 84.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.474,
       "pct": 47.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.692,
       "pct": 69.2
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.61,
       "pct": 61
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.814,
       "pct": 81.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.751,
       "pct": 75.1
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.852,
       "pct": 85.2
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.775,
       "pct": 77.5
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.686,
       "pct": 68.6
      }
     ]
    },
    {
     "id": "qwen3.5-397b-a17b",
     "name": "Qwen3.5-397B-A17B",
     "released": "2026-02-16",
     "announced": "2026-02-16",
     "context": 262144,
     "params": 397000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.45,
     "priceOut": 3,
     "ability": {
      "index": "general",
      "score": 38.32,
      "mu": 40.72,
      "sigma": 0.8,
      "rank": 82,
      "of": 395,
      "games": 37
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.884,
       "pct": 88.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.287,
       "pct": 28.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.764,
       "pct": 76.4
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.383,
       "pct": 38.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.69,
       "pct": 69
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.885,
       "pct": 88.5
      }
     ]
    },
    {
     "id": "qwen3-max-thinking",
     "name": "Qwen3 Max Thinking",
     "released": "2026-02-13",
     "announced": "2026-02-13",
     "context": 256000,
     "params": 1000000000000,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 1.2,
     "priceOut": 6,
     "ability": {
      "index": "general",
      "score": 32.56,
      "mu": 35.12,
      "sigma": 0.86,
      "rank": 125,
      "of": 395,
      "games": 33
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.874,
       "pct": 87.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.753,
       "pct": 75.3
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.188,
       "pct": 18.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.539,
       "pct": 53.9
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.844,
       "pct": 84.4
      }
     ]
    },
    {
     "id": "qwen3-max",
     "name": "Qwen3 Max",
     "released": "2025-12-15",
     "announced": "2025-12-15",
     "context": 256000,
     "params": 1000000000000,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 1.2,
     "priceOut": 6,
     "ability": {
      "index": "general",
      "score": 21.28,
      "mu": 26.44,
      "sigma": 1.72,
      "rank": 210,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.62,
       "pct": 62
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.816,
       "pct": 81.6
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.696,
       "pct": 69.6
      }
     ]
    },
    {
     "id": "qwen3-vl-235b-a22b-instruct",
     "name": "Qwen3 VL 235B A22B Instruct",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": 262144,
     "params": 236000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 0.88,
     "ability": {
      "index": "general",
      "score": 24.26,
      "mu": 26.48,
      "sigma": 0.74,
      "rank": 186,
      "of": 395,
      "games": 50
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.747,
       "pct": 74.7
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.519,
       "pct": 51.9
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.667,
       "pct": 66.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.681,
       "pct": 68.1
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.621,
       "pct": 62.1
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.62,
       "pct": 62
      }
     ]
    },
    {
     "id": "qwen3-vl-235b-a22b-thinking",
     "name": "Qwen3 VL 235B A22B Thinking",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 236000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 26.3,
      "mu": 28.49,
      "sigma": 0.73,
      "rank": 173,
      "of": 395,
      "games": 58
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.136,
       "pct": 13.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.897,
       "pct": 89.7
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.444,
       "pct": 44.4
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.381,
       "pct": 38.1
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.693,
       "pct": 69.3
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.661,
       "pct": 66.1
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.618,
       "pct": 61.8
      }
     ]
    },
    {
     "id": "qwen3-vl-30b-a3b-instruct",
     "name": "Qwen3 VL 30B A3B Instruct",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": 262144,
     "params": 31000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.15,
     "priceOut": 0.6,
     "ability": {
      "index": "general",
      "score": 15.94,
      "mu": 18.1,
      "sigma": 0.72,
      "rank": 249,
      "of": 395,
      "games": 50
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.704,
       "pct": 70.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.693,
       "pct": 69.3
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.27,
       "pct": 27
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.303,
       "pct": 30.3
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.604,
       "pct": 60.4
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.489,
       "pct": 48.9
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.605,
       "pct": 60.5
      }
     ]
    },
    {
     "id": "qwen3-vl-30b-a3b-thinking",
     "name": "Qwen3 VL 30B A3B Thinking",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 31000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 17.81,
      "mu": 19.95,
      "sigma": 0.71,
      "rank": 239,
      "of": 395,
      "games": 50
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.744,
       "pct": 74.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.831,
       "pct": 83.1
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.239,
       "pct": 23.9
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.306,
       "pct": 30.6
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.63,
       "pct": 63
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.566,
       "pct": 56.6
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.573,
       "pct": 57.3
      }
     ]
    },
    {
     "id": "qwen3-vl-32b-instruct",
     "name": "Qwen3 VL 32B Instruct",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 33000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 19.83,
      "mu": 22.07,
      "sigma": 0.75,
      "rank": 221,
      "of": 395,
      "games": 45
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.689,
       "pct": 68.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.662,
       "pct": 66.2
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.326,
       "pct": 32.6
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.653,
       "pct": 65.3
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.628,
       "pct": 62.8
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.579,
       "pct": 57.9
      }
     ]
    },
    {
     "id": "qwen3-vl-32b-thinking",
     "name": "Qwen3 VL 32B Thinking",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 33000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 23.21,
      "mu": 25.44,
      "sigma": 0.74,
      "rank": 198,
      "of": 395,
      "games": 47
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.731,
       "pct": 73.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.837,
       "pct": 83.7
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.554,
       "pct": 55.4
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.41,
       "pct": 41
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.681,
       "pct": 68.1
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.652,
       "pct": 65.2
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.571,
       "pct": 57.1
      }
     ]
    },
    {
     "id": "qwen3-vl-4b-instruct",
     "name": "Qwen3 VL 4B Instruct",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 4000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 10.22,
      "mu": 12.52,
      "sigma": 0.77,
      "rank": 287,
      "of": 395,
      "games": 45
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.466,
       "pct": 46.6
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.48,
       "pct": 48
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.262,
       "pct": 26.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.532,
       "pct": 53.2
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.397,
       "pct": 39.7
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.595,
       "pct": 59.5
      }
     ]
    },
    {
     "id": "qwen3-vl-4b-thinking",
     "name": "Qwen3 VL 4B Thinking",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 4000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 12.46,
      "mu": 14.68,
      "sigma": 0.74,
      "rank": 275,
      "of": 395,
      "games": 48
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.641,
       "pct": 64.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.745,
       "pct": 74.5
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.314,
       "pct": 31.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.57,
       "pct": 57
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.503,
       "pct": 50.3
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.492,
       "pct": 49.2
      }
     ]
    },
    {
     "id": "qwen3-vl-8b-instruct",
     "name": "Qwen3 VL 8B Instruct",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 9000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 13.4,
      "mu": 15.63,
      "sigma": 0.74,
      "rank": 266,
      "of": 395,
      "games": 46
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.459,
       "pct": 45.9
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.339,
       "pct": 33.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.559,
       "pct": 55.9
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.464,
       "pct": 46.4
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.546,
       "pct": 54.6
      }
     ]
    },
    {
     "id": "qwen3-vl-8b-thinking",
     "name": "Qwen3 VL 8B Thinking",
     "released": "2025-09-22",
     "announced": "2025-09-22",
     "context": null,
     "params": 9000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 15.79,
      "mu": 17.94,
      "sigma": 0.72,
      "rank": 250,
      "of": 395,
      "games": 50
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.699,
       "pct": 69.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.803,
       "pct": 80.3
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.496,
       "pct": 49.6
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.339,
       "pct": 33.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.604,
       "pct": 60.4
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.53,
       "pct": 53
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.466,
       "pct": 46.6
      }
     ]
    },
    {
     "id": "qwen3-next-80b-a3b-base",
     "name": "Qwen3-Next-80B-A3B-Base",
     "released": "2025-09-10",
     "announced": "2025-09-10",
     "context": null,
     "params": 80000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "qwen3-next-80b-a3b-instruct",
     "name": "Qwen3-Next-80B-A3B-Instruct",
     "released": "2025-09-10",
     "announced": "2025-09-10",
     "context": 262144,
     "params": 80000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.09,
     "priceOut": 1.1,
     "ability": {
      "index": "general",
      "score": 19.7,
      "mu": 22.52,
      "sigma": 0.94,
      "rank": 222,
      "of": 395,
      "games": 24
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.729,
       "pct": 72.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.695,
       "pct": 69.5
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.609,
       "pct": 60.9
      }
     ]
    },
    {
     "id": "qwen3-next-80b-a3b-thinking",
     "name": "Qwen3-Next-80B-A3B-Thinking",
     "released": "2025-09-10",
     "announced": "2025-09-10",
     "context": null,
     "params": 80000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 23.36,
      "mu": 26.24,
      "sigma": 0.96,
      "rank": 196,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.772,
       "pct": 77.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.878,
       "pct": 87.8
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.696,
       "pct": 69.6
      }
     ]
    },
    {
     "id": "qwen3-235b-a22b-thinking-2507",
     "name": "Qwen3-235B-A22B-Thinking-2507",
     "released": "2025-07-25",
     "announced": "2025-07-25",
     "context": null,
     "params": 235000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 27.65,
      "mu": 30.47,
      "sigma": 0.94,
      "rank": 161,
      "of": 395,
      "games": 24
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.811,
       "pct": 81.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.182,
       "pct": 18.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.923,
       "pct": 92.3
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.678,
       "pct": 67.8
      }
     ]
    },
    {
     "id": "qwen3-235b-a22b-instruct-2507",
     "name": "Qwen3-235B-A22B-Instruct-2507",
     "released": "2025-07-22",
     "announced": "2025-07-22",
     "context": 262144,
     "params": 235000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.09,
     "priceOut": 0.55,
     "ability": {
      "index": "general",
      "score": 23.7,
      "mu": 26.5,
      "sigma": 0.93,
      "rank": 191,
      "of": 395,
      "games": 25
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.775,
       "pct": 77.5
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.703,
       "pct": 70.3
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.543,
       "pct": 54.3
      }
     ]
    },
    {
     "id": "qwen3-235b-a22b",
     "name": "Qwen3 235B A22B",
     "released": "2025-04-29",
     "announced": "2025-04-29",
     "context": null,
     "params": 235000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 15.08,
      "mu": 18.09,
      "sigma": 1,
      "rank": 255,
      "of": 395,
      "games": 21
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.4747,
       "pct": 47.5
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.815,
       "pct": 81.5
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.867,
       "pct": 86.7
      }
     ]
    },
    {
     "id": "qwen3-30b-a3b",
     "name": "Qwen3 30B A3B",
     "released": "2025-04-29",
     "announced": "2025-04-29",
     "context": 128000,
     "params": 30500000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.1,
     "priceOut": 0.44,
     "ability": {
      "index": "general",
      "score": 16.8,
      "mu": 21.33,
      "sigma": 1.51,
      "rank": 243,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.658,
       "pct": 65.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.709,
       "pct": 70.9
      }
     ]
    },
    {
     "id": "qwen3-32b",
     "name": "Qwen3 32B",
     "released": "2025-04-29",
     "announced": "2025-04-29",
     "context": 128000,
     "params": 32800000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.08,
     "priceOut": 0.28,
     "ability": {
      "index": "general",
      "score": 18,
      "mu": 22.7,
      "sigma": 1.57,
      "rank": 237,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.729,
       "pct": 72.9
      }
     ]
    },
    {
     "id": "qwen3-14b",
     "name": "Qwen3 14B",
     "released": "2025-04-28",
     "announced": "2025-04-28",
     "context": 40960,
     "params": 14000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.12,
     "priceOut": 0.24,
     "ability": {
      "index": "general",
      "score": 17.65,
      "mu": 21.14,
      "sigma": 1.17,
      "rank": 240,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.704,
       "pct": 70.4
      }
     ]
    },
    {
     "id": "qwen2.5-omni-7b",
     "name": "Qwen2.5-Omni-7B",
     "released": "2025-03-27",
     "announced": "2025-03-27",
     "context": null,
     "params": 7000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 4.7,
      "mu": 7.51,
      "sigma": 0.94,
      "rank": 324,
      "of": 395,
      "games": 30
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.308,
       "pct": 30.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.592,
       "pct": 59.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.366,
       "pct": 36.6
      }
     ]
    },
    {
     "id": "qwq-32b",
     "name": "QwQ-32B",
     "released": "2025-03-05",
     "announced": "2025-03-05",
     "context": null,
     "params": 32500000000,
     "license": "apache_2_0",
     "cutoff": "2024-11-28",
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 14.27,
      "mu": 19.09,
      "sigma": 1.61,
      "rank": 258,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.652,
       "pct": 65.2
      }
     ]
    },
    {
     "id": "qwen2.5-vl-32b",
     "name": "Qwen2.5 VL 32B Instruct",
     "released": "2025-02-28",
     "announced": "2025-02-28",
     "context": null,
     "params": 33500000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 9.26,
      "mu": 12.1,
      "sigma": 0.95,
      "rank": 294,
      "of": 395,
      "games": 28
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.46,
       "pct": 46
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.0592,
       "pct": 5.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.7,
       "pct": 70
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.495,
       "pct": 49.5
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.394,
       "pct": 39.4
      }
     ]
    },
    {
     "id": "qwen3-coder-480b-a35b-instruct",
     "name": "Qwen3-Coder 480B A35B Instruct",
     "released": "2025-01-31",
     "announced": "2025-01-31",
     "context": 262144,
     "params": 480000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.3,
     "priceOut": 1,
     "ability": {
      "index": "general",
      "score": 20.63,
      "mu": 25.19,
      "sigma": 1.52,
      "rank": 215,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.696,
       "pct": 69.6
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.775,
       "pct": 77.5
      }
     ]
    },
    {
     "id": "qwen2.5-vl-72b",
     "name": "Qwen2.5 VL 72B Instruct",
     "released": "2025-01-26",
     "announced": "2025-01-26",
     "context": null,
     "params": 72000000000,
     "license": "tongyi_qianwen",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 12.22,
      "mu": 15.21,
      "sigma": 1,
      "rank": 276,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.0883,
       "pct": 8.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.702,
       "pct": 70.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.511,
       "pct": 51.1
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.436,
       "pct": 43.6
      }
     ]
    },
    {
     "id": "qwen2.5-vl-7b",
     "name": "Qwen2.5 VL 7B Instruct",
     "released": "2025-01-26",
     "announced": "2025-01-26",
     "context": null,
     "params": 8290000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 6.07,
      "mu": 9.16,
      "sigma": 1.03,
      "rank": 318,
      "of": 395,
      "games": 29
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.586,
       "pct": 58.6
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.383,
       "pct": 38.3
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.29,
       "pct": 29
      }
     ]
    },
    {
     "id": "qwen3-coder",
     "name": "Qwen3-Coder",
     "released": "2025-01-01",
     "announced": "2025-01-01",
     "context": null,
     "params": 480000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "qvq-72b-preview",
     "name": "QvQ-72B-Preview",
     "released": "2024-12-25",
     "announced": "2024-12-25",
     "context": null,
     "params": 73400000000,
     "license": "qwen",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 7.42,
      "mu": 14.75,
      "sigma": 2.44,
      "rank": 308,
      "of": 395,
      "games": 3
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.703,
       "pct": 70.3
      }
     ]
    },
    {
     "id": "qwq-32b-preview",
     "name": "QwQ-32B-Preview",
     "released": "2024-11-28",
     "announced": "2024-11-28",
     "context": null,
     "params": 32500000000,
     "license": "apache_2_0",
     "cutoff": "2024-11-28",
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 8.46,
      "mu": 14.68,
      "sigma": 2.07,
      "rank": 299,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.652,
       "pct": 65.2
      }
     ]
    },
    {
     "id": "qwen-2.5-14b-instruct",
     "name": "Qwen2.5 14B Instruct",
     "released": "2024-09-19",
     "announced": "2024-09-19",
     "context": null,
     "params": 14700000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 3.32,
      "mu": 6.87,
      "sigma": 1.18,
      "rank": 331,
      "of": 395,
      "games": 15
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.455,
       "pct": 45.5
      }
     ]
    },
    {
     "id": "qwen-2.5-32b-instruct",
     "name": "Qwen2.5 32B Instruct",
     "released": "2024-09-19",
     "announced": "2024-09-19",
     "context": null,
     "params": 32500000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 7.23,
      "mu": 10.55,
      "sigma": 1.11,
      "rank": 311,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.495,
       "pct": 49.5
      }
     ]
    },
    {
     "id": "qwen-2.5-72b-instruct",
     "name": "Qwen2.5 72B Instruct",
     "released": "2024-09-19",
     "announced": "2024-09-19",
     "context": 32768,
     "params": 72700000000,
     "license": "qwen",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.36,
     "priceOut": 0.4,
     "ability": {
      "index": "general",
      "score": 11.63,
      "mu": 15.24,
      "sigma": 1.2,
      "rank": 279,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.49,
       "pct": 49
      }
     ]
    },
    {
     "id": "qwen-2.5-7b-instruct",
     "name": "Qwen2.5 7B Instruct",
     "released": "2024-09-19",
     "announced": "2024-09-19",
     "context": null,
     "params": 7610000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 1.99,
      "mu": 5.64,
      "sigma": 1.22,
      "rank": 339,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.364,
       "pct": 36.4
      }
     ]
    },
    {
     "id": "qwen-2.5-coder-32b-instruct",
     "name": "Qwen2.5-Coder 32B Instruct",
     "released": "2024-09-19",
     "announced": "2024-09-19",
     "context": null,
     "params": 32000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 1.57,
      "mu": 5.23,
      "sigma": 1.22,
      "rank": 343,
      "of": 395,
      "games": 13
     },
     "benchmarks": []
    },
    {
     "id": "qwen-2.5-coder-7b-instruct",
     "name": "Qwen2.5-Coder 7B Instruct",
     "released": "2024-09-19",
     "announced": "2024-09-19",
     "context": null,
     "params": 7000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -3.65,
      "mu": -0.03,
      "sigma": 1.21,
      "rank": 369,
      "of": 395,
      "games": 14
     },
     "benchmarks": []
    },
    {
     "id": "qwen2-vl-72b",
     "name": "Qwen2-VL-72B-Instruct",
     "released": "2024-08-29",
     "announced": "2024-08-29",
     "context": null,
     "params": 73400000000,
     "license": "tongyi_qianwen",
     "cutoff": "2023-06-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 13.87,
      "mu": 18.15,
      "sigma": 1.43,
      "rank": 263,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.462,
       "pct": 46.2
      }
     ]
    },
    {
     "id": "qwen2-72b-instruct",
     "name": "Qwen2 72B Instruct",
     "released": "2024-07-23",
     "announced": "2024-07-23",
     "context": null,
     "params": 72000000000,
     "license": "tongyi_qianwen",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 5.29,
      "mu": 8.63,
      "sigma": 1.12,
      "rank": 320,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.424,
       "pct": 42.4
      }
     ]
    },
    {
     "id": "qwen2-7b-instruct",
     "name": "Qwen2 7B Instruct",
     "released": "2024-07-23",
     "announced": "2024-07-23",
     "context": null,
     "params": 7620000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -4.96,
      "mu": -1,
      "sigma": 1.32,
      "rank": 375,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.253,
       "pct": 25.3
      }
     ]
    }
   ]
  },
  {
   "id": "llama",
   "name": "Llama",
   "org": "Meta",
   "orgId": "meta",
   "look": "白色猫耳与宽松外套 · 蓝色“∞”发夹、毛球抽绳",
   "x": 21.5,
   "y": 41,
   "band": [
    18.8,
    25.3
   ],
   "abilityIndex": "general",
   "versionCount": 18,
   "best": {
    "id": "muse-wonder-full",
    "name": "Muse Wonder Full",
    "ability": {
     "index": "general",
     "score": 52.62,
     "mu": 56.27,
     "sigma": 1.22,
     "rank": 12,
     "of": 395,
     "games": 16
    },
    "priceIn": null,
    "priceOut": null
   },
   "versions": [
    {
     "id": "muse-spark-open",
     "name": "Muse Spark Open",
     "released": "2026-10-15",
     "announced": "2026-10-15",
     "context": 1048576,
     "params": 816000000000,
     "license": "muse_model_license",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 4.25,
     "ability": {
      "index": "general",
      "score": 45.32,
      "mu": 48.79,
      "sigma": 1.16,
      "rank": 42,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.89,
       "pct": 89
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.585,
       "pct": 58.5
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.892,
       "pct": 89.2
      }
     ]
    },
    {
     "id": "muse-wonder",
     "name": "Muse Wonder",
     "released": "2026-10-12",
     "announced": "2026-10-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 49.3,
      "mu": 52.94,
      "sigma": 1.22,
      "rank": 24,
      "of": 395,
      "games": 16
     },
     "benchmarks": []
    },
    {
     "id": "muse-wonder-full",
     "name": "Muse Wonder Full",
     "released": "2026-10-12",
     "announced": "2026-10-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 52.62,
      "mu": 56.27,
      "sigma": 1.22,
      "rank": 12,
      "of": 395,
      "games": 16
     },
     "benchmarks": []
    },
    {
     "id": "muse-spark-1.3",
     "name": "Muse Spark 1.3",
     "released": "2026-09-02",
     "announced": "2026-09-02",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 4.25,
     "ability": {
      "index": "general",
      "score": 52.19,
      "mu": 56.76,
      "sigma": 1.52,
      "rank": 13,
      "of": 395,
      "games": 10
     },
     "benchmarks": [
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.985,
       "pct": 98.5
      }
     ]
    },
    {
     "id": "muse-glimmer-30b",
     "name": "Muse Glimmer-30B",
     "released": "2026-08-10",
     "announced": "2026-08-10",
     "context": 131072,
     "params": 29600000000,
     "license": "apache_2_0",
     "cutoff": "2026-01-04",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.3,
     "priceOut": 1.2,
     "ability": {
      "index": "general",
      "score": 35.2,
      "mu": 37.97,
      "sigma": 0.93,
      "rank": 106,
      "of": 395,
      "games": 26
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.835,
       "pct": 83.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.22,
       "pct": 22
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.76,
       "pct": 76
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.512,
       "pct": 51.2
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.436,
       "pct": 43.6
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.755,
       "pct": 75.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.74,
       "pct": 74
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.788,
       "pct": 78.8
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.754,
       "pct": 75.4
      }
     ]
    },
    {
     "id": "muse-spark-1.2",
     "name": "Muse Spark 1.2",
     "released": "2026-08-05",
     "announced": "2026-08-05",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 4.25,
     "ability": {
      "index": "general",
      "score": 37.05,
      "mu": 45.57,
      "sigma": 2.84,
      "rank": 88,
      "of": 395,
      "games": 2
     },
     "benchmarks": []
    },
    {
     "id": "muse-spark-1.1",
     "name": "Muse Spark 1.1",
     "released": "2026-07-09",
     "announced": "2026-07-09",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 4.25,
     "ability": {
      "index": "general",
      "score": 48.26,
      "mu": 52.21,
      "sigma": 1.32,
      "rank": 30,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.621,
       "pct": 62.1
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.615,
       "pct": 61.5
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.756,
       "pct": 75.6
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.884,
       "pct": 88.4
      }
     ]
    },
    {
     "id": "muse-spark",
     "name": "Muse Spark",
     "released": "2026-04-08",
     "announced": "2026-04-08",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 41.58,
      "mu": 44.86,
      "sigma": 1.1,
      "rank": 69,
      "of": 395,
      "games": 18
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.895,
       "pct": 89.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.584,
       "pct": 58.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.774,
       "pct": 77.4
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.524,
       "pct": 52.4
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.425,
       "pct": 42.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.804,
       "pct": 80.4
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.864,
       "pct": 86.4
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.841,
       "pct": 84.1
      }
     ]
    },
    {
     "id": "llama-guard-4-12b",
     "name": "Llama Guard 4 12B",
     "released": "2025-04-28",
     "announced": "2025-04-28",
     "context": 163840,
     "params": 12000000000,
     "license": "llama_4_community_license_agreement",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.18,
     "priceOut": 0.18,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "llama-4-maverick",
     "name": "Llama 4 Maverick",
     "released": "2025-04-05",
     "announced": "2025-04-05",
     "context": 1048576,
     "params": 400000000000,
     "license": "llama_4_community_license_agreement",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 0.8,
     "ability": {
      "index": "general",
      "score": 14.18,
      "mu": 17.96,
      "sigma": 1.26,
      "rank": 260,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.698,
       "pct": 69.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.734,
       "pct": 73.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.596,
       "pct": 59.6
      }
     ]
    },
    {
     "id": "llama-4-scout",
     "name": "Llama 4 Scout",
     "released": "2025-04-05",
     "announced": "2025-04-05",
     "context": 327680,
     "params": 109000000000,
     "license": "llama_4_community_license_agreement",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.3,
     "ability": {
      "index": "general",
      "score": 7.34,
      "mu": 11.23,
      "sigma": 1.3,
      "rank": 309,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.572,
       "pct": 57.2
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.694,
       "pct": 69.4
      }
     ]
    },
    {
     "id": "llama-3.3-70b-instruct",
     "name": "Llama 3.3 70B Instruct",
     "released": "2024-12-06",
     "announced": "2024-12-06",
     "context": 131072,
     "params": 70000000000,
     "license": "llama_3_3_community_license_agreement",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.1,
     "priceOut": 0.32,
     "ability": {
      "index": "general",
      "score": 13.3,
      "mu": 17.93,
      "sigma": 1.54,
      "rank": 268,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.505,
       "pct": 50.5
      }
     ]
    },
    {
     "id": "llama-3.2-11b-instruct",
     "name": "Llama 3.2 11B Instruct",
     "released": "2024-09-25",
     "announced": "2024-09-25",
     "context": null,
     "params": 10600000000,
     "license": "llama_3_2_community_license",
     "cutoff": "2023-12-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -1.76,
      "mu": 2.4,
      "sigma": 1.39,
      "rank": 360,
      "of": 395,
      "games": 10
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.328,
       "pct": 32.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.507,
       "pct": 50.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.33,
       "pct": 33
      }
     ]
    },
    {
     "id": "llama-3.2-3b-instruct",
     "name": "Llama 3.2 3B Instruct",
     "released": "2024-09-25",
     "announced": "2024-09-25",
     "context": null,
     "params": 3210000000,
     "license": "llama_3_2_community_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -6.54,
      "mu": -2.19,
      "sigma": 1.45,
      "rank": 386,
      "of": 395,
      "games": 10
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.328,
       "pct": 32.8
      }
     ]
    },
    {
     "id": "llama-3.2-90b-instruct",
     "name": "Llama 3.2 90B Instruct",
     "released": "2024-09-25",
     "announced": "2024-09-25",
     "context": null,
     "params": 90000000000,
     "license": "llama3_2",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 4.74,
      "mu": 8.58,
      "sigma": 1.28,
      "rank": 323,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.467,
       "pct": 46.7
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.603,
       "pct": 60.3
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.452,
       "pct": 45.2
      }
     ]
    },
    {
     "id": "llama-3.1-405b-instruct",
     "name": "Llama 3.1 405B Instruct",
     "released": "2024-07-23",
     "announced": "2024-07-23",
     "context": null,
     "params": 405000000000,
     "license": "llama_3_1_community_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 14.22,
      "mu": 18.18,
      "sigma": 1.32,
      "rank": 259,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.507,
       "pct": 50.7
      }
     ]
    },
    {
     "id": "llama-3.1-70b-instruct",
     "name": "Llama 3.1 70B Instruct",
     "released": "2024-07-23",
     "announced": "2024-07-23",
     "context": 131072,
     "params": 70000000000,
     "license": "llama_3_1_community_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.4,
     "priceOut": 0.4,
     "ability": {
      "index": "general",
      "score": 7.14,
      "mu": 11.16,
      "sigma": 1.34,
      "rank": 312,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.417,
       "pct": 41.7
      }
     ]
    },
    {
     "id": "llama-3.1-8b-instruct",
     "name": "Llama 3.1 8B Instruct",
     "released": "2024-07-23",
     "announced": "2024-07-23",
     "context": 131072,
     "params": 8000000000,
     "license": "llama_3_1_community_license",
     "cutoff": "2023-12-31",
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.02,
     "priceOut": 0.04,
     "ability": {
      "index": "general",
      "score": -3.06,
      "mu": 1.13,
      "sigma": 1.4,
      "rank": 365,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.304,
       "pct": 30.4
      }
     ]
    }
   ]
  },
  {
   "id": "seed",
   "name": "Seed",
   "org": "字节跳动 · 豆包",
   "orgId": "bytedance",
   "look": "紫蓝渐变长发与青色圆环 · 工牌挂绳与记录板",
   "x": 29,
   "y": 44,
   "band": [
    25.3,
    32.3
   ],
   "abilityIndex": "general",
   "versionCount": 7,
   "best": {
    "id": "seed-2.1-pro",
    "name": "Seed 2.1 Pro",
    "ability": {
     "index": "general",
     "score": 45.71,
     "mu": 48.02,
     "sigma": 0.77,
     "rank": 40,
     "of": 395,
     "games": 70
    },
    "priceIn": null,
    "priceOut": null
   },
   "versions": [
    {
     "id": "seed-2.1-pro",
     "name": "Seed 2.1 Pro",
     "released": "2026-06-24",
     "announced": "2026-06-24",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 45.71,
      "mu": 48.02,
      "sigma": 0.77,
      "rank": 40,
      "of": 395,
      "games": 70
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.557,
       "pct": 55.7
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.575,
       "pct": 57.5
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.598,
       "pct": 59.8
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.838,
       "pct": 83.8
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.506,
       "pct": 50.6
      },
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.338,
       "pct": 33.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.862,
       "pct": 86.2
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.788,
       "pct": 78.8
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.827,
       "pct": 82.7
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.864,
       "pct": 86.4
      }
     ]
    },
    {
     "id": "seed-2.1-turbo",
     "name": "Seed 2.1 Turbo",
     "released": "2026-06-24",
     "announced": "2026-06-24",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 42.52,
      "mu": 44.82,
      "sigma": 0.77,
      "rank": 61,
      "of": 395,
      "games": 69
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.546,
       "pct": 54.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.57,
       "pct": 57
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.578,
       "pct": 57.8
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.803,
       "pct": 80.3
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.491,
       "pct": 49.1
      },
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.292,
       "pct": 29.2
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.849,
       "pct": 84.9
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.764,
       "pct": 76.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.822,
       "pct": 82.2
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.836,
       "pct": 83.6
      }
     ]
    },
    {
     "id": "seed-2.0-code",
     "name": "Seed 2.0 Code",
     "released": "2026-04-29",
     "announced": "2026-04-29",
     "context": 256000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.5,
     "priceOut": 3,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "seed-1.8",
     "name": "Seed 1.8",
     "released": "2026-02-17",
     "announced": "2026-02-17",
     "context": 256000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.25,
     "priceOut": 2,
     "ability": {
      "index": "general",
      "score": 33.95,
      "mu": 36.3,
      "sigma": 0.78,
      "rank": 115,
      "of": 395,
      "games": 56
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.943,
       "pct": 94.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.729,
       "pct": 72.9
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.676,
       "pct": 67.6
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.619,
       "pct": 61.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.834,
       "pct": 83.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.732,
       "pct": 73.2
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.714,
       "pct": 71.4
      }
     ]
    },
    {
     "id": "seed-2.0-mini",
     "name": "Seed 2.0 Mini",
     "released": "2026-02-17",
     "announced": "2026-02-17",
     "context": 256000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.4,
     "ability": {
      "index": "general",
      "score": 27.81,
      "mu": 30.29,
      "sigma": 0.83,
      "rank": 159,
      "of": 395,
      "games": 79
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.79,
       "pct": 79
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.87,
       "pct": 87
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.015,
       "pct": 1.5
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.797,
       "pct": 79.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.714,
       "pct": 71.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.816,
       "pct": 81.6
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.708,
       "pct": 70.8
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.514,
       "pct": 51.4
      }
     ]
    },
    {
     "id": "seed-2.0-lite",
     "name": "Seed 2.0 Lite",
     "released": "2026-02-14",
     "announced": "2026-02-14",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 31.54,
      "mu": 37.13,
      "sigma": 1.86,
      "rank": 132,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.851,
       "pct": 85.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.93,
       "pct": 93
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.735,
       "pct": 73.5
      }
     ]
    },
    {
     "id": "seed-2.0-pro",
     "name": "Seed 2.0 Pro",
     "released": "2026-02-14",
     "announced": "2026-02-14",
     "context": 256000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.5,
     "priceOut": 3,
     "ability": {
      "index": "general",
      "score": 39.15,
      "mu": 44.27,
      "sigma": 1.71,
      "rank": 75,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.889,
       "pct": 88.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.983,
       "pct": 98.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.765,
       "pct": 76.5
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.773,
       "pct": 77.3
      }
     ]
    }
   ]
  },
  {
   "id": "grok",
   "name": "Grok",
   "org": "xAI",
   "orgId": "xai",
   "look": "金发与黑色礼服 · 蝠翼、新月与行星环王冠",
   "x": 35.5,
   "y": 43,
   "band": [
    32.3,
    38
   ],
   "abilityIndex": "general",
   "versionCount": 24,
   "best": {
    "id": "grok-4.7",
    "name": "Grok 4.7",
    "ability": {
     "index": "general",
     "score": 46.68,
     "mu": 51.68,
     "sigma": 1.66,
     "rank": 37,
     "of": 395,
     "games": 9
    },
    "priceIn": 2,
    "priceOut": 6
   },
   "versions": [
    {
     "id": "grok-4.7",
     "name": "Grok 4.7",
     "released": "2026-09-21",
     "announced": "2026-09-21",
     "context": 500000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 6,
     "ability": {
      "index": "general",
      "score": 46.68,
      "mu": 51.68,
      "sigma": 1.66,
      "rank": 37,
      "of": 395,
      "games": 9
     },
     "benchmarks": []
    },
    {
     "id": "grok-4.6",
     "name": "Grok 4.6",
     "released": "2026-08-12",
     "announced": "2026-08-12",
     "context": 500000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-02-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 6,
     "ability": {
      "index": "general",
      "score": 44.47,
      "mu": 49.57,
      "sigma": 1.7,
      "rank": 47,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.575,
       "pct": 57.5
      }
     ]
    },
    {
     "id": "grok-4.5",
     "name": "Grok 4.5",
     "released": "2026-07-16",
     "announced": "2026-07-16",
     "context": 500000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-02-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 6,
     "ability": {
      "index": "general",
      "score": 45.51,
      "mu": 49.39,
      "sigma": 1.29,
      "rank": 41,
      "of": 395,
      "games": 13
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.93,
       "pct": 93
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.647,
       "pct": 64.7
      }
     ]
    },
    {
     "id": "grok-4.3",
     "name": "Grok 4.3",
     "released": "2026-05-06",
     "announced": "2026-05-06",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 1.25,
     "priceOut": 2.5,
     "ability": {
      "index": "general",
      "score": 21.98,
      "mu": 33.6,
      "sigma": 3.87,
      "rank": 202,
      "of": 395,
      "games": 1
     },
     "benchmarks": []
    },
    {
     "id": "grok-4.20-beta-0309-non-reasoning",
     "name": "Grok-4.20 Beta Non-Reasoning",
     "released": "2026-03-09",
     "announced": "2026-03-09",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -3.67,
      "mu": 12.48,
      "sigma": 5.38,
      "rank": 370,
      "of": 395,
      "games": 1
     },
     "benchmarks": []
    },
    {
     "id": "grok-4.20-beta-0309-reasoning",
     "name": "Grok-4.20 Beta Reasoning",
     "released": "2026-03-09",
     "announced": "2026-03-09",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 23.4,
      "mu": 32.23,
      "sigma": 2.95,
      "rank": 195,
      "of": 395,
      "games": 2
     },
     "benchmarks": []
    },
    {
     "id": "grok-4.20-multi-agent-beta-0309",
     "name": "Grok-4.20 Multi-Agent Beta",
     "released": "2026-03-09",
     "announced": "2026-03-09",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "grok-4.1-2025-11-17",
     "name": "Grok-4.1",
     "released": "2025-11-17",
     "announced": "2025-11-17",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 19.27,
      "mu": 29.09,
      "sigma": 3.27,
      "rank": 226,
      "of": 395,
      "games": 2
     },
     "benchmarks": []
    },
    {
     "id": "grok-4-1-fast-non-reasoning",
     "name": "Grok-4.1 Fast Non-Reasoning",
     "released": "2025-11-17",
     "announced": "2025-11-17",
     "context": 2000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 0.5,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "grok-4-1-fast-reasoning",
     "name": "Grok-4.1 Fast Reasoning",
     "released": "2025-11-17",
     "announced": "2025-11-17",
     "context": 2000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 0.5,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "grok-4.1-thinking-2025-11-17",
     "name": "Grok-4.1 Thinking",
     "released": "2025-11-17",
     "announced": "2025-11-17",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 15.72,
      "mu": 27.64,
      "sigma": 3.97,
      "rank": 251,
      "of": 395,
      "games": 3
     },
     "benchmarks": []
    },
    {
     "id": "grok-4-fast",
     "name": "Grok 4 Fast",
     "released": "2025-08-28",
     "announced": "2025-08-28",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 31.18,
      "mu": 35.96,
      "sigma": 1.6,
      "rank": 134,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.857,
       "pct": 85.7
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.2,
       "pct": 20
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.92,
       "pct": 92
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.449,
       "pct": 44.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.95,
       "pct": 95
      }
     ]
    },
    {
     "id": "grok-4-fast-non-reasoning",
     "name": "Grok-4 Fast Non-Reasoning",
     "released": "2025-08-28",
     "announced": "2025-08-28",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "grok-4-fast-reasoning",
     "name": "Grok-4 Fast Reasoning",
     "released": "2025-08-28",
     "announced": "2025-08-28",
     "context": 2000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 0.5,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "grok-code-fast-1",
     "name": "Grok Code Fast 1",
     "released": "2025-08-28",
     "announced": "2025-08-28",
     "context": 256000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.2,
     "priceOut": 1.5,
     "ability": {
      "index": "general",
      "score": 20.38,
      "mu": 31.64,
      "sigma": 3.76,
      "rank": 218,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.708,
       "pct": 70.8
      }
     ]
    },
    {
     "id": "grok-4",
     "name": "Grok-4",
     "released": "2025-07-09",
     "announced": "2025-07-09",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-12-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 33.48,
      "mu": 38.62,
      "sigma": 1.71,
      "rank": 119,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.875,
       "pct": 87.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.4,
       "pct": 40
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.917,
       "pct": 91.7
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.159,
       "pct": 15.9
      }
     ]
    },
    {
     "id": "grok-3",
     "name": "Grok-3",
     "released": "2025-02-17",
     "announced": "2025-02-17",
     "context": 128000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-11-17",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 3,
     "priceOut": 15,
     "ability": {
      "index": "general",
      "score": 29.93,
      "mu": 35.57,
      "sigma": 1.88,
      "rank": 143,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.846,
       "pct": 84.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.933,
       "pct": 93.3
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.78,
       "pct": 78
      }
     ]
    },
    {
     "id": "grok-3-mini",
     "name": "Grok-3 Mini",
     "released": "2025-02-17",
     "announced": "2025-02-17",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-11-17",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 30.87,
      "mu": 37.38,
      "sigma": 2.17,
      "rank": 136,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.84,
       "pct": 84
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.908,
       "pct": 90.8
      }
     ]
    },
    {
     "id": "grok-2-image-1212",
     "name": "Grok-2 Image 1212",
     "released": "2024-12-12",
     "announced": "2024-12-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "grok-2",
     "name": "Grok-2",
     "released": "2024-08-13",
     "announced": "2024-08-13",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 10.93,
      "mu": 15.4,
      "sigma": 1.49,
      "rank": 284,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.56,
       "pct": 56
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.661,
       "pct": 66.1
      }
     ]
    },
    {
     "id": "grok-2-mini",
     "name": "Grok-2 mini",
     "released": "2024-08-13",
     "announced": "2024-08-13",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 8.08,
      "mu": 12.54,
      "sigma": 1.49,
      "rank": 303,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.51,
       "pct": 51
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.632,
       "pct": 63.2
      }
     ]
    },
    {
     "id": "grok-1.5v",
     "name": "Grok-1.5V",
     "released": "2024-04-12",
     "announced": "2024-04-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -1.24,
      "mu": 3.71,
      "sigma": 1.65,
      "rank": 358,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.536,
       "pct": 53.6
      }
     ]
    },
    {
     "id": "grok-1.5",
     "name": "Grok-1.5",
     "released": "2024-03-28",
     "announced": "2024-03-28",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -3.14,
      "mu": 1.13,
      "sigma": 1.42,
      "rank": 367,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.359,
       "pct": 35.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.536,
       "pct": 53.6
      }
     ]
    },
    {
     "id": "grok-4-heavy",
     "name": "Grok-4 Heavy",
     "released": null,
     "announced": "2025-07-09",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-12-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 40.57,
      "mu": 46.31,
      "sigma": 1.91,
      "rank": 72,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.884,
       "pct": 88.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.507,
       "pct": 50.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 1,
       "pct": 100
      }
     ]
    }
   ]
  },
  {
   "id": "kimi",
   "name": "Kimi",
   "org": "月之暗面",
   "orgId": "moonshotai",
   "look": "银紫长发与非对称女仆装 · “K”徽章、彩虹缎带",
   "x": 40.5,
   "y": 43,
   "band": [
    38,
    44.5
   ],
   "abilityIndex": "general",
   "versionCount": 11,
   "best": {
    "id": "kimi-k3",
    "name": "Kimi K3",
    "ability": {
     "index": "general",
     "score": 51.93,
     "mu": 54.8,
     "sigma": 0.96,
     "rank": 14,
     "of": 395,
     "games": 26
    },
    "priceIn": 2.85,
    "priceOut": 14.25
   },
   "versions": [
    {
     "id": "kimi-k2.8",
     "name": "Kimi K2.8 Preview",
     "released": "2026-09-11",
     "announced": "2026-09-11",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "kimi-k3",
     "name": "Kimi K3",
     "released": "2026-07-16",
     "announced": "2026-07-16",
     "context": 1048576,
     "params": 2800000000000,
     "license": "kimi_k3",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 2.85,
     "priceOut": 14.25,
     "ability": {
      "index": "general",
      "score": 51.93,
      "mu": 54.8,
      "sigma": 0.96,
      "rank": 14,
      "of": 395,
      "games": 26
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.935,
       "pct": 93.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.56,
       "pct": 56
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.842,
       "pct": 84.2
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.732,
       "pct": 73.2
      },
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.376,
       "pct": 37.6
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.912,
       "pct": 91.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.816,
       "pct": 81.6
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.913,
       "pct": 91.3
      }
     ]
    },
    {
     "id": "kimi-k2.7-code",
     "name": "Kimi K2.7 Code",
     "released": "2026-06-12",
     "announced": "2026-06-12",
     "context": 262144,
     "params": 1000000000000,
     "license": "modified_mit_license",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.68,
     "priceOut": 3.4,
     "ability": {
      "index": "general",
      "score": 38.69,
      "mu": 43.99,
      "sigma": 1.77,
      "rank": 79,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.76,
       "pct": 76
      }
     ]
    },
    {
     "id": "kimi-k2.6",
     "name": "Kimi K2.6",
     "released": "2026-04-20",
     "announced": "2026-04-20",
     "context": 262144,
     "params": 1000000000000,
     "license": "modified_mit_license",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.75,
     "priceOut": 3.5,
     "ability": {
      "index": "general",
      "score": 43.44,
      "mu": 46.11,
      "sigma": 0.89,
      "rank": 54,
      "of": 395,
      "games": 28
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.905,
       "pct": 90.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.364,
       "pct": 36.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.802,
       "pct": 80.2
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.586,
       "pct": 58.6
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.522,
       "pct": 52.2
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.5,
       "pct": 50
      },
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.279,
       "pct": 27.9
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.863,
       "pct": 86.3
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.801,
       "pct": 80.1
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.867,
       "pct": 86.7
      }
     ]
    },
    {
     "id": "kimi-k2.5",
     "name": "Kimi K2.5",
     "released": "2026-01-27",
     "announced": "2026-01-27",
     "context": null,
     "params": 1000000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 38.46,
      "mu": 40.92,
      "sigma": 0.82,
      "rank": 80,
      "of": 395,
      "games": 40
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.876,
       "pct": 87.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.502,
       "pct": 50.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.961,
       "pct": 96.1
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.768,
       "pct": 76.8
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.507,
       "pct": 50.7
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.487,
       "pct": 48.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.749,
       "pct": 74.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.785,
       "pct": 78.5
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.775,
       "pct": 77.5
      }
     ]
    },
    {
     "id": "kimi-k2-0905",
     "name": "Kimi K2 0905",
     "released": "2025-09-05",
     "announced": "2025-09-05",
     "context": null,
     "params": 1000000000000,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 21.2,
      "mu": 26.39,
      "sigma": 1.73,
      "rank": 211,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.758,
       "pct": 75.8
      }
     ]
    },
    {
     "id": "kimi-k2-instruct-0905",
     "name": "Kimi K2-Instruct-0905",
     "released": "2025-09-05",
     "announced": "2025-09-05",
     "context": null,
     "params": 1000000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 21.08,
      "mu": 23.74,
      "sigma": 0.89,
      "rank": 212,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.751,
       "pct": 75.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.047,
       "pct": 4.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.495,
       "pct": 49.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.658,
       "pct": 65.8
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.25,
       "pct": 25
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.31,
       "pct": 31
      }
     ]
    },
    {
     "id": "kimi-k2-thinking-0905",
     "name": "Kimi K2-Thinking-0905",
     "released": "2025-09-05",
     "announced": "2025-09-05",
     "context": null,
     "params": 1000000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 35.45,
      "mu": 38.57,
      "sigma": 1.04,
      "rank": 104,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.845,
       "pct": 84.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.51,
       "pct": 51
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 1,
       "pct": 100
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.713,
       "pct": 71.3
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.448,
       "pct": 44.8
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.471,
       "pct": 47.1
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.602,
       "pct": 60.2
      }
     ]
    },
    {
     "id": "kimi-k2-base",
     "name": "Kimi K2 Base",
     "released": "2025-07-11",
     "announced": "2025-07-11",
     "context": null,
     "params": 1000000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 12.98,
      "mu": 16.98,
      "sigma": 1.33,
      "rank": 270,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.481,
       "pct": 48.1
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.353,
       "pct": 35.3
      }
     ]
    },
    {
     "id": "kimi-k2-instruct",
     "name": "Kimi K2 Instruct",
     "released": "2025-07-11",
     "announced": "2025-07-11",
     "context": null,
     "params": 1000000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 21.38,
      "mu": 24,
      "sigma": 0.87,
      "rank": 208,
      "of": 395,
      "games": 30
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.751,
       "pct": 75.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.047,
       "pct": 4.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.495,
       "pct": 49.5
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.3,
       "pct": 30
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.31,
       "pct": 31
      }
     ]
    },
    {
     "id": "kimi-k1.5",
     "name": "Kimi-k1.5",
     "released": "2025-01-20",
     "announced": "2025-01-20",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 16.69,
      "mu": 21.46,
      "sigma": 1.59,
      "rank": 244,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.7,
       "pct": 70
      }
     ]
    }
   ]
  },
  {
   "id": "gpt",
   "name": "GPT",
   "org": "OpenAI",
   "orgId": "openai",
   "look": "白发精灵与龙角 · 白衣主位（这幅画的中心）",
   "x": 48.5,
   "y": 41,
   "band": [
    44.5,
    54.8
   ],
   "abilityIndex": "general",
   "versionCount": 56,
   "best": {
    "id": "gpt-6-astra",
    "name": "GPT-6 Astra",
    "ability": {
     "index": "general",
     "score": 58.2,
     "mu": 61.72,
     "sigma": 1.17,
     "rank": 3,
     "of": 395,
     "games": 23
    },
    "priceIn": 10,
    "priceOut": 50
   },
   "versions": [
    {
     "id": "gpt-6.1-sol",
     "name": "GPT-6.1 Sol",
     "released": "2026-09-29",
     "announced": "2026-09-29",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-04-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 53.59,
      "mu": 57.44,
      "sigma": 1.29,
      "rank": 7,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.6,
       "pct": 60
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.8595,
       "pct": 86
      }
     ]
    },
    {
     "id": "gpt-6-luna",
     "name": "GPT-6 Luna",
     "released": "2026-09-22",
     "announced": "2026-09-22",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-05-18",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.5,
     "ability": {
      "index": "general",
      "score": 43.12,
      "mu": 49.09,
      "sigma": 1.99,
      "rank": 55,
      "of": 395,
      "games": 5
     },
     "benchmarks": []
    },
    {
     "id": "gpt-6-sol",
     "name": "GPT-6 Sol",
     "released": "2026-09-22",
     "announced": "2026-09-22",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-04-20",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 47.8,
      "mu": 53.71,
      "sigma": 1.97,
      "rank": 33,
      "of": 395,
      "games": 5
     },
     "benchmarks": []
    },
    {
     "id": "gpt-rosalind-research",
     "name": "GPT-Rosalind",
     "released": "2026-09-11",
     "announced": "2026-04-16",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 25,
     "ability": {
      "index": "general",
      "score": 31.55,
      "mu": 42.24,
      "sigma": 3.56,
      "rank": 131,
      "of": 395,
      "games": 3
     },
     "benchmarks": []
    },
    {
     "id": "gpt-6-astra",
     "name": "GPT-6 Astra",
     "released": "2026-09-04",
     "announced": "2026-09-03",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-04-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 10,
     "priceOut": 50,
     "ability": {
      "index": "general",
      "score": 58.2,
      "mu": 61.72,
      "sigma": 1.17,
      "rank": 3,
      "of": 395,
      "games": 23
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.96,
       "pct": 96
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.95,
       "pct": 95
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.915,
       "pct": 91.5
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.927,
       "pct": 92.7
      }
     ]
    },
    {
     "id": "gpt-5.6-cyber",
     "name": "GPT-5.6 Cyber",
     "released": "2026-08-10",
     "announced": "2026-08-10",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-02-16",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 12.5,
     "priceOut": 75,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "gpt-5.6-luna",
     "name": "GPT-5.6 Luna",
     "released": "2026-07-09",
     "announced": "2026-07-09",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-02-16",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 1.2,
     "ability": {
      "index": "general",
      "score": 44.17,
      "mu": 46.79,
      "sigma": 0.87,
      "rank": 51,
      "of": 395,
      "games": 45
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.923,
       "pct": 92.3
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.786,
       "pct": 78.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.627,
       "pct": 62.7
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.534,
       "pct": 53.4
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.833,
       "pct": 83.3
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.784,
       "pct": 78.4
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.413,
       "pct": 41.3
      }
     ]
    },
    {
     "id": "gpt-5.6-sol",
     "name": "GPT-5.6 Sol",
     "released": "2026-07-09",
     "announced": "2026-07-09",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-02-16",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 30,
     "ability": {
      "index": "general",
      "score": 53.26,
      "mu": 55.83,
      "sigma": 0.86,
      "rank": 8,
      "of": 395,
      "games": 45
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.946,
       "pct": 94.6
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.89,
       "pct": 89
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.646,
       "pct": 64.6
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.58,
       "pct": 58
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.904,
       "pct": 90.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.83,
       "pct": 83
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.915,
       "pct": 91.5
      }
     ]
    },
    {
     "id": "gpt-5.6-terra",
     "name": "GPT-5.6 Terra",
     "released": "2026-07-09",
     "announced": "2026-07-09",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-02-16",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 12,
     "ability": {
      "index": "general",
      "score": 49.29,
      "mu": 51.77,
      "sigma": 0.83,
      "rank": 25,
      "of": 395,
      "games": 45
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.929,
       "pct": 92.9
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.849,
       "pct": 84.9
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.634,
       "pct": 63.4
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.531,
       "pct": 53.1
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.875,
       "pct": 87.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.807,
       "pct": 80.7
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.896,
       "pct": 89.6
      }
     ]
    },
    {
     "id": "gpt-5.5-instant",
     "name": "GPT-5.5 Instant",
     "released": "2026-05-05",
     "announced": "2026-05-05",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-08-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 30,
     "ability": {
      "index": "general",
      "score": 31.8,
      "mu": 36.56,
      "sigma": 1.59,
      "rank": 129,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.856,
       "pct": 85.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.812,
       "pct": 81.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.76,
       "pct": 76
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.816,
       "pct": 81.6
      }
     ]
    },
    {
     "id": "gpt-5.5",
     "name": "GPT-5.5",
     "released": "2026-04-23",
     "announced": "2026-04-23",
     "context": 1050000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-12-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 30,
     "ability": {
      "index": "general",
      "score": 47.25,
      "mu": 50.04,
      "sigma": 0.93,
      "rank": 35,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.936,
       "pct": 93.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.522,
       "pct": 52.2
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.354,
       "pct": 35.4
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.586,
       "pct": 58.6
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.85,
       "pct": 85
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.753,
       "pct": 75.3
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.556,
       "pct": 55.6
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.844,
       "pct": 84.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.832,
       "pct": 83.2
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.74,
       "pct": 74
      }
     ]
    },
    {
     "id": "gpt-5.5-pro",
     "name": "GPT-5.5 Pro",
     "released": "2026-04-23",
     "announced": "2026-04-23",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-12-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 45.89,
      "mu": 52.4,
      "sigma": 2.17,
      "rank": 38,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.572,
       "pct": 57.2
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.396,
       "pct": 39.6
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.901,
       "pct": 90.1
      }
     ]
    },
    {
     "id": "gpt-5.4-mini",
     "name": "GPT-5.4 mini",
     "released": "2026-03-17",
     "announced": "2026-03-17",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-08-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.75,
     "priceOut": 4.5,
     "ability": {
      "index": "general",
      "score": 29.7,
      "mu": 32.77,
      "sigma": 1.02,
      "rank": 145,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.88,
       "pct": 88
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.282,
       "pct": 28.2
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.544,
       "pct": 54.4
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.577,
       "pct": 57.7
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.429,
       "pct": 42.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.766,
       "pct": 76.6
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.336,
       "pct": 33.6
      }
     ]
    },
    {
     "id": "gpt-5.4-nano",
     "name": "GPT-5.4 nano",
     "released": "2026-03-17",
     "announced": "2026-03-17",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-08-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.2,
     "priceOut": 1.25,
     "ability": {
      "index": "general",
      "score": 26.29,
      "mu": 29.34,
      "sigma": 1.02,
      "rank": 174,
      "of": 395,
      "games": 21
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.828,
       "pct": 82.8
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.243,
       "pct": 24.3
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.524,
       "pct": 52.4
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.561,
       "pct": 56.1
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.355,
       "pct": 35.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.661,
       "pct": 66.1
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.331,
       "pct": 33.1
      }
     ]
    },
    {
     "id": "gpt-5.4",
     "name": "GPT-5.4",
     "released": "2026-03-05",
     "announced": "2026-03-05",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2.5,
     "priceOut": 15,
     "ability": {
      "index": "general",
      "score": 41.63,
      "mu": 44.37,
      "sigma": 0.92,
      "rank": 68,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.928,
       "pct": 92.8
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.398,
       "pct": 39.8
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.476,
       "pct": 47.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.577,
       "pct": 57.7
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.733,
       "pct": 73.3
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.672,
       "pct": 67.2
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.546,
       "pct": 54.6
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.827,
       "pct": 82.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.812,
       "pct": 81.2
      }
     ]
    },
    {
     "id": "gpt-5.3-chat-latest",
     "name": "GPT-5.3 Chat",
     "released": "2026-03-04",
     "announced": "2026-03-04",
     "context": 128000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-08-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.75,
     "priceOut": 14,
     "ability": {
      "index": "general",
      "score": 29.02,
      "mu": 38.39,
      "sigma": 3.12,
      "rank": 154,
      "of": 395,
      "games": 2
     },
     "benchmarks": []
    },
    {
     "id": "gpt-5.3-codex",
     "name": "GPT-5.3 Codex",
     "released": "2026-02-05",
     "announced": "2026-02-05",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.75,
     "priceOut": 14,
     "ability": {
      "index": "general",
      "score": 36.28,
      "mu": 42.11,
      "sigma": 1.94,
      "rank": 96,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.568,
       "pct": 56.8
      }
     ]
    },
    {
     "id": "gpt-5.2-codex",
     "name": "GPT-5.2 Codex",
     "released": "2026-01-14",
     "announced": "2026-01-14",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.75,
     "priceOut": 14,
     "ability": {
      "index": "general",
      "score": 34.06,
      "mu": 41.13,
      "sigma": 2.36,
      "rank": 113,
      "of": 395,
      "games": 3
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.564,
       "pct": 56.4
      }
     ]
    },
    {
     "id": "gpt-5.2-2025-12-11",
     "name": "GPT-5.2",
     "released": "2025-12-11",
     "announced": "2025-12-11",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-08-25",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.75,
     "priceOut": 14,
     "ability": {
      "index": "general",
      "score": 41.02,
      "mu": 43.96,
      "sigma": 0.98,
      "rank": 70,
      "of": 395,
      "games": 23
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.924,
       "pct": 92.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.345,
       "pct": 34.5
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 1,
       "pct": 100
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.403,
       "pct": 40.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.8,
       "pct": 80
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.529,
       "pct": 52.9
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.606,
       "pct": 60.6
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.463,
       "pct": 46.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.658,
       "pct": 65.8
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.795,
       "pct": 79.5
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.896,
       "pct": 89.6
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.821,
       "pct": 82.1
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.863,
       "pct": 86.3
      }
     ]
    },
    {
     "id": "gpt-5.2-pro-2025-12-11",
     "name": "GPT-5.2 Pro",
     "released": "2025-12-11",
     "announced": "2025-12-11",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 42.98,
      "mu": 48.02,
      "sigma": 1.68,
      "rank": 58,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.932,
       "pct": 93.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.366,
       "pct": 36.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 1,
       "pct": 100
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.542,
       "pct": 54.2
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.779,
       "pct": 77.9
      }
     ]
    },
    {
     "id": "gpt-5.1-codex",
     "name": "GPT-5.1 Codex",
     "released": "2025-11-19",
     "announced": "2025-11-19",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-09-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 29.37,
      "mu": 37.71,
      "sigma": 2.78,
      "rank": 150,
      "of": 395,
      "games": 3
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.737,
       "pct": 73.7
      }
     ]
    },
    {
     "id": "gpt-5.1-2025-11-13",
     "name": "GPT-5.1",
     "released": "2025-11-13",
     "announced": "2025-11-13",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-09-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 36.21,
      "mu": 40.58,
      "sigma": 1.46,
      "rank": 97,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.94,
       "pct": 94
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.267,
       "pct": 26.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.763,
       "pct": 76.3
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.854,
       "pct": 85.4
      }
     ]
    },
    {
     "id": "gpt-5.1-codex-high",
     "name": "GPT-5.1 Codex High",
     "released": "2025-11-12",
     "announced": "2025-11-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 29.13,
      "mu": 40.45,
      "sigma": 3.77,
      "rank": 153,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.967,
       "pct": 96.7
      }
     ]
    },
    {
     "id": "gpt-5.1-codex-mini",
     "name": "GPT-5.1 Codex Mini",
     "released": "2025-11-12",
     "announced": "2025-11-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -3.13,
      "mu": 8.61,
      "sigma": 3.91,
      "rank": 366,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.421,
       "pct": 42.1
      }
     ]
    },
    {
     "id": "gpt-5.1-high-2025-11-12",
     "name": "GPT-5.1 High",
     "released": "2025-11-12",
     "announced": "2025-11-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 34.95,
      "mu": 42.03,
      "sigma": 2.36,
      "rank": 108,
      "of": 395,
      "games": 3
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.996,
       "pct": 99.6
      }
     ]
    },
    {
     "id": "gpt-5.1-instant-2025-11-12",
     "name": "GPT-5.1 Instant",
     "released": "2025-11-12",
     "announced": "2025-11-12",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 36.34,
      "mu": 40.71,
      "sigma": 1.46,
      "rank": 95,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.94,
       "pct": 94
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.267,
       "pct": 26.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.763,
       "pct": 76.3
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.854,
       "pct": 85.4
      }
     ]
    },
    {
     "id": "gpt-5.1-medium-2025-11-12",
     "name": "GPT-5.1 Medium",
     "released": "2025-11-12",
     "announced": "2025-11-12",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 30.95,
      "mu": 42.29,
      "sigma": 3.78,
      "rank": 135,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.984,
       "pct": 98.4
      }
     ]
    },
    {
     "id": "gpt-5.1-thinking-2025-11-12",
     "name": "GPT-5.1 Thinking",
     "released": "2025-11-12",
     "announced": "2025-11-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 36.44,
      "mu": 40.81,
      "sigma": 1.46,
      "rank": 94,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.94,
       "pct": 94
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.267,
       "pct": 26.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.763,
       "pct": 76.3
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.854,
       "pct": 85.4
      }
     ]
    },
    {
     "id": "gpt-5-codex-2025-09-15",
     "name": "GPT-5 Codex",
     "released": "2025-09-15",
     "announced": "2025-09-15",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-09-30",
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 26.54,
      "mu": 37.82,
      "sigma": 3.76,
      "rank": 170,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.745,
       "pct": 74.5
      }
     ]
    },
    {
     "id": "gpt-5-2025-08-07",
     "name": "GPT-5",
     "released": "2025-08-07",
     "announced": "2025-08-07",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-09-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 33.39,
      "mu": 36.14,
      "sigma": 0.92,
      "rank": 120,
      "of": 395,
      "games": 30
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.857,
       "pct": 85.7
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.248,
       "pct": 24.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.946,
       "pct": 94.6
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.263,
       "pct": 26.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.749,
       "pct": 74.9
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.549,
       "pct": 54.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.842,
       "pct": 84.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.784,
       "pct": 78.4
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.811,
       "pct": 81.1
      }
     ]
    },
    {
     "id": "gpt-5-high-2025-08-07",
     "name": "GPT-5 High",
     "released": "2025-08-07",
     "announced": "2025-08-07",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-09-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 33.71,
      "mu": 42.14,
      "sigma": 2.81,
      "rank": 116,
      "of": 395,
      "games": 2
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.873,
       "pct": 87.3
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.946,
       "pct": 94.6
      }
     ]
    },
    {
     "id": "gpt-5-medium-2025-08-07",
     "name": "GPT-5 Medium",
     "released": "2025-08-07",
     "announced": "2025-08-07",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-09-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 29.28,
      "mu": 37.7,
      "sigma": 2.81,
      "rank": 151,
      "of": 395,
      "games": 2
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.881,
       "pct": 88.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.889,
       "pct": 88.9
      }
     ]
    },
    {
     "id": "gpt-5-mini-2025-08-07",
     "name": "GPT-5 mini",
     "released": "2025-08-07",
     "announced": "2025-08-07",
     "context": 400000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.25,
     "priceOut": 2,
     "ability": {
      "index": "general",
      "score": 26.87,
      "mu": 32.56,
      "sigma": 1.9,
      "rank": 169,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.823,
       "pct": 82.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.167,
       "pct": 16.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.911,
       "pct": 91.1
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.221,
       "pct": 22.1
      }
     ]
    },
    {
     "id": "gpt-5-nano-2025-08-07",
     "name": "GPT-5 nano",
     "released": "2025-08-07",
     "announced": "2025-08-07",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 18.9,
      "mu": 24.62,
      "sigma": 1.91,
      "rank": 231,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.712,
       "pct": 71.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.087,
       "pct": 8.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.852,
       "pct": 85.2
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.096,
       "pct": 9.6
      }
     ]
    },
    {
     "id": "gpt-oss-120b",
     "name": "GPT OSS 120B",
     "released": "2025-08-05",
     "announced": "2025-08-05",
     "context": 131072,
     "params": 116800000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.037,
     "priceOut": 0.17,
     "ability": {
      "index": "general",
      "score": 28.14,
      "mu": 33,
      "sigma": 1.62,
      "rank": 158,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.801,
       "pct": 80.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.149,
       "pct": 14.9
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.678,
       "pct": 67.8
      }
     ]
    },
    {
     "id": "gpt-oss-120b-high",
     "name": "GPT OSS 120B High",
     "released": "2025-08-05",
     "announced": "2025-08-05",
     "context": null,
     "params": 116800000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 24.96,
      "mu": 29.77,
      "sigma": 1.6,
      "rank": 184,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.809,
       "pct": 80.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.925,
       "pct": 92.5
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.838,
       "pct": 83.8
      }
     ]
    },
    {
     "id": "gpt-oss-20b",
     "name": "GPT OSS 20B",
     "released": "2025-08-05",
     "announced": "2025-08-05",
     "context": 131072,
     "params": 20900000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.03,
     "priceOut": 0.14,
     "ability": {
      "index": "general",
      "score": 17.52,
      "mu": 22.6,
      "sigma": 1.69,
      "rank": 241,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.715,
       "pct": 71.5
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.109,
       "pct": 10.9
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.548,
       "pct": 54.8
      }
     ]
    },
    {
     "id": "gpt-oss-20b-high",
     "name": "GPT OSS 20B High",
     "released": "2025-08-05",
     "announced": "2025-08-05",
     "context": null,
     "params": 20900000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 27.29,
      "mu": 35.74,
      "sigma": 2.82,
      "rank": 165,
      "of": 395,
      "games": 2
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.742,
       "pct": 74.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.987,
       "pct": 98.7
      }
     ]
    },
    {
     "id": "o3-pro-2025-06-10",
     "name": "o3-pro",
     "released": "2025-06-10",
     "announced": "2025-06-10",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "o3-2025-04-16",
     "name": "o3",
     "released": "2025-04-16",
     "announced": "2025-04-16",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 30.64,
      "mu": 33.56,
      "sigma": 0.97,
      "rank": 137,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.833,
       "pct": 83.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.147,
       "pct": 14.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.864,
       "pct": 86.4
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.158,
       "pct": 15.8
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.691,
       "pct": 69.1
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.065,
       "pct": 6.5
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.497,
       "pct": 49.7
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.829,
       "pct": 82.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.764,
       "pct": 76.4
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.786,
       "pct": 78.6
      }
     ]
    },
    {
     "id": "o4-mini",
     "name": "o4-mini",
     "released": "2025-04-16",
     "announced": "2025-04-16",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 27,
      "mu": 30.52,
      "sigma": 1.17,
      "rank": 167,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.814,
       "pct": 81.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.147,
       "pct": 14.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.927,
       "pct": 92.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.681,
       "pct": 68.1
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.718,
       "pct": 71.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.515,
       "pct": 51.5
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.816,
       "pct": 81.6
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.72,
       "pct": 72
      }
     ]
    },
    {
     "id": "gpt-4.1-2025-04-14",
     "name": "GPT-4.1",
     "released": "2025-04-14",
     "announced": "2025-04-14",
     "context": 1047576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 8,
     "ability": {
      "index": "general",
      "score": 17.49,
      "mu": 20.23,
      "sigma": 0.91,
      "rank": 242,
      "of": 395,
      "games": 28
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.663,
       "pct": 66.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.054,
       "pct": 5.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.464,
       "pct": 46.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.546,
       "pct": 54.6
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.68,
       "pct": 68
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.748,
       "pct": 74.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.873,
       "pct": 87.3
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.567,
       "pct": 56.7
      }
     ]
    },
    {
     "id": "gpt-4.1-mini-2025-04-14",
     "name": "GPT-4.1 mini",
     "released": "2025-04-14",
     "announced": "2025-04-14",
     "context": 1047576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.4,
     "priceOut": 1.6,
     "ability": {
      "index": "general",
      "score": 13.5,
      "mu": 16.31,
      "sigma": 0.94,
      "rank": 265,
      "of": 395,
      "games": 28
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.65,
       "pct": 65
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.037,
       "pct": 3.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.402,
       "pct": 40.2
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.236,
       "pct": 23.6
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.558,
       "pct": 55.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.727,
       "pct": 72.7
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.785,
       "pct": 78.5
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.568,
       "pct": 56.8
      }
     ]
    },
    {
     "id": "gpt-4.1-nano-2025-04-14",
     "name": "GPT-4.1 nano",
     "released": "2025-04-14",
     "announced": "2025-04-14",
     "context": 1047576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-05-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.4,
     "ability": {
      "index": "general",
      "score": 1.14,
      "mu": 4.93,
      "sigma": 1.26,
      "rank": 346,
      "of": 395,
      "games": 24
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.503,
       "pct": 50.3
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.226,
       "pct": 22.6
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.554,
       "pct": 55.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.669,
       "pct": 66.9
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.405,
       "pct": 40.5
      }
     ]
    },
    {
     "id": "gpt-4.5",
     "name": "GPT-4.5",
     "released": "2025-02-27",
     "announced": "2025-02-27",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 19.67,
      "mu": 22.47,
      "sigma": 0.93,
      "rank": 223,
      "of": 395,
      "games": 26
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.695,
       "pct": 69.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.38,
       "pct": 38
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.684,
       "pct": 68.4
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.625,
       "pct": 62.5
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.752,
       "pct": 75.2
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.851,
       "pct": 85.1
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.554,
       "pct": 55.4
      }
     ]
    },
    {
     "id": "o3-mini",
     "name": "o3-mini",
     "released": "2025-01-30",
     "announced": "2025-01-30",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2023-09-30",
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 20.97,
      "mu": 23.92,
      "sigma": 0.98,
      "rank": 213,
      "of": 395,
      "games": 25
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.772,
       "pct": 77.2
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.092,
       "pct": 9.2
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.493,
       "pct": 49.3
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.576,
       "pct": 57.6
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.15,
       "pct": 15
      }
     ]
    },
    {
     "id": "o1-2024-12-17",
     "name": "o1",
     "released": "2024-12-17",
     "announced": "2024-12-17",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 20.46,
      "mu": 23.86,
      "sigma": 1.13,
      "rank": 217,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.78,
       "pct": 78
      },
      {
       "key": "frontiermath_score",
       "name": "FrontierMath",
       "zh": "前沿数学研究题",
       "score": 0.055,
       "pct": 5.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.41,
       "pct": 41
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.708,
       "pct": 70.8
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.47,
       "pct": 47
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.776,
       "pct": 77.6
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.877,
       "pct": 87.7
      }
     ]
    },
    {
     "id": "o1-pro",
     "name": "o1-pro",
     "released": "2024-12-17",
     "announced": "2024-12-17",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2023-09-30",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 19.25,
      "mu": 27.72,
      "sigma": 2.82,
      "rank": 227,
      "of": 395,
      "games": 2
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.79,
       "pct": 79
      }
     ]
    },
    {
     "id": "o1-mini",
     "name": "o1-mini",
     "released": "2024-09-12",
     "announced": "2024-09-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 9.49,
      "mu": 15.69,
      "sigma": 2.07,
      "rank": 292,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.6,
       "pct": 60
      }
     ]
    },
    {
     "id": "o1-preview",
     "name": "o1-preview",
     "released": "2024-09-12",
     "announced": "2024-09-12",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 16.08,
      "mu": 20.68,
      "sigma": 1.54,
      "rank": 246,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.733,
       "pct": 73.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.413,
       "pct": 41.3
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.424,
       "pct": 42.4
      }
     ]
    },
    {
     "id": "gpt-4o-mini-2024-07-18",
     "name": "GPT-4o mini",
     "released": "2024-07-18",
     "announced": "2024-07-18",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2023-10-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 3.12,
      "mu": 7.49,
      "sigma": 1.46,
      "rank": 334,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.402,
       "pct": 40.2
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.087,
       "pct": 8.7
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.594,
       "pct": 59.4
      }
     ]
    },
    {
     "id": "chatgpt-4o-latest",
     "name": "ChatGPT-4o Latest",
     "released": "2024-05-13",
     "announced": "2024-05-13",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 24.42,
      "mu": 35.7,
      "sigma": 3.76,
      "rank": 185,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.84,
       "pct": 84
      }
     ]
    },
    {
     "id": "gpt-4o-2024-05-13",
     "name": "GPT-4o",
     "released": "2024-05-13",
     "announced": "2024-05-13",
     "context": 128000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2.5,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 10.98,
      "mu": 15.48,
      "sigma": 1.5,
      "rank": 283,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.536,
       "pct": 53.6
      }
     ]
    },
    {
     "id": "gpt-4-turbo-2024-04-09",
     "name": "GPT-4 Turbo",
     "released": "2024-04-09",
     "announced": "2024-04-09",
     "context": 128000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2023-12-31",
     "isMoe": false,
     "multimodal": false,
     "priceIn": 10,
     "priceOut": 30,
     "ability": {
      "index": "general",
      "score": 8.5,
      "mu": 13.67,
      "sigma": 1.72,
      "rank": 298,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.48,
       "pct": 48
      }
     ]
    },
    {
     "id": "gpt-4-0613",
     "name": "GPT-4",
     "released": "2023-06-13",
     "announced": "2023-06-13",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2022-12-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 2.47,
      "mu": 7.09,
      "sigma": 1.54,
      "rank": 336,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.357,
       "pct": 35.7
      }
     ]
    },
    {
     "id": "gpt-3.5-turbo-0125",
     "name": "GPT-3.5 Turbo",
     "released": "2023-03-21",
     "announced": "2023-03-21",
     "context": 16385,
     "params": null,
     "license": "proprietary",
     "cutoff": "2021-09-30",
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.5,
     "priceOut": 1.5,
     "ability": {
      "index": "general",
      "score": -9.88,
      "mu": -5.12,
      "sigma": 1.59,
      "rank": 390,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.308,
       "pct": 30.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0,
       "pct": 0
      }
     ]
    }
   ]
  },
  {
   "id": "perplexity",
   "name": "Perplexity",
   "org": "Perplexity",
   "orgId": "perplexity",
   "look": "青绿长发与“P”耳机 · 绿衣法师、星形法杖",
   "x": 60.5,
   "y": 42,
   "band": [
    54.8,
    62.8
   ],
   "abilityIndex": null,
   "versionCount": 5,
   "best": {
    "id": "perplexity/sonar-pro-search",
    "name": "Sonar Pro Search",
    "ability": null,
    "priceIn": 3,
    "priceOut": 15
   },
   "versions": [
    {
     "id": "perplexity/sonar-pro-search",
     "name": "Sonar Pro Search",
     "released": "2025-10-30",
     "announced": null,
     "context": 200000,
     "params": null,
     "license": null,
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 3,
     "priceOut": 15,
     "ability": null,
     "benchmarks": [],
     "extra": {
      "webSearch": 18,
      "unit": "美元/千次检索"
     }
    },
    {
     "id": "perplexity/sonar-reasoning-pro",
     "name": "Sonar Reasoning Pro",
     "released": "2025-03-07",
     "announced": null,
     "context": 128000,
     "params": null,
     "license": null,
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 8,
     "ability": null,
     "benchmarks": [],
     "extra": {
      "webSearch": 5,
      "unit": "美元/千次检索"
     }
    },
    {
     "id": "perplexity/sonar-pro",
     "name": "Sonar Pro",
     "released": "2025-03-07",
     "announced": null,
     "context": 200000,
     "params": null,
     "license": null,
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 3,
     "priceOut": 15,
     "ability": null,
     "benchmarks": [],
     "extra": {
      "webSearch": 5,
      "unit": "美元/千次检索"
     }
    },
    {
     "id": "perplexity/sonar-deep-research",
     "name": "Sonar Deep Research",
     "released": "2025-03-07",
     "announced": null,
     "context": 128000,
     "params": null,
     "license": null,
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 2,
     "priceOut": 8,
     "ability": null,
     "benchmarks": [],
     "extra": {
      "webSearch": 5,
      "unit": "美元/千次检索"
     }
    },
    {
     "id": "perplexity/sonar",
     "name": "Sonar",
     "released": "2025-01-27",
     "announced": null,
     "context": 127072,
     "params": null,
     "license": null,
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1,
     "priceOut": 1,
     "ability": null,
     "benchmarks": [],
     "extra": {
      "webSearch": 5,
      "unit": "美元/千次检索"
     }
    }
   ]
  },
  {
   "id": "gemini",
   "name": "Gemini",
   "org": "Google",
   "orgId": "google",
   "look": "紫发猫耳与异色瞳 · 蓝色四角星发饰",
   "x": 65,
   "y": 44,
   "band": [
    62.8,
    68
   ],
   "abilityIndex": "general",
   "versionCount": 43,
   "best": {
    "id": "gemini-4-argon",
    "name": "Gemini 4 Argon",
    "ability": {
     "index": "general",
     "score": 55.11,
     "mu": 59.19,
     "sigma": 1.36,
     "rank": 4,
     "of": 395,
     "games": 15
    },
    "priceIn": 2,
    "priceOut": 10
   },
   "versions": [
    {
     "id": "gemini-4-argon",
     "name": "Gemini 4 Argon",
     "released": "2026-09-30",
     "announced": "2026-09-30",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 55.11,
      "mu": 59.19,
      "sigma": 1.36,
      "rank": 4,
      "of": 395,
      "games": 15
     },
     "benchmarks": []
    },
    {
     "id": "gemini-3.8-flash",
     "name": "Gemini 3.8 Flash",
     "released": "2026-09-02",
     "announced": "2026-09-02",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-03-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.75,
     "priceOut": 3.75,
     "ability": {
      "index": "general",
      "score": 48.97,
      "mu": 52.97,
      "sigma": 1.33,
      "rank": 26,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.862,
       "pct": 86.2
      }
     ]
    },
    {
     "id": "gemini-3.8-flash-cyber",
     "name": "Gemini 3.8 Flash Cyber",
     "released": "2026-09-02",
     "announced": "2026-09-02",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 39.3,
      "mu": 51.02,
      "sigma": 3.9,
      "rank": 74,
      "of": 395,
      "games": 1
     },
     "benchmarks": []
    },
    {
     "id": "gemini-3.7-flash",
     "name": "Gemini 3.7 Flash",
     "released": "2026-08-13",
     "announced": "2026-08-13",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-03-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.75,
     "priceOut": 3.75,
     "ability": {
      "index": "general",
      "score": 47.6,
      "mu": 51.13,
      "sigma": 1.18,
      "rank": 34,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.887,
       "pct": 88.7
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.97,
       "pct": 97
      }
     ]
    },
    {
     "id": "gemini-3.5-flash-cyber",
     "name": "Gemini 3.5 Flash Cyber",
     "released": "2026-07-21",
     "announced": "2026-07-21",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 37.06,
      "mu": 48.68,
      "sigma": 3.87,
      "rank": 87,
      "of": 395,
      "games": 1
     },
     "benchmarks": []
    },
    {
     "id": "gemini-3.5-flash-lite",
     "name": "Gemini 3.5 Flash-Lite",
     "released": "2026-07-21",
     "announced": "2026-07-21",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-03-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.3,
     "priceOut": 2.5,
     "ability": {
      "index": "general",
      "score": 29.49,
      "mu": 35.2,
      "sigma": 1.9,
      "rank": 148,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.542,
       "pct": 54.2
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.765,
       "pct": 76.5
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.213,
       "pct": 21.3
      }
     ]
    },
    {
     "id": "gemini-3.6-flash",
     "name": "Gemini 3.6 Flash",
     "released": "2026-07-21",
     "announced": "2026-07-21",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-03-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.5,
     "priceOut": 7.5,
     "ability": {
      "index": "general",
      "score": 42.4,
      "mu": 47.61,
      "sigma": 1.74,
      "rank": 63,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.587,
       "pct": 58.7
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.894,
       "pct": 89.4
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.54,
       "pct": 54
      }
     ]
    },
    {
     "id": "diffusiongemma-26b-a4b-it",
     "name": "DiffusionGemma 26B-A4B",
     "released": "2026-06-10",
     "announced": "2026-06-10",
     "context": null,
     "params": 25200000000,
     "license": "apache_2_0",
     "cutoff": "2025-01-01",
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 19.01,
      "mu": 22.85,
      "sigma": 1.28,
      "rank": 230,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.732,
       "pct": 73.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.119,
       "pct": 11.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.543,
       "pct": 54.3
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.815,
       "pct": 81.5
      }
     ]
    },
    {
     "id": "gemma-4-12b-it",
     "name": "Gemma 4 12B",
     "released": "2026-05-23",
     "announced": "2026-05-23",
     "context": null,
     "params": 11959730224,
     "license": "apache_2_0",
     "cutoff": "2025-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 21.64,
      "mu": 25.2,
      "sigma": 1.19,
      "rank": 205,
      "of": 395,
      "games": 15
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.788,
       "pct": 78.8
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.052,
       "pct": 5.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.691,
       "pct": 69.1
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.834,
       "pct": 83.4
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.434,
       "pct": 43.4
      }
     ]
    },
    {
     "id": "gemini-3.5-flash",
     "name": "Gemini 3.5 Flash",
     "released": "2026-05-19",
     "announced": "2026-05-19",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.5,
     "priceOut": 9,
     "ability": {
      "index": "general",
      "score": 42.01,
      "mu": 45.15,
      "sigma": 1.05,
      "rank": 66,
      "of": 395,
      "games": 18
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.402,
       "pct": 40.2
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.551,
       "pct": 55.1
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.721,
       "pct": 72.1
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.836,
       "pct": 83.6
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.565,
       "pct": 56.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.836,
       "pct": 83.6
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.842,
       "pct": 84.2
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.266,
       "pct": 26.6
      }
     ]
    },
    {
     "id": "gemma-4-26b-a4b-it",
     "name": "Gemma 4 26B-A4B",
     "released": "2026-04-02",
     "announced": "2026-04-02",
     "context": 262144,
     "params": 25200000000,
     "license": "apache_2_0",
     "cutoff": "2025-01-01",
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.07,
     "priceOut": 0.34,
     "ability": {
      "index": "general",
      "score": 29.22,
      "mu": 33.06,
      "sigma": 1.28,
      "rank": 152,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.823,
       "pct": 82.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.172,
       "pct": 17.2
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.738,
       "pct": 73.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.863,
       "pct": 86.3
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.441,
       "pct": 44.1
      }
     ]
    },
    {
     "id": "gemma-4-31b-it",
     "name": "Gemma 4 31B",
     "released": "2026-04-02",
     "announced": "2026-04-02",
     "context": 262144,
     "params": 30700000000,
     "license": "apache_2_0",
     "cutoff": "2025-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.09,
     "priceOut": 0.34,
     "ability": {
      "index": "general",
      "score": 32.74,
      "mu": 36.25,
      "sigma": 1.17,
      "rank": 123,
      "of": 395,
      "games": 15
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.843,
       "pct": 84.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.265,
       "pct": 26.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.769,
       "pct": 76.9
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.884,
       "pct": 88.4
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.664,
       "pct": 66.4
      }
     ]
    },
    {
     "id": "gemma-4-e2b-it",
     "name": "Gemma 4 E2B",
     "released": "2026-04-02",
     "announced": "2026-04-02",
     "context": null,
     "params": 5100000000,
     "license": "apache_2_0",
     "cutoff": "2025-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 6.25,
      "mu": 10.67,
      "sigma": 1.47,
      "rank": 317,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.434,
       "pct": 43.4
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.442,
       "pct": 44.2
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.674,
       "pct": 67.4
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.191,
       "pct": 19.1
      }
     ]
    },
    {
     "id": "gemma-4-e4b-it",
     "name": "Gemma 4 E4B",
     "released": "2026-04-02",
     "announced": "2026-04-02",
     "context": 131072,
     "params": 8000000000,
     "license": "apache_2_0",
     "cutoff": "2025-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.02,
     "priceOut": 0.1,
     "ability": {
      "index": "general",
      "score": 13.32,
      "mu": 17.57,
      "sigma": 1.42,
      "rank": 267,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.586,
       "pct": 58.6
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.526,
       "pct": 52.6
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.766,
       "pct": 76.6
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.254,
       "pct": 25.4
      }
     ]
    },
    {
     "id": "gemini-3.1-flash-lite-preview",
     "name": "Gemini 3.1 Flash-Lite",
     "released": "2026-03-03",
     "announced": "2026-03-03",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.25,
     "priceOut": 1.5,
     "ability": {
      "index": "general",
      "score": 30.5,
      "mu": 34.03,
      "sigma": 1.18,
      "rank": 139,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.869,
       "pct": 86.9
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.16,
       "pct": 16
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.433,
       "pct": 43.3
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.768,
       "pct": 76.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.889,
       "pct": 88.9
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.732,
       "pct": 73.2
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.601,
       "pct": 60.1
      }
     ]
    },
    {
     "id": "gemini-3.1-pro-preview",
     "name": "Gemini 3.1 Pro",
     "released": "2026-02-19",
     "announced": "2026-02-19",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 12,
     "ability": {
      "index": "general",
      "score": 43.04,
      "mu": 46.05,
      "sigma": 1.01,
      "rank": 56,
      "of": 395,
      "games": 21
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.943,
       "pct": 94.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.514,
       "pct": 51.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.806,
       "pct": 80.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.542,
       "pct": 54.2
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.59,
       "pct": 59
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.771,
       "pct": 77.1
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.692,
       "pct": 69.2
      },
      {
       "key": "apex_agents_score",
       "name": "APEX Agents",
       "zh": "代理任务",
       "score": 0.335,
       "pct": 33.5
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.859,
       "pct": 85.9
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.805,
       "pct": 80.5
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.926,
       "pct": 92.6
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.263,
       "pct": 26.3
      }
     ]
    },
    {
     "id": "gemini-3-flash-preview",
     "name": "Gemini 3 Flash",
     "released": "2025-12-17",
     "announced": "2025-12-17",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.5,
     "priceOut": 3,
     "ability": {
      "index": "general",
      "score": 36.52,
      "mu": 39.29,
      "sigma": 0.92,
      "rank": 93,
      "of": 395,
      "games": 25
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.904,
       "pct": 90.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.435,
       "pct": 43.5
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.997,
       "pct": 99.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.78,
       "pct": 78
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.336,
       "pct": 33.6
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.574,
       "pct": 57.4
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.494,
       "pct": 49.4
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.687,
       "pct": 68.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.812,
       "pct": 81.2
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.918,
       "pct": 91.8
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.803,
       "pct": 80.3
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.691,
       "pct": 69.1
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.221,
       "pct": 22.1
      }
     ]
    },
    {
     "id": "gemini-3-pro-preview",
     "name": "Gemini 3 Pro",
     "released": "2025-11-18",
     "announced": "2025-11-18",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 38.33,
      "mu": 41.35,
      "sigma": 1.01,
      "rank": 81,
      "of": 395,
      "games": 21
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.919,
       "pct": 91.9
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.458,
       "pct": 45.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 1,
       "pct": 100
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.762,
       "pct": 76.2
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.311,
       "pct": 31.1
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.721,
       "pct": 72.1
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.81,
       "pct": 81
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.918,
       "pct": 91.8
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.814,
       "pct": 81.4
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.727,
       "pct": 72.7
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.263,
       "pct": 26.3
      }
     ]
    },
    {
     "id": "gemma-3n-e2b",
     "name": "Gemma 3n E2B",
     "released": "2025-06-26",
     "announced": "2025-06-26",
     "context": null,
     "params": 8000000000,
     "license": "proprietary",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -10.67,
      "mu": -6.44,
      "sigma": 1.41,
      "rank": 392,
      "of": 395,
      "games": 11
     },
     "benchmarks": []
    },
    {
     "id": "gemma-3n-e2b-it",
     "name": "Gemma 3n E2B Instructed",
     "released": "2025-06-26",
     "announced": "2025-06-26",
     "context": null,
     "params": 8000000000,
     "license": "proprietary",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -11.05,
      "mu": -7.53,
      "sigma": 1.17,
      "rank": 394,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.248,
       "pct": 24.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.067,
       "pct": 6.7
      }
     ]
    },
    {
     "id": "gemma-3n-e4b",
     "name": "Gemma 3n E4B",
     "released": "2025-06-26",
     "announced": "2025-06-26",
     "context": null,
     "params": 8000000000,
     "license": "proprietary",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -6.59,
      "mu": -2.51,
      "sigma": 1.36,
      "rank": 387,
      "of": 395,
      "games": 11
     },
     "benchmarks": []
    },
    {
     "id": "gemma-3n-e4b-it",
     "name": "Gemma 3n E4B Instructed",
     "released": "2025-06-26",
     "announced": "2025-06-26",
     "context": null,
     "params": 8000000000,
     "license": "proprietary",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -5.13,
      "mu": -1.66,
      "sigma": 1.16,
      "rank": 376,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.237,
       "pct": 23.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.116,
       "pct": 11.6
      }
     ]
    },
    {
     "id": "gemini-2.5-flash-lite",
     "name": "Gemini 2.5 Flash-Lite",
     "released": "2025-06-17",
     "announced": "2025-06-17",
     "context": null,
     "params": null,
     "license": "creative_commons_attribution_4_0_license",
     "cutoff": "2025-01-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 9.88,
      "mu": 13.98,
      "sigma": 1.37,
      "rank": 290,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.646,
       "pct": 64.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.051,
       "pct": 5.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.498,
       "pct": 49.8
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.316,
       "pct": 31.6
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.107,
       "pct": 10.7
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.729,
       "pct": 72.9
      }
     ]
    },
    {
     "id": "gemini-2.5-pro-preview-06-05",
     "name": "Gemini 2.5 Pro Preview 06-05",
     "released": "2025-06-05",
     "announced": "2025-06-05",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 29.47,
      "mu": 33.25,
      "sigma": 1.26,
      "rank": 149,
      "of": 395,
      "games": 13
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.864,
       "pct": 86.4
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.216,
       "pct": 21.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.88,
       "pct": 88
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.672,
       "pct": 67.2
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.54,
       "pct": 54
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.82,
       "pct": 82
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.164,
       "pct": 16.4
      }
     ]
    },
    {
     "id": "gemini-2.5-flash",
     "name": "Gemini 2.5 Flash",
     "released": "2025-05-20",
     "announced": "2025-05-20",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.3,
     "priceOut": 2.5,
     "ability": {
      "index": "general",
      "score": 21.34,
      "mu": 24.88,
      "sigma": 1.18,
      "rank": 209,
      "of": 395,
      "games": 15
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.828,
       "pct": 82.8
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.11,
       "pct": 11
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.72,
       "pct": 72
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.604,
       "pct": 60.4
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.269,
       "pct": 26.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.797,
       "pct": 79.7
      }
     ]
    },
    {
     "id": "gemini-2.5-pro",
     "name": "Gemini 2.5 Pro",
     "released": "2025-05-20",
     "announced": "2025-05-20",
     "context": 1048576,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.25,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 27.36,
      "mu": 31.09,
      "sigma": 1.24,
      "rank": 164,
      "of": 395,
      "games": 15
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.83,
       "pct": 83
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.178,
       "pct": 17.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.83,
       "pct": 83
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.632,
       "pct": 63.2
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.049,
       "pct": 4.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.508,
       "pct": 50.8
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.796,
       "pct": 79.6
      }
     ]
    },
    {
     "id": "gemini-diffusion",
     "name": "Gemini Diffusion",
     "released": "2025-05-20",
     "announced": "2025-05-20",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 0.37,
      "mu": 5.23,
      "sigma": 1.62,
      "rank": 349,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.404,
       "pct": 40.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.233,
       "pct": 23.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.229,
       "pct": 22.9
      }
     ]
    },
    {
     "id": "gemma-3n-e2b-it-litert-preview",
     "name": "Gemma 3n E2B Instructed LiteRT (Preview)",
     "released": "2025-05-20",
     "announced": "2025-05-20",
     "context": null,
     "params": 1910000000,
     "license": "gemma",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -10.05,
      "mu": -7.24,
      "sigma": 0.94,
      "rank": 391,
      "of": 395,
      "games": 28
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.248,
       "pct": 24.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.067,
       "pct": 6.7
      }
     ]
    },
    {
     "id": "gemma-3n-e4b-it-litert-preview",
     "name": "Gemma 3n E4B Instructed LiteRT Preview",
     "released": "2025-05-20",
     "announced": "2025-05-20",
     "context": null,
     "params": 1910000000,
     "license": "gemma",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -5.64,
      "mu": -2.9,
      "sigma": 0.91,
      "rank": 382,
      "of": 395,
      "games": 28
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.237,
       "pct": 23.7
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.116,
       "pct": 11.6
      }
     ]
    },
    {
     "id": "medgemma-4b-it",
     "name": "MedGemma 4B IT",
     "released": "2025-05-20",
     "announced": "2025-05-20",
     "context": null,
     "params": 4300000000,
     "license": "health_ai_developer_foundations_terms_of_use",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -4.78,
      "mu": 11.01,
      "sigma": 5.26,
      "rank": 374,
      "of": 395,
      "games": 2
     },
     "benchmarks": []
    },
    {
     "id": "gemma-3-12b-it",
     "name": "Gemma 3 12B",
     "released": "2025-03-12",
     "announced": "2025-03-12",
     "context": 131072,
     "params": 12000000000,
     "license": "gemma",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.05,
     "priceOut": 0.15,
     "ability": {
      "index": "general",
      "score": 5.09,
      "mu": 7.91,
      "sigma": 0.94,
      "rank": 321,
      "of": 395,
      "games": 26
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.409,
       "pct": 40.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.063,
       "pct": 6.3
      }
     ]
    },
    {
     "id": "gemma-3-1b-it",
     "name": "Gemma 3 1B",
     "released": "2025-03-12",
     "announced": "2025-03-12",
     "context": null,
     "params": 1000000000,
     "license": "gemma",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -10.99,
      "mu": -7.18,
      "sigma": 1.27,
      "rank": 393,
      "of": 395,
      "games": 18
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.192,
       "pct": 19.2
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.022,
       "pct": 2.2
      }
     ]
    },
    {
     "id": "gemma-3-27b-it",
     "name": "Gemma 3 27B",
     "released": "2025-03-12",
     "announced": "2025-03-12",
     "context": 131072,
     "params": 27000000000,
     "license": "gemma",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.08,
     "priceOut": 0.16,
     "ability": {
      "index": "general",
      "score": 7.79,
      "mu": 10.6,
      "sigma": 0.94,
      "rank": 306,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.424,
       "pct": 42.4
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.1,
       "pct": 10
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.135,
       "pct": 13.5
      }
     ]
    },
    {
     "id": "gemma-3-4b-it",
     "name": "Gemma 3 4B",
     "released": "2025-03-12",
     "announced": "2025-03-12",
     "context": 131072,
     "params": 4000000000,
     "license": "gemma",
     "cutoff": "2024-08-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.05,
     "priceOut": 0.1,
     "ability": {
      "index": "general",
      "score": -2.34,
      "mu": 0.65,
      "sigma": 1,
      "rank": 363,
      "of": 395,
      "games": 26
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.308,
       "pct": 30.8
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.04,
       "pct": 4
      }
     ]
    },
    {
     "id": "gemini-2.0-flash-lite",
     "name": "Gemini 2.0 Flash-Lite",
     "released": "2025-02-05",
     "announced": "2025-02-05",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 11.88,
      "mu": 16.05,
      "sigma": 1.39,
      "rank": 277,
      "of": 395,
      "games": 13
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.515,
       "pct": 51.5
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.217,
       "pct": 21.7
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.68,
       "pct": 68
      }
     ]
    },
    {
     "id": "gemini-2.0-flash-thinking",
     "name": "Gemini 2.0 Flash Thinking",
     "released": "2025-01-21",
     "announced": "2025-01-21",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-08-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 16.3,
      "mu": 23.38,
      "sigma": 2.36,
      "rank": 245,
      "of": 395,
      "games": 3
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.742,
       "pct": 74.2
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.754,
       "pct": 75.4
      }
     ]
    },
    {
     "id": "gemini-2.0-flash",
     "name": "Gemini 2.0 Flash",
     "released": "2024-12-01",
     "announced": "2024-12-01",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-08-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 16.01,
      "mu": 20,
      "sigma": 1.33,
      "rank": 247,
      "of": 395,
      "games": 13
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.621,
       "pct": 62.1
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.707,
       "pct": 70.7
      }
     ]
    },
    {
     "id": "gemma-2-27b-it",
     "name": "Gemma 2 27B",
     "released": "2024-06-27",
     "announced": "2024-06-27",
     "context": null,
     "params": 27200000000,
     "license": "gemma",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -1.16,
      "mu": 2.37,
      "sigma": 1.18,
      "rank": 356,
      "of": 395,
      "games": 16
     },
     "benchmarks": []
    },
    {
     "id": "gemma-2-9b-it",
     "name": "Gemma 2 9B",
     "released": "2024-06-27",
     "announced": "2024-06-27",
     "context": null,
     "params": 9240000000,
     "license": "gemma",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -5.31,
      "mu": -1.83,
      "sigma": 1.16,
      "rank": 380,
      "of": 395,
      "games": 16
     },
     "benchmarks": []
    },
    {
     "id": "gemini-1.5-flash",
     "name": "Gemini 1.5 Flash",
     "released": "2024-05-01",
     "announced": "2024-05-01",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2023-11-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 5.5,
      "mu": 8.73,
      "sigma": 1.08,
      "rank": 319,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.51,
       "pct": 51
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.623,
       "pct": 62.3
      }
     ]
    },
    {
     "id": "gemini-1.5-pro",
     "name": "Gemini 1.5 Pro",
     "released": "2024-05-01",
     "announced": "2024-05-01",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2023-11-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 11.52,
      "mu": 14.69,
      "sigma": 1.06,
      "rank": 281,
      "of": 395,
      "games": 21
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.591,
       "pct": 59.1
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.659,
       "pct": 65.9
      }
     ]
    },
    {
     "id": "gemini-1.5-flash-8b",
     "name": "Gemini 1.5 Flash 8B",
     "released": "2024-03-15",
     "announced": "2024-03-15",
     "context": null,
     "params": 8000000000,
     "license": "proprietary",
     "cutoff": "2024-10-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -1.23,
      "mu": 2.99,
      "sigma": 1.41,
      "rank": 357,
      "of": 395,
      "games": 13
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.384,
       "pct": 38.4
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.537,
       "pct": 53.7
      }
     ]
    },
    {
     "id": "gemini-1.0-pro",
     "name": "Gemini 1.0 Pro",
     "released": "2024-02-15",
     "announced": "2024-02-15",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2024-02-01",
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -5.89,
      "mu": -0.88,
      "sigma": 1.67,
      "rank": 383,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.279,
       "pct": 27.9
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.479,
       "pct": 47.9
      }
     ]
    }
   ]
  },
  {
   "id": "claude",
   "name": "Claude",
   "org": "Anthropic",
   "orgId": "anthropic",
   "look": "橘发与花朵发饰 · 橘色雏菊、白橘长裙",
   "x": 71.5,
   "y": 42,
   "band": [
    68,
    77
   ],
   "abilityIndex": "general",
   "versionCount": 25,
   "best": {
    "id": "claude-opus-5-5",
    "name": "Claude Opus 5.5",
    "ability": {
     "index": "general",
     "score": 60.42,
     "mu": 63.5,
     "sigma": 1.03,
     "rank": 1,
     "of": 395,
     "games": 32
    },
    "priceIn": 4,
    "priceOut": 20
   },
   "versions": [
    {
     "id": "claude-haiku-5-5",
     "name": "Claude Haiku 5.5",
     "released": "2026-10-07",
     "announced": "2026-10-07",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.1,
     "priceOut": 0.5,
     "ability": {
      "index": "general",
      "score": 49.94,
      "mu": 53.19,
      "sigma": 1.08,
      "rank": 20,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.648,
       "pct": 64.8
      }
     ]
    },
    {
     "id": "claude-sonnet-5-5",
     "name": "Claude Sonnet 5.5",
     "released": "2026-09-28",
     "announced": "2026-09-28",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 58.4,
      "mu": 61.36,
      "sigma": 0.99,
      "rank": 2,
      "of": 395,
      "games": 34
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.813,
       "pct": 81.3
      }
     ]
    },
    {
     "id": "claude-opus-5-5",
     "name": "Claude Opus 5.5",
     "released": "2026-09-22",
     "announced": "2026-09-22",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2026-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 4,
     "priceOut": 20,
     "ability": {
      "index": "general",
      "score": 60.42,
      "mu": 63.5,
      "sigma": 1.03,
      "rank": 1,
      "of": 395,
      "games": 32
     },
     "benchmarks": [
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.899,
       "pct": 89.9
      }
     ]
    },
    {
     "id": "claude-fable-5-1",
     "name": "Claude Fable 5.1",
     "released": "2026-09-01",
     "announced": "2026-09-01",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 10,
     "priceOut": 50,
     "ability": {
      "index": "general",
      "score": 53.22,
      "mu": 58.96,
      "sigma": 1.91,
      "rank": 9,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.65,
       "pct": 65
      }
     ]
    },
    {
     "id": "claude-mythos-5-1",
     "name": "Claude Mythos 5.1",
     "released": "2026-09-01",
     "announced": "2026-09-01",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 44.3,
      "mu": 56.17,
      "sigma": 3.96,
      "rank": 50,
      "of": 395,
      "games": 1
     },
     "benchmarks": []
    },
    {
     "id": "claude-opus-5",
     "name": "Claude Opus 5",
     "released": "2026-07-24",
     "announced": "2026-07-24",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 25,
     "ability": {
      "index": "general",
      "score": 53.81,
      "mu": 57.83,
      "sigma": 1.34,
      "rank": 6,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.647,
       "pct": 64.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.908,
       "pct": 90.8
      }
     ]
    },
    {
     "id": "claude-sonnet-5",
     "name": "Claude Sonnet 5",
     "released": "2026-06-30",
     "announced": "2026-06-30",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 2,
     "priceOut": 10,
     "ability": {
      "index": "general",
      "score": 47.18,
      "mu": 50.23,
      "sigma": 1.02,
      "rank": 36,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.574,
       "pct": 57.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.852,
       "pct": 85.2
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.632,
       "pct": 63.2
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.543,
       "pct": 54.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.847,
       "pct": 84.7
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.883,
       "pct": 88.3
      }
     ]
    },
    {
     "id": "claude-fable-5",
     "name": "Claude Fable 5",
     "released": "2026-06-09",
     "announced": "2026-06-09",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 10,
     "priceOut": 50,
     "ability": {
      "index": "general",
      "score": 53.14,
      "mu": 56.47,
      "sigma": 1.11,
      "rank": 11,
      "of": 395,
      "games": 18
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.645,
       "pct": 64.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.95,
       "pct": 95
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.8,
       "pct": 80
      }
     ]
    },
    {
     "id": "claude-opus-4-8",
     "name": "Claude Opus 4.8",
     "released": "2026-05-28",
     "announced": "2026-05-28",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 25,
     "ability": {
      "index": "general",
      "score": 49.84,
      "mu": 52.57,
      "sigma": 0.91,
      "rank": 21,
      "of": 395,
      "games": 27
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.936,
       "pct": 93.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.579,
       "pct": 57.9
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.886,
       "pct": 88.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.692,
       "pct": 69.2
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.822,
       "pct": 82.2
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.599,
       "pct": 59.9
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.843,
       "pct": 84.3
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.899,
       "pct": 89.9
      },
      {
       "key": "screenspot_pro_score",
       "name": "ScreenSpot-Pro",
       "zh": "界面定位",
       "score": 0.879,
       "pct": 87.9
      }
     ]
    },
    {
     "id": "claude-opus-4-7",
     "name": "Claude Opus 4.7",
     "released": "2026-04-16",
     "announced": "2026-04-16",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 25,
     "ability": {
      "index": "general",
      "score": 43.52,
      "mu": 46.47,
      "sigma": 0.98,
      "rank": 53,
      "of": 395,
      "games": 21
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.942,
       "pct": 94.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.547,
       "pct": 54.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.876,
       "pct": 87.6
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.643,
       "pct": 64.3
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.773,
       "pct": 77.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.793,
       "pct": 79.3
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.915,
       "pct": 91.5
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.91,
       "pct": 91
      }
     ]
    },
    {
     "id": "claude-sonnet-4-6",
     "name": "Claude Sonnet 4.6",
     "released": "2026-02-17",
     "announced": "2026-02-17",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 3,
     "priceOut": 15,
     "ability": {
      "index": "general",
      "score": 36.59,
      "mu": 39.47,
      "sigma": 0.96,
      "rank": 92,
      "of": 395,
      "games": 22
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.899,
       "pct": 89.9
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.49,
       "pct": 49
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.796,
       "pct": 79.6
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.583,
       "pct": 58.3
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.613,
       "pct": 61.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.747,
       "pct": 74.7
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.725,
       "pct": 72.5
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.756,
       "pct": 75.6
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.893,
       "pct": 89.3
      }
     ]
    },
    {
     "id": "claude-opus-4-6",
     "name": "Claude Opus 4.6",
     "released": "2026-02-05",
     "announced": "2026-02-05",
     "context": 1000000,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 5,
     "priceOut": 25,
     "ability": {
      "index": "general",
      "score": 44.45,
      "mu": 47.28,
      "sigma": 0.94,
      "rank": 48,
      "of": 395,
      "games": 26
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.913,
       "pct": 91.3
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.531,
       "pct": 53.1
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.9979,
       "pct": 99.8
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.808,
       "pct": 80.8
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.688,
       "pct": 68.8
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.627,
       "pct": 62.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.84,
       "pct": 84
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.727,
       "pct": 72.7
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.773,
       "pct": 77.3
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.911,
       "pct": 91.1
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.774,
       "pct": 77.4
      },
      {
       "key": "mrcr_v2_score",
       "name": "MRCR v2",
       "zh": "长上下文检索",
       "score": 0.76,
       "pct": 76
      }
     ]
    },
    {
     "id": "claude-opus-4-5-20251101",
     "name": "Claude Opus 4.5",
     "released": "2025-11-24",
     "announced": "2025-11-24",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-03-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 37.92,
      "mu": 42.01,
      "sigma": 1.36,
      "rank": 84,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.87,
       "pct": 87
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.809,
       "pct": 80.9
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.376,
       "pct": 37.6
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.623,
       "pct": 62.3
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.663,
       "pct": 66.3
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.908,
       "pct": 90.8
      }
     ]
    },
    {
     "id": "claude-haiku-4-5-20251001",
     "name": "Claude Haiku 4.5",
     "released": "2025-10-15",
     "announced": "2025-10-15",
     "context": 200000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-02-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1,
     "priceOut": 5,
     "ability": {
      "index": "general",
      "score": 25.23,
      "mu": 28.59,
      "sigma": 1.12,
      "rank": 180,
      "of": 395,
      "games": 18
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.73,
       "pct": 73
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.807,
       "pct": 80.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.733,
       "pct": 73.3
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.41,
       "pct": 41
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.507,
       "pct": 50.7
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.83,
       "pct": 83
      }
     ]
    },
    {
     "id": "claude-sonnet-4-5-20250929",
     "name": "Claude Sonnet 4.5",
     "released": "2025-09-29",
     "announced": "2025-09-29",
     "context": 200000,
     "params": null,
     "license": "proprietary",
     "cutoff": "2025-01-31",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 3,
     "priceOut": 15,
     "ability": {
      "index": "general",
      "score": 31.69,
      "mu": 36.47,
      "sigma": 1.59,
      "rank": 130,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.834,
       "pct": 83.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.87,
       "pct": 87
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.5,
       "pct": 50
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.862,
       "pct": 86.2
      },
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.614,
       "pct": 61.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.891,
       "pct": 89.1
      }
     ]
    },
    {
     "id": "claude-opus-4-1-20250805",
     "name": "Claude Opus 4.1",
     "released": "2025-08-05",
     "announced": "2025-08-05",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 29.5,
      "mu": 34.21,
      "sigma": 1.57,
      "rank": 147,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.809,
       "pct": 80.9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.78,
       "pct": 78
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.745,
       "pct": 74.5
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.433,
       "pct": 43.3
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.824,
       "pct": 82.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.895,
       "pct": 89.5
      }
     ]
    },
    {
     "id": "claude-opus-4-20250514",
     "name": "Claude Opus 4",
     "released": "2025-05-22",
     "announced": "2025-05-22",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 27.36,
      "mu": 31.79,
      "sigma": 1.48,
      "rank": 163,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.796,
       "pct": 79.6
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.755,
       "pct": 75.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.725,
       "pct": 72.5
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.392,
       "pct": 39.2
      },
      {
       "key": "arc_agi_v2_score",
       "name": "ARC-AGI v2",
       "zh": "抽象推理",
       "score": 0.086,
       "pct": 8.6
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.814,
       "pct": 81.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.888,
       "pct": 88.8
      }
     ]
    },
    {
     "id": "claude-sonnet-4-20250514",
     "name": "Claude Sonnet 4",
     "released": "2025-05-22",
     "announced": "2025-05-22",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 23.84,
      "mu": 28.34,
      "sigma": 1.5,
      "rank": 190,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.754,
       "pct": 75.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.705,
       "pct": 70.5
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.727,
       "pct": 72.7
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.355,
       "pct": 35.5
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.805,
       "pct": 80.5
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.744,
       "pct": 74.4
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.865,
       "pct": 86.5
      }
     ]
    },
    {
     "id": "claude-3-7-sonnet-20250219",
     "name": "Claude 3.7 Sonnet",
     "released": "2025-02-24",
     "announced": "2025-02-24",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 23.5,
      "mu": 27.39,
      "sigma": 1.3,
      "rank": 194,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.848,
       "pct": 84.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.548,
       "pct": 54.8
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.703,
       "pct": 70.3
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.352,
       "pct": 35.2
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.812,
       "pct": 81.2
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.75,
       "pct": 75
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.861,
       "pct": 86.1
      }
     ]
    },
    {
     "id": "claude-3-5-haiku-20241022",
     "name": "Claude 3.5 Haiku",
     "released": "2024-10-22",
     "announced": "2024-10-22",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 4.64,
      "mu": 9.12,
      "sigma": 1.49,
      "rank": 325,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.416,
       "pct": 41.6
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.406,
       "pct": 40.6
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.51,
       "pct": 51
      }
     ]
    },
    {
     "id": "claude-3-5-sonnet-20240620",
     "name": "Claude 3.5 Sonnet",
     "released": "2024-06-21",
     "announced": "2024-06-21",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 15.36,
      "mu": 19.74,
      "sigma": 1.46,
      "rank": 253,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.594,
       "pct": 59.4
      }
     ]
    },
    {
     "id": "claude-3-haiku-20240307",
     "name": "Claude 3 Haiku",
     "released": "2024-03-13",
     "announced": "2024-03-13",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -1.94,
      "mu": 2.13,
      "sigma": 1.36,
      "rank": 361,
      "of": 395,
      "games": 10
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.333,
       "pct": 33.3
      }
     ]
    },
    {
     "id": "claude-3-opus-20240229",
     "name": "Claude 3 Opus",
     "released": "2024-02-29",
     "announced": "2024-02-29",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 9.36,
      "mu": 13.33,
      "sigma": 1.32,
      "rank": 293,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.504,
       "pct": 50.4
      }
     ]
    },
    {
     "id": "claude-3-sonnet-20240229",
     "name": "Claude 3 Sonnet",
     "released": "2024-02-29",
     "announced": "2024-02-29",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 1.24,
      "mu": 5.13,
      "sigma": 1.3,
      "rank": 345,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.404,
       "pct": 40.4
      }
     ]
    },
    {
     "id": "claude-mythos-preview",
     "name": "Claude Mythos Preview",
     "released": null,
     "announced": "2026-04-07",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 54.49,
      "mu": 58.41,
      "sigma": 1.31,
      "rank": 5,
      "of": 395,
      "games": 16
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.946,
       "pct": 94.6
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.647,
       "pct": 64.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.939,
       "pct": 93.9
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.778,
       "pct": 77.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.869,
       "pct": 86.9
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.927,
       "pct": 92.7
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.932,
       "pct": 93.2
      }
     ]
    }
   ]
  },
  {
   "id": "mistral",
   "name": "Mistral",
   "org": "Mistral AI",
   "orgId": "mistral",
   "look": "戴红帽的金发法师 · 红色宽檐帽与“M”徽章",
   "x": 82.5,
   "y": 41,
   "band": [
    77,
    85.5
   ],
   "abilityIndex": "general",
   "versionCount": 34,
   "best": {
    "id": "mistral-large-4",
    "name": "Mistral Large 4",
    "ability": {
     "index": "general",
     "score": 45.8,
     "mu": 50.14,
     "sigma": 1.45,
     "rank": 39,
     "of": 395,
     "games": 12
    },
    "priceIn": 0.68,
    "priceOut": 2.09
   },
   "versions": [
    {
     "id": "mistral-large-4",
     "name": "Mistral Large 4",
     "released": "2026-10-06",
     "announced": "2026-10-06",
     "context": 1000000,
     "params": 1050000000000,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.68,
     "priceOut": 2.09,
     "ability": {
      "index": "general",
      "score": 45.8,
      "mu": 50.14,
      "sigma": 1.45,
      "rank": 39,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.918,
       "pct": 91.8
      }
     ]
    },
    {
     "id": "shieldstral-1.0-3b",
     "name": "Shieldstral 1.0 (3B)",
     "released": "2026-08-04",
     "announced": "2026-08-04",
     "context": null,
     "params": 3000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -2.68,
      "mu": 11.45,
      "sigma": 4.71,
      "rank": 364,
      "of": 395,
      "games": 1
     },
     "benchmarks": []
    },
    {
     "id": "mistral-medium-3-5",
     "name": "Mistral Medium 3.5",
     "released": "2026-04-29",
     "announced": "2026-04-29",
     "context": 256000,
     "params": 128000000000,
     "license": "modified_mit_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": 1.5,
     "priceOut": 7.5,
     "ability": {
      "index": "general",
      "score": 26.39,
      "mu": 31.11,
      "sigma": 1.57,
      "rank": 172,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.863,
       "pct": 86.3
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.776,
       "pct": 77.6
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.486,
       "pct": 48.6
      }
     ]
    },
    {
     "id": "mistral-small-latest",
     "name": "Mistral Small 4",
     "released": "2026-03-16",
     "announced": "2026-03-16",
     "context": 256000,
     "params": 119000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.15,
     "priceOut": 0.6,
     "ability": {
      "index": "general",
      "score": 18.31,
      "mu": 22.67,
      "sigma": 1.45,
      "rank": 235,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.712,
       "pct": 71.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.838,
       "pct": 83.8
      },
      {
       "key": "mmmu_pro_score",
       "name": "MMMU-Pro",
       "zh": "多模态理解（难）",
       "score": 0.6,
       "pct": 60
      }
     ]
    },
    {
     "id": "ministral-14b-latest",
     "name": "Ministral 3 (14B Reasoning 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 14000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 20.06,
      "mu": 26.25,
      "sigma": 2.06,
      "rank": 219,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.712,
       "pct": 71.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.85,
       "pct": 85
      }
     ]
    },
    {
     "id": "ministral-3-14b-base-2512",
     "name": "Ministral 3 (14B Base 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 14000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 3.17,
      "mu": 8.95,
      "sigma": 1.92,
      "rank": 333,
      "of": 395,
      "games": 6
     },
     "benchmarks": []
    },
    {
     "id": "ministral-3-14b-instruct-2512",
     "name": "MiniStral 3 (14B Instruct 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 14000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 9.75,
      "mu": 16.42,
      "sigma": 2.23,
      "rank": 291,
      "of": 395,
      "games": 4
     },
     "benchmarks": []
    },
    {
     "id": "ministral-3-3b-base-2512",
     "name": "Ministral 3 (3B Base 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 3000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -6.84,
      "mu": -0.97,
      "sigma": 1.96,
      "rank": 389,
      "of": 395,
      "games": 6
     },
     "benchmarks": []
    },
    {
     "id": "ministral-3-3b-instruct-2512",
     "name": "Ministral 3 (3B Instruct 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 3000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 1.77,
      "mu": 8.54,
      "sigma": 2.25,
      "rank": 342,
      "of": 395,
      "games": 4
     },
     "benchmarks": []
    },
    {
     "id": "ministral-3-8b-base-2512",
     "name": "Ministral 3 (8B Base 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 8000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -1.53,
      "mu": 4.23,
      "sigma": 1.92,
      "rank": 359,
      "of": 395,
      "games": 6
     },
     "benchmarks": []
    },
    {
     "id": "ministral-3-8b-instruct-2512",
     "name": "Ministral 3 (8B Instruct 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 8000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 7.29,
      "mu": 13.92,
      "sigma": 2.21,
      "rank": 310,
      "of": 395,
      "games": 4
     },
     "benchmarks": []
    },
    {
     "id": "ministral-3b-latest",
     "name": "Min  istral 3 (3B Reasoning 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 3000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 10.65,
      "mu": 16.81,
      "sigma": 2.05,
      "rank": 285,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.534,
       "pct": 53.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.721,
       "pct": 72.1
      }
     ]
    },
    {
     "id": "ministral-8b-latest",
     "name": "Ministral 3 (8B Reasoning 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 8000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 15.96,
      "mu": 22.12,
      "sigma": 2.06,
      "rank": 248,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.668,
       "pct": 66.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.787,
       "pct": 78.7
      }
     ]
    },
    {
     "id": "mistral-large-3-675b-base-2512",
     "name": "Mistral Large 3 (675B Base)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 675000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 8.31,
      "mu": 14.03,
      "sigma": 1.91,
      "rank": 301,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.439,
       "pct": 43.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.238,
       "pct": 23.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.855,
       "pct": 85.5
      }
     ]
    },
    {
     "id": "mistral-large-3-675B-instruct-2512-eagle",
     "name": "Mistral Large 3 (675B Instruct 2512 Eagle)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 675000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 8.22,
      "mu": 13.94,
      "sigma": 1.91,
      "rank": 302,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.439,
       "pct": 43.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.238,
       "pct": 23.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.855,
       "pct": 85.5
      }
     ]
    },
    {
     "id": "mistral-large-3-675b-instruct-2512-nvfp4",
     "name": "Mistral Large 3 (675B Instruct 2512 NVFP4)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": null,
     "params": 675000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 8.41,
      "mu": 14.13,
      "sigma": 1.91,
      "rank": 300,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.439,
       "pct": 43.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.238,
       "pct": 23.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.855,
       "pct": 85.5
      }
     ]
    },
    {
     "id": "mistral-large-latest",
     "name": "Mistral Large 3 (675B Instruct 2512)",
     "released": "2025-12-04",
     "announced": "2025-12-04",
     "context": 262100,
     "params": 675000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.5,
     "priceOut": 1.5,
     "ability": {
      "index": "general",
      "score": 8.52,
      "mu": 14.25,
      "sigma": 1.91,
      "rank": 297,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.439,
       "pct": 43.9
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.238,
       "pct": 23.8
      },
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.855,
       "pct": 85.5
      }
     ]
    },
    {
     "id": "mistral-large-3-2509",
     "name": "Mistral Large 3",
     "released": "2025-09-01",
     "announced": "2025-09-01",
     "context": null,
     "params": 675000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 10.02,
      "mu": 14.88,
      "sigma": 1.62,
      "rank": 289,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "mmmlu_score",
       "name": "MMMLU",
       "zh": "多语言知识",
       "score": 0.742,
       "pct": 74.2
      }
     ]
    },
    {
     "id": "devstral-small-2507",
     "name": "Devstral Small 1.1",
     "released": "2025-07-11",
     "announced": "2025-07-11",
     "context": null,
     "params": 24000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 8.64,
      "mu": 19.94,
      "sigma": 3.77,
      "rank": 295,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.536,
       "pct": 53.6
      }
     ]
    },
    {
     "id": "devstral-medium-2507",
     "name": "Devstral Medium",
     "released": "2025-07-10",
     "announced": "2025-07-10",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 13.26,
      "mu": 24.54,
      "sigma": 3.76,
      "rank": 269,
      "of": 395,
      "games": 1
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.616,
       "pct": 61.6
      }
     ]
    },
    {
     "id": "mistral-small-3.2-24b-instruct-2506",
     "name": "Mistral Small 3.2 24B Instruct",
     "released": "2025-06-20",
     "announced": "2025-06-20",
     "context": 128000,
     "params": 23600000000,
     "license": "apache_2_0",
     "cutoff": "2023-10-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": 0.075,
     "priceOut": 0.2,
     "ability": {
      "index": "general",
      "score": 7.98,
      "mu": 11.75,
      "sigma": 1.26,
      "rank": 304,
      "of": 395,
      "games": 12
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.4613,
       "pct": 46.1
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.121,
       "pct": 12.1
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.625,
       "pct": 62.5
      }
     ]
    },
    {
     "id": "magistral-medium",
     "name": "Magistral Medium",
     "released": "2025-06-10",
     "announced": "2025-06-10",
     "context": null,
     "params": 24000000000,
     "license": "apache_2_0",
     "cutoff": "2025-06-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 12.46,
      "mu": 17.62,
      "sigma": 1.72,
      "rank": 274,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.708,
       "pct": 70.8
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.09,
       "pct": 9
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.649,
       "pct": 64.9
      }
     ]
    },
    {
     "id": "magistral-small-2506",
     "name": "Magistral Small 2506",
     "released": "2025-06-10",
     "announced": "2025-06-10",
     "context": null,
     "params": 24000000000,
     "license": "apache_2_0",
     "cutoff": "2025-06-01",
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 10.15,
      "mu": 16.32,
      "sigma": 2.06,
      "rank": 288,
      "of": 395,
      "games": 4
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.6818,
       "pct": 68.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.6276,
       "pct": 62.8
      }
     ]
    },
    {
     "id": "mistral-small-3.1-24b-base-2503",
     "name": "Mistral Small 3.1 24B Base",
     "released": "2025-03-17",
     "announced": "2025-03-17",
     "context": null,
     "params": 24000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -0.15,
      "mu": 5.5,
      "sigma": 1.88,
      "rank": 351,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.375,
       "pct": 37.5
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.5927,
       "pct": 59.3
      }
     ]
    },
    {
     "id": "mistral-small-3.1-24b-instruct-2503",
     "name": "Mistral Small 3.1 24B Instruct",
     "released": "2025-03-17",
     "announced": "2025-03-17",
     "context": null,
     "params": 24000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 3.7,
      "mu": 7.97,
      "sigma": 1.42,
      "rank": 329,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.4596,
       "pct": 46
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.1043,
       "pct": 10.4
      },
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.5927,
       "pct": 59.3
      }
     ]
    },
    {
     "id": "mistral-small-24b-base-2501",
     "name": "Mistral Small 3 24B Base",
     "released": "2025-01-30",
     "announced": "2025-01-30",
     "context": null,
     "params": 23600000000,
     "license": "apache_2_0",
     "cutoff": "2023-10-01",
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -0.78,
      "mu": 3.55,
      "sigma": 1.45,
      "rank": 353,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.3437,
       "pct": 34.4
      }
     ]
    },
    {
     "id": "mistral-small-24b-instruct-2501",
     "name": "Mistral Small 3 24B Instruct",
     "released": "2025-01-30",
     "announced": "2025-01-30",
     "context": 32768,
     "params": 24000000000,
     "license": "apache_2_0",
     "cutoff": "2023-10-01",
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.05,
     "priceOut": 0.08,
     "ability": {
      "index": "general",
      "score": 3.71,
      "mu": 8.3,
      "sigma": 1.53,
      "rank": 328,
      "of": 395,
      "games": 8
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.453,
       "pct": 45.3
      }
     ]
    },
    {
     "id": "pixtral-large",
     "name": "Pixtral Large",
     "released": "2024-11-18",
     "announced": "2024-11-18",
     "context": null,
     "params": 124000000000,
     "license": "mistral_research_license_(mrl)_for_research;_mistral_commercial_license_for_commercial_use",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 11.35,
      "mu": 16.56,
      "sigma": 1.74,
      "rank": 282,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.64,
       "pct": 64
      }
     ]
    },
    {
     "id": "ministral-8b-instruct-2410",
     "name": "Ministral 8B Instruct",
     "released": "2024-10-16",
     "announced": "2024-10-16",
     "context": null,
     "params": 8019808256,
     "license": "mistral_research_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -5.14,
      "mu": -0.71,
      "sigma": 1.48,
      "rank": 377,
      "of": 395,
      "games": 9
     },
     "benchmarks": []
    },
    {
     "id": "mistral-small-2409",
     "name": "Mistral Small",
     "released": "2024-09-17",
     "announced": "2024-09-17",
     "context": null,
     "params": 22000000000,
     "license": "mistral_research_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "pixtral-12b-2409",
     "name": "Pixtral-12B",
     "released": "2024-09-17",
     "announced": "2024-09-17",
     "context": null,
     "params": 12400000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -2.08,
      "mu": 2,
      "sigma": 1.36,
      "rank": 362,
      "of": 395,
      "games": 11
     },
     "benchmarks": [
      {
       "key": "mmmu_score",
       "name": "MMMU",
       "zh": "多模态理解",
       "score": 0.525,
       "pct": 52.5
      }
     ]
    },
    {
     "id": "mistral-large-2-2407",
     "name": "Mistral Large 2",
     "released": "2024-07-24",
     "announced": "2024-07-24",
     "context": null,
     "params": 123000000000,
     "license": "mistral_research_license",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 6.93,
      "mu": 13.23,
      "sigma": 2.1,
      "rank": 314,
      "of": 395,
      "games": 4
     },
     "benchmarks": []
    },
    {
     "id": "mistral-nemo-instruct-2407",
     "name": "Mistral NeMo Instruct",
     "released": "2024-07-18",
     "announced": "2024-07-18",
     "context": 131072,
     "params": 12000000000,
     "license": "apache_2_0",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": 0.019,
     "priceOut": 0.03,
     "ability": {
      "index": "general",
      "score": -5.19,
      "mu": -0.07,
      "sigma": 1.71,
      "rank": 379,
      "of": 395,
      "games": 7
     },
     "benchmarks": []
    },
    {
     "id": "codestral-22b",
     "name": "Codestral-22B",
     "released": "2024-05-29",
     "announced": "2024-05-29",
     "context": null,
     "params": 22200000000,
     "license": "mnpl_0_1",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -0.42,
      "mu": 8.12,
      "sigma": 2.85,
      "rank": 352,
      "of": 395,
      "games": 2
     },
     "benchmarks": []
    }
   ]
  },
  {
   "id": "glm",
   "name": "GLM",
   "org": "智谱 Z.ai",
   "orgId": "zai-org",
   "look": "黑发猫耳与黑白哥特装 · 多个“Z”徽章",
   "x": 88.5,
   "y": 42,
   "band": [
    85.5,
    91.8
   ],
   "abilityIndex": "general",
   "versionCount": 12,
   "best": {
    "id": "glm-5.3",
    "name": "GLM-5.3",
    "ability": {
     "index": "general",
     "score": 50.92,
     "mu": 54.25,
     "sigma": 1.11,
     "rank": 16,
     "of": 395,
     "games": 17
    },
    "priceIn": 1.2,
    "priceOut": 4
   },
   "versions": [
    {
     "id": "glm-5.3-flash",
     "name": "GLM-5.3-Flash",
     "released": "2026-08-26",
     "announced": "2026-08-26",
     "context": 1048576,
     "params": 320000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.15,
     "priceOut": 0.5,
     "ability": {
      "index": "general",
      "score": 48.78,
      "mu": 52.52,
      "sigma": 1.25,
      "rank": 28,
      "of": 395,
      "games": 15
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.553,
       "pct": 55.3
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.784,
       "pct": 78.4
      },
      {
       "key": "charxiv_r_score",
       "name": "CharXiv-R",
       "zh": "图表推理",
       "score": 0.894,
       "pct": 89.4
      }
     ]
    },
    {
     "id": "glm-5.3",
     "name": "GLM-5.3",
     "released": "2026-08-14",
     "announced": "2026-08-14",
     "context": 1048576,
     "params": 753000000000,
     "license": "glm_5_3",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 1.2,
     "priceOut": 4,
     "ability": {
      "index": "general",
      "score": 50.92,
      "mu": 54.25,
      "sigma": 1.11,
      "rank": 16,
      "of": 395,
      "games": 17
     },
     "benchmarks": [
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.625,
       "pct": 62.5
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.73,
       "pct": 73
      }
     ]
    },
    {
     "id": "glm-5.2",
     "name": "GLM-5.2",
     "released": "2026-06-16",
     "announced": "2026-06-16",
     "context": 1048576,
     "params": 753000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 0.75,
     "priceOut": 2.4,
     "ability": {
      "index": "general",
      "score": 44.96,
      "mu": 48.1,
      "sigma": 1.05,
      "rank": 44,
      "of": 395,
      "games": 19
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.912,
       "pct": 91.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.547,
       "pct": 54.7
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.621,
       "pct": 62.1
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.768,
       "pct": 76.8
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.482,
       "pct": 48.2
      }
     ]
    },
    {
     "id": "glm-5.1",
     "name": "GLM-5.1",
     "released": "2026-04-07",
     "announced": "2026-04-07",
     "context": 202752,
     "params": 754000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 1.05,
     "priceOut": 3.5,
     "ability": {
      "index": "general",
      "score": 38.82,
      "mu": 41.99,
      "sigma": 1.06,
      "rank": 78,
      "of": 395,
      "games": 18
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.862,
       "pct": 86.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.523,
       "pct": 52.3
      },
      {
       "key": "swe_bench_pro_score",
       "name": "SWE-bench Pro",
       "zh": "更难的软件工程任务",
       "score": 0.584,
       "pct": 58.4
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.718,
       "pct": 71.8
      },
      {
       "key": "toolathlon_score",
       "name": "Toolathlon",
       "zh": "多工具长流程",
       "score": 0.407,
       "pct": 40.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.793,
       "pct": 79.3
      }
     ]
    },
    {
     "id": "glm-5v-turbo",
     "name": "GLM-5V-Turbo",
     "released": "2026-04-02",
     "announced": "2026-04-02",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 30,
      "mu": 35.1,
      "sigma": 1.7,
      "rank": 142,
      "of": 395,
      "games": 9
     },
     "benchmarks": [
      {
       "key": "osworld_score",
       "name": "OSWorld",
       "zh": "桌面操作",
       "score": 0.623,
       "pct": 62.3
      }
     ]
    },
    {
     "id": "glm-5",
     "name": "GLM-5",
     "released": "2026-02-11",
     "announced": "2026-02-11",
     "context": 200000,
     "params": 744000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": false,
     "priceIn": 1,
     "priceOut": 3.2,
     "ability": {
      "index": "general",
      "score": 36.82,
      "mu": 42.46,
      "sigma": 1.88,
      "rank": 89,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.778,
       "pct": 77.8
      },
      {
       "key": "mcp_atlas_score",
       "name": "MCP Atlas",
       "zh": "工具调用",
       "score": 0.678,
       "pct": 67.8
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.759,
       "pct": 75.9
      }
     ]
    },
    {
     "id": "glm-4.7-flash",
     "name": "GLM-4.7-Flash",
     "released": "2026-01-19",
     "announced": "2026-01-19",
     "context": null,
     "params": 30000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 22.96,
      "mu": 28.16,
      "sigma": 1.74,
      "rank": 201,
      "of": 395,
      "games": 6
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.752,
       "pct": 75.2
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.144,
       "pct": 14.4
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.916,
       "pct": 91.6
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.592,
       "pct": 59.2
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.428,
       "pct": 42.8
      }
     ]
    },
    {
     "id": "glm-4.7",
     "name": "GLM-4.7",
     "released": "2025-12-22",
     "announced": "2025-12-22",
     "context": 202752,
     "params": 358000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.4,
     "priceOut": 1.75,
     "ability": {
      "index": "general",
      "score": 33.95,
      "mu": 37.57,
      "sigma": 1.2,
      "rank": 114,
      "of": 395,
      "games": 13
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.857,
       "pct": 85.7
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.428,
       "pct": 42.8
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.957,
       "pct": 95.7
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.738,
       "pct": 73.8
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.333,
       "pct": 33.3
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.52,
       "pct": 52
      }
     ]
    },
    {
     "id": "glm-4.6",
     "name": "GLM-4.6",
     "released": "2025-09-30",
     "announced": "2025-09-30",
     "context": 202752,
     "params": 357000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": true,
     "multimodal": true,
     "priceIn": 0.5,
     "priceOut": 2,
     "ability": {
      "index": "general",
      "score": 28.51,
      "mu": 33.25,
      "sigma": 1.58,
      "rank": 156,
      "of": 395,
      "games": 7
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.81,
       "pct": 81
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.172,
       "pct": 17.2
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.939,
       "pct": 93.9
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.68,
       "pct": 68
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.405,
       "pct": 40.5
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.451,
       "pct": 45.1
      }
     ]
    },
    {
     "id": "glm-4.5v",
     "name": "GLM-4.5V",
     "released": "2025-08-11",
     "announced": "2025-08-11",
     "context": null,
     "params": 108000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": null,
     "benchmarks": []
    },
    {
     "id": "glm-4.5",
     "name": "GLM-4.5",
     "released": "2025-07-28",
     "announced": "2025-07-28",
     "context": null,
     "params": 355000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 27.26,
      "mu": 30.82,
      "sigma": 1.19,
      "rank": 166,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.791,
       "pct": 79.1
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.144,
       "pct": 14.4
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.642,
       "pct": 64.2
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.417,
       "pct": 41.7
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.375,
       "pct": 37.5
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.797,
       "pct": 79.7
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.264,
       "pct": 26.4
      }
     ]
    },
    {
     "id": "glm-4.5-air",
     "name": "GLM-4.5-Air",
     "released": "2025-07-28",
     "announced": "2025-07-28",
     "context": null,
     "params": 106000000000,
     "license": "mit",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 23.85,
      "mu": 27.38,
      "sigma": 1.18,
      "rank": 189,
      "of": 395,
      "games": 14
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.75,
       "pct": 75
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.106,
       "pct": 10.6
      },
      {
       "key": "swe_bench_verified_score",
       "name": "SWE-bench Verified",
       "zh": "真实仓库修 bug",
       "score": 0.576,
       "pct": 57.6
      },
      {
       "key": "scicode_score",
       "name": "SciCode",
       "zh": "科学计算代码",
       "score": 0.373,
       "pct": 37.3
      },
      {
       "key": "terminal_bench_score",
       "name": "Terminal-Bench",
       "zh": "终端实操",
       "score": 0.3,
       "pct": 30
      },
      {
       "key": "tau_bench_retail_score",
       "name": "τ-bench Retail",
       "zh": "客服代理对话",
       "score": 0.779,
       "pct": 77.9
      },
      {
       "key": "browsecomp_score",
       "name": "BrowseComp",
       "zh": "联网检索",
       "score": 0.213,
       "pct": 21.3
      }
     ]
    }
   ]
  },
  {
   "id": "wenxin",
   "name": "文心一言",
   "org": "百度",
   "orgId": "baidu",
   "look": "深蓝长发与中式衣裙 · 蓝色立方体发夹、轮椅",
   "x": 95,
   "y": 43,
   "band": [
    91.8,
    100
   ],
   "abilityIndex": "general",
   "versionCount": 2,
   "best": {
    "id": "ernie-5.0",
    "name": "ERNIE 5.0",
    "ability": {
     "index": "general",
     "score": 33.17,
     "mu": 38.76,
     "sigma": 1.86,
     "rank": 121,
     "of": 395,
     "games": 5
    },
    "priceIn": null,
    "priceOut": null
   },
   "versions": [
    {
     "id": "ernie-5.0",
     "name": "ERNIE 5.0",
     "released": "2026-01-22",
     "announced": "2026-01-22",
     "context": null,
     "params": null,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": true,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": 33.17,
      "mu": 38.76,
      "sigma": 1.86,
      "rank": 121,
      "of": 395,
      "games": 5
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.85,
       "pct": 85
      },
      {
       "key": "hle_score",
       "name": "Humanity's Last Exam",
       "zh": "跨学科专家难题",
       "score": 0.39,
       "pct": 39
      },
      {
       "key": "aime_2025_score",
       "name": "AIME 2025",
       "zh": "竞赛数学",
       "score": 0.87,
       "pct": 87
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.75,
       "pct": 75
      }
     ]
    },
    {
     "id": "ernie-4.5",
     "name": "ERNIE 4.5",
     "released": "2025-06-25",
     "announced": "2025-06-25",
     "context": null,
     "params": 21000000000,
     "license": "proprietary",
     "cutoff": null,
     "isMoe": false,
     "multimodal": false,
     "priceIn": null,
     "priceOut": null,
     "ability": {
      "index": "general",
      "score": -13.87,
      "mu": -9.7,
      "sigma": 1.39,
      "rank": 395,
      "of": 395,
      "games": 20
     },
     "benchmarks": [
      {
       "key": "gpqa_score",
       "name": "GPQA Diamond",
       "zh": "研究生级科学问答",
       "score": 0.74,
       "pct": 74
      },
      {
       "key": "simpleqa_score",
       "name": "SimpleQA",
       "zh": "事实性短问答",
       "score": 0.018,
       "pct": 1.8
      }
     ]
    }
   ]
  }
 ]
};
