var db = require("../models");

module.exports = function(app) {
  
  // Get pets belonging to user
  app.get("/api/pets", function(req, res) {
    const userId = req.user.id;
    db.Pet.findAll({where: {owner_id : userId},include:[db.Service]}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new pet
  app.post("/api/pets", function(req, res) {
    console.log(req.body);
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
