const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
// When controllers folder has code then uncomment the following line
// const routes = require("./controllers");

// When helper file has code then uncomment the following line
// const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// When helper file has code then uncomment the following line
// const hbs = exphbs.create({ helpers });

const sess = {
  secret: "Super secret thingy",
  cookie: {
    // in milliseconds (30 minute timeout)
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

// When helper file has code then uncomment the following line
// app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// When controllers folder has code then uncomment the following line
// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Lapras used SURF on http://localhost:" + PORT + ' 🌊'));
});