const {
  successResponseData,
  successResponse,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");
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

const getTodos = async (req, res) => {
  const Todos = readTodos();
  return successResponseData(res, "Succesfully get all todos", Todos, 201);
};

const getTodosById = async (req, res) => {
  try {
    const { id } = req.params;
    const Todos = readTodos();
    const todo = Todos.find((todo) => todo.id === Number(id));
    if (!todo) {
      return errorClientResponse(res, `Todo with id ${id} not found`, 404);
    }
    return successResponseData(
      res,
      `Succesfully get todo with id ${id}`,
      todo,
      200
    );
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const createTodos = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todos = readTodos();
    const newTodos = {
      id: todos.length + 1,
      title: title,
      description: description,
      finished_at: null,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    };
    todos.push(newTodos);
    writeTodos(todos);
    return successResponseData(
      res,
      "Succesfully create new todos!",
      newTodos,
      201
    );
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const Todos = readTodos();
    const todoIndex = Todos.findIndex((todo) => todo.id === Number(id));
    if (todoIndex === -1) {
      return errorClientResponse(res, `Todo with id ${id} not found`, 404);
    }

    const updatedTodo = {
      ...Todos[todoIndex],
      title: title || Todos[todoIndex].title,
      description: description || Todos[todoIndex].description,
      finished_at: Todos[todoIndex].finished_at,
      updated_at: new Date().toISOString(),
    };
    Todos[todoIndex] = updatedTodo;
    writeTodos(Todos);
    return successResponseData(
      res,
      "Successfully updated the todo!",
      updatedTodo,
      200
    );
  } catch (error) {
    return errorClientResponse(res, error.message, 500);
  }
};

const finishTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const Todos = readTodos();
    let todo = Todos.find((todo) => todo.id === Number(id));
    if (!todo) {
      return errorClientResponse(res, `Todo with id ${id} not found!`, 404);
    }
    todo.finished_at = new Date();
    writeTodos(Todos);
    return successResponse(res, `Success Finish data with id ${id}`);
  } catch (error) {
    return errorClientResponse(res, error.message);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const Todos = readTodos();
    let todo = Todos.find((todo) => todo.id === Number(id));
    if (!todo) {
      return errorClientResponse(res, `Todo with id ${id} not found!`, 404);
    }
    todo.deleted_at = new Date();
    writeTodos(Todos);
    return successResponse(res, `Success Delete data with id ${id}`);
  } catch (error) {
    return errorClientResponse(res, error.message);
  }
};

module.exports = {
  getTodos,
  createTodos,
  getTodosById,
  deleteTodo,
  updateTodos,
  finishTodo,
};
