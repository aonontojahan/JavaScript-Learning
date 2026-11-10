// Learn looping in javascript
// Check the number is prime or not using for loop

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));

let isPrime = true;

if (num <= 1) {
    isPrime = false;
} 
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}