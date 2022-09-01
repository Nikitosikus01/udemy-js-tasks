
// Fill the new array (result) with the numbers from the old one (arr).
// The number of elements in an array can be obtained as arr.length,
// and we refer to the elements in the same way: arr[0], arr[1] and so on.
// You should get exactly the same array

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

let index = 0;
while (index < arr.length) {
    result[index] = arr[index];
    index++;
}

console.log(arr);
console.log(result);
