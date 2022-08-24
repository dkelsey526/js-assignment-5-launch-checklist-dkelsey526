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

window.addEventListener("load", function() {

//   let form = document.querySelector("form");

//   form.addEventListener("submit"), function(event){ 

//     let pilotValue = document.getElementById("pilotName").value;
//     let coPilotValue = document.getElementById("copilotName").value;
//     let fuelLevelValue = document.getElementById("fuelLevel").value;
//     let cargoMassValue = document.getElementById("cargoMass").value;

//     event.preventDefault();

//     if(pilotValue === '' || pilotValue === null || coPilotValue === '' || coPilotValue === null || fuelLevelValue === '' || fuelLevelValue === isNaN || cargoMassValue === '' || cargoMassValue === isNaN  ) {

//       alert("All fields are required");
//       faultyItems.style.visibility = 'hidden';
      
//       // return false;

//       // launchStatus.style.color = 'black';
// 			launchStatus.innerHTML = 'Awaiting Information Before Launch';

//      } else {


//   let faultyItems = document.getElementById('faultyItems');
//   let launchStatus = document.getElementById('launchStatus');
//   let fuelStatus = document.getElementById('fuelStatus');
//   let cargoStatus = document.getElementById('cargoStatus')
//   let ready = true;
//   document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'Ready' }`
//   document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'Ready' }`

//       faultyItems.style.visibility = 'visible';
// // Using template literals, update the li elements pilotStatus and copilotStatus to include the pilot's name and the co-pilot's name.

// // If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.
// 			if (fuelLevel < 10000) {
// 				ready = false;

// 				fuelStatus.innerHTML = 'Fuel level too low for launch';
//         faultyItems.style.visibility = 'visible';
// 				launchStatus.style.color = 'red';
// 				launchStatus.innerHTML = 'Shuttle Not Ready for Launch';

// 			} else {
//         document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'is ready for launch' }`
//         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'is ready for launch' }`
//         fuelStatus.innerHTML = 'Fuel level high enough for launch';

// 			}


// // If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.
// 			if (cargoMassValue > 10000) {
// 				ready = false;

// 				cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
//         faultyItems.style.visibility = 'visible';
// 				launchStatus.style.color = 'red';
// 				launchStatus.innerHTML = 'Shuttle Not Ready for Launch';

// 			} else {
//         document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'is ready for launch' }`
//         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'is ready for launch' }`
// 				cargoStatus.innerHTML = 'Cargo mass low enough for launch';

// 			}


// // If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
// 			if (ready) {


//         document.getElementById('pilotStatus').innerHTML = `Pilot ${ pilotName + 'is ready for launch' }`
//         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${ copilotName + 'is ready for launch' }`
//         launchStatus.style.color = 'green';
// 				launchStatus.innerHTML = 'Shuttle is Ready for Launch';

// 			} 
//    }     
  }
  
  

  const listedPlanets = "https://handlers.education.launchcode.org/static/planets.json";
  const fetchPromise = fetch(listedPlanets);

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = planetsReturned;

    fetchPromise.then(function(response){
     response.json().then(function(data){
      console.log(data);
        });
    });

    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });
 
 