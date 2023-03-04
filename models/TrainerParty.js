const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is the party of pokemon the trainer selects
// Belongs to the Trainer
// Has many Pokemon through Trainer Pokemon

class Party extends Model {
  // Methods
}

Party.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    party_score: {
      type: DataTypes.INTEGER,
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trainer",
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
    modelName: "trainer_party",
  }
);

module.exports = Party;
