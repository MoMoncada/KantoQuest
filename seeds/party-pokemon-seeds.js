const { PartyPokemon } = require('../models');

const partyPokemonData = [
    {
        party_id: 1,
        pokedex_id: 2
    },
    {
        party_id: 1,
        pokedex_id: 5
    },
    {
        party_id: 1,
        pokedex_id: 4
    },
    {
        party_id: 1,
        pokedex_id: 1
    },
    {
        party_id: 1,
        pokedex_id:3
    },
    {
        party_id: 1,
        pokedex_id: 9
    },
];

const seedTrainerPokedexData = () => PartyPokemon.bulkCreate(partyPokemonData);

module.exports = seedTrainerPokedexData;