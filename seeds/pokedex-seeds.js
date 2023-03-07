const { Pokedex } = require('../models');

const pokedexData = [
    {
        trainer_id: 1,
        pokemon_id: 2
    },
    {
        trainer_id: 1,
        pokemon_id: 5
    },
    {
        trainer_id: 1,
        pokemon_id: 4
    },
    {
        trainer_id: 1,
        pokemon_id: 1
    },
    {
        trainer_id: 1,
        pokemon_id: 3
    },
];

const seedPokedexData = () => Pokedex.bulkCreate(pokedexData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedPokedexData;