let newValue = '';
let currentValue = '';
let result = '';
let display = document.querySelector(".display");
let number = document.querySelectorAll(".number");
let clear = document.querySelector("#clear");
let operator = document.querySelectorAll(".operator");
let equals = document.querySelector("#equals");
let decimal = document.querySelector(".dot");
let backspace = document.querySelector("#backspace");
let percent = document.querySelector("#percent");

/*Handle number click events*/
number.forEach((numbers) => numbers.addEventListener("click", ()=>{
    handleNumber(numbers.textContent);
    display.textContent = currentValue;
    if(currentValue>8){
        display.textContent = currentValue.substring(0,8);
    }
}))

/*Handle display clear click events*/
clear.addEventListener("click", ()=>{
    handleClear();
})

/*Handle operators click events*/
operator.forEach((op) => op.addEventListener('click', ()=>{
    handleOperator(op.textContent);
    display.textContent = operator;
}))

/*Handle equal click events*/
equals.addEventListener("click", () =>{
    if(currentValue != '' && newValue!= ""){
        result = operate(Number(newValue),Number(currentValue), operator);
        currentValue = currentValue.toString();
        newValue = currentValue.toString();
        currentValue = parseFloat(Math.round(result * 100)/100).toString();
        display.textContent = '';
        display.textContent = currentValue;
        if(currentValue.length <= 10){
            display.textContent = currentValue;
        }else{
            display.textContent = currentValue.slice(0,8)+'..';
        }
    }
})

/*Handle decimals click events*/
decimal.addEventListener("click", ()=>{
    handleDecimal();
})

/*Handle backspace/delete value click events*/
backspace.addEventListener("click", ()=>{
    handleBackspace();
})

/*Handle percent click events*/
percent.addEventListener("click", ()=>{
    handlePercent();
})

/*Event functions*/
function handlePercent(a,b){
    display.textContent = (currentValue/100).toString();
}

function handleBackspace(){
    display.textContent = display.textContent.toString().slice(0,-1);
    currentValue = display.textContent;
}

function handleDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}
function handleNumber(value){
    currentValue += value;
}

function handleClear(){
    newValue = "";
    currentValue = "";
    operator = null;
    result = '';
    display.textContent = '';
}

function handleOperator(op){
    operator = op;
    newValue = currentValue;
    currentValue = '';
}

function operate(a,b,operator){
    if(operator === '+'){
        return a + b;
    }else if(operator === '-'){
        return a - b;
    }else if(operator === '*'){
        return a * b;
    }else if(operator === '/'){
        if( b === 0){
            return 'error';
        }else{
            return a/b;
        }
    }
}
