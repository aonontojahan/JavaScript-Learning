import { writeFileSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "..", "data", "user.json");

console.log(filePath);

const users = JSON.parse(readFileSync(filePath, "utf-8"));

const newUser = {
    userName: "Aononto Jahan",
    passsword: "123456",
};

users.push(newUser);

writeFileSync(filePath, JSON.stringify(users, null, 2), "utf-8");

console.log("New user added successfully!");