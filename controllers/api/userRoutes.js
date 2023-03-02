const router = require('express').Router();
const { Party_pokemon, Party, Pokedex_pokemon, Pokedex, Pokemon, User } = require('../../models');

//--- GET route that fetches all the users from the db (excluding: password)---//
router.get('/', async (req, res) => {
    
    console.log('GET req is working');

    try {
        //TODO: uncomment when this is set 
        // const dbUserData = await User.findAll({
        //   attributes: { exclude: ['password'] }
        // });
        // res.json(dbUserData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }

});

//--- GET route that fetches a user by :id ---//
router.get('/:id', async (req, res) => {
    
    console.log('GET route by :id working');

    try {
    //     //TODO: uncomment this block if needed
    //     const dbUserData = await User.findOne({
    //         attributes: { exclude: ['password'] },
    //         where: {
    //           id: req.params.id
    //         },
    //         include: []

    // });
    // if(!dbUserData) {
    //     res.status(404).json({ message: 'No user found with this id' });
    //     return;
    //   }
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


//--- POST route that creates a new user in the db ---//
 router.post('/', async (req, res) => {

    console.log('POST route for new user is working');

    try {

        //TODO: uncomment when needed

    //   const dbUserData = await User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password
    //   });
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
  
    //     res.json(dbUserData);

    //   });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


//--- POST route for the /login endpoint ---//
//TODO: not sure if this one can be tested 
router.post('/login', async (req, res) => {

    console.log('Im working!');
    
    try {
    //   const dbUserData = await User.findOne({
    //     where: {
    //       email: req.body.email
    //     }
    //   });
    //   if (!dbUserData) {
    //     res.status(400).json({ message: 'No user with that email address!' });
    //     return;
    //   }
  
    //   const validPassword = dbUserData.checkPassword(req.body.password);
  
    //   if (!validPassword) {
    //     res.status(400).json({ message: 'Incorrect password!' });
    //     return;
    //   }
  
    //   req.session.save(() => {
    //     req.session.user_id = dbUserData.id;
    //     req.session.username = dbUserData.username;
    //     req.session.loggedIn = true;
  
    //     res.json({ user: dbUserData, message: 'You are now logged in!' });
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



// DELETE /users/:id: Delete a user by id.
//TODO: uncomment when needed
// router.delete('/:id', async (req, res) => {
//     try {
//       const dbUserData = await User.destroy({
//         where: {
//           id: req.params.id
//         }
//       });
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });
  
//   module.exports = router;
