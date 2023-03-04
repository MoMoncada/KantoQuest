const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is the main complete Pokedex, there should only ever be one
// Has many Pokemon

class Pokedex extends Model {
  // Pokedex Methods
}

Pokedex.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "pokedex",
  }
);

module.exports = Pokedex;
