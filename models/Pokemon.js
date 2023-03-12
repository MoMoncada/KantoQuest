const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//-- This is a Pokemon from the api, 
//belongs to many Trainers through PokemonTrainer --//

class Pokemon extends Model {
  
}

//-- Properties and Data Types --//
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
      allowNull: true,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: false,
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
