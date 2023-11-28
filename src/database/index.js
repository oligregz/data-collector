const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Notebook = require('../models/Notebook');

const connection = new Sequelize(dbConfig);

Notebook.init(connection);

module.exports = {
  connection
}