const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const trainerPokedexRoutes = require('./trainerPokedex');

router.use('/trainer', trainerRoutes);
router.use('/trainerPokedex', trainerPokedexRoutes);

module.exports = router;