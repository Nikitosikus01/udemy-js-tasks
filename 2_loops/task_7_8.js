// task 7
// Modify this array so that all numbers are multiplied by 2,
// and if the string string comes across, then "- done" was added to it.
// Use typeof() to determine the data type;
// Should be: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++){
//     if (typeof(data[i]) === "number") {
//         data[i] *= 2;
//     } else if (typeof(data[i]) == "string") {
//         data[i] += ' - done';
//     }
// }
// console.log(data);


// task 8
// Reverse the data array with a loop and write the data to the result array.
// Should be: [ 'Homework', 20, 'Shopping', 10, 5 ]


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for(let i = 0, j = data.length; i < data.length; i ++){
    result[i] = data[j-1];
    j--;
}
console.log(result);
