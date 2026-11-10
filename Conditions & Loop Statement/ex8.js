
// Day Type Checker Using Switch Statement

const prompt = require('prompt-sync')();

// Take input from the user
let day = prompt("Enter a day of the week: ");

// Convert input to lowercase
day = day.trim().toLowerCase();

// Check the day using switch statement
switch (day) {

    case "friday":
    case "saturday":
        console.log("It's the weekend!");
        break;

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("It's a working day.");
        break;

    default:
        console.log("Invalid day! Please enter a valid day of the week.");
        break;
}
