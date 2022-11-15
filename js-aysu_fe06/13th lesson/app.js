const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener("click", colorChange)
btn2.addEventListener("click", reverse)

function colorChange() {
    btn2.style.backgroundColor = "red"
}

function reverse() {
    btn1.style.backgroundColor = "pink"
}
