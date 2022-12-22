'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gameProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gameProfile.belongsTo(models.game)
    }
  }
  gameProfile.init({
    release_date: DataTypes.DATE,
    developer: DataTypes.STRING,
    publisher: DataTypes.STRING,
    desc: DataTypes.STRING,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gameProfile',
  });
  return gameProfile;
};