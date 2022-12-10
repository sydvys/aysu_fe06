const messageContainer = document.querySelector('.message_container')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scroleToTop = document.getElementById('scroleToTop')
const scroleToBottom = document.getElementById('scroleToBottom')
const sentModel = document.getElementById('sentModel')

messageInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        sendMessage()
    }
})

scroleToTop.addEventListener('click', () => {
    messageContainer.scrollTo(0, 0)
})
scroleToBottom.addEventListener('click', () => {
    messageContainer.scrollTo(0, messageContainer.scrollHeight)
})

sendBtn.addEventListener('click', sendMessage)

function sendMessage() {
    const mesaj = messageInput.value.trim();
    if (mesaj) {
        setTimeout(() => {
            messageContainer.scrollTo(0, messageContainer.scrollHeight)
        }, 1);
        creatMessage(mesaj, true)
        creatMessage(mesaj.split('').reverse().join(''), false)
        messageInput.value = ''
        sentModel.style.display = 'block'
        setTimeout(() => {
            sentModel.style.display = 'none'

        }, 400)
    } else {
        alert('no message')
    }
}
function creatMessage(mesaj, sentByMe) {
    const vaxt = new Date()
    const div = document.createElement('div')
    div.className = sentByMe ? 'sent_message_by_me' : 'sent_message_by_them'

    const p = document.createElement('p')
    p.textContent = mesaj

    const span = document.createElement('span')
    span.textContent = `${vaxt.getHours()}:${vaxt.getMinutes()}`

    div.append(p, span)
    messageContainer.appendChild(div)
}












