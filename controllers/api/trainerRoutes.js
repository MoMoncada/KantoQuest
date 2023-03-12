const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Trainer } = require('../../models');

//--- POST route that creates a new trainer in the db ---//
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
  
  module.exports = router;
