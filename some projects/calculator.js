




function calculate(st){
    
    


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
            
            division_or_multiplication(arrInBrackets);
            addition_or_subtraction(arrInBrackets);

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
       
    division_or_multiplication(arrSt);
    addition_or_subtraction(arrSt);


    return arrSt[0].toFixed(0);
    // alert(arrSt[0].toFixed(0));
}



let arrSt = '21 * ( 40 / 4 ) - 120'.split(''); // st.split('');
// '21 * ( 40 / 4 ) - 120'
function checkArrForNum(sym) {
    const arrNum = '1234567890'.split('');
    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === sym) {
            return true;
        }
    }
    return false;
}

console.log(arrSt);
let newArrey = [];
for (let iterator = 0, numb = 0, stNum = ''; iterator < 6; iterator++) { // arrSt.length
    if (checkArrForNum(arrSt[iterator])) {
        numb ++;
        stNum += arrSt[iterator];
        console.log('numb', numb);
        console.log('stNum', stNum);
        
    } else {
        console.log('iterator', iterator);
        let i = iterator;
        // newArrey = arrSt;
        arrSt.splice(i - numb, numb, stNum);
        console.log(arrSt);
        numb = 0;
        stNum = '';
    }
}


// console.log(
// calculate('21 * 4 / 42 - 12'), // -10
// calculate('21 * ( 40 / 4 ) - 120')//, // 90
// calculate('21 * 40 / ( 41 - 1 )'), // 21
// calculate('21 * ( 40 / ( -4 ) ) - 120'), // -330
// calculate('16 / 8 * 7 - 2 * 4 + 12') // 18
// );
// calculate(prompt('Введите пример: \n', ''));
