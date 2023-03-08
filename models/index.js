const Pokedex = require("./Pokedex");
const Trainer = require("./Trainer");
const Pokemon = require("./Pokemon");
// Might need this for the many to many relationship?
// const PokemonPokedex = require("./PokemonPokedex");

// I think we need this
// Trainer.hasMany(Pokedex, {
//   foreignKey: "trainer_id"
// })

// Pokedex.belongsToMany(Trainer, {
//   foreignKey: "trainer_id"
// })


//Trainers - Pokemon
// I think this doesn't work
Trainer.belongsToMany(Pokemon, {
  through: Pokedex
})

Pokemon.belongsToMany(Trainer, {
  through: Pokedex
})

module.exports = {
  Pokedex,
  Trainer,
  Pokemon
};
