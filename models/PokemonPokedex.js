// Might Need this file to act as a link with the many to many relationship?

// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class PokemonPokedex extends Model {
//   // Methods
// }

// PokemonPokedex.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     pokedex_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "pokedex",
//         key: "id",
//         unique: false,
//       },
//     },
//     pokemon_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "pokemon",
//         key: "id",
//         unique: false,
//       }
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "pokemon_pokedex",
//   }
// );

// module.exports = PokemonPokedex;
