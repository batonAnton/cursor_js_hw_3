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
// function firstLet(name){
//     let letUp = name.toUpperCase();
//     if(name!==name.toUpperCase()){
//         letUp;
//     }
//     return letUp;
// }

// console.log(firstLet("edik"));


function fixedName(name) {
    return  name.slice(1).toLowerCase();
  }
    
    // if(firstLet !== firstLet.toUpperCase() ){
    //     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    //     return capitalized;
    // } else{
    //     return capitalized;
    // }

    

    

console.log(fixedName("eDOL ik"));
