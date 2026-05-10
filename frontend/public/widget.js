(function() {
    const backendUrl = 'http://localhost:8010/api/v1/widget/capture';
    const tenantId = 1; // Default tenant for demo

    // Create floating button
    const button = document.createElement('div');
    button.id = 'retantion-widget-btn';
    button.innerHTML = '💬';
    button.style = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: #4f46e5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
    `;

    // Create chat window
    const window = document.createElement('div');
    window.id = 'retantion-widget-window';
    window.style = `
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 350px;
        height: 450px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        display: none;
        flex-direction: column;
        overflow: hidden;
        z-index: 9999;
        font-family: sans-serif;
    `;

    window.innerHTML = `
        <div style="background: #4f46e5; padding: 20px; color: white; font-weight: bold;">
            Chat with our Agent
        </div>
        <div id="retantion-chat-content" style="flex: 1; padding: 20px; overflow-y: auto;">
            Hello! How can we help you find your dream property today?
        </div>
        <div style="padding: 20px; border-top: 1px solid #eee;">
            <input id="retantion-input-name" placeholder="Full Name" style="width: 100%; padding: 8px; margin-bottom: 8px; border: 1px solid #ddd; border-radius: 8px;">
            <input id="retantion-input-phone" placeholder="Phone Number" style="width: 100%; padding: 8px; margin-bottom: 8px; border: 1px solid #ddd; border-radius: 8px;">
            <textarea id="retantion-input-msg" placeholder="Your Message..." style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 8px; height: 60px;"></textarea>
            <button id="retantion-send-btn" style="width: 100%; margin-top: 10px; padding: 12px; background: #4f46e5; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
                Send Message
            </button>
        </div>
    `;

    document.body.appendChild(button);
    document.body.appendChild(window);

    button.onclick = () => {
        window.style.display = window.style.display === 'none' ? 'flex' : 'none';
    };

    const sendBtn = document.getElementById('retantion-send-btn');
    sendBtn.onclick = async () => {
        const name = document.getElementById('retantion-input-name').value;
        const phone = document.getElementById('retantion-input-phone').value;
        const msg = document.getElementById('retantion-input-msg').value;

        if (!name || !phone) {
            alert('Please fill Name and Phone');
            return;
        }

        sendBtn.innerHTML = 'Sending...';
        sendBtn.disabled = true;

        try {
            const res = await fetch(backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tenant_id: tenantId,
                    full_name: name,
                    phone_number: phone,
                    message: msg
                })
            });
            if (res.ok) {
                document.getElementById('retantion-chat-content').innerHTML = `
                    <div style="color: green; font-weight: bold;">Thank you! Your inquiry has been sent. Our agent will contact you shortly.</div>
                `;
                document.querySelectorAll('#retantion-widget-window input, #retantion-widget-window textarea, #retantion-send-btn').forEach(el => el.style.display = 'none');
            }
        } catch (e) {
            alert('Failed to send message');
        } finally {
            sendBtn.innerHTML = 'Send Message';
            sendBtn.disabled = false;
        }
    };
})();
