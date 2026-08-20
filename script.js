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
    let res = 0;
    if(operator==="+"){
       res = add(num1,num2);
    }else if(operator==="-"){
       res = subtract(num1,num2);
    }else if(operator==="*"){
        res = multiply(num1,num2);
    }else{
      res = divide(num1,num2);
    }

    return Number(res.toFixed(4));
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
const decimal = document.querySelector("#decimal");
let indexDec = 1;
const backspace = document.querySelector("#backspace");

backspace.addEventListener("click",function(){
   
   currentNumber = currentNumber.slice(0,-1);
   display.innerHTML = currentNumber;
   if(currentNumber.includes(".")) {indexDec = 0;}
   else {indexDec=1};
   
})

addBtn.addEventListener("click",function(){
    indexDec=1;
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
    indexDec=1;
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
    indexDec=1;
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
    indexDec=1;
     if(index===1){
        firstNumber=Number(currentNumber);
        index = 0;
    }
    else if(operator !== "" && currentNumber !== ""){
        secondNumber = Number(currentNumber);
        if(secondNumber!==0){
           firstNumber = operate(operator,firstNumber,secondNumber);
        }else{
            display.innerHTML = "ERROR";
            currentNumber = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
            index = 0;
            indexDec = 1;
            return;
        }
    }else if(operator===""){
        firstNumber=Number(currentNumber);
    }
    operator="/";
    display.innerHTML = operator;
    currentNumber = "";
    
})


enter.addEventListener("click", function(){
    if(operator !=="" && currentNumber!=="" && index===0){

        secondNumber=Number(currentNumber);

        if(secondNumber===0 && operator==="/"){
            display.innerHTML = "ERROR";
            currentNumber="";
            firstNumber="";
            secondNumber="";
            operator="";
            index = 0;
            indexDec = 1;
        }else{

            display.innerHTML=operate(operator,firstNumber,secondNumber);
            currentNumber=display.innerHTML;
            index = 1;
            if(!Number.isInteger(Number(currentNumber))){
              indexDec = 0;
            }else{
              indexDec = 1;
            }
        }
    }
    
})

for(let i=0;i<numberButtons.length;i++){

 numberButtons[i].addEventListener("click", function(){
    if(index===0){
        currentNumber = currentNumber + numberButtons[i].textContent;
        display.innerHTML = currentNumber;
    }else{
       indexDec=1;
       index=0;
       firstNumber="";
       secondNumber="";
       operator="";
       currentNumber=numberButtons[i].textContent;
       display.innerHTML = currentNumber;
    }
   
})
}

clear.addEventListener("click", function(){
    currentNumber="";
    firstNumber="";
    secondNumber="";
    operator="";
    display.innerHTML = currentNumber;
    indexDec=1;
})

decimal.addEventListener("click", function(){

    if(index === 1){
        index = 0;
        firstNumber = "";
        secondNumber = "";
        operator = "";
        currentNumber = "0.";
        display.innerHTML = currentNumber;
        indexDec = 0;
    }
    else if(indexDec === 1){
        currentNumber += ".";
        display.innerHTML = currentNumber;
        indexDec = 0;
    }

});

document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        enter.click();
    }

    if(event.key === "Backspace"){
       backspace.click();
    } 

    if(event.key >= "0" && event.key <= "9"){
       document.querySelector("#num" + event.key).click();
    }

    if(event.key === "+"){
        addBtn.click();
    }

    if(event.key === "-"){
        subBtn.click();
    }

    if(event.key === "*"){
    multBtn.click();
    }

    if(event.key === "/"){
    divBtn.click();
    }

    if(event.key === "." || event.code === "NumpadDecimal"){
    decimal.click();
    }
});