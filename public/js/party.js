var removeBtn = document.querySelectorAll('.remove-pokemon');
var savePartyBtn = document.getElementById('save-party');
var partyPokemon = document.querySelectorAll('.party-name');
var pokedex = document.getElementById('trainer-pokedex');

// Save party event 
function saveParty() {
    // get list of party pokemon names

    party = []

    partyPokemon.forEach(pokemon => {
        party.push(pokemon.innerHTML)
    })       

    console.log(party)

    // make put request
}


// Event Listeners
savePartyBtn.addEventListener('click', saveParty);