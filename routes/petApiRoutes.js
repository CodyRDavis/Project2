var db = require("../models");

module.exports = function(app) {
  
  // Get all examples
  app.get("/api/pets", function(req, res) {
    db.Pet.findAll({include:[db.Service]}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new pet
  app.post("/api/pets", function(req, res) {
    db.Pet.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an Pet by id
  app.delete("/api/pets/:id", function(req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
};
