const router = require('express').Router();
const { Pokemon, TrainerPokemon, Trainer }= require('../models');


//-- GET req for all trainer pokemons --//
router.get('/', async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        const trainerData = await Trainer.findOne( {where: { id: req.session.user_id },
            include: [
                {
                    model: Pokemon,
                },
            ]
        });

        const trainer = trainerData.get({ plain: true });
        
        const pokemonData = await Pokemon.findAll();
        const pokedex = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

        // console.log(trainerData.pokemons)

        // Assign is caught attribute to each pokemon that has been found by the trainer
        pokedex.forEach(pokemon => {
             if (trainerData.pokemons.some(trainerPokemon => trainerPokemon.id === pokemon.id)) {
                console.log(`found ${pokemon.id}`)
                pokemon.is_caught = true
                pokemon.trainers_id = req.session.user_id
             } else {
                pokemon.is_caught = false
             }
            })
        
        trainer.pokedex = pokedex
        // console.log(trainer)

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

