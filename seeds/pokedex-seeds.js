const { Pokedex } = require("../models");

const pokedexData = [
  {
    trainer_id: 1,
    pokemon_id: 2,
    is_in_party: false,
  },
  {
    trainer_id: 1,
    pokemon_id: 5,
    is_in_party: false,
  },
  {
    trainer_id: 1,
    pokemon_id: 4,
    is_in_party: false,
  },
  {
    trainer_id: 1,
    pokemon_id: 1,
    is_in_party: false,
  },
  {
    trainer_id: 1,
    pokemon_id: 3,
    is_in_party: false,
  },
  {
    trainer_id: 1,
    pokemon_id: 10,
    is_in_party: false,
  },
];

const seedPokedexData = () => Pokedex.bulkCreate(pokedexData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedPokedexData;
