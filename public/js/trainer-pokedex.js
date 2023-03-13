const delPokemonBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const pokemon_id = event.target.getAttribute("data-pokemon-id");
    const button = event.target;
    button.disabled = true; // disable button to prevent multiple clicks

    // Count the number of Pokemon in the list
    const pokemonList = document.querySelectorAll(".remove-pokemon");
    const pokemonCount = pokemonList.length;

    if (pokemonCount === 1) {
      alert("You cannot remove the last Pokemon on your list.");
      button.disabled = false;
      return;
    }

    const response = await fetch(`/api/trainerPokedex/remove/${id}`, {
      method: "PUT",
      body: JSON.stringify({ pokemon_id }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Error removing from your party.");
      button.disabled = false; // re-enable button if there's an error
    }
  }
};

document.querySelectorAll(".remove-pokemon").forEach((delPokemon) => {
  delPokemon.addEventListener("click", delPokemonBtnHandler);
});

function filterPokemon() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('pokedex-search');
  filter = input.value.toUpperCase();
  ul = document.getElementById("trainer-pokedex");
  li = ul.getElementsByTagName('li')

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('h5');
    txtValue = a[0].textContent;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function filterCaughtPokemon() {
   
    // Declare variables
    var input, ul, li, a, i, txtValue;
    input = document.getElementById('caught-pokemon')
    ul = document.getElementById("trainer-pokedex");
    li = ul.getElementsByTagName('li')
    
    if (input.checked === true) {
    // Loop through all list items, and hide those who don't match the search query
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('h5');
        txtValue = a[0].textContent;
        if (txtValue === '???') {
          li[i].style.display = "none";
        } else {
          li[i].style.display = "";
        }
      }
      return
      } else {
        console.log('hello')
        for (i = 0; i < li.length; i++) {
          li[i].style.display = "";
      }
    }
}







const addPokemonBtnHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    const pokemon_id = event.target.getAttribute("data-pokemon-id");
    const partyBox = document.getElementById("party-box");
    if (partyBox.children.length < 6) {
      const response = await fetch(`/api/trainerPokedex/add/${id}`, {
        method: "PUT",
        body: JSON.stringify({ pokemon_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert("Error adding to your party");
      }
    } else {
      alert("You already have 6 pokemon in your party!");
    }
  }
};


document.querySelectorAll(".add-pokemon").forEach((addPokemon) => {
  addPokemon.addEventListener("click", addPokemonBtnHandler);
});