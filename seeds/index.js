const sequelize = require("../config/connection");

const seedTrainerData = require("./trainer-seeds");
const seedPokemon = require("./pokemon-seeds");
const seedTrainerPokemonData = require("./trainer-pokemon-seeds");

const seedDatabase = async () => {
  //making sure that the tables clear every time we seed the database
  //Disables foreign key constraint checks on the database server
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0", null);
  await sequelize.sync({ force: true });
  //Re-enables foreign key constraint checks on the database server
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1", null);

  // Working
  await seedTrainerData();

  // Working
  const pokemon = await seedPokemon();

  // Working
  await seedTrainerPokemonData(pokemon);

  process.exit(0);
};

seedDatabase();
