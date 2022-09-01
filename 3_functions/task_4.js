// write a function that takes four numbers and returns the largest of them.
// if one of the arguments is not a number or there are less than four, 0 is returned.
// fractional numbers are allowed.



function findMaxNumber(a, b, c, d) {

    if (typeof(a, b, c, d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log( findMaxNumber(4, 8, 6, 1));
console.log( findMaxNumber('1', 3, 6, '1'));
console.log( findMaxNumber(1, 5.3, 1, 0));
console.log( findMaxNumber(32, 1, 5));
console.log( findMaxNumber(1, 5, '3', '24'));
console.log( findMaxNumber(2, 5));
