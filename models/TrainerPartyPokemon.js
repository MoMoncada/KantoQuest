// This was the many to many connection

// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// // This is a Trainers pokemon
// // Belongs to the Trainers Pokedex
// // Belongs to the Trainers Party

// class TrainerPokemon extends Model {
//   // Methods
// }

// TrainerPokemon.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     trainer_party_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "trainer_party",
//         key: "id",
//       },
//     },
//     pokemon_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "pokemon",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "trainer_pokemon",
//   }
// );

// module.exports = TrainerPokemon;
