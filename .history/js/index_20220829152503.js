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



