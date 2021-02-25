'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = require('../data/customer.json')
    data.forEach(el =>{
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
   return queryInterface.bulkInsert('Customers', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {})
  }
};
