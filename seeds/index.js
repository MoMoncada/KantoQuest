const sequelize = require("../config/connection");
const { Pokedex, User, Party, Pokemon, Pokedex_pokemon, Party_pokemon } = require("../models");


// ------ This is all for testing purposes ------
const userData = require("./userTestData.json");
const pokemonData = require("./pokemonTestData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const pokemon = await Pokemon.bulkCreate(pokemonData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
