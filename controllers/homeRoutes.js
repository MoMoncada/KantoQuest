const router = require("express").Router();
const {  } = require("../models");

//-- GET request for the homepage --//
router.get("/", async (req, res) => {
  console.log("GET req is working");

  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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

//TODO: any other GET requests we might find along the way

module.exports = router;
