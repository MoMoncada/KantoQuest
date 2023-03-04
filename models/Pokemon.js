const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is a Pokemon from the api
// Belongs to the Pokedex

class Pokemon extends Model {
  // Pokemon Methods
}

// init pokemon sequelize object
Pokemon.init(
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
      allowNull: false,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_caught: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    pokedex_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pokedex",
        key: "id",
      },
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
    modelName: "pokemon",
  }
);

module.exports = Pokemon;
