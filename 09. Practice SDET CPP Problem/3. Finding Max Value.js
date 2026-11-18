let numbers = [10, 25, 5, 80, 45, 100, 15];

let maxNumber = [0];

for ( let i =0; i <= numbers.length; i++){
    if (numbers [i] > maxNumber){
        maxNumber = numbers [i];
    }
}

console.log("The max numbers of the among number is : ", maxNumber);