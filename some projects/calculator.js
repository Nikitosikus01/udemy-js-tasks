

function calculate(st){
    let arrSt = st.split(' ');
    let arrSymbols = '()*/+-'.split('');

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
    
    function isSymbol(key){
        for (let i = 0; i < arrSymbols.length; i++) {
            if (arrSt[key] === arrSymbols[i]) {
                return true;
            }
        }
    }

// calculate('9 * 8 / ( 78 - 2 * 24 ) + 12')

    for (let key = 0; key < arrSt.length; key++) {
        
        if (isSymbol(key)) {
            newArr(key);
            key = 0;
        } 
    }

    return arrSt[0].toFixed(0);
    // alert(arrSt[0].toFixed(0));
}

console.log(
// calculate('21 * 4 / ( 42 - 12 + 86 ) / 54 * 214 + 6432'),
calculate('9 * 8 / 7 - 2 * 24 + 12')

);
// calculate(prompt('Введите пример: \n', ''));
