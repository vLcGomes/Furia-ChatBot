const furiaLogoPath = 'imgs/logo-furia.png'
const questionClass = 'user-message'
const RespClass = 'bot-message'

const headerClose = document.getElementById('chat-bot-header-close')
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

function chatBotMessageSchedule(message) {
  const messageBox = document.createElement('div')
  const imgBot = document.createElement('img')
  const msg = document.createElement('div')
  imgBot.src = furiaLogoPath
  messageBox.id = 'bot-message-box'
  msg.className = RespClass
  messageBox.appendChild(imgBot)
  messageBox.appendChild(message)
  return messageBox
}

function chatBotResp(message) {
  const botMessageBox = chatBotMessageSchedule(message)
  botMessageBox.innerText(requestResponse(message))
  chatBotField.appendChild(botMessageBox)
}

function displayUserMessage(message) {
  console.log(message)
  const upMessage = document.createElement('div')
  upMessage.textContent = message
  upMessage.className = questionClass
  chatBotField.appendChild(upMessage)

}


//--------------------------------------------------------------


headerClose.addEventListener('click', closeOpenChat)
chatPopup.addEventListener('click', closeOpenChat)

sendMessage.addEventListener('click', () => {
  displayUserMessage(inputMessage.value)
  inputMessage.value = ''
})

inputMessage.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    displayUserMessage(inputMessage.value)
    inputMessage.value = ''
  }
})
