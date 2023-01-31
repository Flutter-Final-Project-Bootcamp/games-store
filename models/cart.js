'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart.belongsTo(models.user);
      cart.belongsTo(models.game);
    }
  }
  cart.init({
    userId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "User ID must not be empty!"
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
    modelName: 'cart',
  });
  return cart;
};