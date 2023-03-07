const router = require('express').Router();
const { Pokedex, Trainer, TrainerParty, TrainerPokedex } = require('../models');
const withAuth = require('../utils/auth');

//-- GET req to the '/' endpoint --//
router.get('/', withAuth, async (req, res) => {
    
    console.log('GET Dashboard req is working');

    try {
        const userData = await Trainer.findByPk(req.session.user_id, {
          attributes: { exclude: ["password"] },
        });
        const user = userData.get({ plain: true });
        res.render("dashboard", {
          ...user,
          loggedIn: req.session.logged_in,
        });
      } catch (err) {
        res.status(500).json(err);
      }
});


//-- TODO:  GET request :id endpoint, not sure if which one we need yet ---//


module.exports = router;
