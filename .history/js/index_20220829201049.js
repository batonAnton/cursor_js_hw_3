// first task
function getMaxDigit(argNew = 123459 ){
    let varNew  = argNew.toString().split('');
    let bigNum = varNew[0];
    for (let i = 0; i < varNew.length; i++) {
        if(varNew[i] > bigNum ) bigNum = varNew [i];
        
    } return bigNum;
}
console.log(getMaxDigit());


// second task
function exponentDigit(a,b){
    let first = a;
    let second = b;
    let res = 1;
    for(let i = 0; i < b; i++ ){
        res *= a;
    }return res;
}

console.log(exponentDigit(2,2));

// 3 task

function nameChange(name) {
    return  name.charAt(0).toUpperCase() +  name.slice(1).toLowerCase();
  }
    

console.log(nameChange("toLik"));

// 4 task

// function calcPercentage( percentageSalary = 19.5){
//     let firstNum = prompt("Сума зарплати ");
//     return firstNum - ((percentageSalary * 1000) * 0.100 / 10);


// }
// console.log(calcPercentage());

// 5 task
function randomRange(minValue,maxValue){
    
    return Math.ceil(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(randomRange(1,5));

// 6 task 

function repeatLetter( str )
{
  
  for( let i = 0 ;i < str.length ;i++)
  {
    let count = 0;
    for( let j = 0 ;j < str.length ;j++)
    {
      if( str[i] == str[j] && i > j  )
      {
       break;
      }
      if( str[i] == str[j]  )
      {
        count++;
      }
    }
    if( count > 0)
    console.log(`${str[i].toUpperCase()} повторюється  ${count} рази`);
  }
 
}
 

let test_str = "укулеле";
console.log("У слові " + " " + test_str + " " + "слова повторюються :");
repeatLetter( test_str);

// 7 task

function convertCurrency (uah, dollars = 39.9){
    let uahResult = uah / dollars;
    let dollarsResult = dollars  * uah;
    
        if(dollars.includes('$')){
            return uahResult.toFixed(2);
        } else if(uah.includes('UAH')){
            return dollarsResult.toFixed(2);
        }
        if (value.includes("UAH")) {
            result = (+value.slice(0, value.indexOf("UAH")) / 35).toFixed(2) + "$";
          } else if (value.includes("$")) {
            result = +value.slice(0, value.indexOf("$")) * 35 + "UAH";
          }

    // } else{
    //     alert("не присустня валюта")
    // }
    // if (value.includes('$')) {
    //     result = +value.slice(0, value.indexOf('$')) * exchangeRate + ' ' + 'UAH';
    // } else if (value.includes('UAH')) {
    //     result = +value.slice(0, value.indexOf('UAH')) * exchangeRate + ' ' + '$';
    // }
    
    
}

console.log(convertCurrency(100));
document.writeln(`Функція №7: Гривні в доларах будуть - ${convertCurrency(1000)} uah.  Долари в гривнях будуть`);