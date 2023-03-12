//--- Importing Models from their files ---//
const Trainer = require("./Trainer");
const Pokemon = require("./Pokemon");
const TrainerPokemon = require("./TrainerPokemon");


//--- Associations between models ---//
Trainer.belongsToMany(Pokemon, {
  through: TrainerPokemon,
  foreignKey: "trainer_id",
});

Pokemon.belongsToMany(Trainer, {
  through: TrainerPokemon,
  foreignKey: "pokemon_id",
});


module.exports = {
  Trainer,
  Pokemon,
  TrainerPokemon,
};
