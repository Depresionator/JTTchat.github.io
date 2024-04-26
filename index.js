let username = window.prompt("Select username");
let chatArea = document.getElementById('chatArea');

function showInfo() {
    window.alert("J.oes T.hingy T.hing chat made by John_the_guy. Alpha 0.1 - Features a main page and chat. Contact: cupojoe9000@gmail.com");
}

document.getElementById('Info').addEventListener('click', showInfo);

function sendMessage() {
    let message = window.prompt("Enter your message:");
    if (message) { 
        appendMessage(`${username}: ${message}`);
    }
}

document.getElementById('chat').addEventListener('click', sendMessage);

function changeUsername() {
    let newUsername = window.prompt("Select new username", username);
    if (newUsername) { 
        username = newUsername;
    }
}

document.getElementById('change').addEventListener('click', changeUsername);

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatArea.appendChild(messageElement);
    chatArea.scrollTop = chatArea.scrollHeight; 
}
