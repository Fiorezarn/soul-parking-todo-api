# 🧾 TODO API

This project is a high-performance RESTful API for a simple to-do list system, built using Express.js. It demonstrates the implementation of CRUD operations, input validation, and proper API structuring.

## ✨ Features

- ✅ Create, read, update, and delete to-do items
- 🏁 Mark to-do items as finished
- 🗑️ Soft delete functionality
- 🛡️ Input validation using Joi
- 🌐 RESTful API design
- 💾 In-memory data storage (no database required)

## 🛣️ API Documentations
![swagger-soul](https://github.com/user-attachments/assets/767edf43-69e1-4077-b41b-47e798179d9f)
Check out the live version of Todo API: 🌐[Todo API Deployment](https://soul-parking-todo-api.onrender.com/api-docs/)

## 📊 To-Do Data Structure

| Field | Type | Description |
|-------|------|-------------|
| 🆔 id | 🔢 Number | Unique identifier for the to-do item |
| 📌 title | 📝 String | Title of the to-do |
| 📄 description | 📝 String | Description of the to-do |
| ⏱️ finished_at | 📅 Date | Time the to-do was finished (format: dd-mm-yyyy HH:MM:SS) |
| 🎬 created_at | 📅 Date | Time the to-do was created (format: dd-mm-yyyy HH:MM:SS) |
| 🔄 updated_at | 📅 Date | Time the to-do was last updated (format: dd-mm-yyyy HH:MM:SS) |
| 🗑️ deleted_at | 📅 Date | Time the to-do was soft deleted (format: dd-mm-yyyy HH:MM:SS) |

## 🛠️ Technologies Used

[![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![npm](https://img.shields.io/badge/-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![dotenv](https://img.shields.io/badge/-dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)](https://github.com/motdotla/dotenv)
[![Joi](https://img.shields.io/badge/-Joi-0080FF?style=for-the-badge&logo=joi&logoColor=white)](https://joi.dev/)
[![Nodemon](https://img.shields.io/badge/-Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white)](https://nodemon.io/)

## 🛠 Installation

1. Clone this repository:

```shellscript
git clone https://github.com/Fiorezarn/soul-parking-todo-api
cd <soul-parking-todo-api>
```

2. Install dependencies:

```shellscript
npm install
```

3. Create a `.env` file for database and JWT configuration:

```plaintext
PORT=your_port
BASE_URL=your_baseurl
```

6. Start the server:

```shellscript
npm start
```
