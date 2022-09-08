'Use strict';

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"


const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) === 'string') {
        return str.split('').reverse().join('');
    }
    return 'Ошибка!';
    // const arrStr = str.split('');
    // console.log(arrStr); 
    // const arrStr2 = arrStr.reverse();
    // console.log(arrStr2); 
    // const arrStr3 = arrStr2.join('');
    // console.log(arrStr3); 
    
}

console.log(reverse(someString));

