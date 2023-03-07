const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is the pokedex of the Trainer
// Belongs to the Trainer
// Has many Pokemon through Trainer Pokemon

class PartyPokemon extends Model {
  // Methods
}

PartyPokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pokemon",
        key: "id",
      },
    },    
    trainerparty_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trainer_party",
        key: "id",
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "party_pokemon",
  }
);

module.exports = PartyPokemon;
