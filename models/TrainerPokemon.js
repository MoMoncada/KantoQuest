const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//-- This is the joining table to link the many Trainers to many Pokemon --//

class TrainerPokemon extends Model {}

//-- Properties and Data Types --//
TrainerPokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trainer",
        key: "id",
        unique: false,
      },
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pokemon",
        key: "id",
        unique: false,
      },
    },
    is_in_party: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trainer_pokemon",
  }
);

module.exports = TrainerPokemon;
