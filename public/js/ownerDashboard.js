$("document").ready(function(){
  console.log("page ready");
  $.get("/api/user").then(function(result){
    console.log(result);
    for (let i = 0; i < result.data.Pets.length; i++){
      let pet = result.data.Pets[i];
      console.log ("Welcome Back Mr." + pet.name);
    }
  });
});