const Pokedex = require("./Pokedex");
const Trainer = require("./Trainer");
const Pokemon = require("./Pokemon");


//Trainers - Pokemon
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
