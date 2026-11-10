const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits);

let selectedFruits = fruits.slice(0, 3);
console.log(selectedFruits);

let removedFruits = fruits.splice(1, 2, "blueberry");
console.log(removedFruits);