function selectPokemon() {
    const yourPokemonImg = document.getElementById("your-pokemon");
    yourPokemonImg.src = this.src;
  }
  
  const myPartyPokemonImgs = document.querySelectorAll("#my-party");
  
  myPartyPokemonImgs.forEach(pokemonImg => {
    pokemonImg.addEventListener("click", selectPokemon);
  });
  