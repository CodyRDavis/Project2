$("document").ready(function(){
  $("#add-btn").click(function(e){
    e.preventDefault();
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
      if (result.success === false){
        //ANNIE NGO MODLE HERE!
        alert(result.error);
      } else {
        console.log ("navigate to " + result.data.location);
        window.location.replace(result.data.location);
      }
    });
  });
});