const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todos", "root", "Akhib@9036", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;