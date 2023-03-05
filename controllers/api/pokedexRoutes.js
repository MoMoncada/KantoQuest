const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Pokedex, Pokemon } = require('../../models');
//TODO: no withAuth as I believe you will be allowed to see the Pokedex withouth login in



//-- GET req for pokedex --//
router.get('/pokedex', async (req,res) => {
    console.log('Pokedex here');
    try {
        //TODO: I believe this is the only req we need as the info by :id is in the pokemonRoutes .js file
        // //Pokedex entries  
        // const pokedexData = await Pokedex.findAll({
        //     include[{model: Pokemon}],
        // });
        // return res.json(pokedexData);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'No Pokedex found here!'});
    }
});


module.exports = router;


