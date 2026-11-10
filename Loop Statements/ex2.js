// Learning foreach loop and switch case statements in JavaScript

const prompt = require('prompt-sync')();

// Student Database
const students = [
    { id: 101, name: "Rahim", age: 20, marks: 85 },
    { id: 102, name: "Karim", age: 21, marks: 72 },
    { id: 103, name: "Sakib", age: 19, marks: 90 },
    { id: 104, name: "Nadia", age: 22, marks: 95 },
    { id: 105, name: "Ayesha", age: 20, marks: 35 },
    { id: 106, name: "Hasan", age: 21, marks: 65 }
];

// Display All Students

function displayStudents() {

    console.log("\n========== STUDENT LIST ==========");

    students.forEach((student, index) => {

        console.log(
            `${index + 1}. ID: ${student.id} | ` +
            `Name: ${student.name} | ` +
            `Age: ${student.age} | ` +
            `Marks: ${student.marks}`
        );

    });
}

// ============================================
// 2. Calculate Total Marks
// ============================================

function calculateTotalMarks() {

    let totalMarks = 0;

    students.forEach((student) => {

        totalMarks += student.marks;

    });

    console.log("\nTotal Marks:", totalMarks);
}

// ============================================
// 3. Calculate Average Marks
// ============================================

function calculateAverageMarks() {

    let totalMarks = 0;

    students.forEach((student) => {

        totalMarks += student.marks;

    });

    const average = totalMarks / students.length;

    console.log("\nAverage Marks:", average.toFixed(2));
}

// ============================================
// 4. Find Passed Students
// ============================================

function displayPassedStudents() {

    console.log("\n========== PASSED STUDENTS ==========");

    students.forEach((student) => {

        if (student.marks >= 40) {

            console.log(
                `${student.name} - ${student.marks} - Passed`
            );

        }

    });
}

// ============================================
// 5. Find Failed Students
// ============================================

function displayFailedStudents() {

    console.log("\n========== FAILED STUDENTS ==========");

    students.forEach((student) => {

        if (student.marks < 40) {

            console.log(
                `${student.name} - ${student.marks} - Failed`
            );

        }

    });
}

// ============================================
// 6. Find Highest Marks
// ============================================

function findHighestMarks() {

    let highestMarks = 0;
    let topper = "";

    students.forEach((student) => {

        if (student.marks > highestMarks) {

            highestMarks = student.marks;
            topper = student.name;

        }

    });

    console.log("\n========== TOP STUDENT ==========");
    console.log("Name:", topper);
    console.log("Marks:", highestMarks);
}

// ============================================
// 7. Find Lowest Marks
// ============================================

function findLowestMarks() {

    let lowestMarks = Infinity;
    let lowestStudent = "";

    students.forEach((student) => {

        if (student.marks < lowestMarks) {

            lowestMarks = student.marks;
            lowestStudent = student.name;

        }

    });

    console.log("\n========== LOWEST MARKS ==========");
    console.log("Name:", lowestStudent);
    console.log("Marks:", lowestMarks);
}

// ============================================
// 8. Search Student By Name
// ============================================

function searchStudent() {

    const searchName = prompt("\nEnter student name: ");

    let found = false;

    students.forEach((student) => {

        if (student.name.toLowerCase() === searchName.trim().toLowerCase()) {

            console.log("\nStudent Found!");
            console.log("ID:", student.id);
            console.log("Name:", student.name);
            console.log("Age:", student.age);
            console.log("Marks:", student.marks);

            found = true;

        }

    });

    if (!found) {

        console.log("\nStudent not found!");

    }
}

// ============================================
// 9. Display Student Grades
// ============================================

function displayGrades() {

    console.log("\n========== STUDENT GRADES ==========");

    students.forEach((student) => {

        let grade;

        if (student.marks >= 80) {
            grade = "A+";
        }
        else if (student.marks >= 70) {
            grade = "A";
        }
        else if (student.marks >= 60) {
            grade = "A-";
        }
        else if (student.marks >= 50) {
            grade = "B";
        }
        else if (student.marks >= 40) {
            grade = "C";
        }
        else {
            grade = "F";
        }

        console.log(
            `${student.name} | Marks: ${student.marks} | Grade: ${grade}`
        );

    });
}

// ============================================
// 10. Count Total Passed and Failed Students
// ============================================

function countStudents() {

    let passed = 0;
    let failed = 0;

    students.forEach((student) => {

        if (student.marks >= 40) {

            passed++;

        }
        else {

            failed++;

        }

    });

    console.log("\n========== STUDENT STATISTICS ==========");
    console.log("Total Students:", students.length);
    console.log("Passed Students:", passed);
    console.log("Failed Students:", failed);

}

// ============================================
// MAIN MENU
// ============================================

function mainMenu() {

    let running = true;

    while (running) {

        console.log("\n================================");
        console.log("     STUDENT MANAGEMENT SYSTEM");
        console.log("================================");

        console.log("1. Display All Students");
        console.log("2. Calculate Total Marks");
        console.log("3. Calculate Average Marks");
        console.log("4. Display Passed Students");
        console.log("5. Display Failed Students");
        console.log("6. Find Highest Marks");
        console.log("7. Find Lowest Marks");
        console.log("8. Search Student");
        console.log("9. Display Student Grades");
        console.log("10. Student Statistics");
        console.log("11. Exit");

        const choice = Number(prompt("\nEnter your choice: "));

        switch (choice) {

            case 1:
                displayStudents();
                break;

            case 2:
                calculateTotalMarks();
                break;

            case 3:
                calculateAverageMarks();
                break;

            case 4:
                displayPassedStudents();
                break;

            case 5:
                displayFailedStudents();
                break;

            case 6:
                findHighestMarks();
                break;

            case 7:
                findLowestMarks();
                break;

            case 8:
                searchStudent();
                break;

            case 9:
                displayGrades();
                break;

            case 10:
                countStudents();
                break;

            case 11:
                console.log("\nThank you for using Student Management System!");
                running = false;
                break;

            default:
                console.log("\nInvalid choice! Please select between 1 and 11.");

        }

    }

}

// Start Application
mainMenu();
