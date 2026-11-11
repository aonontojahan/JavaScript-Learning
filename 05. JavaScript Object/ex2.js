// Learn How to use object destructuring in javaScript

let student = {
    id: 21103030,
    name: "Aononto Jahan",
    department: "CSE",
    age: 22,
    marks: 85
};

const { id, name, department, age, marks } = student;
console.log(id, name, department, age, marks);
console.log(id);
console.log(name);
console.log(department);
console.log(age);
console.log(marks);