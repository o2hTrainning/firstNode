'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Products',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};


