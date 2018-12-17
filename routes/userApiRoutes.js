const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {

  //THIS ROUTE IS FOR TESTING PURPOSES ONLY.
    
  app.get("/api/user", function(req, res){
    console.log ("user get /");
    db.User.findAll({attributes: ["id", "name", "email"]}).then(function(results){
      console.log(results);
      res.send(results);
    });
  });

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
};