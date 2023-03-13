//-- Prompts the user to select a starter Pokemon --//
const starterPokemonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const pokemon_id = event.target.getAttribute("data-pokemon-id");
    const response = await fetch(`/api/trainerPokedex/starteradd/${id}`, {
      method: "POST",
      body: JSON.stringify({ pokemon_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Error adding to pokedex: " + response);
    }
  } else {
    alert("Error adding your starter pokemon");
  }
};

document.querySelectorAll(".starter-pokemon").forEach((Pokemon) => {
  Pokemon.addEventListener("click", starterPokemonHandler);
});
