
// write a function that gets the number of minutes and outputs the hours and minutes

function transformTime(minutesOnly){
    let hours = 0;
    if(minutesOnly < 0 || !Number.isInteger(minutesOnly)) {
        return "Error, check data";
    } 
    else if(minutesOnly < 60) {
        return `These are ${hours} hours and ${minutesOnly} minutes`;
    }
    
    hours = Math.floor(minutesOnly/60); // round - to more side, floor - to less side
    let minutes = minutesOnly % 60;

    if (hours == 1) {
        return `These are ${hours} hours and ${minutes} minutes`;    } 
    else if (hours == 2 || hours == 3 || hours == 4){
        return `These are ${hours} hours and ${minutes} minutes`;    }

    return `These are ${hours} hours and ${minutes} minutes`;
}

console.log(transformTime(150));
console.log(transformTime(1.4));
console.log(transformTime(110));
console.log(transformTime(120));
console.log(transformTime(180));
console.log(transformTime(240));
console.log(transformTime(300));
console.log(transformTime(323));

