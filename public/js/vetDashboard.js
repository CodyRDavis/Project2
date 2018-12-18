$("document").ready(function(){
  console.log("page ready");
  $.get("/api/user/").then(function(data){
    console.log(data);
  });
});