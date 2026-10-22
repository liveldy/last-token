/* ==========================================================================
   最后的 Token · 本地预览服务
   --------------------------------------------------------------------------
   两个作用：
     1. 把本站目录当静态站点托管（http://localhost:8787/）
     2. 顺手把 ZeroEval / OpenRouter 的公开接口代理到同源 /api/ 下，
        这样页面里的“实时数据”才拉得动——那两个接口不发 CORS 头，
        浏览器从任何页面直接 fetch 都会被拦。

   用法：node tools/serve.cjs [端口]
   ========================================================================== */

'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const START_PORT = Number(process.argv[2]) || 8787;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const PROXY = {
  '/api/zeroeval/': 'https://api.zeroeval.com/',
  '/api/openrouter/': 'https://openrouter.ai/api/'
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = decodeURIComponent(url.pathname);

  for (const prefix of Object.keys(PROXY)) {
    if (pathname.startsWith(prefix)) {
      const target = PROXY[prefix] + pathname.slice(prefix.length) + url.search;
      try {
        const upstream = await fetch(target, { headers: { accept: 'application/json' } });
        const body = Buffer.from(await upstream.arrayBuffer());
        res.writeHead(upstream.status, {
          'content-type': upstream.headers.get('content-type') || 'application/json',
          'access-control-allow-origin': '*',
          'cache-control': 'no-store'
        });
        res.end(body);
      } catch (e) {
        res.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ error: '上游请求失败：' + e.message }));
      }
      return;
    }
  }

  let file = path.join(ROOT, pathname === '/' ? 'index.html' : pathname);
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end('forbidden'); return; }
  fs.stat(file, (err, st) => {
    if (err) { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); res.end('404 ' + pathname); return; }
    if (st.isDirectory()) file = path.join(file, 'index.html');
    fs.readFile(file, (e2, buf) => {
      if (e2) { res.writeHead(404); res.end('404'); return; }
      res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(buf);
    });
  });
});

function listen(port, tries) {
  server.once('error', (e) => {
    if (e.code === 'EADDRINUSE' && tries > 0) {
      console.log('端口 ' + port + ' 被占用，换 ' + (port + 1));
      listen(port + 1, tries - 1);
    } else {
      throw e;
    }
  });
  server.listen(port, () => {
    console.log('最后的 Token 已在 http://localhost:' + port + '/ 打开');
    console.log('实时数据代理：/api/zeroeval/*  →  https://api.zeroeval.com/*');
    console.log('                /api/openrouter/* → https://openrouter.ai/api/*');
    console.log('Ctrl-C 结束。');
  });
}

listen(START_PORT, 20);
