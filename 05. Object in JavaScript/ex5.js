import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const student = fs.readFileSync(path.join(__dirname, "..", "student.json"), "utf-8");

console.log(student);