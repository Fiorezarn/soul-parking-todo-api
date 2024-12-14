require("dotenv").config();
const express = require("express");
require("module-alias/register");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL;
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");
const todosRoute = require("@/routes/todo.route");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

const options = {
  definition: {
    openapi: "3.0.0",
    servers: [
      {
        url: `${baseUrl}:${port}`,
      },
    ],
    info: {
      title: "TODO API Documentation",
      description:
        "This is a simple to-do list API that allows you to create, read, update, and delete to-do items.",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs));

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/todos", todosRoute);
