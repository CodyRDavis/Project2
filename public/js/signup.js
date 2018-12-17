$("document").ready(function(){
  $("#add-btn").click(function(e){
    e.preventDefault();
    $.post("/api/createUser", {
      name: $("#name").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      phoneNumber: 0,
      is_vet: false
    }).then(function(){
      console.log("submitted");

    }).done(function(data){
      window.location.href = data;
    }
    );
  });
});