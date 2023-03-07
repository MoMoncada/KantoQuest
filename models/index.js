const Pokedex = require("./Pokemon");
const Trainer = require("./Trainer");
const TrainerParty = require("./TrainerParty");
const TrainerPokedex = require("./Pokedex");
const PartyPokemon = require("./PartyPokemon")


//Trainers - Pokemon
Trainer.belongsToMany(Pokedex, {
  through: TrainerPokedex
})

Pokedex.belongsToMany(Trainer, {
  through: TrainerPokedex
})

// Trainer - Party
Trainer.hasOne(TrainerParty, {
  foreignKey: 'trainer_id',
  onDelete: 'CASCADE'
})

TrainerParty.belongsTo(Trainer, {
  foreignKey: 'trainer_id'
})

// Party - Pokemon
TrainerParty.belongsToMany(Pokedex, {
  through: PartyPokemon
})

Pokedex.belongsToMany(TrainerParty, {
  through: PartyPokemon
})

// ------
// TrainerPokedex has many Pokemon
// TrainerPokedex.hasMany(Pokedex, {
//   foreignKey: "trainer_pokedex_id",
// });

// // Pokemon belongs to TrainerPokedex
// Pokedex.belongsTo(TrainerPokedex, {
//   foreignKey: "trainer_pokedex_id",
// });
// ------

// ------
// TrainerPokedex has many TrainerParty
// TrainerPokedex.hasMany(TrainerParty, {
//   foreignKey: "trainer_pokedex_id",
// });

// // TrainerParty belongs to TrainerPokedex
// TrainerParty.belongsTo(TrainerPokedex, {
//   foreignKey: "trainer_pokedex_id",
// });
// ------

// ------
// Trainer has one Trainer Pokedex
// Trainer.hasOne(TrainerPokedex, {
//   foreignKey: "trainer_id",
// });

// // TrainerPokedex belongs to Trainer
// TrainerPokedex.belongsTo(Trainer, {
//     foreignKey: "trainer_id",
//   });
// // ------

// // ------
// // Trainer can have many TrainerParties
// Trainer.hasMany(TrainerParty, {
//   foreignKey: "trainer_id",
// });

// // TrainerParty belongs to Trainer
// TrainerParty.belongsTo(Trainer, {
//   foreignKey: "trainer_id",
// });
// ------

module.exports = {
  Pokedex,
  Trainer,
  TrainerParty,
  TrainerPokedex,
  PartyPokemon
};
