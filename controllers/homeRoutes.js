const router = require("express").Router();
const { Trainer } = require("../models");



//-- GET request for the homepage --//
// router.get("/", async (req, res) => {
//   console.log("GET req is working");

//   try {
//     res.render("homepage", {
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

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

//--- GET req to populate our Hall of Fame ---//
router.get('/', async (req, res) => {
  try {
    const trainersData = await Trainer.findAll({ 
      attributes:
      ['username', 
      'total_score'] 
    
    });

    const trainers = trainersData.map(trainer => trainer.get({plain:true}))
    
    console.log (trainers);
    res.render('homepage', { trainers });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
