const headerClose = document.getElementById('chat-bot-header-close')
const botMessage = document.getElementsByClassName('bot-message')
const userMessage = document.getElementsByClassName('user-message')
const inputMessage = document.getElementById('user-input')
const sendArquive = document.getElementById('send-arquive')
const sendMessage = document.getElementById('send-message')
const chat = document.getElementById('chat-bot')
const chatPopup = document.getElementById('chat-popup')

function closeOpenChat() {
  const display = chat.style.display === 'none' ? 'block' : 'none'
  chat.style.display = display
  console.log(chat.style.display)
}

headerClose.addEventListener('click', closeOpenChat)
chatPopup.addEventListener('click', closeOpenChat)