// Learn Object Assign in JavaScript

const user = {
    name: "Aononto Jahan",
    age: 25};

const extraInfo = {
    country: "Bangladesh",
    profession: "Software Engineer"
};

const result = Object.assign({}, user, extraInfo);
console.log("Result:", result);

console.log("Value of result", (Object.values(result))); // Get all values of the object    