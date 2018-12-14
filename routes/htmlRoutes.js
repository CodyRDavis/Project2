// eslint-disable-next-line no-unused-vars
const db = require("../models");
const path = require("path");

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
    res.send("dashboard");
  });
  app.get("/pet/:id", function(req,res){
    res.send("specific pet page");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
