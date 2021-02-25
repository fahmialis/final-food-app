'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const seedMenu = require('../data/menu.json');
    seedMenu.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Menus', seedMenu, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Menus', null, {});
  }
};
