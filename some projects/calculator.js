




function calculate(st){

    function checkArrForNum(sym) {
        const arrNum = '1234567890'.split('');
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i] === sym) {
                return true;
            }
        }
        return false;
    }

    function checkArrForSym(sym) {
        const arrSym = '+-*/()'.split('');
        for (let j = 0; j < arrSym.length; j++) {
            if (arrSym[j] === sym) {
                return true;
            }
        }
        return false;
    }

    function changeSt (arrSt){
        // -(16/8+12)
        // -(-46*(-3))
        let newArrey = [];
        for (let iterator = 0, numb = 0, stNum = ''; iterator <= arrSt.length; iterator++) {
            if (checkArrForNum(arrSt[iterator])) {
                for (let i = iterator; checkArrForNum(arrSt[i]); i++){
                    stNum += arrSt[i];
                }
                newArrey[numb] = stNum;
                numb ++;
                iterator += stNum.length;
                stNum = '';
            } 
            
            if(checkArrForSym(arrSt[iterator])){
                if (arrSt[iterator] === '(' && arrSt[iterator + 1] === '-') {
                    let i = iterator + 2;
                    while (checkArrForNum(arrSt[i])){
                        stNum += arrSt[i];
                        i++;
                    }
                    iterator = i;
                    newArrey[numb] = '-'+stNum;
                    numb ++;
                    stNum = '';
                } else if (arrSt[iterator] === '-' && checkArrForNum(arrSt[iterator + 1])){
                    let i = iterator + 1;
                    while (checkArrForNum(arrSt[i])){
                        stNum += arrSt[i];
                        i++;
                    }
                    iterator = i - 1; 
                    newArrey[numb] = '-'+stNum;
                    numb ++;
                    stNum = '';

                } else {
                    newArrey[numb] = arrSt[iterator];
                    numb ++;
                }
            }
        }
        return newArrey;
        // console.log(newArrey);
    }


    function newArrWithResultOfCount (arr, key){
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

    function division_or_multiplication(arr1){
        for (let key = 0; key < arr1.length; key++) {
            if (arr1[key] === "/" || arr1[key] === "*") {
                newArrWithResultOfCount(arr1, key);
                key = 0;
            } 
        }
        return arr1;
    }

    function addition_or_subtraction(arr1){
        for (let key = 0; key < arr1.length; key++) {
            if (arr1[key] === "+" || arr1[key] === "-") {
                newArrWithResultOfCount(arr1, key);
                key = 0;
            } 
        }
        return arr1;
    }

    let arrSt = st;
    st = changeSt(arrSt.split(' ').join('').split('')); 
    for (let key = 0; key < st.length; key++) {
        if (st[key] === "(") {
            let bracket2 = 0;
            const arrInBrackets = [];
            for(let i = key, j = 0; i ++;){
                if (st[i] === ")") {
                    bracket2 = i;
                    break;
                }
                arrInBrackets[j] = st[i];
                j++;
            }
            division_or_multiplication(arrInBrackets);
            addition_or_subtraction(arrInBrackets);
            st.splice(key, bracket2 - 1, arrInBrackets);
        } 
    }
    division_or_multiplication(st);
    addition_or_subtraction(st);
    return st[0].toFixed(0);
}




console.log(
    // calculate('-5 * (-1)'),
    // calculate('21 * ( 40 / ( -4 ) ) - 120'), // -330
    // calculate('402 * 40 / ( 41 - 1 )'), // 402
    // calculate('21 * 4 / 42 - 12'), // -10
    // calculate('21 * ( 40 / 4 ) - 120'), // 90
    calculate('3*2-(24-20*3)+6')

    // calculate('-(16 / 8 + 12)') // 
    // calculate('-(-46*(-3))') // 
);

// alert(calculate(prompt('Введите пример: \n', '')));
