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

// task 6 
// function repeatLetter(){
//     let word = "Укулеле";

// } 
function repeatLetter( str )
{
  // checking string is valid or not
  if( str.length == 0 )
  {
    console.log("Invalid string")
    return;
  }
  //cor loop to iterate over string
  for( let i = 0 ;i < str.length ;i++)
  {
    //variable counting occurrence
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
    console.log(`${str[i]} occurs ${count} times`);
     
  }
 
}
 
// test string
let test_str = "";
repeatLetter( test_str);