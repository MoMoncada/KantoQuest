const sequelize = require("../config/connection");
const {
  Pokedex,
  Trainer,
  TrainerParty,
  TrainerPokedex,
} = require("../models");

const trainerData = require("./userTestData.json");
const seedPokemon = require("./pokemon-seeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Working
  const trainers = await Trainer.bulkCreate(trainerData, {
    individualHooks: true,
    returning: true,
  });

  // Working
  const pokemon = await seedPokemon();

  process.exit(0);
};

seedDatabase();
