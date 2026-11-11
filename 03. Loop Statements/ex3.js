// Learning how to find the sum of numbers in an array using forEach loop in JavaScript

import createPrompt from 'prompt-sync';
const prompt = createPrompt();
let number = parseInt(prompt("Enter the number: "));

let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum += digit;
    number = Math.floor(number / 10);
}

console.log("The sum of the digits is: " + sum);