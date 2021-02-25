'use strict';
const {hashPassword} = require('../helper/bycriptjs')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    userName(){
      return `${this.first_name}${this.last_name}`
    }
    static associate(models) {
      Customer.belongsToMany(models.Menu, {
        through : models.CustomerMenu
      })
    }
  };
  Customer.init({
    first_name: {
      type : DataTypes.STRING,
      validate: {
        notEmpty: {
          args : true,
          msg : `first name cannot be empty`
        }
      } 
    },
    last_name: {
      type : DataTypes.STRING,
      validate :{
        notEmpty: {
          args : true,
          msg : `last name cannot be empty`
        }
      } 
    },
    email:{
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          args : true,
          msg : `email cannot be empty`
        },
      }   
    }, 
    password: DataTypes.STRING,
    phone_number: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          args : true,
          msg : `phone number cannot be empty`
        }, 
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
    hooks : {
      beforeCreate : (instance) =>{
        instance.password = hashPassword(instance.password)
      }
    }
  });
  return Customer;
};