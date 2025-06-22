# 🗂 MCP File Manager

A simple MERN-based tool to perform local filesystem operations like creating, editing, and deleting files inside a specified folder — via a prompt-style UI.

---

## ⚙️ Tech Stack

- **Frontend**: React
- **Backend**: Node.js (Express)
- **Data Storage**: Local filesystem
- **Client-Server Communication**: REST API with `axios`

---

## 🚀 Features

- Enter a folder path and run commands like:
  - `create hello.txt Hello World!`
  - `edit hello.txt New Content`
  - `delete hello.txt`
- Backend executes real filesystem operations using Node.js `fs` module.

---

## 📦 Prerequisites

- [Node.js & npm](https://nodejs.org/)
- (Optional) Git Bash if you're using Bash on Windows

---

## 📁 Project Structure

- mcp-app/
- ├── client/ # React frontend
- │ └── src/
- │ ├── components/
- │ │ └── FileManager.js
- │ └── App.js
- ├── server/ # Node.js backend
- │ ├── index.js
- │ ├── routes/ # (Optional, currently empty)
- │ └── uploads/ # (Optional, currently unused)
- └── README.md # This file



---

## 🔧 Getting Started

### 1️⃣ Clone & Navigate

```bash
git clone https://github.com/KarmaKar6/mcp-file-manager.git
cd mcp-app
```


### 2️⃣ Backend Setup

```bash
cd server
npm install
node index.js
```
Runs backend server at http://localhost:5000


### 3️⃣ Frontend Setup

```bash
cd client
npm install
npm start
```
Opens frontend app at http://localhost:3000


#### Usage Instructions
- In the browser, go to http://localhost:3000

- Enter a valid local folder path (example: C:/Users/YourName/Desktop/testfolder)

- Enter one of the following commands:

- create notes.txt This is a note

- edit notes.txt Updated note

- delete notes.txt

- Click "Run"

- You’ll see the file being created, modified, or deleted in the specified folder.