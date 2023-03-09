var removeBtn = document.querySelectorAll('.remove-pokemon');
var savePartyBtn = document.getElementById('save-party');
var partyPokemon = document.querySelectorAll('.party-img');
var pokedex = document.getElementById('trainer-pokedex');

function findID(imgURL) {
    return imgURL.replace(/[^0-9]/g, '');
}

// Save party event 
function saveParty() {
    // get list of party pokemon names

    party = []
    partyPokemon.forEach(pokemon => {
        // get ID from img
        party.push(findID(pokemon.src))
    })       

    console.log(party)

    // Make put request


}

// Event Listeners
savePartyBtn.addEventListener('click', saveParty);