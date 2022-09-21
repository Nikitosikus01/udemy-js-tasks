

function calculate(st){
    let arrSt = st.split(' ');
    let arrSymbols = '()*/+-'.split('');

    function newArr (arr, key){
        let result;
        switch (arr[key]) {
            case '*':
                result = arr[+key-1] * arr[+key+1];
                arr.splice(key - 1, 3, result);
                return arr;
                
            case '/':
                result = arr[+key-1] / arr[+key+1];
                arr.splice(key - 1, 3, result);    
                return arr;

            case '+':
                result = +arr[+key-1] + (+arr[+key+1]);
                arr.splice(key - 1, 3, result);    
                return arr;

            case '-':
                result = +arr[+key-1] - +arr[+key+1];
                arr.splice(key - 1, 3, result);    
                return arr;
        
            default:
                return 'Input error.';
        }
    }
    
    

    function division_multiplication(arr1){
        for (let key = 0; key < arr1.length; key++) {
            if (arr1[key] === "/" || arr1[key] === "*") {
                newArr(arr1, key);
                key = 0;
            } 
        }
        return arr1;
    }

    function addition_subtraction(arr1){
        for (let key = 0; key < arr1.length; key++) {
            if (arr1[key] === "+" || arr1[key] === "-") {
                newArr(arr1, key);
                key = 0;
            } 
        }
        return arr1;
    }


    
    for (let key = 0; key < arrSt.length; key++) {
        if (arrSt[key] === "(") {
            let bracket2 = 0;
            const arrInBrackets = [];
            for(let i = key, j = 0; i ++;){
                if (arrSt[i] === ")") {
                    bracket2 = i;
                    break;
                }
                arrInBrackets[j] = arrSt[i];
                j++;
            }
            
            division_multiplication(arrInBrackets);
            addition_subtraction(arrInBrackets);

            console.log(
                key,
                bracket2,
                arrInBrackets,
                arrSt
            );
            arrSt.splice(key, bracket2 - 1, arrInBrackets);
            console.log(arrSt);
        } 
    }
       
    division_multiplication(arrSt);
    addition_subtraction(arrSt);


    return arrSt[0].toFixed(0);
    // alert(arrSt[0].toFixed(0));
}

console.log(
// calculate('21 * 4 / 42 - 12'), // -10
calculate('21 * ( 40 / 4 ) - 120'), // 90
calculate('21 * 40 / ( 41 - 1 )'), // 21
// calculate('21 * ( 40 / ( -4 ) ) - 120'), // -330
calculate('16 / 8 * 7 - 2 * 4 + 12') // 18

);
// calculate(prompt('Введите пример: \n', ''));
