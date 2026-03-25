// ...new file...
document.addEventListener('DOMContentLoaded', function() {
    const messagesEl = document.getElementById('chatbotMessages');
    const inputEl = document.getElementById('chatbotInput');
    const sendBtn = document.getElementById('chatbotSend');
    const toggleBtn = document.getElementById('chatbotToggle');
    const panel = document.getElementById('chatbotPanel');
    if (!messagesEl || !inputEl || !sendBtn) return;
    let history = [];
    function addMessage(role, html){
        const m = document.createElement('div');
        m.className = role==='user' ? 'text-end mb-2' : 'text-start mb-2';
        m.innerHTML = '<div class="d-inline-block p-2 rounded '+(role==='user'?'bg-primary text-white':'bg-light text-dark')+'" style="max-width:90%;">'+html+'</div>';
        messagesEl.appendChild(m); messagesEl.scrollTop = messagesEl.scrollHeight;
        // Add to history (skip errors and "Đang trả lời" messages)
        if (!html.includes('❌ Lỗi') && !html.includes('<em>Đang') && !html.includes('🔄 Thử')) {
            history.push({ role: role === 'user' ? 'user' : 'assistant', content: html.replace(/<[^>]*>/g, '') });
        }
    }
    // Groq API direct
    const GROQ_TOKEN = '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';
    const GROQ_API = 'https://api.groq.com/openai/v1/chat/completions';
    const GROQ_MODEL = 'llama-3.1-8b-instant';  // Updated model (faster & free)
    
    async function askServer(text, retryCount = 0){
        const MAX_RETRIES = 2;
        const BASE_DELAY = 800;
        
        try{
            const res = await fetch(GROQ_API, {
                method:'POST',
                headers:{
                    'Authorization': 'Bearer ' + GROQ_TOKEN,
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    model: GROQ_MODEL,
                    messages: [
                        { role: 'system', content: 'Bạn là trợ lý AI cho học sinh lớp 9 môn Khoa học Tự nhiên. Trả lời tiếng Việt, ngắn gọn, dễ hiểu.' },
                        { role: 'user', content: text }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                })
            });
            
            if(!res.ok){
                let errorMsg = res.statusText;
                try {
                    const errObj = await res.json();
                    if (errObj.error?.message) errorMsg = errObj.error.message;
                } catch (parseErr) {}
                return '⚠️ Lỗi (' + res.status + '): ' + errorMsg;
            }
            
            const j = await res.json();
            return (j.choices?.[0]?.message?.content || 'Không có phản hồi.').trim();
        }catch(e){
            console.error('Fetch error (attempt ' + (retryCount + 1) + '):', e);
            
            if (retryCount < MAX_RETRIES) {
                const delay = BASE_DELAY * Math.pow(2, retryCount);
                updateLastBotMessage(`<em>Đang thử lại (${retryCount + 1}/${MAX_RETRIES})...</em>`);
                await new Promise(r => setTimeout(r, delay));
                return askServer(text, retryCount + 1);
            }
            
            return '❌ Lỗi kết nối.\n\n💡 Nhấn "Thử lại" để gửi lại.';
        }
    }
    
    // Helper: cập nhật message cuối cùng của bot
    function updateLastBotMessage(html) {
        const last = messagesEl.querySelector('div.text-start.mb-2:last-child');
        if (last) {
            last.innerHTML = '<div class="d-inline-block p-2 rounded bg-light text-dark" style="max-width:90%;">'+html+'</div>';
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    }
    function escapeHtml(s){ return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
    
    async function handleSend(overrideText = null){
        const text = overrideText || inputEl.value.trim(); 
        if(!text) return; 
        if (!overrideText) addMessage('user', escapeHtml(text));  // Chỉ thêm user msg nếu không phải retry
        inputEl.value='';
        addMessage('bot','<em>Đang trả lời...</em>');
        const reply = await askServer(text);
        const last = messagesEl.querySelector('div.text-start.mb-2:last-child'); 
        if(last && last.textContent.includes('Đang trả lời')) last.remove();
        
        // Nếu lỗi kết nối, thêm nút "Thử lại"
        if (reply.includes('❌ Lỗi kết nối') || reply.includes('❌ Lỗi')) {
            const errorHtml = reply + '\n\n<button id="retryBtn" class="btn btn-sm btn-warning mt-2">🔄 Thử lại</button>';
            addMessage('bot', errorHtml);
            setTimeout(() => {
                const retryBtn = document.getElementById('retryBtn');
                if (retryBtn) {
                    retryBtn.addEventListener('click', () => {
                        const lastMsg = messagesEl.querySelectorAll('div.text-end.mb-2');
                        const lastUserText = lastMsg[lastMsg.length - 1]?.textContent || text;
                        messagesEl.removeChild(messagesEl.lastChild);  // Xóa error message
                        handleSend(lastUserText);  // Gửi lại với text cũ
                    });
                }
            }, 100);
        } else {
            addMessage('bot', reply);
        }
    }
    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); handleSend(); }});
    toggleBtn && toggleBtn.addEventListener('click', ()=>{
        if(!panel) return;
        if(panel.style.display==='none'){ panel.style.display=''; toggleBtn.textContent='Thu nhỏ'; } else { panel.style.display='none'; toggleBtn.textContent='Mở'; }
    });
    addMessage('bot','Xin chào! Mình có thể giúp gì cho bạn.');
});