$("document").ready(function(){
  $("#add-btn").click(function(e){
    e.preventDefault();
    $.post("/api/login", {
      email: $("#email").val(),
      password: $("#password").val(),
    }).then(function(result){
      console.log(result);
    }).done(function(data){
      window.location.href = data;
    });
  });
});