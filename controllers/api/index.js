const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const trainerPokemonRoutes = require('./trainerPokemonRoutes');

router.use('/trainer', trainerRoutes);
router.use('/trainerPokedex', trainerPokemonRoutes);

module.exports = router;