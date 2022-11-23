const messageContainer = document.getElementById('messageContainer')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scroleToTop = document.getElementById('scroleToTop')
const scroleToBottom = document.getElementById('scroleToBottom')
const sentModel = document.getElementById('sentModel')
const dotContainer =document.querySelector('.dot_container')
const dotMenu =document.querySelector('.dot_menu')


scroleToTop.addEventListener('click', () => {
    messageContainer.scrollTo(0, 0)
    document.body.scrollTo(0, 0)
})

scroleToBottom.addEventListener('click',() => {
    setTimeout(()=>{
        messageContainer.scrollTo(0, messageContainer.scrollHeight)
    }, 1)
})

sendBtn.addEventListener('click', sendMessage)

messageInput.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
        sendMessage()
    }
})

dotContainer.addEventListener('click', clickOnDotConatiner)

function clickOnDotConatiner() {
    dotMenu.classList.toggle('close_menu')
    const i = document.createElement('i')
    if (dotMenu.classList.contains('close_menu')) {
        i.className= 'fa-solid fa-ellipsis-vertical'
    } else {
        i.className= 'fa-regular fa-x'
    }
    dotContainer.replaceChild(i, dotContainer.firstElementChild)
}

function sendMessage() {
    const mesaj = messageInput.value.trim()
    if (mesaj) {
          setTimeout(()=>{
        messageContainer.scrollTo(0, messageContainer.scrollHeight)
        }, 1)
        creatMessage(mesaj, true)
        creatMessage((mesaj.split('').reverse().join('')) , false)

        messageInput.value = ''

        sentModel.style.display = 'block'
        setTimeout(() => {
            sentModel.style.display = 'none'

        }, 300)
    } else {
        alert('write something')
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


