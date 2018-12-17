$("document").ready(function(){
  $("#add-btn").click(function(e){
    e.preventDefault();
    $.post("/api/login", {
      email: $("#email").val().toLowerCase(),
      password: $("#password").val().toLowerCase(),
    }).then(function(result){
      console.log(result);
      window.location.href = result;
    });
  });
});