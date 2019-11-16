'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('Users', 'address', {type: Sequelize.TEXT, allowNull: false});
  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users','address');
  }
};
