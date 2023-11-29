const { Notebook } = require('../models/Notebook');

module.exports = {

  async index(req, res) {
    try {
      const notebooks = await Notebook.findAll();

      const hasNotebooks = !!notebooks && notebooks.length > 0;
  
      if (hasNotebooks) {
        return res.status(200).json(notebooks);
      }

      return res.status(406).json({
        message: `Notebooks not found`
      });

    } catch (e) {
      console.error(e);
      return res.staus(400).json({ error: e.parent.sqlMessage });
    }
  },

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