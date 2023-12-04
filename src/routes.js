const express = require('express');

const routes = express.Router();

const NotebookController = require('./controllers/notebook.controller');

routes.get('/api/v1', (req, res) => {
  res.json({ message: 'Wellcome datacollector api!' });
});
routes.post('/api/v1/notebooks', NotebookController.store);
routes.get('/notebooks', NotebookController.index);


module.exports = {
  routes
}