# Backend Engineer Test - To-Do List API

## Overview

This project is a high-performance RESTful API for a simple to-do list system, built using Express.js. It demonstrates the implementation of CRUD operations, input validation, and proper API structuring.

## Features

- Create, read, update, and delete to-do items
- Mark to-do items as finished
- Soft delete functionality
- Input validation using Joi
- RESTful API design
- In-memory data storage (no database required)

## API Endpoints

- `POST /todo`: Create a new to-do
- `GET /todo`: Retrieve all to-dos
- `GET /todo/:id`: Retrieve a to-do by ID
- `PUT/PATCH /todo/:id`: Update a to-do
- `POST /todo/:id/finish`: Mark a to-do as finished
- `DELETE /todo/:id`: Soft delete a to-do

## To-Do Data Structure

- `id`: Unique ID
- `title`: Title of the to-do
- `description`: Description of the to-do
- `finished_at`: Time the to-do was finished (format: dd-mm-yyyy HH:MM:SS)
- `created_at`: Time the to-do was created (format: dd-mm-yyyy HH:MM:SS)
- `updated_at`: Time the to-do was updated (format: dd-mm-yyyy HH:MM:SS)
- `deleted_at`: Time the to-do was deleted (format: dd-mm-yyyy HH:MM:SS)

## Technologies Used

- Node.js
- Express.js
- Body-parser
- Dotenv
- Joi
- Module-alias
- Nodemon (for development)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
```

git clone [https://github.com/Fiorezarn/soul-parking-todo-api](https://github.com/Fiorezarn/soul-parking-todo-api)

2. Navigate to the project directory:
```

cd backend-engineer-test

```plaintext

3. Install dependencies:
```

npm install

```plaintext

4. Create a `.env` file in the root directory and add the following:
```

PORT=3000

```plaintext

### Running the Application

For development (with auto-restart on file changes):
```

npm run dev

```plaintext

For production:
```

npm start

```plaintext

```
