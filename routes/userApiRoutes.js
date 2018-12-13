var db = require("../models");

module.exports = function(app) {
  // Get all user
  app.get("/api/alluser", function(req, res) {
    db.User.findAll({ include:[db.Pet]}).then(function(results) {
      //  Parse the results data to create an array of pet id
      res.json(results);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  //SPECIFIC USER
  //============================================================
  app.get("/api/user/:id", function(req, res){
    console.log(req.body);
    db.Pet.findAll(
      { 
        where: {owner_id : req.params.id}
      }).then(function(results){
      console.log(results);
      res.json(results);
    });
  });
};
