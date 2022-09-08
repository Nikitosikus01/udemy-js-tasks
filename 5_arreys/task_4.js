'Use strict';

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
// Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив 
// со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - 
// необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
// Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. 
// Функция возвращает строку в нужном виде.
// Пример:
// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
// Доступные валюты:
// UAH
// RUB
// Заметьте:
// - CNY (юань) исчез из списка валют, значит такая валюта закончилась
// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const sumeCurr = baseCurrencies.concat(additionalCurrencies);
// console.log(sumeCurr);

function availableCurr(arr, missingCurr) {
  if (arr.length === 0) {
    return "Нет доступных валют";
  } else if (arr.length === 1) {
    if (arr[0] === missingCurr) {
      return "Нет доступных валют";
    }
  }
  let st = 'Доступные валюты:\n';
  for (let iterator = 0; iterator < arr.length; iterator++) {
    if (arr[iterator] !== missingCurr) {
        st += `${arr[iterator]}\n`;
    }
  }
  return st;
}

console.log(availableCurr(baseCurrencies.concat(additionalCurrencies)));



