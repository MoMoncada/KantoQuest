const sequelize = require("../config/connection");
const {
  Pokedex,
  Trainer,
  TrainerParty,
  TrainerPokedex,
} = require("../models");

const trainerData = require("./userTestData.json");
const seedPokemon = require("./pokemon-seeds");
// const seedParty = require("./party-pokemon-seeds")
const seedPokedex = require("./pokedex-seeds")



// const seedDatabase = async () => {
//   await sequelize.sync({ force: false });

//   // Working
//   const trainers = await Trainer.bulkCreate(trainerData, {
//     individualHooks: true,
//     returning: true,
//   });

//   // Working
 

//   await seedPokemon().then(async () => { await seedPokedex() })
//   // pokemon.then
//   // const pokedex = await seedPokedex();



//   // const party = await seedParty();

//   process.exit(0);
// };


const seedDatabase = async () => {
  //making sure that the tables clear every time we seed the database
  //TODO: disables foreign key constraint checks on the database server
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null);
  await sequelize.sync({ force: true });
  //TODO: re-enables foreign key constraint checks on the database server
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null);

  // Working
  const trainers = await Trainer.bulkCreate(trainerData, {
    individualHooks: true,
    returning: true,
  });

  const pokemon = await seedPokemon();
  const pokedex = await seedPokedex(pokemon);

  process.exit(0);
};


seedDatabase();
