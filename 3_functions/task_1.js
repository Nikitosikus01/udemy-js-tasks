
// Create a function that will calculate the volume and total surface area of a cube. 
// This function takes an integer with the value of the length of the edge of the cube. 
// Output the answer in the string format shown in the examples.

// If the function got an incorrect argument or it is impossible to calculate the values, 
// return the string "An error occurred during the calculation"


function calculateVolumeAndArea(val) {
    if (isNaN(val)) {
        return "An error occurred during the calculation";
    } else if (!Number.isInteger(val)) {
        return "An error occurred during the calculation";
    } else if (val < 0){
        return "An error occurred during the calculation";
    }
    let area = val * val * 6;
    let volume = Math.pow(val, 3);
    return `Cube volume: ${volume}, total surface area: ${area}`;
}


