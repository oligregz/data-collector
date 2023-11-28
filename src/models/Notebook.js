const { Model, DataTypes } = require('sequelize');

class Notebook extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT
    }, {
      sequelize
    });
  }
}

module.exports = {
  Notebook
}