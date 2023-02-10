'use strict';
const { encryptPwd } = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.cart)
      user.hasMany(models.library)
      user.hasMany(models.transaction)
    }
  }
  user.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Username must not be empty!"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Email must not be empty!"
        },
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Password must not be empty!"
        }
      }
    },
    image: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: function (user, options) {
        user.password = encryptPwd(user.password)
        user.image = user.image || "user.png"
        user.age = user.age || 0
      },
      beforeUpdate: function (user, options) {
        if (user.password !== user.previous('password')) {
          user.password = encryptPwd(user.password)
        }
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};