'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.belongsToMany(models.Customer, {
        through : models.CustomerMenu
      })
    }
  };
  Menu.init({
    name: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args : true,
          msg : ` Name cannot be empty`
        }
      }
    }, 
    stock: {
      type : DataTypes.INTEGER,
      validate: {
        min: {
          args : 1,
          msg : `  Minimum stock is 1`
        }
      }
    },
    harga:  {
      type : DataTypes.INTEGER,
      validate: {
        min: {
          args : 1,
          msg : `  Minimum harga is 1`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};