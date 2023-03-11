// var removeBtn = document.querySelectorAll('.remove-pokemon');
// var savePartyBtn = document.getElementById('save-party');
// var partyPokemon = document.querySelectorAll('.party-img');
// var pokedex = document.getElementById('trainer-pokedex');

// function findID(imgURL) {
//     return imgURL.replace(/[^0-9]/g, '');
// }

// // Save party event 
// function saveParty() {
//     // get list of party pokemon names

//     party = []
//     partyPokemon.forEach(pokemon => {
//         // get ID from img
//         party.push(findID(pokemon.src))
//     })       

//     console.log(party)

//     // Make put request


// }

// // Event Listeners
// savePartyBtn.addEventListener('click', saveParty);



// Func for Removing from Party
const delPokemonBtnHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const pokemon_id = event.target.getAttribute("data-pokemon-id");
      const response = await fetch(`/api/trainerPokedex/remove/${id}`, {
        method: "PUT",
        body: JSON.stringify({ pokemon_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert("Error removing from party: " + response);
      }
    }
  };

document.querySelectorAll(".remove-pokemon").forEach((delPokemon) => {
    delPokemon.addEventListener("click", delPokemonBtnHandler);
  });


// Func for Adding to the Party

const addPokemonBtnHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const pokemon_id = event.target.getAttribute("data-pokemon-id");
      const response = await fetch(`/api/trainerPokedex/add/${id}`, {
        method: "PUT",
        body: JSON.stringify({ pokemon_id }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.reload();
      } else {
        alert("Error adding to party: " + response);
      }
    }
  };

document.querySelectorAll(".add-pokemon").forEach((addPokemon) => {
    addPokemon.addEventListener("click", addPokemonBtnHandler);
  });
  