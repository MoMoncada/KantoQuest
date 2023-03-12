const router = require("express").Router();
const { Trainer, Pokemon } = require("../models");
const withAuth = require("../utils/auth");


//-- GET request for battle page --//
router.get("/", withAuth, async (req, res) => {
  console.log("Battle GET route is working");
  try {
    const trainerData = await Trainer.findOne({
      attributes: { exclude: ['password'] },
      where: { id: req.session.user_id },
      include: [
        {
          model: Pokemon,
        },
      ],
    });
    const trainer = trainerData.get({ plain: true });




    //-- GET request for a Wild Pokemon to battle --//
    const pokemonData = await Pokemon.findAll();
    const allPokemon = pokemonData.map((pokemon) => pokemon.get({ plain: true }));
    allPokemon.forEach(pokemon => {
      if (trainerData.pokemons.some(trainerPokemon => trainerPokemon.id === pokemon.id)) {
         pokemon.is_caught = true
      } else {
         pokemon.is_caught = false
      }
     })

    const wild_pokemon = allPokemon.filter(pokemon => pokemon.is_caught === false)
    random_wild_pokemon = wild_pokemon[Math.floor(Math.random() * wild_pokemon.length)]
    trainer.random_wild_pokemon = random_wild_pokemon
    console.log(trainer.random_wild_pokemon);

    res.render("battle", {
      ...trainer,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Catch Error" });
  }
});



module.exports = router;
