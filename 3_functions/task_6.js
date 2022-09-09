"Use strict";

// write a function that will do so: 5---10---15---20 ... depends of enter numbers

let fun = (number, amountRepeat) => {
    if (amountRepeat <= 0 || typeof(amountRepeat) !== "number") {
        return number;
    }  
    else {
        let arr = [];
        let num = number;
        for (let index = 0; index < amountRepeat; index++) {
            if (number >= 0) {
            arr[index] = number;
            number += num;
            }
        }
        for (let i = 0; i < amountRepeat; i++) {
            if (i !== amountRepeat - 1) {
            arr[i] += "---";
            }
        }
        let str = "";
        for (let j = 0; j < arr.length; j++) {
            str += arr[j];
        }
        return str;
    }
};

// console.log(`${fun(+prompt("Enter number", ""), +prompt("Enter amount of repeats", ""))}`);
console.log(fun(5, 10));
