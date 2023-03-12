//-- Importing Sequelize connection --//
const sequelize = require("../config/connection");

//-- functions that seed data into the database --//
const seedTrainerData = require("./trainer-seeds");
const seedPokemon = require("./pokemon-seeds");
const seedTrainerPokemonData = require("./trainer-pokemon-seeds");

//-- async function to seed the database --//
const seedDatabase = async () => {
  
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
  await sequelize.sync({ force: true });
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);

  await seedTrainerData();

  const pokemon = await seedPokemon();

  await seedTrainerPokemonData(pokemon);

  process.exit(0);
};

seedDatabase();
