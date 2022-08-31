let first = 345;
// let second = 100;
function getMaxDigit(x){
    let checkNum  =x.toString().split();
    let big = checkNum[0];
    for (let i = 0; i < checkNum.length; i++) {
        if()
        
    } 
}

const number = 1234;

// 👇️ ['1', '2', '3', '4']
const arrOfStr = Array.from(String(number));

const arrOfNum = arrOfStr.map(str => Number(str));
console.log(arrOfNum); // 👉️ [1, 2, 3, 4]
// function getMaxDigit(num) {
//     let result = -1;
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//         let digit = i % 10;
//         if (result < digit)
//             result = digit;
//     }
//     return result;
// }
// getMaxDigit(1234);