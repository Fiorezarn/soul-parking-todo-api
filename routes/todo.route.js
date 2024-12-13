const express = require("express");
const router = express.Router();
const {
  getTodos,
  createTodos,
  getTodosById,
  deleteTodo,
  updateTodos,
  finishTodo,
} = require("@/controllers/todo.controller");

router.get("/", getTodos);
router.post("/", createTodos);
router.get("/:id/finish", finishTodo);
router.get("/:id", getTodosById);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodos);

module.exports = router;
