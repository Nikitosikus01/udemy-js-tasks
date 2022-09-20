

function calculate(st){
    let arrSt = st.split(' ');
    
    function newArr (key){
        let result;
        switch (arrSt[key]) {
            case '*':
                result = arrSt[+key-1] * arrSt[+key+1];
                arrSt.splice(key - 1, 3, result);
                return arrSt;
                
            case '/':
                result = arrSt[+key-1] / arrSt[+key+1];
                arrSt.splice(key - 1, 3, result);    
                return arrSt;

            case '+':
                result = +arrSt[+key-1] + (+arrSt[+key+1]);
                arrSt.splice(key - 1, 3, result);    
                return arrSt;

            case '-':
                result = +arrSt[+key-1] - +arrSt[+key+1];
                arrSt.splice(key - 1, 3, result);    
                return arrSt;
        
            default:
                return 'Error. Key are not *, /, +, -';
        }
    }
    
    for (let key = 0; key < arrSt.length; key++) {
        
        if (arrSt[key] === '*') {
            newArr(key);
            key = 0;
        } else if (arrSt[key] === '/'){
            newArr(key);
            key = 0;
        } 
    }

    for (let key = 0; key < arrSt.length; key++) {
        
        if (arrSt[key] === '+'){
            newArr(key);
            key = 0;
        } else if (arrSt[key] === '-'){
            newArr(key);
            key = 0;
        }  
    }
    return arrSt[0].toFixed(0);
    // alert(arrSt[0].toFixed(0));
}

console.log(
calculate('21 * 4 / 42 - 12 + 86 / 54 * 214 + 6432'),
calculate('98 * 868 / 78 - 1224 * 2400 + 12650'),

);
// calculate(prompt('Введите пример: \n', ''));
