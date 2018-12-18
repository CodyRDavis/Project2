$("document").ready(function(){
  $("#add-btn").click(function(e){

    e.preventDefault();

    let userName = $("#name").val().trim();
    let userEmail = $("#email").val().toLowerCase().trim();
    let userPassword = $("#password").val().trim();
    if(!userName){
      alert("Please fill the name field!");
    } else if (!userEmail){
      alert("Please provide an email address!");
    } else if (!userPassword){
      alert("Please provide a password");
    } else{
      $.post("/api/signup", {
        name: $("#name").val(),
        email: $("#email").val().toLowerCase(),
        password: $("#password").val(),
        phoneNumber: 0,
        is_vet: false
      }).then(function(result){
        console.log("submitted");
        console.log(result);

        //checking to see if creating a user failed or not.
        if (!result.success){
          //ANNIE NGO MODLE HERE!
          alert(result.error);
        } else {
          console.log ("navigate to " + result.data.location);
          window.location.replace(result.data.location);
        }
      });
    }
    
  });
  $("#").click(function(e){
    e.preventDefault();
    if (false){
      console.log("Future data validation");
    } else {
      $.post("/api/pets", {
        name: "fix me",
        species: "fix me",
        breed: "fix me",
        chipNumber: 0 ,
        allergies: "fix me",
        notes: "fix me"
      }).then(function(results){
        console.log (results);
      });
    }
  });
});