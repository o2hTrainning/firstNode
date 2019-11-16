'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    user_id: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
    Products.belongsTo(models.Users, {
      foreignKey: 'user_id',
      as: 'UserData'
    })
  };
  return Products;
};