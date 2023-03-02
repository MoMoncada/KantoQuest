const router = require('express').Router();
const sequelize = require('../config/connection');
const { Party_pokemon, Party, Pokedex_pokemon, Pokedex, Pokemon, User } = require('../models');
const withAuth = require('../utils/auth');

//-- GET req to the '/' endpoint --//
router.get('/', withAuth, async (req, res) => {
    
    console.log('GET req is working');

    try {
       res.render('dashboard', {
        //TODO: code here
       });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//-- TODO:  GET request :id endpoint, not sure if which one we need yet ---//
