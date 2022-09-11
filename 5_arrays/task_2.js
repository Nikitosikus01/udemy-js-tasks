"Use strict";
// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль
// эти строки в нижнем регистре.


// let favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     let st = '';
//     for (const iterator of arr) {
//         st += `${iterator.toLowerCase()}\n`;
//     }
//     return st;
// }

// console.log(standardizeStrings(favoriteCities));



let favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (const iterator of arr) {
        console.log(iterator.toLowerCase());
    }
}

standardizeStrings(favoriteCities);
