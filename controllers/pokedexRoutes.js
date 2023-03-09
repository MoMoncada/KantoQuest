const router = require('express').Router();
const { Pokemon }= require('../models');

//-- GET req for all pokemons --//
router.get('/', async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        const pokemonData = await Pokemon.findAll();
        const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

        res.render('trainer-pokedex', { 
            pokemons,
            logged_in: req.session.logged_in,
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({message:'No Pokemons found in this region'})
    }
});

//-- GET req for a pokemon by :id --//
// TODO: This route isn't needed currently
// router.get('/:id', async (req, res) => {
//     console.log('GET req for a single pokemon is working');
//     try {
//         const pokemonData = await Pokedex.findByPk(req.params.id);
//         if (!pokemonData) {
//             res.status(404).json({message: 'This Pokemon is not available in this region'});
//         } else {
//             res.status(200).json(pokemonData);
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'This pokemon is not available in this region!'})
//     }
// });

module.exports = router;

