let runningtotal= 0;
let buffer="0";
let previousOperator;
const screen =document.querySelector('.screen')
function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value)
    }
    else{
        handlenumber(value)
    }
    screen.innerText=buffer;
}
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer='0'
            runningtotal=0;
            break;
            case '=':
        if(previousOperator === null) {
            return
        }
        flushOpertion(parseInt(buffer))
        previousOperator =null 
        buffer=runningtotal;
        runningtotal=0
        break;
        case '←':
            if(buffer.length === 1){
                buffer = '0'
                
            }else{
                buffer = buffer.toString(0,buffer.length - 1)
            }
            break;
        case '+':
        case '÷':
        case '×':
        case '−':
            handleMath(symbol)
            break
    }
}
function handleMath(symbol){
    if(buffer === '0'){
        return
    }
    const intbuffer= parseInt(buffer)
    if(runningtotal === 0){
        runningtotal = intbuffer
    }else{
        flushOpertion(intbuffer)
    }
    previousOperator = symbol;
    buffer = '0';
}
function flushOpertion(intbuffer){
    if(previousOperator === '+'){
        runningtotal +=intbuffer
    }else if (previousOperator === '-'){
        runningtotal -= intbuffer
    }else if (previousOperator === '×'){
        runningtotal *= intbuffer
    }else if (previousOperator === '÷'){
        runningtotal /= intbuffer
    }
}
function handlenumber(numberString){
    if (buffer === '0'){
        buffer = numberString
    }else{
        buffer +=numberString
    }
}
function init(){
    document.querySelector(".calc-buttons").addEventListener('click',function(event){
        buttonClick(event.target.innerText)
    })
}
init()
console.log('hello')