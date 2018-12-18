$("document").ready(function(){
  console.log("page ready");
  $.get("/api/user").then(function(result){
    console.log(result);
    for (let i = 0; i < result.data.Pets.length; i++){

      let pet = result.data.Pets[i];

      let card = $("<div>").addClass("card");
      let cardHeader = $("<div>").addClass("card-header").append("<h3>"+pet.name+"</h3>");
      let cardBody = $("<div>").addClass("card-body");
      cardBody.append("<h5>Species: "+ petInfoValidate(pet.species)+"</h5>");
      cardBody.append("<h5>Breed: "+ petInfoValidate(pet.breed) + "</h5>");
      cardBody.append("<h5>Age: "+ petInfoValidate(pet.age) + "</h5>");
      cardBody.append("<h5>Chip Number: "+ petInfoValidate(pet.chipNumber) + "</h5>");
      cardBody.append("<h5>Allergies: "+ petInfoValidate(pet.allergies) + "</h5>");
      cardBody.append("<h5>Notes: "+ petInfoValidate(pet.notes) + "</h5>");


      //card assembly
      card.append(cardHeader, cardBody);
      $("#container-empty").append(card);

    }
  });
});

function petInfoValidate(info){
  if (!info){
    return ("Not Specified");
  } else {
    return info;
  }
}