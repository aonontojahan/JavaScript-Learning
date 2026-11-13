let numbers = [10, 25, 5, 80, 45, 100, 15];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > max) {
        max = numbers[i];
    }

}

console.log("Maximum value:", max);