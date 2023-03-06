const router = require('express').Router();
const sequelize = require('../config/connection');
const { Pokedex, Trainer, TrainerParty, TrainerPokedex } = require('../models');


//-- GET request for the homepage --//
router.get('/', async (req, res) => {

    console.log('GET req is working');

    try {
        res.render('homepage', {
            //TODO: code here
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//--- GET request for the login page ---//
//TODO: uncomment this route, it should be done by the time the login page is done
// router.get('/login', (req, res) => {
   
//     console.log('GET req for login is working');
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');

// });



//TODO: any other GET requests we might find along the way


module.exports = router;
