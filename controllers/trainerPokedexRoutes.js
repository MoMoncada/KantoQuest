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

