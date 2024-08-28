const num = document.querySelectorAll('.num');
const AC = document.querySelector('.ac');
const opr = document.querySelectorAll('.opr');
const cross = document.querySelector('.cross');
const brackets = document.querySelector('.brackets');
const calculatvalue = document.querySelector('.calculatevalue');
const currentvalue = document.querySelector('.currentvalue');
let bracketOpen = false;
let sign;
num.forEach(num =>{
    num.addEventListener('click', () => {
       if (currentvalue.innerText.includes(".") && num.innerText === ".") {
        return console.log('Error cant use more then one period');
       }
        currentvalue.innerText += num.innerText
    })
}) 
opr.forEach(opr =>{
    opr.addEventListener('click', (e) => {
        const current = parseFloat(currentvalue.innerText);
        const calculate = calculatvalue.innerText;
        if(isNaN(current) && !calculate){
           return  console.log('not a valid number');
        }
        let result;
        let lastchar;
        if(calculate){
            console.log(calculate)
            lastchar = calculate.slice(-1);
        }
     switch (opr.innerText) {
        case  '+':
            if(!calculate){
                result = current + ' +';
            } else if(!current){
             result = calculate;
            } else if(calculate && lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
            result = calculate + ' + ' + current;
            } else if(lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
                result = current + ' + ';
                }else if(lastchar === '+'  || lastchar === '-'  || lastchar === '*' || lastchar === '/' || lastchar === '%'){
                    result = calculate  + ' ' + current;
                    }
                    else{
                        result = calculate + current;
                    }
          sign = '+';
            break;
        case  '-':
            if(!calculate){
                result = current + ' -';
            } else if(!current){
             result = calculate;
            } else if(calculate && lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
            result = calculate + ' - ' + current;
            } else if(lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
                result = current + ' - ';
                }else if(lastchar === '+'  || lastchar === '-'  || lastchar === '*' || lastchar === '/' || lastchar === '%'){
                    result = calculate  + ' ' + current;
                    }
                    else{
                        result = calculate + current;
                    }
          sign = '-';  
            break;
        case  '÷':
            if(!calculate){
                result = current + ' /';
            } else if(!current){
             result = calculate;
            } else if(calculate && lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
            result = calculate + ' / ' + current;
            } else if(lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
                result = current + ' / ';
                }else if(lastchar === '+'  || lastchar === '-'  || lastchar === '*' || lastchar === '/' || lastchar === '%'){
                    result = calculate  + ' ' + current;
                    }
                    else{
                        result = calculate / current;
                    }
          sign = '/';  
            break;
        case '×':
            if(!calculate){
                result = current + ' *';
            } else if(!current){
             result = calculate;
            } else if(calculate && lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
            result = calculate + ' * ' + current;
            } else if(lastchar !== '+'  && lastchar !== '-'  && lastchar !== '*' && lastchar !== '/' && lastchar !== '%'){
                result = current + ' * ';
                }else if(lastchar === '+'  || lastchar === '-'  || lastchar === '*' || lastchar === '/' || lastchar === '%'){
                    result = calculate  + ' ' + current;
                    }
                    else{
                        result = calculate * current;
                    }
          sign = '*';  
            break;
        case '%':
                if(!calculate){
                 result = current;
                } else if(isNaN(current)){
                  result = calculate;
                } else{
                    result = calculate / 100 * current
                }
                sign = '%'; 
                break;
        case '=':
            if(!calculate){
                result = current;
                console.log('calculate is running')
               } else if(!current){
                 result = eval(calculate);
                 console.log('current is running')
               } else if(sign === '%'){
                result = eval(calculate / 100 * current);
               } else{
            result = eval(calculate);
               }
            break;
     }
     calculatvalue.innerText = result;
     currentvalue.innerText = '';
        
    })
})
brackets.addEventListener('click', () => {
    if(bracketOpen){
        calculatvalue.innerHTML = calculatvalue.innerHTML += ')'
        bracketOpen=false;
    } else {
        calculatvalue.innerHTML = calculatvalue.innerHTML += '('
        bracketOpen=true;
    }
})

cross.addEventListener('click',() => {
    const crvalue = currentvalue.innerText;
    currentvalue.innerText = crvalue.slice(0,-1)
})
AC.addEventListener('click', () => {
sign = undefined;
currentvalue.innerText = '';
calculatvalue.innerText = '';
})