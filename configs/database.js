const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("cas", "root", "12345678", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;
