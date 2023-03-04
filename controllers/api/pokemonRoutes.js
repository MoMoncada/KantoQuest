const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Pokemon }= require('../../models');
const { request } = require('express');

//-- GET req for all pokemons --//
router.get('/pokemon', withAuth, async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        //TODO: unmcomment when needed
        // const pokemonData = await Pokemon.findAll();
        // request.statusCode(200).json(pokemonData);
    } catch (err) {
        console.log(err);
        request.status(500).json({message:''})
    }
});


//-- GET req for a pokemon by :id --//
router.get('/pokemons/:id', withAuth, async (req, res) => {
    console.log('GET req for a single pokemon is working');
    try {
        //TODO: uncomment when needed and check parameters
        // const pokemonData = await Pokemon.findOne(req.params.id);
        // if (!pokemonData) {
        //     res.status(404).json({message: 'This Pokemon is not available in this region'});
        // } else {
        //     res.status(200).json(pokemonData);
        // }
    } catch {
        console.error(err);
        res.status(500).json({ message: 'This pokemon is not available in this region!'})
    }
});


module.exports = router;