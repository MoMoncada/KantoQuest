
// const https = require('https');

// let i = 1
// url = 'https://pokeapi.co/api/v2/generation/1'

// window.onload = async function() {
//     getPokemon();
// }




// function getPokemon() {
//     fetch('https://pokeapi.co/api/v2/generation/1/', {
//     })
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       });
   
    // let url = "https://pokeapi.co/api/v2/pokemon/1"
    
    // fetch(url, {})
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   console.log(data);
    // })


//     let res = await fetch(url)
//     let pokemon = await res.json()

//    console.log(pokemon)
// }

// getPokemon()

// async function getPokemon() {
//     let url = "https://pokeapi.co/api/v2/pokemon/1"

//     let res = await window.fetch(url)
//     let pokemon = await res.json()

//    console.log(pokemon)
// }

// getPokemon(i)
// // Call Pokemon Api


// For each pokemon create sequelize object
 


// function getPokemon (id) { 
       
//     https.get(`https://pokeapi.co/api/v2/pokemon/${id}`, function(res) {
//     let body = "";

//     res.on("data", (chunk) => {
//         body += chunk;
//     });

//     res.on("end", () => {
//         try {
//             let json = JSON.parse(body);
//              createPokemon(json)
//             // do something with JSON
//         } catch (error) {
//             console.error(error.message);
//         };
//     });

// }).on("error", (error) => {
//     console.error(error.message);
// });

// }

const Pokedex = require("pokedex-promise-v2");
const { Pokemon } = require("../models");

const P = new Pokedex();

const pokemonArray = [];

function createPokemon(data) {
  // When creating a new Pokemon checks if it has two types or not and runs the correct code
  if (data.types[1]) {
    const pokemon = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      type_one: data.types[0].type.name,
      type_two: data.types[1].type.name,
    };
    return pokemonArray.push(pokemon);
  } else {
    const pokemon = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      type_one: data.types[0].type.name,
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
      Pokemon.bulkCreate(pokemonArray);
    //   console.log(pokemonArray);
    });
}

seedPokemon()

module.exports = seedPokemon;