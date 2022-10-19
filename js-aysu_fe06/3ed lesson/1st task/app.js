
let num = 27;
let guess = prompt('enter a number between 1-50')
let count = 1;

while(guess != num){
    if(guess>num){
        guess = prompt('guess a smaller number')
    }else{
        guess = prompt('guess a bigger number') 
    }
    count++;
}

console.log(`Yes, the number is 27.
You got it in ` + count + ` tries`);


switch(count){
    case 1 :
        console.log('You win 1000 azn');
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('You win 750 azn');
        break;
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('You win 250 azn');
        break;
    case (count > 10):
        console.log('You win 100 azn');
        break;
}






