// implement fibonacci sequence not using recursion

function fib(num){
    let result = '';
    if (typeof(num) !== "number" || num <= 0 || !Number.isInteger(num)) {
        return result;
    }
    let arrFib = [num];
    for (let i = 0; i < num; i++) {
        if (i == 0 || i == 1) {
            arrFib[i] = i;
        } else{
            arrFib[i] = arrFib[i-2] + arrFib[i-1];
        }
    }
    for(let j = 0; j < num; j++) {
        result += `${arrFib[j]} `;
    }

    return console.log(result);
}

fib(+prompt("Enter number", ""));