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

// third task
function firstLet(name){
    let letUp = name.toUpperCase();
    if(name!==name.toUpperCase()){
        letUp;
    }
    return letUp;
}

console.log(firstLet("edik"));


function capitalizeFirstLetter(str) {
    let firstLet = string.charAt(0);
    if(firstLet !== firstLet.toUpperCase() ){
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    } else{
        return capitalized;
    }
    
}

// take input
// const string = prompt('Enter a string: ');

// const result = capitalizeFirstLetter(string);

// console.log(result);
var character = 'ccCC';
if (character.charAt() == character.toUpperCase()) {
 alert ('upper case true');
}
if (character == character.toLowerCase()){
 alert ('lower case true');
}
console.log(character);

// const str1 = 'i have learned something new today';


// const arr = str1.split(" ");

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     console.log(arr);
// }
