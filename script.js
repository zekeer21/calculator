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

console.log(operate(2,1,'/'));