
// Write a function that will determine the compartment number by the seat number passed to it.
// The function only accepts an integer between 1 and 36.
// If the passed argument is not a number, negative or fractional, a message is returned:
// "Error. Please check that the seat number you entered is correct"
// If the number is 0 or greater than 36, then the message: "There are no such seats in the car"


function getCoupeNumber(place) {
    if (place === 0) {
        return "There are no such places in the car";
    } else if (place > 36) {
        return "There are no such places in the car";
    } else if (place < 0) {
        return "Error. Please check the correctness of the entered seat number";
    } else if (isNaN(place)) {
        return "Error. Please check the correctness of the entered seat number";
    } else if (!Number.isInteger(place)) {
        return "Error. Please check the correctness of the entered seat number";
    } 
    
    
    if (place <= 4) {
        return console.log(1);
    } else {
        return console.log(Math.round(place / 4));    
    }


    // let amountCoupe = 9;
    // let amountPlaces = 36;
    // const arrPlaces = [];
    // for (let index = 0; index < amountPlaces; index++) {
    //     arrPlaces[index] = index + 1;
    // }

    // for(let j = 1; j <= amountCoupe; j++){
    //     let co = j*4;
    //     for(let k = 0; k < co; k++){
    //         if(arrPlaces[k] === place){
    //             return j;
    //         }        
    //     }
    // }
}

getCoupeNumber(12);