const sequelize = require("../../utils/db-connection");
const { DataTypes } = require("sequelize");

const Todo = sequelize.define(
  "Todos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 20],
      },
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "NA",
    },
  },
  {
    timestamps: false,
  }
);

// Todo.bulkCreate([
//   { title: "EAT", description: "testing" },
//   { title: "Sleep", description: "testing" },
//   { title: "Code", description: "testing" },
//   { title: "Repeat", description: "testing" },
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

module.exports = Todo;
