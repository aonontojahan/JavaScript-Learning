// Lose equality (==) checks for equality of values, allowing type coercion. Strict equality (===) checks for equality of both value and type, without type coercion.

let value1 = 10;
let value2 = "10";

console.log(value1 == value2); // true (loose equality)
console.log(value1 === value2); // false (strict equality)