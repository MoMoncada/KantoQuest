//--- Strength and weakness relationships between Pokemon types ---//
const pokeTypes = {
  normal: { strength: [], weakness: ["fighting"] },
  fighting: { strength: ["normal", "ice", "rock", "dark", "steel"], weakness: ["flying", "psychic","fairy"] },
  flying: { strength: ["grass", "fighting", "bug"], weakness: ["rock", "ice", "electric"] },
  poison: { strength: ["grass", "fairy"], weakness: ["ground", "psychic"] },
  ground: { strength: ["fire", "electric", "poison", "rock", "steel"], weakness: ["water", "grass", "ice"] },
  rock: { strength: ["fire", "ice", "flying", "bug"], weakness: ["water", "grass", "fighting", "ground", "steel"] },
  bug: { strength: ["grass", "psychic", "dark"], weakness: ["fire", "flying", "rock"] },
  ghost: { strength: ["psychic", "ghost"], weakness: ["ghost", "dark"] },
  steel: { strength: ["ice", "rock", "fairy"], weakness: ["fire", "fighting", "ground"] },
  fire: { strength: ["grass", "ice", "bug", "steel"], weakness: ["water", "ground", "rock"] },
  water: { strength: ["fire", "ground", "rock"], weakness: ["electric", "grass"] },
  grass: { strength: ["water", "ground", "rock"], weakness: ["fire", "ice", "poison", "flying", "bug"] },
  electric: { strength: ["water", "flying"], weakness: ["ground"] },
  psychic: { strength: ["fighting", "poison"], weakness: ["bug", "ghost", "dark"] },
  ice: { strength: ["grass", "ground", "flying", "dragon"], weakness: ["fire", "fighting", "rock", "steel"] },
  dragon: { strength: ["dragon"], weakness: ["ice", "dragon", "fairy"] },
  dark: { strength: ["psychic", "ghost"], weakness: ["fighting", "bug", "fairy"] },
  fairy: { strength: ["fighting", "dragon", "dark"], weakness: ["poison", "steel"] }
};

//-- Function for displaying the battling pokemon --//
function selectPokemon() {
  const selectedPokemonDiv = this.querySelectorAll(".my-pokemon");
  //-- Gets all the battle Pokemon Div elements --//
  const battlePokemonDiv = document.getElementById("battle-pokemon-div").querySelectorAll(".battle-pokemon");
  //-- Where the replacing happens --//
  //-- THIS IS HEAVILY RELIANT ON THE ORDER AND POSITIONS OF THE DIVS --//
  //-- BE CAREFUL WHEN WORKING ON CSS --//
  battlePokemonDiv[0].src = selectedPokemonDiv[0].src;
  //-- This is where the id of the pokemon is passed through --//
  battlePokemonDiv[0].name = selectedPokemonDiv[0].name;
  battlePokemonDiv[1].innerHTML = selectedPokemonDiv[1].innerHTML;
  battlePokemonDiv[2].className = "center pkn-type battle-pokemon";
  battlePokemonDiv[3].className = "center pkn-type battle-pokemon";
  battlePokemonDiv[2].classList.add(selectedPokemonDiv[2].innerHTML);
  if (selectedPokemonDiv[3] === undefined) {
    battlePokemonDiv[3].classList.remove("pkn-type");
  } else {
    battlePokemonDiv[3].classList.add(selectedPokemonDiv[3].innerHTML);
  }
}

const myPartyPokemon = document.querySelectorAll(".my-pokemon-div");
myPartyPokemon.forEach((pokemon) => {
  pokemon.addEventListener("click", selectPokemon);
});

