const { Notebook } = require('../models/Notebook');

module.exports = {
  async store(req, res) {
    try {
      const {
        name,
        price,
        description
      } = req.body;
  
      const notebook = await Notebook.create({
        name,
        price,
        description
      });

      const hasNotebook = !!notebook && notebook.dataValues.hasOwnProperty(`id`);

      if (hasNotebook) {
        return res.status(201).json(notebook);
      }

    } catch (e) {
      console.error(e);
      return res.status(400).json({ error: e.parent.sqlMessage });
    }
  }
}