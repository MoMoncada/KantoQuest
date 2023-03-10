const { TrainerPokemon } = require("../models");

const trainerPokemonData = [
  {
    trainer_id: 1,
    pokemon_id: 1,
    is_in_party: true,
  },
  {
    trainer_id: 1,
    pokemon_id: 2,
    is_in_party: true,
  },
  {
    trainer_id: 1,
    pokemon_id: 3,
    is_in_party: true,
  },
  {
    trainer_id: 1,
    pokemon_id: 4,
    is_in_party: true,
  },
  {
    trainer_id: 1,
    pokemon_id: 5,
  },
  {
    trainer_id: 1,
    pokemon_id: 6,
  },
  {
    trainer_id: 1,
    pokemon_id: 7,
  },
  {
    trainer_id: 1,
    pokemon_id: 8,
  },
  {
    trainer_id: 1,
    pokemon_id: 9,
  },
  {
    trainer_id: 1,
    pokemon_id: 10,
  },
  {
    trainer_id: 1,
    pokemon_id: 11,
  },
  {
    trainer_id: 1,
    pokemon_id: 12,
  },
  {
    trainer_id: 2,
    pokemon_id: 21,
    is_in_party: true,
  },
  {
    trainer_id: 2,
    pokemon_id: 22,
    is_in_party: true,
  },
  {
    trainer_id: 2,
    pokemon_id: 23,
    is_in_party: true,
  },
  {
    trainer_id: 2,
    pokemon_id: 24,
    is_in_party: true,
  },
  {
    trainer_id: 2,
    pokemon_id: 25,
  },
  {
    trainer_id: 2,
    pokemon_id: 26,
  },
  {
    trainer_id: 2,
    pokemon_id: 27,
  },
  {
    trainer_id: 2,
    pokemon_id: 28,
  },
  {
    trainer_id: 2,
    pokemon_id: 29,
  },
  {
    trainer_id: 2,
    pokemon_id: 30,
  },
  {
    trainer_id: 2,
    pokemon_id: 31,
  },
  {
    trainer_id: 2,
    pokemon_id: 32,
  },
  {
    trainer_id: 3,
    pokemon_id: 41,
    is_in_party: true,
  },
  {
    trainer_id: 3,
    pokemon_id: 42,
    is_in_party: true,
  },
  {
    trainer_id: 3,
    pokemon_id: 43,
    is_in_party: true,
  },
  {
    trainer_id: 3,
    pokemon_id: 44,
    is_in_party: true,
  },
  {
    trainer_id: 3,
    pokemon_id: 45,
  },
  {
    trainer_id: 3,
    pokemon_id: 46,
  },
  {
    trainer_id: 3,
    pokemon_id: 47,
  },
  {
    trainer_id: 3,
    pokemon_id: 48,
  },
  {
    trainer_id: 3,
    pokemon_id: 49,
  },
  {
    trainer_id: 3,
    pokemon_id: 50,
  },
  {
    trainer_id: 3,
    pokemon_id: 51,
  },
  {
    trainer_id: 3,
    pokemon_id: 52,
  },
];

const seedTrainerPokemonData = () =>
  TrainerPokemon.bulkCreate(trainerPokemonData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedTrainerPokemonData;
