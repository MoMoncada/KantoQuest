const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is the pokedex of the Trainer
// Belongs to the Trainer
// Has many Pokemon through Trainer Pokemon

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
