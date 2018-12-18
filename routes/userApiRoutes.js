const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  //THIS ROUTE IS FOR TESTING PURPOSES ONLY.
    
  app.get("/api/user", function(req, res){
    console.log ("user get /");
    db.User.findAll({attributes: ["id", "name", "email"]}).then(function(results){
      res.send(results);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req,res){
    console.log("Authenticated, loading dash");
    res.json({
      success: true,
      data: {location: "/dashboard"},
      error: []
    });
  });

  app.post("/api/signup", function(req,res){
    console.log("new sign up... checking for existing user.");
    console.log(req.body);
    //console.log(req.body);
    db.User.findOne({where: {email: req.body.email}}).then(function(user){
      if(user){
        console.log("user exists");
        res.json({
          success:false,
          data: {},
          error: ["This Email is already associated with another account"]
        });
      }else{
        db.User.create(req.body).then(function(result){
          //console.log(result);
          res.redirect(307, "/api/login");
        });
      }
    });
  });
};