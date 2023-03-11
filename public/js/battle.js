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
