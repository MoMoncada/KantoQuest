const { TrainerPokedex } = require('../models');

const trainerPokedexData = [
    {
        trainer_id: 1,
        pokedex_id: 2
    },
    {
        trainer_id: 3,
        pokedex_id: 5
    },
    {
        trainer_id: 3,
        pokedex_id: 4
    },
    {
        trainer_id: 2,
        pokedex_id: 1
    },
    {
        trainer_id: 1,
        pokedex_id:3
    },
];

const seedTrainerPokedexData = () => TrainerPokedex.bulkCreate(trainerPokedexData);

module.exports = seedTrainerPokedexData;