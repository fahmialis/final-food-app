'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CustomerMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CustomerMenu.belongsTo(models.Customer, {foreignKey : 'CustomerId'})
      CustomerMenu.belongsTo(models.Menu, {foreignKey : 'MenuId'})
    }
  };
  CustomerMenu.init({
    CustomerId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CustomerMenu',
  });
  return CustomerMenu;
};