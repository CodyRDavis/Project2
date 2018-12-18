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
    /*
    db.User.create(req.body).then(function(result){
      //console.log(result);
      //res.redirect(307, "/api/login");
    }).then(function(response){
      console.log(response);
    });*/
  });






















  /*
  //ROUTE FOR CREATING NEW USERS
  app.post("/api/createUser", function(req, res){

    //grooming incoming data.
    incomingEmail = req.body.email.toLowerCase();

    //checking to see if email has already been used to sign up for an account
    db.User.findOne({where: {email: incomingEmail}}).then(function(user){
      if(user){ //if user exists
        console.log("User Already exists");
        res.status(400).send("This user Already exists");
      }else{ //if user does not exist already
        console.log("New User detected");
        db.User.create({
          name: req.body.name,
          email: incomingEmail,
          password: req.body.password,
          phoneNumber: req.body.phoneNumber,
          is_vet: false
        });
        res.send("/");
      }
    });
  });

  //ROUTE FOR LOGGIN IN
  app.post("/api/login", passport.authenticate("local"), function(req, res){
    if (req.user){
      res.send("/members");
    } else {
      res.status(400).send(false);
    }
  });
  */
};