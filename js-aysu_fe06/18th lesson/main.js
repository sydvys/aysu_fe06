// let p = new Promise((resolve, reject) => {
//     let a= 1 + 2
//     if (a == 2) {
//         resolve('success')
//     }else{
//         reject('failed')
//     }
// })

// p.then((message) => {
//     console.log('this is in the then ' + message)
// }).catch((message) => {
//     console.log('this is in the catch ' + message);
// })

// const userLeft = false
// const userWatchingCatMemes = false

// function watching(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name : 'user left',
//             message : ':('
//         })
//     } else if (userWatchingCatMemes){
//         errorCallback({
//             name : 'user watching cat memes ',
//             message : 'you < cats'
//         })
//     }else {
//         callback('bs here')
//     }
// }

// watching((message) => {
//     console.log('success: ' + message)
// }, (error) => {
//     console.log(error.name + '' + error.message);
// })

// --------------------


// const userLeft = false
// const userWatchingCatMemes = false

// function promise() {
//     return new Promise((resolve, reject) => {
//          if (userLeft) {
//             reject({
//             name : 'user left',
//             message : ':('
//         })
//     } else if (userWatchingCatMemes){
//         reject({
//             name : 'user watching cat memes ',
//             message : 'you < cats'
//         })
//     }else {
//         resolve('hello')
//     }
//     })
// }

// promise().then((message) => {
//     console.log('success: ' + message)
// }).catch((error) => {
//     console.log(error.name + '' + error.message);
// })

// const vid1 = new Promise((resolve, reject) => {
//     resolve('video one recorded')
// })

// const vid2 = new Promise((resolve, reject) => {
//     resolve('video two recorded')
// })

// const vid3 = new Promise((resolve, reject) => {
//     resolve('video three recorded')
// })

// Promise.all([vid1, vid2, vid3]).then((messages) => {
//     console.log(messages);
// })

// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`making request to ${location}`)
//         if (location == 'google') {
//             resolve('google says hi')
//         } else {
//             reject('we can olny talk to google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log('processing response')
//         resolve(`extra information + ${response}`)
//     })
// }

// // makeRequest('google').then(response => {
// //     console.log('response received')
// //     return processRequest(response)
// // }).then(processRequest => {
// //     console.log(processRequest)
// // }).catch(err => {
// //     console.log(err);
// // })

// async function work() {
//     try {
//         const response = await makeRequest('google')
//         console.log('response received')
//         const processResponse = await processRequest(response)
//         console.log(processResponse);
//     } catch (error) {
//         console.log(error);
//     }
// }
// work()




// const root = document.querySelector('.root')


// const url = `https://jsonplaceholder.typicode.com/users`

// fetch(url)
// .then((resp) => resp.json())
// .then((data) => {
//     data.forEach((user) => {
//         const h2 = document.createElement('h2')
//         h2.textContent = user.name
//         const p = document.createElement('p')
//         p.textContent = user.username

//         root.append(h2, p, '------')
//     });
// })






const root = document.querySelector('root')
const input = document.getElementById('input')
const button = document.getElementById('button')

// const url = 'https://restcountries.com/v2/all'
const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
.then((resp) => resp.json())
.then((data) => {
    console.log(data);
})

axios.get(url).then((resp) => {
    const data = resp.data
    console.log(data)
})













































