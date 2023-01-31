'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transaction.belongsTo(models.user);
      transaction.hasMany(models.order)
    }
  }
  transaction.init({
    total_price: DataTypes.INTEGER,
    payment: DataTypes.STRING,
    status: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "User ID must not be empty!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};