// Write your helper functions here!
// require('isomorphic-fetch');

// const pilotName = document.getElementById("pilotName");
// const copilotName = document.getElementById("co-pilot");
// const fuelLevel = document.getElementById[0];
// const cargoMass = document.getElementById[0];


// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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


// const validateInputs = () => {
//   const pilotValue = pilot.value.trim();
//   const coPilotValue = coPilot.value.trim();
//   const fuelLevelValue = fuelLevel.value.trim();
//   const cargoMassValue = cargoMass.value.trim();

// }
form.addEventListener("submit"), function(event){ 

  let pilotValue = document.getElementById("pilotName").value;
  let coPilotValue = document.getElementById("copilotName").value;
  let fuelLevelValue = document.getElementById("fuelLevel").value;
  let cargoMassValue = document.getElementById("cargoMass").value;

  event.preventDefault();

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

  let form = document.querySelector("form");


    
    if(pilotValue === '' || pilotValue === null || coPilotValue === '' || coPilotValue === null || fuelLevelValue === '' || fuelLevelValue === isNaN || cargoMassValue === '' || cargoMassValue === isNaN  ) {

      alert("All fields are required");
      faultyItems.style.visibility = 'hidden';
      
      // return false;

      // launchStatus.style.color = 'black';
			launchStatus.innerHTML = 'Awaiting Information Before Launch';

     } else {


  let faultyItems = document.getElementById('faultyItems');
  let launchStatus = document.getElementById('launchStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus')
  let ready = true;
  document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'Ready' }`
  document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'Ready' }`

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
        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'is ready for launch' }`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'is ready for launch' }`
        fuelStatus.innerHTML = 'Fuel level high enough for launch';

			}


// If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
			if (cargoMassValue > 10000) {
				ready = false;

				cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        faultyItems.style.visibility = 'visible';
				launchStatus.style.color = 'red';
				launchStatus.innerHTML = 'Shuttle Not Ready for Launch';

			} else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'is ready for launch' }`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'is ready for launch' }`
				cargoStatus.innerHTML = 'Cargo mass low enough for launch';

			}


// If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
			if (ready) {


        document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'is ready for launch' }`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'is ready for launch' }`
        launchStatus.style.color = 'green';
				launchStatus.innerHTML = 'Shuttle is Ready for Launch';

			} 
   }     
  // form.addEventListener("submit"), function(event){ 

  //   let pilotValue = document.getElementById("pilotName");
  //   let coPilotValue = document.getElementById("copilotName");
  //   let fuelLevelValue = document.getElementById("fuelLevel");
  //   let cargoMassValue = document.getElementById("cargoMass");

  //   event.preventDefault();
  // }


   

}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
} 



// https://handlers.education.launchcode.org/static/planets.json



function pickPlanet(planets) {
}






module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

