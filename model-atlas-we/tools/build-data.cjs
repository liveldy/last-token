/* ==========================================================================
   模型能力图鉴 · 数据快照生成
   --------------------------------------------------------------------------
   拉取 ZeroEval / LLM Stats 与 OpenRouter 的公开接口，整理成网站直接可用的
   快照文件 data/models-snapshot.js（写成 .js 是为了让页面用 file:// 打开时
   也能加载——file:// 下 fetch 本地 .json 会被浏览器拦下）。

   用法：
     node tools/build-data.cjs                 # 联网拉取
     node tools/build-data.cjs --offline DIR   # 改用 DIR 里的 JSON 备份
     node tools/build-data.cjs --limit 80      # 能力图上画多少名（默认 50）
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const ModelData = require('../data/model-data.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'models-snapshot.js');

const URLS = {
  models: 'https://api.zeroeval.com/leaderboard/models/full',
  index: 'https://api.zeroeval.com/leaderboard/indexes/all',
  openrouter: 'https://openrouter.ai/api/v1/models'
};

const FILES = {
  models: 'ze_leaderboard_models_full.json',
  index: 'ze_leaderboard_indexes_all.json',
  openrouter: 'or.json'
};

async function grab(key, offlineDir) {
  if (offlineDir) {
    const p = path.join(offlineDir, FILES[key]);
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  }
  const res = await fetch(URLS[key], { headers: { accept: 'application/json' } });
  if (!res.ok) throw new Error(key + ' → HTTP ' + res.status);
  return res.json();
}

async function main() {
  const args = process.argv.slice(2);
  const i = args.indexOf('--offline');
  const offlineDir = i >= 0 ? args[i + 1] : null;
  const l = args.indexOf('--limit');
  const limit = l >= 0 ? Number(args[l + 1]) : ModelData.PLOT_LIMIT;

  const [models, index, or] = await Promise.all([
    grab('models', offlineDir),
    grab('index', offlineDir),
    grab('openrouter', offlineDir)
  ]);

  const modelsArr = Array.isArray(models) ? models : (models.models || models.data || []);
  const orArr = Array.isArray(or) ? or : (or.data || []);

  const data = ModelData.buildDataset(modelsArr, index, orArr, limit);

  console.log(
    `模型 ${data.total} 个；能算出参考成本 ${data.total - data.withoutPrice} 个，` +
    `${data.withoutPrice} 个没有公开标价`
  );
  console.log(`能力图取前 ${data.plotLimit} 名（有价格的）：`, data.plottedIds.length, '个点');
  if (data.skipped.length) {
    console.log('被跳过的（没有公开标价）：', data.skipped.map((s) => `#${s.rank} ${s.name}`).join('、'));
  }
  console.log('分数区间：', data.lowScore, '~', data.topScore);
  const withBench = data.models.filter((m) => m.benchmarks.length).length;
  console.log('有基准分的模型：', withBench, '个');

  const banner =
    '/* 由 tools/build-data.cjs 生成，请勿手改。\n' +
    `   数据来源：ZeroEval / LLM Stats（api.zeroeval.com）、OpenRouter（openrouter.ai）。\n` +
    `   快照时间：${data.snapshotAt} */\n`;
  fs.writeFileSync(OUT, banner + 'window.MODEL_SNAPSHOT = ' + JSON.stringify(data) + ';\n', 'utf8');
  console.log('\n写入 ' + path.relative(ROOT, OUT) + '（' + (fs.statSync(OUT).size / 1024).toFixed(0) + ' KB）');
}

main().catch((e) => { console.error('生成失败：' + e.message); process.exit(1); });
