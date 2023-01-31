'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.transaction);
      order.belongsTo(models.game);
    }
  }
  order.init({
    price: DataTypes.INTEGER,
    transactionId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Transaction ID must not be empty!"
        }
      }
    },
    gameId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Game ID must not be empty!"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};