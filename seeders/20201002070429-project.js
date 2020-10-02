'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Projects', 
    [
      {
        name: 'Project 1',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project 2',
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Project 3',
        completed: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Projects', null, {})
  }
};
