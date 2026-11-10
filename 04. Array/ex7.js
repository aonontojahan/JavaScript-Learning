// Learn How to use includes function in javaScript
const numbers = [1, 2, 3, 4, 5];

let found = numbers.includes(3);
console.log(found);


let isFound = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    isFound = true;
    break;
  }
}
console.log(isFound);