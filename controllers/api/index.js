const router = require('express').Router();
const pokedexRoutes = require('./pokedexRoutes');
const trainerRoutes = require('./trainerRoutes');
const trainerPartyRoutes = require('./trainerPartyRoutes');
const trainerPokedexRoutes = require('./trainerPokedex');


router.use('/pokemon', pokedexRoutes);
router.use('/trainer', trainerRoutes);
router.use('/trainerParty', trainerPartyRoutes);
router.use('/trainerPokedex', trainerPokedexRoutes);



module.exports = router;