$("document").ready(function(){
  $("#add-btn").click(function(e){
    e.preventDefault();
    $.post("/api/login", {
      email: $("#email").val().toLowerCase(),
      password: $("#password").val().toLowerCase(),
    }).then(function(result){
      console.log(result);
      window.location.replace(result.data.location);
    }).fail(function(err){
      console.log(err);
      if (err.status === 401){
        alert("Invalid Email or Password");
      }
    });
  });
});