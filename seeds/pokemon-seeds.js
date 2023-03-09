const { Pokemon } = require('../models');
const Pokedex = require("Pokedex-promise-v2");
const P = new Pokedex();

async function seedPokemon() {
  const pokemonData = [];
  // create pokemonData array
  // TODO: Reduced to 25, Change when no more testing is needed
  for (let i = 1; i <= 55; i++) {
    pokemonData.push(P.getPokemonByName(i));
  }
  return Promise.all(pokemonData)
    .then((data) => {
      const pokemonArray = data.map((pokemon) => {
        
        if (pokemon.types[1]) {
          return {
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon.sprites.front_default,
            type_one: pokemon.types[0].type.name,
            type_two: pokemon.types[1].type.name,
          };
        } else {
          return {
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon.sprites.front_default,
            type_one: pokemon.types[0].type.name,
            type_two: null,
          };
        }
      });
      console.log(pokemonArray);
      return Pokemon.bulkCreate(pokemonArray, {
        individualHooks: true,
        returning: true,
      });
    });
}

// This was also being called inside our index.js.
// Only uncomment for manual testing purposes
// seedPokemon()

module.exports = seedPokemon;