let first = 345;
// let second = 100;
function getMaxDigit(argNew){
    let varNew  = argNew.toString().split();
    let big = varNew[0];
    for (let i = 0; i < varNew.length; i++) {
        if(varNew[i] > big ) big = varNew [i];
        debugger;
        
    } return big;
}
console.log(getMaxDigit(12345));

// function getMaxDigit(n) {
//     let a = n.toString().split("");
//     let max = a[0];
  
//     for (i = 0; i < a.length; i++) {
//       if (a[i] > max) max = a[i];
//     }
  
//     return max;
//   }
//   console.log(getMaxDigit(12345));

// const number = 1234;

// // 👇️ ['1', '2', '3', '4']
// const arrOfStr = Array.from(String(number));

// const arrOfNum = arrOfStr.map(str => Number(str));
// console.log(arrOfNum); // 👉️ [1, 2, 3, 4]
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