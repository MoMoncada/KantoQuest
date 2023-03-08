// If using the many to many PokemonPokedex file
// Adjustments are needed based on the comments


const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pokedex extends Model {
  // Methods
}

Pokedex.init(
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
      },
    },
    // Don't need this with the many to many file 
    pokemon_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "pokemon",
        key: "id",
      }
    },
    is_in_party: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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
