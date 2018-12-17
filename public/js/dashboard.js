$("document").ready(function(){
  console.log("page ready");
  $("#add-btn").click(function(e){
    $.get("/api/pets", function(result){
      console.log(result);
    });
  });
});