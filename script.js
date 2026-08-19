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



for(let i=0;i<numberButtons.length;i++){
 numberButtons[i].addEventListener("click", function(){
    currentNumber = currentNumber + numberButtons[i].textContent;
    display.innerHTML = currentNumber;
})

}
