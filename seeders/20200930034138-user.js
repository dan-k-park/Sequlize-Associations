'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', 
    [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        password: '$321!pass!123$',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tom',
        lastName: 'Poe',
        email: 'memo@memo.com',
        password: '$123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Ron',
        lastName: 'Moe',
        email: 'pemo@pemo.com',
        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
