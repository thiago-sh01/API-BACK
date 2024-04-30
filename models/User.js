const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    hooks: {
      beforeCreate: async (User) => {
        const hasedPassword = await bcrypt.hash(User.senha, 10);
        User.senha = hasedPassword;
      },
      beforeUpdate: async (User) => {
        if (User.changed("senha")) {
          const hasedPassword = await bcrypt.hash(User.senha, 10);
          User.senha = hasedPassword;
        }
      },
    },
  }
);

User.sync();

module.exports = User;
