//-- importing 'express' framework --//
const router = require("express").Router();

//-- requiring the route files --//
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboardRoutes");
const homeRoutes = require("./homeRoutes");
const pokedexRoutes = require("./pokedexRoutes");
const battleRoute = require("./battleRoute");
const trainerPokedexRoutes = require("./trainerPokedexRoutes");

//--- defining URL paths ---//
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/pokedex", pokedexRoutes);
router.use("/trainersPokedex", trainerPokedexRoutes);
router.use("/", homeRoutes);
router.use("/battle", battleRoute);

module.exports = router;
