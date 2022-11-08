
function isWeekend(day , end) {
    if (([0,6].indexOf(new Date().getDay()) != -1)) {
        return ('its the weekend');
    }
    return ('its a weekday');
}

console.log(isWeekend()); 
