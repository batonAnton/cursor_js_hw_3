// first task
function getMaxDigit(argNew){
    let varNew  = argNew.toString().split('');
    let bigNum = varNew[0];
    for (let i = 0; i < varNew.length; i++) {
        if(varNew[i] > bigNum ) bigNum = varNew [i];
        
    } return bigNum;
}
let argNew = 123459;
document.writeln(`Функція 1... Найбільша цифра ${getMaxDigit(argNew)} серед числа ${argNew}`);



// 2 task
function exponentDigit(a,b){
    
    let res = 1;
    for(let i = 0; i < b; i++ ){
        res *= a;
    }return res;
}
let a = 2;
let b = 2;
document.writeln(` <br> Функція 2... Ступінь числа ${a} становить   ${exponentDigit(a,b)} `);


// 3 task

function nameChange(name) {
    return  name.charAt(0).toUpperCase() +  name.slice(1).toLowerCase();
  }
    
let name = "вЛАД";
document.writeln(` <br> Функція 3... Слово ${name} після форматування виглядає так:   ${nameChange(name)} `);


// 4 task

function calcPercentage( sum,percentageSalary){
  let result =sum - ((percentageSalary * 1000) * 0.100 / 10);
    return  result;


}
const percentageSalary = 19.5;
let sum = 1000;

console.log(calcPercentage(sum,percentageSalary));
document.writeln(` <br> Функція 4...після податку у ${percentageSalary} сума заробітної плати становить: ${calcPercentage( sum,percentageSalary)} `);


// 5 task
function randomRange(minValue,maxValue){
    let result = Math.ceil(Math.random() * (maxValue - minValue)) + minValue;
    return  result;
}
let minValue = 1;
let maxValue= 10;
console.log(randomRange(1,5));

document.writeln(` <br> Функція 5... Випадкове число ${randomRange(minValue,maxValue)} в діапазоні ${minValue} - ${maxValue}  `);


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
    
    // console.log(`${str[i].toUpperCase()} повторюється  ${count} рази`);
document.writeln(` <br> Функція 6... У слові ${test_str} ${str[i].toUpperCase()} повторюється  ${count} рази `);

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
document.writeln(`100 доларів в гривнях  буде - ${convertCurrency(typeValue)} `);

// 9 task
 function getRandomPassword(arg,arg2){
  
  let result = '';
    
      for(let i = 0; i < arg; i++){
        result +=(Math.random() * 5).toFixed();
      }
      return result;
      
      
        for(let i = 0; i < arg2; i++){
          result+= (Math.random() * 10).toFixed();
          
        }
        return result;

  
 }
 const arg = 4;
  const arg2 = 8;
 console.log(getRandomPassword());
 document.writeln(`<br> Функція №8: Пароль із  4 цифр становить - ${getRandomPassword(arg)}....`);
 document.writeln(`  Пароль із  8 цифр становить - ${getRandomPassword(arg2)}`);

//  task 9
//
function deleteLetters(removeLetter, exampleWord) {
  let result = '';
  for (let i = 0; i < exampleWord.length; i++) {
    exampleWord[i] == removeLetter ? result:( result += exampleWord[i]);
  }
  return result;
}

const removeLetter = "A";
const exampleWord = "ANATOLIY";
document.writeln(`<br> Функція №9: У слові ${ exampleWord} видалити літеру ${ removeLetter} - ${deleteLetters(removeLetter, exampleWord)}....`);

// task 10
function isPalindrom(checkWord){
   let result = true;
  for(i = 1; i - 1 < checkWord.length - i ; i++){
    if(checkWord[i-1] !== checkWord[checkWord.length-i])
    return false;
  }
  return result=true;
  for(i = 1; i - 1 < checkWord2.length - i ; i++){
    if(checkWord2[i-1] !== checkWord2[checkWord2.length-i])
    return false;
  }
  return result=true;
}




let checkWord = "окко";
let checkWord2 = "пляшка";
console.log(isPalindrom(checkWord));
document.writeln(`<br>  паліндром слова ${checkWord} - ${isPalindrom(checkWord)}`);
document.writeln(`<br>  паліндром слова ${checkWord2} - ${isPalindrom(checkWord2)}`);


// task 10
function deleteDuplicateLetter(previousString){
let newString = "";
let allLowerCase = previousString.toLowerCase();
    for ( i = 0; i < allLowerCase.length; i++) {
        if (allLowerCase.lastIndexOf(allLowerCase[i]) === allLowerCase.indexOf(allLowerCase[i])) {
            newString += allLowerCase[i]
        }
        else {
          newString;
        }
    }
    return newString; 
}

let previousString = "'Бісквіт був дуже ніжним'";
console.log(deleteDuplicateLetter(previousString));

document.writeln(`<br>  Видалені букви ${deleteDuplicateLetter(previousString)} речення : ${previousString}`);

