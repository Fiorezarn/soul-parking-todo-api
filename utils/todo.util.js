const fs = require("fs");
const path = require("path");

const todosFilePath = path.join(__dirname, "../mock/todos.json");

const readTodos = (search = false, isDeleted = 1) => {
  const data = fs.readFileSync(todosFilePath, "utf-8");
  let datas = JSON.parse(data);
  if (search) {
    datas = datas.filter(
      (todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase()) ||
        todo.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (Number(isDeleted) === 0) {
    datas = datas.filter((todo) => !todo.deleted_at);
  }
  return datas;
};

const writeTodos = (todos) => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), "utf-8");
};

module.exports = { readTodos, writeTodos };
