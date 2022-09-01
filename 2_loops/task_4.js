// Rewrite the for loop with a while loop. The result should remain exactly the same.
// Don't create an infinite loop! Otherwise, the browser may freeze.

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

let index = 2;
while (index <= 16) {
    if(index%2 !== 0) {
        console.log(index);
    }
    index++;
}