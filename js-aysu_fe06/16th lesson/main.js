let num1 = prompt('pic the first number')
let op = prompt('pic at op')
let num2 = prompt('pic the second number')

function calc() {
  if ( op ==='+') {
    console.log(num1 + num2);
  } else if(op ==='-'){
    console.log(num1 - num2);
  } else if(op ==='*'){
    console.log(num1 * num2);
  } else if(op ==='/'){
    console.log(num1 / num2);
  }
}

calc()
