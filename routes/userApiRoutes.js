const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  //GETTING USER AND THEIR PETS
  app.get("/api/user", function(req,res){
    db.User.findOne({where: {id: req.user.id}}).then(function(results){
      res.json({
        success: true,
        data: results,
        errors: []
      });
    });
  });

  //GETTING ALL USERS
  //THIS ROUTE SHOULD ONLY BE AVAILAVBLE TO is_vet TRUE FLAGS.
  app.get("/api/users", function(req, res){

    //checking to see if user is_vet flag is true.
    //the assumption is no one besides a vet should see other user's info.
    if (req.user.is_vet){
      console.log ("Vet access granted. welcome.");
      db.User.findAll({attributes: ["id", "name", "email"]}).then(function(results){
        res.json({
          success: true,
          data: results,
          errors: []
        });
      });
    } else {
      res.json({
        success: false,
        data: {},
        errors: ["Access Denied"]
      });
    }
  });//END ROUTE

  //GETTING SPECIFIC USER and their pets
  app.get("/api/users/:id", function(req,res){

    //checking to see if user is a vet or its the user which the profile corresponds to.
    //the assumption is only a vet or the user themself should beable to see their profil.
    if (req.user.id === req.params.id || is_vet){
      console.log ("access granted. is vet or is user's profile");
      db.User.findOne({where: {id: req.params.id}}).then(function(results){
        console.log (results);
        res.json({
          success: true,
          data: results,
          errors: []
        });
      });
    } else {
      res.json({
        success: false,
        data: {},
        errors: ["Access Denied"]
      });
    }
  });//END ROUTE

  //#######################################################################################
  //LOGIN SIGN UP SIGN OUT
  //#######################################################################################

  //LOGGIN IN EXISTING USER AND REDIRECT TO DASHBOARD
  app.post("/api/login", passport.authenticate("local"), function(req,res){
    console.log("Authenticated, loading dash");
    res.json({
      success: true,
      data: {location: "/dashboard"},
      error: []
    });
  });//END ROUTE

  //SIGNING UP NEW USER, ADDING THEM TO THE DB, THEN REDIRECCT TO LOG THEM IN.
  app.post("/api/signup", function(req,res){
    
    console.log("new sign up... checking for existing user.");
    //console.log(req.body);

    //checking to see if user email is already in use
    db.User.findOne({where: {email: req.body.email}}).then(function(user){
      if(user){ //user is true if a result is found
        console.log("user exists");
        res.json({
          success:false,
          data: {},
          error: ["This Email is already associated with another account"]
        });
      }else{ //no user was found.
        db.User.create(req.body).then(function(result){
          //console.log(result);
          res.redirect(307, "/api/login");
        });
      }
    });
  });//END ROUTE

  //SIGN OUT USER AND REDIRECT TO HOME PAGE
  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
};