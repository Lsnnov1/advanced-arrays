// DECLARED FUNCTION
function holler(){
    console.log('HEY YOU')
}
// AYNONUMUS FUNCTION EXPRESSION 
const whisper = function(){
    console.log('psst, i have a secret')

}

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

mathFunc = [add, subtract, multiply, divide];

setTimeout(whisper, 4000)

// CREATE CALLBACK
function doMath(a, b, mathFunc){

    return mathFunc(a,b)
}

const colors = [];