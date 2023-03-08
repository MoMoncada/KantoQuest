const { Trainer } = require("../models");

const userData = [
  {
    username: "Mark",
    email: "mark@test.com",
    password: "password12345",
  },
  {
    username: "Ryan",
    email: "ryan@test.com",
    password: "password12345",
  },
  {
    username: "Mauxi",
    email: "mauxi@test.com",
    password: "password12345",
  },
  {
    username: "John",
    email: "John@test.com",
    password: "password12345",
  },
  {
    username: "Bob",
    email: "Bob@test.com",
    password: "password12345",
  },
  {
    username: "Katie",
    email: "Katie@test.com",
    password: "password12345",
  },
];

const seedUserData = () => Trainer.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUserData;
