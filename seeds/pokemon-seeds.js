const { Pokemon } = require("../models");
const Pokedex = require("pokedex-promise-v2");
const P = new Pokedex();

async function seedPokemon() {

  //-- Creating our Pokemon array from PokeAPI --//
  const pokemonData = [];
  for (let i = 1; i <= 151; i++) {
    pokemonData.push(P.getPokemonByName(i));
  }
  return Promise.all(pokemonData).then((data) => {
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



module.exports = seedPokemon;
