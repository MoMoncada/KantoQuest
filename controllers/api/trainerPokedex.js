const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Pokedex, Trainer, Pokemon }= require('../../models');

// --- Post Route for adding a pokemon to the trainerPokedex
router.post("/", async (req, res) => {
    console.log("Post Route for adding a pokemon!");
    try {
        const newPokemonData = await Pokedex.create({
            trainer_id: req.body.trainer_id,
            pokemon_id: req.body.pokemon_id
        });
        res.status(200).json(newPokemonData);
    } catch (err) {
        res.status(500).json(err)
    }
})


//-- GET req for all trainer pokedex --//
// TODO: Doesn't work, pokemon data isnt shown, seems new table in being created?????
router.get('/', async (req, res) => {
    console.log('Every Trainers Pokemon here');
    try {
        const PokemonData = await Pokedex.findAll({
            include: Trainer,
            include: Pokemon,
        })
        res.status(200).json(PokemonData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//-- GET req for trainer pokedex by :id --//
router.get('/:id', withAuth, async (req, res) => {
    console.log('Pokedex by :id is working');
    try {
        //TODO: uncomment when needed
        // const trainerPokedex = await TrainerPokedex.findOne(req.params.id);
        // if(!trainerPokedex) {
        //     res.status(404).json({message: 'No trainer Pokedex found with this id!'});
        //     return;
        // }
        // res.status(200).json(trainerPokedex);
    } catch (err) {
        res.status(500).json(err);
    }
});


//--  PUT req for trainer pokedex by :id --//
router.put('/:id', withAuth, async (req, res) => {
    console.log('Pokedex by :id is working');
    try{
        //TODO: uncomment when needed
        // const trainerPokedex = await TrainerPokedex.update(
        //     {
        //         //TODO: properties to update
        //     }
        // );
        // if (!trainerPokedex) {
        //     res.status(404).json({message: 'No Pokedex found under this id!'});
        //     return;
        // }
        // res.json(trainerPokedex);       
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


//-- DELETE req for trainer pokedex by :id --//
router.delete('/:id', withAuth, async (req, res) => {
    console.log('Im deleting this pokedex!');
    try{
        //TODO: uncomment when needed and check parameters
        // const trainerPokedexData = await TrainerPokedex.destroy({
        //     where: { id: req.params.id}
        // });
        // if (!trainerPokedexData) {
        //     res.status(404).json({ message: 'No pokedex found under this id'});
        //     return;
        // }
        // res.json(trainerPokedexData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}); 


module.exports = router;