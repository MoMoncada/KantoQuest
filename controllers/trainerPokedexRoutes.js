const router = require('express').Router();
const { Pokemon, Trainer }= require('../models');
const withAuth = require("../utils/auth");



//-- GET req for all Pokemon belonging to a trainer --//
router.get('/', withAuth, async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        const trainerData = await Trainer.findOne( {
            attributes: { exclude: ['password'] },
            where: { id: req.session.user_id },
            include: [
                {
                    model: Pokemon,
                },
            ]
        });

        const trainer = trainerData.get({ plain: true }); //-- trainer data to js --//
        
        const pokemonData = await Pokemon.findAll();
        const pokedex = pokemonData.map((pokemon) => pokemon.get({ plain: true })); //-- converts the pokemonData to a js object --//

        
        //-- Assign "is_ caught" attribute to each pokemon that has been found by the trainer --//
        pokedex.forEach(pokemon => {
             if (trainerData.pokemons.some(trainerPokemon => trainerPokemon.id === pokemon.id)) {
                console.log(`found ${pokemon.id}`)
                pokemon.is_caught = true
                pokemon.trainers_id = req.session.user_id
             } else {
                pokemon.is_caught = false
             }
            })
        
        //-- Adding the caught Pokemon to the trainer's list of Pokemon --//
        trainer.pokedex = pokedex
        
        res.render('trainer-pokedex', { 
            ...trainer,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({message:'Catch Error'})
    }
});
   
module.exports = router;

