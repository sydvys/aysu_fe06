const messageContainer = document.getElementById('messageContainer')
const messageInput = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const scroleToTop = document.getElementById('scroleToTop')
const scroleToBottom = document.getElementById('scroleToBottom')
const sentModel = document.getElementById('sentModel')
const dotContainer = document.querySelector('.dot_container')
const dotMenu = document.querySelector('.dot_menu')
const archive = document.getElementById('archive')
const archiveContainer = document.querySelector('.archive_container')
const closeArchive = document.getElementById('closeArchive')
const clearArchive = document.getElementById('clearArchive')
const clearChat = document.getElementById('clear_chat')

const messageArchiveArray = []


scroleToTop.addEventListener('click', () => {
    messageContainer.scrollTo(0, 0)
    document.body.scrollTo(0, 0)
})

scroleToBottom.addEventListener('click', () => {
    setTimeout(() => {
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
archive.addEventListener('click', clickOnAechive)
clearChat.addEventListener('click', clearMessages)

closeArchive.addEventListener('click', () => {
    archiveContainer.classList.toggle('close_menu')
})

clearArchive.addEventListener('click', () => {
    messageArchiveArray.length = 0
    const len = archiveContainer.children.length
    for (let i = 1; i < len; i++) {
        archiveContainer.removeChild(archiveContainer.lastElementChild)
    }
})

function clearMessages() {
    if (confirm('delete all ?')) {
        const len = messageContainer.children.length
        for (let i = 1; i < len; i++) {
            messageContainer.removeChild(messageContainer.lastElementChild)
        }
    } else {
        alert('request canceled')
    }

}


function clickOnAechive() {
    archiveContainer.classList.toggle('close_menu')
    messageArchiveArray.forEach((elem) => {
        const div = document.createElement('div')

        const h2 = document.createElement('h2')
        h2.textContent = elem.mesaj

        const p = document.createElement('p')
        p.textContent = elem.time

        const hr = document.createElement('hr')

        div.append(h2, p, hr)
        archiveContainer.appendChild(div)
    })
}

function clickOnDotConatiner() {
    dotMenu.classList.toggle('close_menu')
    const i = document.createElement('i')
    if (dotMenu.classList.contains('close_menu')) {
        i.className = 'fa-solid fa-ellipsis-vertical'
    } else {
        i.className = 'fa-regular fa-x'
    }
    dotContainer.replaceChild(i, dotContainer.firstElementChild)
}


function sendMessage() {
    const mesaj = messageInput.value.trim()
    if (mesaj) {
        creatMessage(mesaj, true)
        let theirMessage = mesaj.split('').reverse().join('')
        creatMessage(theirMessage, false)

        messageInput.value = ''
        setTimeout(() => {
            messageContainer.scrollTo(0, messageContainer.scrollHeight)
        }, 1)
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
    const time = `${vaxt.getHours()}:${vaxt.getMinutes()}`
    messageArchiveArray.push({
        mesaj,
        time,
        sentByMe
    })
    const div = document.createElement('div')
    div.className = sentByMe ? 'sent_message_by_me' : 'sent_message_by_them'

    const p = document.createElement('p')
    p.textContent = mesaj

    const span = document.createElement('span')
    span.textContent = time

    div.append(p, span)
    messageContainer.appendChild(div)
}



