const { TrainerPokemon } = require("../models");

const trainerPokemonData = [
  {
    trainer_id: 1,
    pokemon_id: 2,
  },
  {
    trainer_id: 1,
    pokemon_id: 5,
  },
  {
    trainer_id: 1,
    pokemon_id: 4,
  },
  {
    trainer_id: 1,
    pokemon_id: 1,
  },
  {
    trainer_id: 1,
    pokemon_id: 3,
  },
  {
    trainer_id: 1,
    pokemon_id: 10,
  },
  {
    trainer_id: 2,
    pokemon_id: 21,
  },
  {
    trainer_id: 2,
    pokemon_id: 15,
  },
  {
    trainer_id: 2,
    pokemon_id: 4,
  },
  {
    trainer_id: 2,
    pokemon_id: 11,
  },
  {
    trainer_id: 2,
    pokemon_id: 14,
  },
  {
    trainer_id: 2,
    pokemon_id: 24,
  },
];

const seedTrainerPokemonData = () => TrainerPokemon.bulkCreate(trainerPokemonData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedTrainerPokemonData;