//--- Battle Function ---//
const battle = async () => {
  try {
    // Gets the Id of the battling Pokemon --//
    const battlePokemonId = document.getElementById("battle-pokemon-div").children[1].name;
    //-- Gets the Id of the wild Pokemon --//
    const wildPokemonId = document.getElementById("wild-pokemon").getAttribute("data-id");
    const response = await fetch(`/api/pokemon/${battlePokemonId}`, {
      method: "GET",
    });
    //-- Retrieving the data of the battling pokemon --//
    if (response.ok) {
      var battlePokemon = await response.json();
    } else {
      alert("Please select a Pokemon to battle!");
      return;
    }
    //-- Retrieving the data of the wild pokemon --//
    const response2 = await fetch(`/api/pokemon/${wildPokemonId}`, {
      method: "GET",
    });
    if (response2.ok) {
      var wildPokemon = await response2.json();
    } else {
      alert(response2.statusText);
      return;
    }

    //-- Compare types and choose a winner --//
    const battlePokemonTypeOne = battlePokemon.type_one;
    const battlePokemonTypeTwo = battlePokemon.type_two;
    const wildPokemonTypeOne = wildPokemon.type_one;
    const wildPokemonTypeTwo = wildPokemon.type_two;
    let winner;

    //-- Check strength and weakness of first types --//
    if (pokeTypes[battlePokemonTypeOne].strength.includes(wildPokemonTypeOne)) {
      winner = battlePokemon;
    } else if (pokeTypes[wildPokemonTypeOne].strength.includes(battlePokemonTypeOne)) {
      winner = wildPokemon;
    } else if (pokeTypes[battlePokemonTypeOne].weakness.includes(wildPokemonTypeOne)) {
      winner = wildPokemon;
    } else if (pokeTypes[wildPokemonTypeOne].weakness.includes(battlePokemonTypeOne)) {
      winner = battlePokemon;
    } else {

      //-- If types are the same or not defined in the type chart, check the second types --//
      if (battlePokemonTypeTwo && wildPokemonTypeTwo) {
        //-- Check strength and weakness of second types if they exist--/
        if (pokeTypes[battlePokemonTypeTwo].strength.includes(wildPokemonTypeTwo)) {
          winner = battlePokemon;
        } else if (pokeTypes[wildPokemonTypeTwo].strength.includes(battlePokemonTypeTwo)) {
          winner = wildPokemon;
        } else if (pokeTypes[battlePokemonTypeTwo].weakness.includes(wildPokemonTypeTwo)) {
          winner = wildPokemon;
        } else if (pokeTypes[wildPokemonTypeTwo].weakness.includes(battlePokemonTypeTwo)) {
          winner = battlePokemon;
        }
      }
      //-- If one or both Pokémon don't have a second type, choose a random winner --//
      if (!winner) {
        winner = Math.random() < 0.5 ? battlePokemon : wildPokemon;
      }
    };

    if (winner === battlePokemon) {
      //-- Add pokemon to trainerPokedex --//
      const pokemon_id = wildPokemon.id
      const response = await fetch("/api/trainerPokedex", {
        method: "POST",
        body: JSON.stringify({ pokemon_id }),
        headers: { "Content-Type": "application/json" },
      })
      if (response.ok) {
        console.log("Pokemon added");
        //-- Gets the trainer data to add the score to it --//
        const response2 = await fetch(`/api/trainer`, {
          method: "GET",
        });
        if (response2.ok) {
          console.log("Trainer score GET");
          var trainerData = await response2.json();
          var old_score = await trainerData.total_score
          const total_score = old_score + 10
          //-- Puts the new score in the trainer --//
          const response3 = await fetch("/api/trainer", {
            method: "PUT",
            body: JSON.stringify({ total_score }),
            headers: { "Content-Type": "application/json" },
          })
          if (response3.ok) {
          console.log("Trainer score added");
        }
        } else {
          alert(response.statusText);
          return;
        }
        alert("Congrations! You have successfully caught the Pokemon!\nYou have gained 10 points!")
        document.location.reload();
      } else {
        console.log("Not successful addition");
      }
    } else {
        //-- PUT request to reset the score --//
        const total_score = 0
        const response = await fetch("/api/trainer", {
          method: "PUT",
          body: JSON.stringify({ total_score }),
          headers: { "Content-Type": "application/json" },
        })
        if (response.ok) {
        console.log("Trainer score removed");
      alert("You Lost!\nYour Streak has been reset to 0")
      }}

  } catch (err) {
    console.log(err);
  }
};

document.querySelector("#battle").addEventListener("click", battle);
