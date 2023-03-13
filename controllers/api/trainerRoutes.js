const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Trainer } = require('../../models');


//-- GET route for an individual trainer --//
router.get("/", withAuth, async (req, res) => {
  console.log(" GET route is working");
  try {
    const trainerData = await Trainer.findOne({
      attributes: { exclude: ['password'] },
      where: { id: req.session.user_id }
    })
    res.status(200).json(trainerData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Catch Error" });
  }
});


//-- POST route that creates a new trainer in the db --//
router.post('/', async (req, res) => {
  console.log('POST route for new Trainer is working');
  try {
    const newTrainerData = await Trainer.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
      });
      req.session.save(() => {
        req.session.user_id = newTrainerData.id;
        req.session.logged_in = true;
  
        res.status(200).json(newTrainerData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});




//--- POST route for /login, lets existing users log in ---//
router.post('/login', async (req, res) => {
  console.log('POST route for existing Trainer is working!');
  try {
    const dbTrainerData = await Trainer.findOne({ where: { email: req.body.email } });
    if (!dbTrainerData) {
      console.log('error')
      res.status(400).json({ message: 'Incorrect email or password' });
      return;
    }
    const validPassword = await dbTrainerData.checkPassword(req.body.password);
  
    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbTrainerData.id;
      req.session.logged_in = true;
      res.json({ trainer: dbTrainerData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



//--- POST route for /logout when a user is logged out ---//
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



//-- PUT route for changing the trainers score --//
router.put('/', async (req, res) => {
  try {
    const trainerData = await Trainer.update(
      {
        total_score: req.body.total_score,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    )
    return res.status(200).json(trainerData);
  } catch (err) {
    res.status(500).json(err)
  }
});


  
  module.exports = router;
