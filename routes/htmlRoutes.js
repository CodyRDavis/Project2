// eslint-disable-next-line no-unused-vars
const db = require("../models");
const path = require("path");
const passport = require("./config/passport");

module.exports = function(app) {
  // Load welcome page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/view.html"));
  });

  app.get("/signup", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/create.html"));
  });
  app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/login.html"));
  });
  app.get("/dashboard", function(req, res){
    if (req.user){
      console.log (req.user);
      res.send("dashboard");
    }
    res.redirect("/");
  });
  app.get("/pet/:id", function(req,res){
    //TODO: query database and check to see if user.id = pet owner id.
    if (req.user){
      console.log(req);
      res.send("specific pet page");
    }
    res.send("This ISNT your Pet");
    
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
