const router = require('express').Router();
const pokedexRoutes = require('./pokedexRoutes');
const pokemonRoutes = require('./pokemonRoutes');
const trainerRoutes = require('./trainerRoutes');
const trainerPartyRoutes = require('./trainerPartyRoutes');
const trainerPokedexRoutes = require('./trainerPokedex');


router.use('/pokedex');
router.use('/pokemon');
router.use('/trainer');
router.use('/trainerParty');
router.use('/trainerPokedex');



module.exports = router;