// eslint-disable-next-line no-unused-vars
var db = require("../models");

module.exports = function(app) {

  //USER ROUTES
  //===========================================
  // Get all examples
  app.get("/api/user", function(req, res) {
    res.send("API USER GET");
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    res.send("API USER POST");
  });
  // Update an user by id
  app.put("/api/user/:id", function(req, res){
    res.send("API USER PUT");
  });
  // Delete an user by id
  app.delete("/api/user/:id", function(req, res) {
    res.send("API USER DELETE");
  });


  //PET ROUTES
  //=============================================
  app.get("/api/pet", function(req, res){
    res.send("API PET GET");
  });
  app.post("/api/pet", function(req,res){
    res.send("API PET POST");
  });
  app.put("/api/pet/:id", function (req,res){
    res.send("API PET PUT");
  });
  app.delete("/api/pet/:id", function(req,res){
    res.send("AP PET DELETE");
  });
};
