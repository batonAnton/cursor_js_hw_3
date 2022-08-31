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

function convertCurrency (typeValue){
    let dollars = 39.9;
    let res;
        if (typeValue.includes("UAH")) {
            res =   (+typeValue.slice(0, typeValue.indexOf("UAH")) / dollars).toFixed(2) + "$";
            
          } else if (typeValue.includes("$")) {
            res = (+typeValue.slice(0, typeValue.indexOf("$")) * dollars).toFixed(2) + "UAH";
          } else {
            alert("тільки долари і гривні");
          } return res;

    
}


let typeValue="1000 UAH";

document.writeln(`Функція №7: 1000 гривень в доларах буде - ${convertCurrency(typeValue)}....`);
typeValue = "100$";
document.writeln(` 100 доларів в гривнях  буде - ${convertCurrency(typeValue)} `);

// 