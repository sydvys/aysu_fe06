const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let thisMonth = month[d.getMonth()];

document.write(thisMonth)