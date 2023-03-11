// //TODO: this is a short idea of what we could do

// // // Get references to HTML elements -> this is kind of an idea od the elements we would need
// // const pokemon1Select = document.getElementById("pokemon1");
// // const pokemon2Select = document.getElementById("pokemon2");
// // const battleButton = document.getElementById("battle");
// // const resultElement = document.getElementById("result");

// // // Define type advantages
// // this idea is totally based on advantage only
// // const typeAdvantages = {
// //   "normal": ["fighting"],
// //   "fire": ["grass", "ice", "bug", "steel"],
// //   "water": ["fire", "ground", "rock"],
// //   "electric": ["water", "flying"],
// //   "grass": ["water", "ground", "rock"],
// //   "ice": ["grass", "ground", "flying", "dragon"],
// //   "fighting": ["normal", "ice", "rock", "dark", "steel"],
// //   "poison": ["grass", "fairy"],
// //   "ground": ["fire", "electric", "poison", "rock", "steel"],
// //   "flying": ["grass", "fighting", "bug"],
// //   "psychic": ["fighting", "poison"],
// //   "bug": ["grass", "psychic", "dark"],
// //   "rock": ["fire", "ice", "flying", "bug"],
// //   "ghost": ["psychic", "ghost"],
// //   "dragon": ["dragon"],
// //   "dark": ["psychic", "ghost"],
// //   "steel": ["ice", "rock", "fairy"],
// //   "fairy": ["fighting", "dragon", "dark"],
// // };

// // // Define the battle function
// // function battle() {
// //   // Get the selected Pokemon types
// //   const pokemon1Type = pokemon1Select.value;
// //   const pokemon2Type = pokemon2Select.value;

// //   // Determine the winner based on type advantages
// //   let winner;
// //   if (typeAdvantages[pokemon1Type]?.includes(pokemon2Type)) {
// //     winner = "Pokemon 1";
// //     typeAdvantages[pokemon1Type].push(pokemon2Type);
// //   } else if (typeAdvantages[pokemon2Type]?.includes(pokemon1Type)) {
// //     winner = "Pokemon 2";
// //     typeAdvantages[pokemon2Type].push(pokemon1Type);
// //   } else {
// //     winner = "No one";
// //   }

// //   // Display the result
// //   resultElement.textContent = `${winner} wins!`;

// //   // Log the updated type advantages for debugging purposes
// //   console.log(typeAdvantages);
// // }

// // // Add an event listener to the battle button
// // battleButton.addEventListener("click", battle);


// //TODO: I THINK THIS IS THE BETTER IDEA

// // define a type chart that specifies the type strengths and weaknesses
// const typeChart = {
//     "normal": {
//       strengths: [],
//       weaknesses: ["rock", "steel"]
//     },
//     "fire": {
//       strengths: ["grass", "ice", "bug", "steel"],
//       weaknesses: ["fire", "water", "rock", "dragon"]
//     },
//     "water": {
//       strengths: ["fire", "ground", "rock"],
//       weaknesses: ["water", "grass", "dragon"]
//     },
//     "electric": {
//       strengths: ["water", "flying"],
//       weaknesses: ["electric", "grass", "dragon"]
//     },
//     "grass": {
//       strengths: ["water", "ground", "rock"],
//       weaknesses: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"]
//     },
//     "ice": {
//       strengths: ["grass", "ground", "flying", "dragon"],
//       weaknesses: ["fire", "water", "ice", "steel"]
//     },
//     "fighting": {
//       strengths: ["normal", "ice", "rock", "dark", "steel"],
//       weaknesses: ["flying", "poison", "psychic", "bug", "fairy"]
//     },
//     "poison": {
//       strengths: ["grass", "fairy"],
//       weaknesses: ["poison", "ground", "rock", "ghost"]
//     },
//     "ground": {
//       strengths: ["fire", "electric", "poison", "rock", "steel"],
//       weaknesses: ["grass", "bug"]
//     },
//     "flying": {
//       strengths: ["grass", "fighting", "bug"],
//       weaknesses: ["electric", "rock", "steel"]
//     },
//     "psychic": {
//       strengths: ["fighting", "poison"],
//       weaknesses: ["psychic", "steel"]
//     },
//     "bug": {
//       strengths: ["grass", "psychic", "dark"],
//       weaknesses: ["fire", "flying", "rock"]
//     },
//     "rock": {
//       strengths: ["fire", "ice", "flying", "bug"],
//       weaknesses: ["fighting", "ground", "steel"]
//     },
//     "ghost": {
//       strengths: ["psychic", "ghost"],
//       weaknesses: ["dark"]
//     },
//     "dragon": {
//       strengths: ["dragon"],
//       weaknesses: ["steel", "fairy"]
//     },
//     "dark": {
//       strengths: ["psychic", "ghost"],
//       weaknesses: ["fighting", "dark", "fairy"]
//     },
//     "steel": {
//       strengths: ["ice", "rock", "fairy"],
//       weaknesses: ["fire", "water", "electric", "steel"]
//     },
//     "fairy": {
//       strengths: ["fighting", "dragon", "dark"],
//       weaknesses: ["poison", "steel"]
//     }
//   };
  
