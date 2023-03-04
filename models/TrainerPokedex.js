const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// This is the pokedex of the Trainer
// Belongs to the Trainer
// Has many Pokemon through Trainer Pokemon

class TrainerPokedex extends Model {
  // Methods
}

TrainerPokedex.init(
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trainer_pokedex",
  }
);

module.exports = TrainerPokedex;
