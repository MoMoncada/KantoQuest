const router = require('express').Router();
const withAuth = require('../../utils/auth');
const {Trainer, Pokemon, TrainerPokemon }= require('../../models');

// --- Post Route for adding a pokemon to the trainerPokedex
// TODO: add withAuth after testing
router.post("/", async (req, res) => {
    console.log("Post Route for adding a pokemon!");
    try {
        const newPokemonData = await TrainerPokemon.create({
            // Change to req.body.trainer_id for insomnia testing
            trainer_id: req.session.user_id,
            pokemon_id: req.body.pokemon_id
        });
        res.status(200).json(newPokemonData);
    } catch (err) {
        res.status(500).json(err)
    }
})

//-- GET req for all trainer pokedex --//
router.get('/', async (req, res) => {
    console.log('Every Trainers Pokemon here');
    try {
        const PokemonData = await Trainer.findAll({
            attributes: ["username"],
            include: [
                {
                    model: Pokemon,
                    attributes: ["name"]
                },
            ]
        })
        res.status(200).json(PokemonData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//-- GET req for trainer pokedex by :id --//
router.get('/:id', async (req, res) => {
    console.log('Pokedex for Trainer by id is working');
    try {
        const PokemonData = await Trainer.findByPk(req.params.id, {
            attributes: ["username"],
            include: [
                {
                    model: Pokemon,
                    attributes: ["name"]
                },
            ]
        })
        res.status(200).json(PokemonData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//--  PUT req for trainer pokedex by :id --//
// router.put('/:id', withAuth, async (req, res) => {
//     console.log('Pokedex by :id is working');
//     try{
//         //TODO: uncomment when needed
//         // const trainerPokedex = await TrainerPokedex.update(
//         //     {
//         //         //TODO: properties to update
//         //     }
//         // );
//         // if (!trainerPokedex) {
//         //     res.status(404).json({message: 'No Pokedex found under this id!'});
//         //     return;
//         // }
//         // res.json(trainerPokedex);       
//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// });


//-- DELETE req for trainer pokedex by :id --//
// router.delete('/:id', withAuth, async (req, res) => {
//     console.log('Im deleting this pokedex!');
//     try{
//         //TODO: uncomment when needed and check parameters
//         // const trainerPokedexData = await TrainerPokedex.destroy({
//         //     where: { id: req.params.id}
//         // });
//         // if (!trainerPokedexData) {
//         //     res.status(404).json({ message: 'No pokedex found under this id'});
//         //     return;
//         // }
//         // res.json(trainerPokedexData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// }); 


module.exports = router;