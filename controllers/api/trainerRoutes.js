const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Pokedex, Pokemon, Trainer, TrainerParty, TrainerPokedex } = require('../../models');

//--- GET route that fetches all the trainers from the db (excluding: password)---//
router.get('/', withAuth, async (req, res) => {
    
    console.log('GET req is working');

    try {
        //TODO: uncomment when this is set 
        // const dbTrainerData = await Trainer.findAll({
        //   attributes: { exclude: ['password'] }
        // });
        // res.json(dbTrainerData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

});

//--- GET route that fetches a trainer by :id ---//
router.get('/:id', withAuth, async (req, res) => {
    
    console.log('GET route by trainer :id working');

    try {
    //     //TODO: uncomment this block if needed
    //     const dbTrainerData = await Trainer.findOne({
    //         attributes: { exclude: ['password'] },
    //         where: {
    //           id: req.params.id
    //         },
    //         include: []

    // });
    // if(!dbTrainerData) {
    //     res.status(404).json({ message: 'No trainer found with this id' });
    //     return;
    //   }
      res.json(dbTrainerData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


//--- POST route that creates a new trainer in the db ---//
 router.post('/', withAuth, async (req, res) => {

    console.log('POST route for new Trainer is working');

    try {

        //TODO: uncomment when needed

    //   const dbTrainerData = await Trainer.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    //   });
    //   req.session.save(() => {
    //     req.session.id = dbTrainerData.id;
    //     req.session.username = dbTrainerData.username;
    //     req.session.loggedIn = true;
  
    //     res.json(dbTrainerData);

    //   });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


//--- POST route for the /login endpoint ---//
//TODO: not sure if this one can be tested 
router.post('/login', withAuth, async (req, res) => {

    console.log('Im working!');
    
    try {
    //   const dbTrainerData = await Trainer.findOne({
    //     where: {
    //       email: req.body.email
    //     }
    //   });
    //   if (!dbTrainerData) {
    //     res.status(400).json({ message: 'No trainer with that email address!' });
    //     return;
    //   }
  
    //   const validPassword = dbTrainerData.checkPassword(req.body.password);
  
    //   if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect password!' });
    //     return;
    //   }
  
    //   req.session.save(() => {
    //     req.session.id = dbTrainerData.id;
    //     req.session.username = dbTrainerData.username;
    //     req.session.loggedIn = true;
  
    //     res.json({ trainer: dbTrainerData, message: 'You are now logged in!' });
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



//--- POST route for the /logout endpoint ---//
//TODO: uncomment when needed
// router.post('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     }
//     else {
//       res.status(404).end();
//     }
//   });



// DELETE /trainer/:id: Delete a trainer by id.
//TODO: uncomment when needed
// router.delete('/:id', async (req, res) => {
//     try {
//       const dbTrainerData = await Trainer.destroy({
//         where: {
//           id: req.params.id
//         }
//       });
//       if (!dbTrainerData) {
//         res.status(404).json({ message: 'No triner found with this id' });
//         return;
//       }
//       res.json(dbTrainerData);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });
  
//   module.exports = router;
