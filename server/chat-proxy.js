const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
// Groq API Configuration
const GROQ_TOKEN = process.env.GROQ_TOKEN || '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.1-8b-instant';  // Updated model (faster & free)
const GROQ_TEMPERATURE = 0.7;
const GROQ_MAX_TOKENS = 500;
const HISTORY_MAX_TURNS = 6;
// System prompt: concise, grade 9 level, practical examples, no grade 12+ concepts
const SYSTEM_PROMPT = process.env.SYSTEM_PROMPT || `Bạn là trợ lý cho học sinh lớp 9 môn Khoa học Tự nhiên. Quy tắc trả lời:
1. Dùng từ ngữ ĐƠNGIẢN, dễ hiểu, phù hợp lớp 9 (KHÔNG dùng kiến thức cấp 3).
2. Luôn trả lời TIẾNG VIỆT, từ 1–3 câu tóm tắt + 1–3 gạch đầu dòng ví dụ/chi tiết thực tế.
3. Ưu tiên dùng ví dụ thực tế, so sánh dễ hình dung thay vì công thức/lý thuyết trừu tượng.
4. Nếu thiếu thông tin, hỏi 1 câu làm rõ, không trống trải.
5. TỐI ĐA 3–4 dòng, không lan man.`;
// Simple in-memory cache: message -> { r: reply, t: timestamp }
const replyCache = new Map();

function sendJson(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization'
  });
  res.end(body);
}

function serveStatic(req, res, parsedUrl) {
  let pathname = decodeURIComponent(parsedUrl.pathname);
  if (pathname === '/') pathname = '/index.html';
  const filePath = path.join(__dirname, '..', pathname);
  if (!filePath.startsWith(path.join(__dirname, '..'))) return sendNotFound(res);
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) return sendNotFound(res);
    const ext = path.extname(filePath).toLowerCase();
    const types = {
      '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
    };
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  });
}

function sendNotFound(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*' });
  res.end('Not found');
}

function collectRequestBody(req) {
  return new Promise((resolve, reject) => {
    req.setEncoding('utf8');
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

// callGroq accepts (message, historyArray)
function callGroq(message, history = []) {
  return new Promise((resolve, reject) => {
    try {
      // build cache key
      const cacheKey = (history.slice(-HISTORY_MAX_TURNS).map(h => `${h.role}:${h.content}`).join('|') + '||' + message).slice(0, 2000);
      const cached = replyCache.get(cacheKey);
      if (cached && (Date.now() - cached.t) < 60_000) {
        return resolve({ choices: [{ message: { content: cached.r } }] });
      }

      // construct messages: system, trimmed history, then current user message
      const messages = [{ role: 'system', content: SYSTEM_PROMPT }];
      const histTrim = Array.isArray(history) ? history.slice(-HISTORY_MAX_TURNS) : [];
      for (const h of histTrim) {
        if (!h || !h.role || !h.content) continue;
        const role = h.role === 'assistant' ? 'assistant' : 'user';
        messages.push({ role, content: String(h.content) });
      }
      messages.push({ role: 'user', content: message });

      const bodyObj = {
        model: GROQ_MODEL,
        messages,
        temperature: GROQ_TEMPERATURE,
        max_tokens: GROQ_MAX_TOKENS
      };
      const body = JSON.stringify(bodyObj);

      const options = {
        hostname: 'api.groq.com',
        port: 443,
        path: '/openai/v1/chat/completions',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
          'Authorization': `Bearer ${GROQ_TOKEN}`
        }
      };

      console.log('Calling Groq API...');
      const start = Date.now();
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (c) => data += c);
        res.on('end', () => {
          const elapsed = Date.now() - start;
          console.log('Groq response time (ms):', elapsed);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            try {
              const j = JSON.parse(data);
              const reply = j?.choices?.[0]?.message?.content || '';
              if (!reply) throw new Error('No content in response');
              try { replyCache.set(cacheKey, { r: reply, t: Date.now() }); } catch (e) {}
              return resolve({ choices: [{ message: { content: reply } }] });
            } catch (e) {
              return reject(e);
            }
          } else {
            try {
              const j = JSON.parse(data);
              return reject({ status: res.statusCode, body: j });
            } catch (e) {
              return reject({ status: res.statusCode, body: data });
            }
          }
        });
      });

      req.on('error', (err) => reject(err));
      req.setTimeout(60000, () => {
        req.destroy();
        reject(new Error('Groq API request timed out'));
      });
      req.write(body);
      req.end();
    } catch (err) {
      return reject(err);
    }
  });
}

const server = http.createServer(async (req, res) => {
  const parsed = new URL(req.url, `http://${req.headers.host}`);
  const pathname = parsed.pathname;
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    });
    return res.end();
  }

  if (pathname === '/api/chat' && req.method === 'POST') {
    try {
      const raw = await collectRequestBody(req);
      console.log('Raw body length:', raw.length, 'content:', raw.substring(0, 100));
      const trimmed = raw.trim();
      const body = trimmed ? JSON.parse(trimmed) : {};
      console.log('Parsed body:', body);
      const message = body.message;
      const history = Array.isArray(body.history) ? body.history : [];
      if (!message) return sendJson(res, 400, { error: 'missing message' });
      console.log('Proxy /api/chat request, message length:', (message || '').length);
      try {
        const data = await callGroq(message, history);
        const reply = data?.choices?.[0]?.message?.content ?? '';
        return sendJson(res, 200, { reply });
      } catch (upErr) {
        console.error('Groq API error', upErr);
        if (upErr && upErr.status) return sendJson(res, upErr.status, { error: upErr.body || 'upstream error' });
        return sendJson(res, 500, { error: String(upErr) });
      }
    } catch (err) {
      console.error('Request parsing error', err);
      return sendJson(res, 400, { error: 'invalid json' });
    }
  }

  // Serve static files from project root
  serveStatic(req, res, parsed);
});

server.listen(PORT, () => console.log(`Chat proxy running on http://localhost:${PORT}`));
