// eslint-disable-next-line no-unused-vars
const db = require("../models");
const path = require("path");

module.exports = function(app) {
  // Load welcome page
  app.get("/", function(req, res) {
    res.send("Connected: / page");
  });

  app.get("/signup", function(req, res){
    res.send("Sign up");
  });
  app.get("/login", function(req, res){
    res.send("log in");
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
