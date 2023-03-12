function selectPokemon() {
  // Gets all the elements inside the selected Pokemon Div
  const selectedPokemonDiv = this.querySelectorAll(".my-pokemon");
  // Gets all the battle Pokemon Div elements
  const battlePokemonDiv = document.getElementById("battle-pokemon-div").querySelectorAll(".battle-pokemon");
  // Where the replacing happens
  // THIS IS HEAVILY RELIANT ON THE ORDER AND POSITIONS OF THE DIVS
  // BE CAREFUL WHEN WORKING ON CSS
  battlePokemonDiv[0].src = selectedPokemonDiv[0].src;
  // This is where the id of the pokemon is passed through
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



// Battle Function
const battle = async () => {
  try {
    const battlePokemonId = document.getElementById("battle-pokemon-div").children[1].name
    const wildPokemonId = document.getElementById("wild-pokemon").getAttribute("data-id")
    const response = await fetch(`/api/pokemon/${battlePokemonId}`, {
      method: "GET",
    });
    if (response.ok) {
      var battlePokemon = await response.json();
      // console.log(battlePokemon);
    } else {
      alert(response.statusText);
    }
    const response2 = await fetch(`/api/pokemon/${wildPokemonId}`, {
      method: "GET",
    });
    if (response2.ok) {
      var wildPokemon = await response2.json();
      // console.log(wildPokemon);
    } else {
      alert(response2.statusText);
    }
  } catch (err) {
    res.status(500).json(err);
  }
  console.log(battlePokemon);
  console.log(wildPokemon);

};
document.querySelector("#battle").addEventListener("click", battle);

