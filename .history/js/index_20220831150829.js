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
document.writeln(`100 доларів в гривнях  буде - ${convertCurrency(typeValue)} `);

// 9 task
 function getRandomPassword(arg,arg2){
  
  let result = '';
    
      for(let i = 0; i < arg; i++){
        result +=(Math.random() * 10).toFixed();
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
function deleteDuplicateLetter(){
let test_str1 = "вібрація";

  // function repeatLetter( str )
  // {
    
  //   for( let i = 0 ;i < str.length ;i++)
  //   {
  //     let count = 0;
  //     for( let j = 0 ;j < str.length ;j++)
  //     {
  //       if( str[i] == str[j] && i > j  )
  //       {
  //        break;
  //       }
  //       if( str[i] == str[j]  )
  //       {
  //         count++;
  //       }
  //     }
  //     if( count > 0)
  //     console.log(`${str[i].toUpperCase()} повторюється  ${count} рази`);
  //   }
   
  // }
  // function deleteLetters(removeLetter, exampleWord) {
  //   let result = '';
  //   for (let i = 0; i < exampleWord.length; i++) {
  //     exampleWord[i] == removeLetter ? result:( result += exampleWord[i]);
  //   }
  //   return result;
  // }
  let funcLetterRepeat = repeatLetter( test_str1);
  if(funcLetterRepeat)
   
}
console.log("У слові " + " " + test_str1 + " " + "слова повторюються :");

