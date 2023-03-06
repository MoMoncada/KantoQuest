const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is a Pokemon from the api
// Belongs to the Pokedex

class Pokedex extends Model {
  // Pokemon Methods
}

// init pokemon sequelize object
Pokedex.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_one: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_two: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_caught: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    trainer_pokedex_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trainer_pokedex",
        key: "id",
      },
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
