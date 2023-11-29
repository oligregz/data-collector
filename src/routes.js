const express = require('express');

const routes = express.Router();

const NotebookController = require('./controllers/notebook.controller');

routes.post('/notebook', NotebookController.store);

module.exports = {
  routes
}