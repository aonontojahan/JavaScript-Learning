// Solution 1
let number = [50, 10, 40, 20, 30];

number.sort((a, b) => a - b);
console.log("Ascending Order:", number);



// Solution 2
let numbers = [50, 10, 40, 20, 30];
for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

        if (numbers[i] > numbers[j]) {

            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;

        }
    }
}

console.log("Ascending Order:", numbers);