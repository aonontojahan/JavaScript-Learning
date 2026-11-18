import promptSync from 'prompt-sync';
const prompt = promptSync();

let number = parseInt(prompt("How many terms you want to print the fabonacci numbers: "));

let first =0;
let secound =1;

for (let i = 0; i <= number; i ++){
    
    console.log (first);

    let next = first + secound;
    first = secound;
    secound = next;
} 