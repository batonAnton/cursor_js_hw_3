
function getMaxDigit(argNew = 12345 ){
    let varNew  = argNew.toString().split('');
    let bigNum = varNew[1];
    for (let i = 0; i < varNew.length; i++) {
        if(varNew[i] > bigNum ) bigNum = varNew [i];
        
    } return bigNum;
}
console.log(getMaxDigit());

