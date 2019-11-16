'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Products', 'user_id', 
      {type: Sequelize.INTEGER, allowNull: false, references: {
        model: {
          tableName: 'Users',
          schema: 'public'
        },
        key: 'id'
      }}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Products','user_id');
  }
};
