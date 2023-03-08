//-- importing 'express' framework --//
const router = require("express").Router();

//-- requiring the route files --//
const apiRoutes = require("./api/");
const dashboardRoutes = require("./dashboardRoutes");
const homeRoutes = require("./homeRoutes");

router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/", homeRoutes);

module.exports = router;
