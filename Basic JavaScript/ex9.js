// Learning Rest Operator & Spread Operator in JavaScript

// Rest Operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Sum of numbers:", sum(1, 2, 3, 4, 5)); // Output: 15

// Spread Operator
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", ...numbers); // Output: 1 2 3 4 5