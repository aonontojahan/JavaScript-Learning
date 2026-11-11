import createPrompt from 'prompt-sync';
const prompt = createPrompt();

console.log(
    "1. Check Balance\n" +
    "2. Check Statement\n" +
    "3. Cash Withdraw\n" +
    "4. Money Transfer\n" +
    "5. Exit"
);

let input = parseInt(prompt("Enter your choice: "));

switch (input) {
    case 1:
        console.log("Your balance is $1000.");
        break;

    case 2:
        console.log(
            "Your statement is as follows:\n" +
            "Date: 2023-01-01, Description: Deposit, Amount: $500\n" +
            "Date: 2023-01-05, Description: Withdrawal, Amount: $200\n" +
            "Date: 2023-01-10, Description: Transfer, Amount: $300"
        );
        break;

    case 3:
        console.log("You have withdrawn $200. Your new balance is $800.");
        break;

    case 4:
        console.log("You have transferred $300. Your new balance is $700.");
        break;

    case 5:
        console.log("Thank you for using our services. Goodbye!");
        break;

    default:
        console.log("Invalid choice! Please select between 1 and 5.");
        break;
}