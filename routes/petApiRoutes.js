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
    let pet = req.body;

    db.Pet.create({
      owner_id: req.user.id,
      name: pet.name,
      species: pet.species,
      breed: pet.breed,
      age: pet.age,
      chipNumber: pet.chipNumber,
      allergies: pet.allergies,
      notes: pet.notes
    }).then(function(results) {
      console.log (results);
      res.json({
        success: true,
        data: 
        {
          location: "/dashboard",
          result: results
        },
        errors: []
      });
    });
  });

  // Delete an Pet by id
  app.delete("/api/pets/:id", function(req, res) {
    db.Pet.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
};
