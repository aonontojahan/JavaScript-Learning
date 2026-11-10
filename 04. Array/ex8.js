// Learn How to use Reverse method in javaScript
const numbers = [1, 2, 3, 4, 5];

let reversedNumbers = numbers.reverse();
console.log(reversedNumbers);


let numbers2 = [1, 2, 3, 4, 5];
for (let i = numbers2.length-1; i >= 0; i--) {
  console.log(numbers2[i]);
}

let numbers3 = [1, 2, 3, 4, 5];
let arr = [];
for (let i = numbers3.length-1; i >= 0; i--) {
    arr.push(numbers3[i]);
}
console.log(arr);
