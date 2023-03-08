const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const trainerPartyRoutes = require('./trainerPartyRoutes');
const trainerPokedexRoutes = require('./trainerPokedex');

router.use('/trainer', trainerRoutes);
router.use('/trainerParty', trainerPartyRoutes);
router.use('/trainerPokedex', trainerPokedexRoutes);

module.exports = router;