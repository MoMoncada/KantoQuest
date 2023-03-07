const Pdex = require("Pokedex-promise-v2");
const Pokemon = require("../models/Pokemon");

const P = new Pdex();

const pokemonArray = [];

function createPokemon(data) {
  // When creating a new Pokemon checks if it has two types or not and runs the correct code
  if (data.types[1]) {
    const pokemon = {
      // id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      type_one: data.types[0].type.name,
      type_two: data.types[1].type.name,
    };
    return pokemonArray.push(pokemon);
  } else {
    const pokemon = {
      // id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      type_one: data.types[0].type.name,
      type_two: null,
    };
    return pokemonArray.push(pokemon);
  }
}

async function seedPokemon() {
  const pokemonData = [];
  // create pokemonData array
  // TODO: Reduced to 10, Change when no more testing is needed
  for (let i = 1; i <= 10; i++) {
    pokemonData.push(P.getPokemonByName(i));
  }
  return Promise.all(pokemonData)
    .then((data) => {
      data.forEach((pokemon) => {
        createPokemon(pokemon);
      });
      return pokemonArray;
    })
    .then((pokemonArray) => {
      console.log(pokemonArray);
      Pokemon.bulkCreate(pokemonArray, {
        individualHooks: true,
        returning: true,
      });
     
    });
}

seedPokemon()

module.exports = seedPokemon;