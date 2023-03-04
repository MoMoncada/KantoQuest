const Pokedex = require("./Pokedex");
const Pokemon = require("./Pokemon");
const Trainer = require("./Trainer");
const TrainerParty = require("./TrainerParty");
const TrainerPokedex = require("./TrainerPokedex");

// ------
// Pokedex has many Pokemon
Pokedex.hasMany(Pokemon, {
  foreignKey: "pokedex_id",
});

// Pokemon belongs to Pokedex
Pokemon.belongsTo(Pokedex, {
  foreignKey: "pokedex_id",
});
// ------

// ------
// TrainerPokedex has many Pokemon
TrainerPokedex.hasMany(Pokemon, {
  foreignKey: "trainer_pokedex_id",
});

// Pokemon belongs to TrainerPokedex
Pokemon.belongsTo(TrainerPokedex, {
  foreignKey: "trainer_pokedex_id",
});
// ------

// ------
// TrainerPokedex has many TrainerParty
TrainerPokedex.hasMany(TrainerParty, {
  foreignKey: "trainer_pokedex_id",
});

// TrainerParty belongs to TrainerPokedex
TrainerParty.belongsTo(TrainerPokedex, {
  foreignKey: "trainer_pokedex_id",
});
// ------

// ------
// Trainer has one Trainer Pokedex
Trainer.hasOne(TrainerPokedex, {
  foreignKey: "trainer_id",
});

// TrainerPokedex belongs to Trainer
TrainerPokedex.belongsTo(Trainer, {
    foreignKey: "trainer_id",
  });
// ------

// ------
// Trainer can have many TrainerParties
Trainer.hasMany(TrainerParty, {
  foreignKey: "trainer_id",
});

// TrainerParty belongs to Trainer
TrainerParty.belongsTo(Trainer, {
  foreignKey: "trainer_id",
});
// ------

module.exports = {
  Pokedex,
  Pokemon,
  Trainer,
  TrainerParty,
  TrainerPokedex,
};

// This was the many to many relationship party I think i've managed to remove
// // Pokemon belongs to many TrainerParty through TrainerPartyPokemon
// Pokemon.belongsToMany(TrainerParty, {
//   through: TrainerPartyPokemon,
//   foreignKey: "trainer_party_id",
// });

// // TrainerParty belongs to many Pokemon through TrainerPartyPokemon
// TrainerParty.belongsToMany(Pokemon, {
//   through: TrainerPartyPokemon,
//   foreignKey: "pokemon_id",
// });
