const furiaLogoPath = 'imgs/logo-furia.png'
const questionClass = 'user-message'
const RespClass = 'bot-message'

const headerClose = document.getElementById('chat-bot-header-close')
const botMessage = document.getElementsByClassName('bot-message')
const userMessage = document.getElementsByClassName('user-message')
const inputMessage = document.getElementById('user-input')
const sendArquive = document.getElementById('send-arquive')
const sendMessage = document.getElementById('send-message')
const chat = document.getElementById('chat-bot')
const chatPopup = document.getElementById('chat-popup')
const chatBotField = document.getElementById('chat-bot-content')

function closeOpenChat() {
  const display = chat.style.display === 'none' ? 'block' : 'none'
  chat.style.display = display
  console.log(chat.style.display)
}

function chatBotMessageSchedule() {
  const message = document.createElement('div')
  const imgBot = document.createElement('img')
  imgBot.src = furiaLogoPath
  message.id = 'bot-message-box'
  
}

function chatBotResp(message) {

}

function displayUserMessage(message) {
  console.log(message)
  const upMessage = document.createElement('div')
  upMessage.textContent = message
  upMessage.className = questionClass
  chatBotField.appendChild(upMessage)
}


headerClose.addEventListener('click', closeOpenChat)
chatPopup.addEventListener('click', closeOpenChat)


sendMessage.addEventListener('click', () => {
  displayUserMessage(inputMessage.value)
  inputMessage.value = ''
})