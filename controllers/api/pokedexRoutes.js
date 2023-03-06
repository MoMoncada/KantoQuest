const router = require('express').Router();
const { Pokedex }= require('../../models');
const { request } = require('express');





//-- GET req for all pokemons --//
router.get('/', async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        const pokemonData = await Pokedex.findAll();
        res.status(200).json(pokemonData);
    } catch (err) {
        console.log(err);
        res.status(500).json({message:'No Pokemons found in this region'})
    }
});


//-- GET req for a pokemon by :id --//
router.get('/:id', async (req, res) => {
    console.log('GET req for a single pokemon is working');
    try {
        const pokemonData = await Pokedex.findByPk(req.params.id);
        if (!pokemonData) {
            res.status(404).json({message: 'This Pokemon is not available in this region'});
        } else {
            res.status(200).json(pokemonData);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'This pokemon is not available in this region!'})
    }
});


module.exports = router;

