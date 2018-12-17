$("document").ready(function(){
  console.log("page ready");
  $.get("/api/pets").then(function(data){
    console.log(data);
  });
});