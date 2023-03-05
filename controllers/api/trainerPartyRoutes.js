const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Pokedex, Pokemon, Trainer, TrainerParty, TrainerPokedex }= require('../../models');
const { request } = require('express');

//-- GET req for all parties --//
router.get('/', withAuth, async (requ, res) => {
    
    console.log('GET for all trainer parties is working :)');

    try {
        //TODO: uncomment this if needed, check attributes being passed before testing
        // const trainerPartyData = await TrainerParty.findAll({
        //   attributes: ['id', 'party_score', 'trainer_id','trainer_pokedex_id],
        //   include: []  
        // });
        // res.json(trainerPartyData);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }

});

//-- GET req for parties by :id --//
router.get('/:id', withAuth, async (req,res) => {

    console.log('GET for a party by :id is working :)');

    try{
    //TODO: uncomment this if needed, check attributes being passed before testing
    // const trainerPartyData = await TrainerParty.findOne({
    //     where: { id: req.params.id },
    //     attributes: ['id', 'party_score', 'trainer_id', 'trainer_pokedex_id'],
    //     include: []
    // });
    // if(!trainerPartyData) {
    //     request.status(404).json({message: 'No Party found with this id'});
    //     return;
    // }
    // request.json(trainerPartyData);
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }


});

//-- POST req to create a party --//
router.post('/', withAuth, async (req, res) => {

    console.log('POST req to create a party is working');

    try{
        // const dbNewParty = await TrainerParty.create({
        //    party_score: req.body.party_score, //TODO: Change it needed, not sure what are we going to request
        // });
        // res.json(dbNewParty);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);

    }
});



//-- PUT req to edit party by :id--//
router.put('/:id', withAuth, async (req, res) => {

    console.log('PUT req to edit a party is working');

    try {
    //   const dbEditedParty = await TrainerParty.update(
    //     {
    //      //TODO: we probably don't need this
    //     }
    //   );
    //   if (!dbEditedParty[0]) {
    //     res.status(404).json({ message: '' });
    //     return;
    //   }
    //   res.json(dbEditedParty);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  

//-- DELETE req to delete party by :id --//
router.delete('/:id', withAuth, async (req, res) => {

    console.log('DELETE req to create a party is working');

    try {
        //TODO: check params and uncomment when needed
    //   const trainerPartyData = await TrainerParty.destroy({
    //     where: { id: req.params.id }
    //   });
    //   if (!trainerPartyData) {
    //     res.status(404).json({ message: 'This party has been deleted!' });
    //     return;
    //   }
    //   res.json(trainerPartyData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  });
  


module.exports = router;

