const sequelize = require("../config/connection");
const { Pokedex, Pokemon, Trainer, TrainerParty, TrainerPokedex } = require("../models");


// ------ This is all for testing purposes ------
// const trainerData = require("./userTestData.json");
const pokemonData = require("./pokemon-seeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const trainers = await Trainer.bulkCreate(trainerData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  const pokemon = await Pokemon.bulkCreate(pokemonData, {
    individualHooks: true,
    returning: true,
    
  });

  process.exit(0);
};

seedDatabase();
