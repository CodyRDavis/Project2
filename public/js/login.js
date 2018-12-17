$("document").ready(function(){
  $("#add-btn").click(function(e){
    e.preventDefault();
    $.post("/api/login", {
      email: $("#email").val(),
      password: $("#password").val(),
    }).then(function(result){
      console.log(result);
      window.location.href = result;
    });
  });
});