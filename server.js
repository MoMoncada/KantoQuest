//-- Importing packages and modules --//
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");


//-- Initializing the server --//
const app = express();
const PORT = process.env.PORT || 3001;

//-- Setting up Sessions --//
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret thingy",
  cookie: {
    //-- 30 minute timeout in ms --//
    maxAge: 1000 * 60 * 30,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
  db: sequelize,
  }),
};

app.use(session(sess));

const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

//-- Setting up the handlebars --//
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//-- Serving static files --//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname , "public")));

app.use(routes);

//-- Starting the Server --//
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Lapras used SURF on http://localhost:" + PORT + ' 🌊'));
});