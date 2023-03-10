const { Trainer } = require("../models");

const trainerData = [
  {
    username: "Mark",
    email: "mark@test.com",
    password: "password12345",
    total_score: "110",
  },
  {
    username: "Ryan",
    email: "ryan@test.com",
    password: "password12345",
    total_score: "220",
  },
  {
    username: "Mauxi",
    email: "mauxi@test.com",
    password: "password12345",
    total_score: "120",
  },
];

const seedTrainerData = () =>
  Trainer.bulkCreate(trainerData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedTrainerData;
