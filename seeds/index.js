const sequelize = require("../config/connection");
const {
  Pokedex,
  Pokemon,
  Trainer,
  TrainerParty,
  TrainerPokedex,
} = require("../models");

const trainerData = require("./userTestData.json");
const seedPokemon = require("./pokemon-seeds");
const seedParty = require("./party-pokemon-seeds")
const seedPokedex = require("./pokedex-seeds")



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Working
  const trainers = await Trainer.bulkCreate(trainerData, {
    individualHooks: true,
    returning: true,
  });

  // Working
  const pokemon = await seedPokemon();
  const pokedex = await seedPokedex();
  const party = await seedParty();

  process.exit(0);
};

seedDatabase();
