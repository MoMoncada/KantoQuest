const router = require("express").Router();
const { Trainer } = require("../models");
const withAuth = require("../utils/auth");

//-- GET req to the '/' endpoint --//
router.get("/", withAuth, async (req, res) => {
  console.log("GET Dashboard req is working");
  try {
    const trainerData = await Trainer.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const trainer = trainerData.get({ plain: true });
    res.render("dashboard", {
      ...trainer,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "This is the error I want" });
  }
});

//-- TODO:  GET request :id endpoint, not sure if which one we need yet ---//

module.exports = router;
