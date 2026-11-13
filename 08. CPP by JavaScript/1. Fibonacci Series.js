import promptSync from 'prompt-sync';

const prompt = promptSync();

let num = parseInt(prompt("Enter how many terms: "));

let first = 1;
let second = 2;

console.log("Fibonacci Series:");

for (let i = 1; i <= num; i++) {

    console.log(first);

    let next = first + second;

    first = second;
    second = next;
}