'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
    Users.hasMany(models.Products, {
      foreignKey: 'user_id',
      as:'productData'
    })
  };
  return Users;
};