

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

    function division_multiplication(){
        for (let key = 0; key < arrSt.length; key++) {
            if (arrSt[key] === "/" || arrSt[key] === "*") {
                newArr(key);
                key = 0;
            } 
        }
    }

    function addition_subtraction(){
        for (let key = 0; key < arrSt.length; key++) {
            if (arrSt[key] === "+" || arrSt[key] === "-") {
                newArr(key);
                key = 0;
            } 
        }   
    }

    division_multiplication();
    addition_subtraction();

    return arrSt[0].toFixed(0);
    // alert(arrSt[0].toFixed(0));
}

console.log(
calculate('21 * 4 / 42 - 12'), // -10
calculate('16 / 8 * 7 - 2 * 4 + 12') // 18

);
// calculate(prompt('Введите пример: \n', ''));
