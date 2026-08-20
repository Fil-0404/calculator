function add(a,b){
    return a + b ;
}

function subtract(a,b){
    return a - b ;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operator,num1,num2){
    if(operator==="+"){
       return add(num1,num2);
    }else if(operator==="-"){
       return subtract(num1,num2);
    }else if(operator==="*"){
        return multiply(num1,num2);
    }else{
      return divide(num1,num2);
    }
}

const display = document.querySelector("#display");
let currentNumber = "";
const numberButtons = document.querySelectorAll('[id^="num"]');
let firstNumber = "";
let operator = "";
let secondNumber = "";
let index = 0;
const addBtn = document.querySelector("#add");
const enter = document.querySelector("#enter");
const clear = document.querySelector("#clear");
const subBtn = document.querySelector("#subtract");
const multBtn = document.querySelector("#multiply");
const divBtn = document.querySelector("#divide");



addBtn.addEventListener("click",function(){
     if(index===1){
        firstNumber=Number(currentNumber);
        index = 0;
    }
    else if(operator !== "" && currentNumber !== ""){
        secondNumber = Number(currentNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
    }else if(operator===""){
        firstNumber=Number(currentNumber);
    }
    operator="+";
    display.innerHTML = operator;
    currentNumber = "";
})

subBtn.addEventListener("click",function(){
    if(index===1){
        firstNumber=Number(currentNumber);
        index = 0;
    }
    else if(operator !== "" && currentNumber !== ""){
        secondNumber = Number(currentNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
    }else if(operator===""){
        firstNumber=Number(currentNumber);
    }
    operator="-";
    display.innerHTML = operator;
    currentNumber = "";
})

multBtn.addEventListener("click",function(){
     if(index===1){
        firstNumber=Number(currentNumber);
        index = 0;
    }
    else if(operator !== "" && currentNumber !== ""){
        secondNumber = Number(currentNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
    }else if(operator===""){
        firstNumber=Number(currentNumber);
    }
    operator="*";
    display.innerHTML = operator;
    currentNumber = "";
})

divBtn.addEventListener("click",function(){
     if(index===1){
        firstNumber=Number(currentNumber);
        index = 0;
    }
    else if(operator !== "" && currentNumber !== ""){
        secondNumber = Number(currentNumber);
        firstNumber = operate(operator,firstNumber,secondNumber);
    }else if(operator===""){
        firstNumber=Number(currentNumber);
    }
    operator="/";
    display.innerHTML = operator;
    currentNumber = "";
})


enter.addEventListener("click", function(){
    if(operator !=="" && currentNumber!==""){
        secondNumber=Number(currentNumber);
        display.innerHTML=operate(operator,firstNumber,secondNumber);
        currentNumber=Number(display.innerHTML);
        index = 1;
    }
})

for(let i=0;i<numberButtons.length;i++){

 numberButtons[i].addEventListener("click", function(){
    currentNumber = currentNumber + numberButtons[i].textContent;
    display.innerHTML = currentNumber;
})
}

clear.addEventListener("click", function(){
    currentNumber="";
    firstNumber="";
    secondNumber="";
    operator="";
    display.innerHTML = currentNumber;
})


