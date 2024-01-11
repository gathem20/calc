let runningtotal= 0;
let buffer="0";
let previous0perator;
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
        if(previous0perator === null) {
            return
        }
        flushOpertion(parseInt(buffer))
        previous0perator =null 
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
    previous0perator = symbol;
    buffer ='0'
}
function flushOpertion(intbuffer){
    if(previous0perator === '+'){
        runningtotal +=intbuffer
    }else if (previous0perator === '-'){
        runningtotal -= intbuffer
    }else if (previous0perator === '×'){
        runningtotal *= intbuffer
    }else if (previous0perator === '÷'){
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
    document.querySelector("#calc-buttons").addEventListener('click',function(event){
        buttonClick(event.target.innertext)
    })
}
init()
console.log('hello')