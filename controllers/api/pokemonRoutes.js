const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Pokemon } = require("../../models");

//-- GET route for getting a single Pokemons data --//
router.get('/:id', withAuth, async (req, res) => {
    console.log('Pokemons GET route is working');
    try {
        const pokemonData = await Pokemon.findOne({ where: { id: req.params.id} });
        res.status(200).json(pokemonData);
    } catch (err) {
        console.log(err);
        res.status(500).json({message:'Err'})
    }
});

module.exports = router;
