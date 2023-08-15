document.querySelector('#chat-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const messageInput = document.querySelector('#message-input');
    const message = messageInput.value;
    messageInput.value = '';

    // Add message to chatbox
    const chatbox = document.querySelector('#chatbox');
    chatbox.innerHTML += `<div class="d-flex align-items-center mb-3"><div class="square you">YOU</div> ${message}</div>`;

    // Send the message to the server and get a response
    const response = await fetch('/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
    });

    const responseData = await response.json();

    // Add the response to the chatbox
    chatbox.innerHTML += `<div class="d-flex align-items-center mb-4"><div class="square bot">BOT</div> ${responseData.response}</div>`;

    // Scroll chatbox to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
});
