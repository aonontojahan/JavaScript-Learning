
let numbers = [10, 20, 30, 40, 50];

for (let i = numbers.length - 1; i > 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));

    // Swap elements
    let temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;

}

console.log("Shuffled Array:", numbers);
