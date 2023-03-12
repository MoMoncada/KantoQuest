const router = require("express").Router();
const { Trainer } = require("../models");


//-- GET request for the homepage --//
router.get("/", async (req, res) => {
  try {
    const trainersData = await Trainer.findAll({
      attributes: ["username", "total_score"],
      order: [["total_score", "DESC"]],
      limit: 5
    });

    const trainers = trainersData.map((trainer) => trainer.get({ plain: true })
    );

    res.render("homepage", {
      trainers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


//--- GET request for the login page ---//
router.get("/login", (req, res) => {
  console.log("GET req for login is working");
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

module.exports = router;
