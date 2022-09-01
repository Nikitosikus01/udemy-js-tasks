
// make a pyramid out of *

const lines = 5;
let result = '';

for(let l = 0, star = l; l <= lines; l++){
    for (let space = l; space < lines; space++) {
      result += " ";
    }
    if (star % 2 === 0) {
        star += 1;
    }
    for (let i = 0; i < star; i++) {
      result += "*";
    }
    result += "\n";
    star++;
}

console.log(result);


