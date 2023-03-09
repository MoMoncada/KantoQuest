const router = require('express').Router();
const {Trainer, Pokemon, TrainerPokemon} = require('../models');

//-- GET req for battle page --//
router.get('/', async (req, res) => {
    console.log('Your battle page is working!');
    try {
        res.render("battle", {
          
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

    module.exports = router;