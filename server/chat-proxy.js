const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;

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

function callOllama(payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'llama3.2:1b',
      messages: [
        { role: 'system', content: 'Bạn là trợ lý AI hữu ích cho học sinh Việt Nam học môn Khoa học Tự nhiên lớp 9 (KHTN). Luôn trả lời CHỈ bằng tiếng Việt, không dùng bất kỳ ngôn ngữ nào khác. Trả lời trực tiếp, đúng trọng tâm, không vòng vo. Sử dụng tiếng Việt chuẩn, chính xác, không sai chính tả. Trả lời chính xác về khoa học, sử dụng kiến thức chuẩn, tránh thông tin sai lệch. Tập trung trả lời câu hỏi hiện tại, không lẫn lộn với câu hỏi trước. Ngắn gọn, dễ hiểu. Sử dụng LaTeX cho công thức (ví dụ: \( E = mc^2 \)). Giữ dưới 150 từ.' },
        ...payload.messages
      ],
      stream: false
    });
    const options = {
      method: 'POST',
      hostname: 'localhost',
      port: 11434,
      path: '/api/chat',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (c) => data += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ choices: [{ message: { content: j.message.content } }] });
          } else {
            reject({ status: res.statusCode, body: j });
          }
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
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
      const payload = {
        messages: [...history, { role: 'user', content: message }]
      };
      try {
        const data = await callOllama(payload);
        const reply = data?.choices?.[0]?.message?.content ?? '';
        return sendJson(res, 200, { reply });
      } catch (upErr) {
        console.error('Ollama error', upErr);
        if (upErr && upErr.status) return sendJson(res, upErr.status, { error: upErr.body || 'upstream error' });
        return sendJson(res, 500, { error: String(upErr) });
      }
    } catch (err) {
      console.error('Request parsing error', err);
      return sendJson(res, 400, { error: 'invalid json' });
    }
  }

  // Serve static files from project root
  serveStatic(req, res, pathname);
});

server.listen(PORT, () => console.log(`Chat proxy running on http://localhost:${PORT}`));