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
      // define association here
    }
  };
  Customer.init({
    first_name: {
      type : DataTypes.STRING,
      allowNull: {
        args : false,
        msg : `first name cannot be empty`
      }
    },
    last_name: {
      type : DataTypes.STRING,
      allowNull: {
        args : false,
        msg : `last name cannot be empty`
      }
    },
    email:{
      type : DataTypes.STRING,
      allowNull: {
        args : false,
        msg : `email cannot be empty`
      },
      unique: {
        args : true,
        msg : `email already in use`
      },
      isEmail: {
        args : true,
        msg : `please use email format e.g. username@mail.com`
      }
    }, 
    password: {
      type : DataTypes.STRING,
      allowNull: {
        args : false,
        msg : `password cannot be empty`
      },
      min : {
        args : 6,
        msg : `minimum number is 6`
      } 
    },
    phone_number: {
      type : DataTypes.STRING,
      allowNull: {
        args : false,
        msg : `phone number cannot be empty`
      }, 
      min : {
        args : 10,
        msg : `minimum number is 10`
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