//   // define a Pokemon class with a name and a type
//   class Pokemon {
//     constructor(name, type) {
//       this.name = name;
//       this.type = type;
//     }
//   }
  
//   // define the battle function that takes two Pokemon objects as arguments
//   function pokemonBattle(pokemon1, pokemon2) {
//     // get the types of the two Pokemons
//     const type1 = pokemon1.type;
//     const type2 = pokemon2.type;
  
//     // calculate the effectiveness of type1 against type2 and vice versa
//     let effectiveness1 = 1;
//     let effectiveness2 = 1
  
  
  
  
//     // calculate the effectiveness of type1 against type2 and vice versa
//     let effectiveness1 = 1;
//     let effectiveness2 = 1;
  
//     // look up type strengths and weaknesses in the type chart
//     for (let i = 0; i < typeChart[type1].strengths.length; i++) {
//       if (typeChart[type1].strengths[i] === type2) {
//         effectiveness1 = 2;
//         break;
//       }
//     }
  
//     for (let i = 0; i < typeChart[type1].weaknesses.length; i++) {
//       if (typeChart[type1].weaknesses[i] === type2) {
//         effectiveness1 = 0.5;
//         break;
//       }
//     }
  
//     for (let i = 0; i < typeChart[type2].strengths.length; i++) {
//       if (typeChart[type2].strengths[i] === type1) {
//         effectiveness2 = 2;
//         break;
//       }
//     }
  
//     for (let i = 0; i < typeChart[type2].weaknesses.length; i++) {
//       if (typeChart[type2].weaknesses[i] === type1) {
//         effectiveness2 = 0.5;
//         break;
//       }
//     }
  
//     // calculate the damage multiplier based on the type effectiveness
//     const damageMultiplier1 = effectiveness1 * Math.random() * 0.5 + 0.5;
//     const damageMultiplier2 = effectiveness2 * Math.random() * 0.5 + 0.5;
  
//     // calculate the total damage for each Pokemon
//     const damage1 = Math.floor(Math.random() * 100) + 1 * damageMultiplier1;
//     const damage2 = Math.floor(Math.random() * 100) + 1 * damageMultiplier2;
  
//     // determine the winner of the battle based on the total damage
//     let winner;
//     if (damage1 > damage2) {
//       winner = pokemon1.name;
//     } else if (damage1 < damage2) {
//       winner = pokemon2.name;
//     } else {
//       winner = "tie";
//     }
  
//     // return the winner and the damage information
//     return {
//       winner: winner,
//       damage1: damage1,
//       damage2: damage2,
//       effectiveness1: effectiveness1,
//       effectiveness2: effectiveness2,
//       damageMultiplier1: damageMultiplier1,
//       damageMultiplier2: damageMultiplier2
//     };
//   }
  