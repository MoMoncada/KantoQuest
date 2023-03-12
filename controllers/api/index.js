//-- requiring the route files --//
const router = require("express").Router();
const trainerRoutes = require("./trainerRoutes");
const trainerPokemonRoutes = require("./trainerPokemonRoutes");
const pokemonRoutes = require("./pokemonRoutes");

//--- defining URL paths ---//
router.use("/trainer", trainerRoutes);
router.use("/trainerPokedex", trainerPokemonRoutes);
router.use("/pokemon", pokemonRoutes);

module.exports = router;
