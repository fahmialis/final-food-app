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
          msg : ` First name cannot be empty`
        }
      } 
    },
    last_name: {
      type : DataTypes.STRING,
      validate :{
        notEmpty: {
          args : true,
          msg : ` Last name cannot be empty`
        }
      } 
    },
    email:{
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          args : true,
          msg : ` Email cannot be empty`
        },
        isEmail : {
          args : true,
          msg : ` Please write an email`
        }
      }   
    }, 
    password:{
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          args : true,
          msg : ` Password cannot be empty`
        },
      }
    },
    phone_number: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          args : true,
          msg : ` Phone number cannot be empty`
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