//DEPENDENCIES
require("dotenv").config();
const express = require("express");
const passport = require("./config/passport");
const db = require("./models");
//SERVER DEPENDENCIES
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//INIT PASSPORT
app.use(session({ secret: "keyboard dog", resave: true, saveUninitialize:true}));
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
require("./routes/userApiRoutes")(app);
require("./routes/petApiRoutes")(app);
//require("./routes/serviceApiRoutes")(app);
require("./routes/htmlRoutes")(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the database
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
