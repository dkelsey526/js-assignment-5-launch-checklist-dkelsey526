// Write your JavaScript code here!
// Starter Code
// window.addEventListener("load", function() {




//     let listedPlanets;
//     // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//     let listedPlanetsResponse;
//     listedPlanetsResponse.then(function (result) {
//         listedPlanets = result;
//         console.log(listedPlanets);
//     }).then(function () {
//         console.log(listedPlanets);
//         // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//     })
    
//  });

window.addEventListener("load", function(event){
  let formSubmit = document.querySelector("form");

  formSubmit.addEventListener("submit", function(event){
   
    event.preventDefault();

    let pilot = document.querySelector('input[name="pilotName"]').value;
    let copilot = document.querySelector('input[name="copilotName"]').value;
    let fuelLevel = document.querySelector('input[name="fuelLevel"]').value;
    let cargoMass = document.querySelector('input[name="cargoMass"]').value;

   formSubmission(document, pilot, copilot, fuelLevel, cargoMass);
 
  });


  

  // const listedPlanets = "https://handlers.education.launchcode.org/static/planets.json";
  // const fetchPromise = fetch(listedPlanets);

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();

    // fetchPromise.then(function(response){
    //  response.json().then(function(data){
    //   console.log(data);
    //     });
    // });
// console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log(selectedPlanet);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
      

    })
    
 });
 
 