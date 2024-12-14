const fs = require("fs");
const path = require("path");

const todosFilePath = path.join(__dirname, "../mock/todos.json");

const readTodos = () => {
  const data = fs.readFileSync(todosFilePath, "utf-8");
  return JSON.parse(data);
};

const writeTodos = (todos) => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), "utf-8");
};

module.exports = { readTodos, writeTodos };
