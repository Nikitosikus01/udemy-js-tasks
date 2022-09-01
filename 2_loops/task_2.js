// Use the for loop to print the numbers from 20 to 10 to the console.
// In reverse order (20, 19, 18...). When the cycle reaches the number 13 - stop the whole cycle

for (let index = 20; index >= 10; index--) {
    if (index === 13) {
        break;
    }
    console.log(index);
}
