let first = 345;
// let second = 100;
function getMaxDigit(min,max){
   let arrOfDigits = Array.from(String(first), Number);
   console.log(arrOfDigits);
    // let counter = 0;
    // for (let i = min; i < max; i++) {
    //     counter+= i;
        
    // }
    // return counter;
} 
// const result = getMaxDigit(first,second);
// console.log(result);
// let arrOfDigits = Array.from(String(first), Number);
// console.log(arrOfDigits);

const number = 1234;

// 👇️ ['1', '2', '3', '4']
const arrOfStr = Array.from(String(number));

const arrOfNum = arrOfStr.map(str => Number(str));
console.log(arrOfNum); // 👉️ [1, 2, 3, 4]
function getMaxDigit(num) {
    let result = -1;
    for (let i = num; i > 0; i = Math.floor(i / 10)) {
        let digit = i % 10;
        if (result < digit)
            result = digit;
    }
    return result;
}
getMaxDigit(1234);