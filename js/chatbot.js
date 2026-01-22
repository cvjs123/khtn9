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
        // Add to history
        history.push({ role: role === 'user' ? 'user' : 'assistant', content: html.replace(/<[^>]*>/g, '') }); // strip html for content
    }
    const API_BASE = 'http://localhost:3000';
    async function askServer(text){
        const url = API_BASE + '/api/chat';
        try{
            const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ message:text, history: history.slice(0, -1) }) });
            if(!res.ok){
                let errorMsg = res.statusText;
                try {
                    const errObj = await res.json();
                    if (errObj.error && typeof errObj.error === 'string') {
                        errorMsg = errObj.error;
                    } else if (errObj.error && errObj.error.message) {
                        errorMsg = errObj.error.message;
                    }
                } catch (parseErr) {
                    // ignore, use statusText
                }
                return 'Lỗi server: ' + errorMsg + ' (status ' + res.status + ')';
            }
            const j = await res.json(); return j.reply || 'Không có phản hồi.';
        }catch(e){
            console.error('Client fetch error', e);
            return 'Lỗi kết nối: '+ (e.message || e);
        }
    }
    function escapeHtml(s){ return s.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
    async function handleSend(){
        const text = inputEl.value.trim(); if(!text) return; addMessage('user', escapeHtml(text)); inputEl.value='';
        addMessage('bot','<em>Đang trả lời...</em>');
        const reply = await askServer(text);
        const last = messagesEl.querySelector('div.text-start.mb-2:last-child'); if(last && last.textContent.includes('Đang trả lời')) last.remove();
        addMessage('bot', reply);
    }
    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', e=>{ if(e.key==='Enter'){ e.preventDefault(); handleSend(); }});
    toggleBtn && toggleBtn.addEventListener('click', ()=>{
        if(!panel) return;
        if(panel.style.display==='none'){ panel.style.display=''; toggleBtn.textContent='Thu nhỏ'; } else { panel.style.display='none'; toggleBtn.textContent='Mở'; }
    });
    addMessage('bot','Xin chào! Mình có thể giúp gì cho bạn.');
});