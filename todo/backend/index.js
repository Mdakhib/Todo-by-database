const bodyParser = require("body-parser");
const express = require("express");
var cors = require("cors");
const Routers = require("./resources/todos/todos.router");
const sequelize = require("./utils/db-connection");
const Todo = require("./resources/todos/todos.model");

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/api/todos", Routers);

const startServer = () => {
  sequelize.sync({ alter: true });
  sequelize
    .authenticate()
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
  app.listen(4000, () => console.log(`Server started at 4000 port`));
};


startServer();