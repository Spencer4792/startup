// database.js

const { Sequelize } = require('sequelize');

// Setup a new database using SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // Path to database file
});

module.exports = sequelize;
