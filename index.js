require("dotenv").config();
const express = require("express");
require("module-alias/register");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const todosRoute = require("@/routes/todo.route");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.use("/todos", todosRoute);
