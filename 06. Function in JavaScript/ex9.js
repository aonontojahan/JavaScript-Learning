import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let filePath = path.join(__dirname, "..", "data", "file.txt");

const data = fs.readFileSync(filePath, "utf-8");
console.log("Synchronous read: ", data);