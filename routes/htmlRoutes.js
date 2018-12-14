// eslint-disable-next-line no-unused-vars
const db = require("../models");
const path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Load welcome page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/view.html"));
  });

  app.get("/signup", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/create.html"));
  });
  app.get("/login", function(req, res){
    console.log (req.user);
    res.sendFile(path.join(__dirname + "/../public/login.html"));
  });
  app.get("/dashboard", isAuthenticated, function(req, res){
    console.log(req.user);
    if (req.user){
      console.log (req.user);
      res.redirect("/dashboard");
    }
    res.redirect("/");
  });
  app.get("/pet/:id", isAuthenticated, function(req,res){
    //TODO: query database and check to see if user.id = pet owner id.
    res.send("pet");
    
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
