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
// const seedParty = require("./party-pokemon-seeds")
const seedPokedex = require("./pokedex-seeds")



const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  // Working
  const trainers = await Trainer.bulkCreate(trainerData, {
    individualHooks: true,
    returning: true,
  });

  // Working
 

  await seedPokemon().then(async () => { await seedPokedex() })
  // pokemon.then
  // const pokedex = await seedPokedex();



  // const party = await seedParty();

  process.exit(0);
};

seedDatabase();
