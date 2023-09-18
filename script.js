
const resultDisplay = document.querySelector(".result-display");
const enterBtn = document.querySelector(".enter");

function allDelete(){
    resultDisplay.value = "";
}

function calculation(newValue){
    resultDisplay.value += newValue;
}

function result(){
    var a = resultDisplay.value;
    var b = eval(a);
    resultDisplay.value = b;
}