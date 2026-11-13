<div align="center">

# 📘 JavaScript Learning Repository

**A structured, security-conscious collection of JavaScript fundamentals, advanced concepts, and hands-on exercises.**

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A5%2018-339933?logo=node.js&logoColor=white)](package.json)
[![Module System](https://img.shields.io/badge/Modules-ESM-informational?logo=javascript&logoColor=white)](package.json)
[![Status](https://img.shields.io/badge/Status-Active%20Learning-brightgreen)](#)

[📖 Table of Contents](#-table-of-contents) ·
[🚀 Quick Start](#-quick-start) ·
[📂 Chapters](#-chapters) ·
[🔒 Security](#-security-notes) ·
[📜 License](#-license)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Repository Structure](#-repository-structure)
- [Quick Start](#-quick-start)
- [Chapters & Quick Links](#-chapters--quick-links)
- [Environment & Configuration](#-environment--configuration)
- [Security Notes](#-security-notes)
- [Contributing](#-contributing)
- [License & Copyright](#-license--copyright)

---

## 🎯 Overview

This repository is a personal, structured learning journal for mastering **JavaScript** — from the very first variable to Object-Oriented Programming. Each chapter is a folder containing small, runnable exercises (`ex1.js`, `ex2.js`, …) that build on one another progressively.

> **Module system:** The project uses **ES Modules** (`"type": "module"` in `package.json`). Use `import` / `export` — not `require()`.

---

## 📂 Repository Structure

```
JavaScript-Learning/
├── 01. Basic JavaScript/          # Variables, data types, operators, I/O
├── 02. Conditional Statement/     # if / else / switch
├── 03. Loop Statements/           # for / while / forEach
├── 04. Array/                     # Array methods & transformations
├── 05. Object in JavaScript/      # Objects, destructuring, JSON, fs
├── 06. Function in JavaScript/    # Functions, scope, parameters
├── 07. OOP in JavaScript/         # Classes, objects, this
├── data/                          # Runtime data files (file.txt, user.json)
├── .env                           # 🔐 Local secrets (NEVER commit — see .gitignore)
├── .gitignore                     # Keeps secrets & node_modules out of git
├── package.json                   # Project manifest & dependencies
├── LICENSE                        # Apache License 2.0
└── README.md                      # You are here
```

---

## 🚀 Quick Start

**Prerequisites:** [Node.js ≥ 18](https://nodejs.org/) (includes npm).

```bash
# 1. Clone the repository
git clone https://github.com/aonontojahan/JavaScript-Learning.git
cd JavaScript-Learning

# 2. Install dependencies
npm install

# 3. Run any exercise (ES Module syntax)
node "01. Basic JavaScript/ex1.js"
node "05. Object in JavaScript/ex5.js"
```

> 💡 **Tip:** Always run a script from the repository root so relative `import` paths resolve correctly.

---

## 📚 Chapters & Quick Links

| # | Chapter | Concepts Covered | Exercises | Quick Link |
|---|---------|------------------|-----------|------------|
| 01 | **Basic JavaScript** | Variables, `let`/`const`, data types, operators, string & template literals, `console.log` | 11 | [→ Open folder](01.%20Basic%20JavaScript/) |
| 02 | **Conditional Statement** | `if` / `else if` / `else`, nested conditions, `switch` case, ternary operator | 8 | [→ Open folder](02.%20Conditional%20Statement/) |
| 03 | **Loop Statements** | `for`, `while`, `do...while`, `forEach`, `break`/`continue`, prime check, digit sum | 3 | [→ Open folder](03.%20Loop%20Statements/) |
| 04 | **Array** | `push`/`pop`/`shift`/`unshift`, `map`, `filter`, `reduce`, `find`, `slice`/`splice`, iteration | 8 | [→ Open folder](04.%20Array/) |
| 05 | **Object in JavaScript** | Object literals, destructuring, `JSON.parse`/`stringify`, `fs` read/write, `dotenv` | 7 | [→ Open folder](05.%20Object%20in%20JavaScript/) |
| 06 | **Function in JavaScript** | Function declarations & expressions, arrow functions, parameters, `return`, scope, async file I/O | 9 | [→ Open folder](06.%20Function%20in%20JavaScript/) |
| 07 | **OOP in JavaScript** | Classes, `constructor`, `this`, getters/setters, inheritance | 2 | [→ Open folder](07.%20OOP%20in%20JavaScript/) |

---

## 🔐 Environment & Configuration

The project loads environment variables via [`dotenv`](https://www.npmjs.com/package/dotenv).

1. **Create your local secret file** (it is git-ignored):

   ```bash
   cp .env.example .env      # if a template exists
   # — or create .env manually —
   ```

   ```env
   # .env  (NEVER commit this file)
   BASE_URL=https://www.example.com
   ```

2. **Load it in a script:**

   ```js
   import 'dotenv/config';
   // or: import dotenv from 'dotenv'; dotenv.config();
   ```

> ⚠️ **`.env.example`** is safe to commit (template with placeholder values). The real `.env` must stay local — the `.gitignore` already protects it.

---

## 🛡️ Security Notes

As the maintainer, I apply security-first hygiene to this repository:

1. **Secrets never enter version control.** `.gitignore` blocks `.env`, `*.pem`, `*.key`, `*.p12`, `*.keystore`, and credential folders.
2. **Dependencies are not committed.** `node_modules/` is ignored — only `package.json` + `package-lock.json` are tracked, keeping the dependency graph auditable.
3. **`package-lock.json` is tracked on purpose** — it pins exact versions and is itself a supply-chain security artifact.
4. **No real credentials in code.** All examples use placeholder values (`www.example.com`, `"123456"`) for teaching only.
5. **`.env` hygiene:** If a secret is ever accidentally pushed, **rotate it immediately** — removing the file from git history does not un-leak a published secret.

> 🧭 **Rule of thumb:** Treat every secret as compromised the moment it touches a remote you do not fully control.

---

## 🤝 Contributing

This is a personal learning repository, but suggestions are welcome:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-topic`
3. Commit your changes: `git commit -m "Add: your topic"`
4. Push to the branch: `git push origin feature/your-topic`
5. Open a Pull Request.

Please **never** commit secrets, credentials, or `node_modules/`.

---

## 📜 License & Copyright

This project is licensed under the **Apache License, Version 2.0** — see [LICENSE](LICENSE) for the full text.

```
Copyright © 2025–2026 Aononto Jahan. All rights reserved.
```

<div align="center">

**All Rights Reserved** · [aonontojahan.vercel.app](https://aonontojahan.vercel.app)

<a href="https://aonontojahan.vercel.app">
  <img src="https://img.shields.io/badge/Portfolio-aonontojahan.vercel.app-6C63FF?logo=vercel&logoColor=white" alt="Portfolio" />
</a>
<a href="https://github.com/aonontojahan">
  <img src="https://img.shields.io/badge/GitHub-aonontojahan-181717?logo=github&logoColor=white" alt="GitHub" />
</a>

<sub>Built with care for learning. Reuse permitted under Apache 2.0 with attribution.</sub>

</div>