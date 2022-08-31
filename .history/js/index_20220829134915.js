let first = 10;
let second = 100;
function getMaxDigit(min,max){
    // let randomDigit = Math.floor(Math.random());
    let counter = 0;
    for (let i = min; i < max; i++) {
        counter+= i;
        
    }
    return counter;
} 
const result = getMaxDigit(first,second);
console.log(result);
    