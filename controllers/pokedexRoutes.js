const router = require('express').Router();
const { Pokemon }= require('../models');


//-- GET req for pokedex page displaying all pokemon --//
router.get('/', async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        const pokemonData = await Pokemon.findAll();
        const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

        res.render('pokedex', { 
            pokemons,
            logged_in: req.session.logged_in,
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({message:'No Pokemons found in this region'})
    }
});


module.exports = router;

