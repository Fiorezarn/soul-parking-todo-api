const Joi = require("joi");
const {
  errorClientResponse,
  errorServerResponse,
} = require("@/helpers/response.helper");
const { readTodos } = require("@/utils/todo.util");

const todosValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(res, validationError.details[0].message);
  }
  next();
};

const checkDuplicateTitle = (req, res, next) => {
  const { title } = req.body;
  const Todos = readTodos();
  const todo = Todos.find((todo) => todo.title === title);
  if (todo) {
    return errorClientResponse(res, "Title already exists");
  }
  next();
};

module.exports = { todosValidation, checkDuplicateTitle };
