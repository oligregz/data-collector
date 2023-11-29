const express = require('express');

const routes = express.Router();

const NotebookController = require('./controllers/notebook.controller');

routes.post('/notebooks', NotebookController.store);
routes.get('/notebooks', NotebookController.index);


module.exports = {
  routes
}