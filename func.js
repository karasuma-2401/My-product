let runningTotal =0;
let buffer = "0";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value);
    }
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal =0;
            break;
        case '=':
            if (previousOperator === null){
                return
            }
            flusOperation(parseInt(buffer));
            buffer = runningTotal;
            runningTotal =0;
            break;
    }
}