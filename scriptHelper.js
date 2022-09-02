
const pilotName = document.querySelector('input[name="pilotName"]');
const copilotName = document.querySelector('input[name="copilotName"]');
const fuelLevel = document.querySelector('input[name="fuelLevel"]');
const cargoMass = document.querySelector('input[name="cargoMass"]');

// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {

   // Here is the HTML formatting for our mission target div.
   
let missionTarget = document.getElementById('missionTarget');


missionTarget.innerHTML =
               `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">`
                
}
              
// validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number"
function validateInput(testInput) {

  // Empty
  if(testInput==""){
    return "Empty";
  }
  
  // is NaN
  if(isNaN(testInput)){
    return "Not a Number";
  }

  // is Integer
  if(Number.isInteger(testInput)){
    return "Is a Number";
  }
   
}

// Use preventDefault() to prevent a request from being sent out and the page reloading. 
// formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.
// if(validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"  ) {

// } else {
//   validateInput(pilotName) === "Not a Number" || validateInput(copilotName) === "Not a Number" || validateInput(fuelLevel) === "Is a Number" || validateInput(cargoMass) === "Is a Number";

faultyItems.style.visibility = 'hidden';
// launchStatus.innerHTML = 'Awaiting Information Before Launch';

function formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass) {

  document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' '}Ready`
  document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' '}Ready`

  let form = document.querySelector("form");
  

    
    if(validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty"  ) {

      alert("All fields are required");   

    } else if (validateInput(fuelLevel !== Number) || validateInput(cargoMass) !== Number ) {

      alert("Not a Number");   

    } else if (validateInput(pilotName) !== "" ||  validateInput(copilotName) !== "" ) {

      alert("Is a Number");


    } else

      
    launchStatus.innerHTML = 'Awaiting Information Before Launch';


  let faultyItems = document.getElementById('faultyItems');
  let launchStatus = document.getElementById('launchStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus')
  let ready = true;

 faultyItems.style.visibility = 'visible';

// Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.

// If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
			if (fuelLevel < 10000) {
				ready = false;

				fuelStatus.innerHTML = 'Fuel level too low for launch';
        faultyItems.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle Not Ready for Launch';

			} else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' '}is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' '}is ready for launch`
        fuelStatus.innerHTML = 'Fuel level high enough for launch';

			}


// If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
			if (cargoMass > 10000) {
				ready = false;

				cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        faultyItems.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle Not Ready for Launch';

			} else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' '}is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' '}is ready for launch`
				cargoStatus.innerHTML = 'Cargo mass low enough for launch';

			}


// If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
			if (ready) {


        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + ' '}is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + ' '}is ready for launch`
        launchStatus.style.color = 'green';
				launchStatus.innerHTML = 'Shuttle is Ready for Launch';

			} 
   }    




async function myFetch() {
    let planetsReturned;
    let url = "https://handlers.education.launchcode.org/static/planets.json";
    planetsReturned = await fetch(url).then( function(response) {
      return response.json();
        });

    return planetsReturned;
} 


function pickPlanet(planets) {
  let planetsArray = planets;
  let randomPlanets = Math.round(Math.random() * planets.length);
return planetsArray[randomPlanets];
  
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

