// eslint-disable-next-line no-unused-vars
var db = require("../models");

module.exports = function(app) {

  //USER ROUTES
  //===========================================
  // Get all examples
  app.get("/API/user", function(req, res) {
    res.send("API USER GET");
  });

  // Create a new user
  app.post("/API/user", function(req, res) {
    res.send("API USER POST");
  });
  // Update an user by id
  app.put("/API/user/:id", function(req, res){
    res.send("API USER PUT");
  });
  // Delete an user by id
  app.delete("/API/user/:id", function(req, res) {
    res.send("API USER DELETE");
  });


  //PET ROUTES
  //=============================================
  app.get("/API/pet", function(req, res){
    res.send("API PET GET");
  });
  app.post("/API/pet", function(req,res){
    res.send("API PET POST");
  });
  app.put("/API/pet/:id", function (req,res){
    res.send("API PET PUT");
  });
  app.delete("/API/pet/:id", function(req,res){
    res.send("AP PET DELETE");
  });
};
