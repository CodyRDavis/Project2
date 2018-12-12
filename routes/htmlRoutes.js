// eslint-disable-next-line no-unused-vars
var db = require("../models");

module.exports = function(app) {
  // Load welcome page
  app.get("/", function(req, res) {
    res.send("Connected: / page");
  });

  // Load example page and pass in an example by id
  app.get("/pet/:id", function(req, res) {
    petId = req.params.id;
    res.send(petId);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
