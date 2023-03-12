const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Trainer, Pokemon, TrainerPokemon } = require("../../models");


// -- POST route for adding a pokemon to the trainerPokedex --//
router.post("/", withAuth, async (req, res) => {
  console.log("Post Route for adding a pokemon!");
  try {
    const newPokemonData = await TrainerPokemon.create({
      trainer_id: req.session.user_id,
      pokemon_id: req.body.pokemon_id,
    });
    res.status(200).json(newPokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});


//-- PUT request to remove from trainers party --//
router.put("/remove/:id", withAuth, async (req, res) => {
  console.log(`PUT route for removing a pokemon is working!`);
  try {
    const trainerPokemon = await TrainerPokemon.update(
      {
        is_in_party: false,
      },
      {
        where: {
          trainer_id: req.params.id,
          pokemon_id: req.body.pokemon_id,
        },
      }
    );

    if (!trainerPokemon) {
      return res
        .status(404)
        .json({ message: "This Pokemon is not in your party!" });
    }

    return res.status(200).json(trainerPokemon);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to update Party!" });
  }
});


//-- PUT request to add to trainers party --//
router.put("/add/:id", withAuth, async (req, res) => {
  console.log(`PUT route for adding a pokemon is working!`);
  try {
    const trainerPokemon = await TrainerPokemon.update(
      {
        is_in_party: true,
      },
      {
        where: {
          trainer_id: req.params.id,
          pokemon_id: req.body.pokemon_id,
        },
      }
    );

    if (!trainerPokemon) {
      return res
        .status(404)
        .json({ message: "This Pokemon cant be added to your party!" });
    }

    return res.status(200).json(trainerPokemon);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to update Party!" });
  }
});



// POST route to add starter Pokemon to trainer's party --//
router.post("/starteradd/:id", withAuth, async (req, res) => {
  console.log(`POST route for adding a pokemon to pokedex is working!`);
  try {
    const newtrainerPokemon = await TrainerPokemon.create({
      trainer_id: req.params.id,
      pokemon_id: req.body.pokemon_id,
      is_in_party: true,
    });

    if (!newtrainerPokemon) {
      return res
        .status(404)
        .json({ message: "This Pokemon cant be added to your pokedex!" });
    }

    return res.status(200).json(newtrainerPokemon);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to update Pokedex!" });
  }
});




module.exports = router;
