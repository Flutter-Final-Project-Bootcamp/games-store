'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      library.belongsTo(models.user);
      library.belongsTo(models.game);
    }
  }
  library.init({
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
    modelName: 'library',
  });
  return library;
};