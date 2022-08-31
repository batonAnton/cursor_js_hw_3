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
function randomRange(){
    let minValue = 1;
    let maxValue = 10;
    let result =0;
    for(let i = 0; i< maxValue;i++){
        result += Math.random(i);
    }
}

console.log(randomRange(1,10));