const router = require("express").Router();
const { Trainer, Pokemon } = require("../models");
const withAuth = require("../utils/auth");


//-- GET req for the dashboard --//
router.get("/", withAuth, async (req, res) => {
  console.log("GET Dashboard req is working");
  try {
    const trainerData = await Trainer.findByPk(req.session.user_id, {
      exclude: [ { attributes: ["password"] } ],
      include: [ { model: Pokemon } ]

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



module.exports = router;
