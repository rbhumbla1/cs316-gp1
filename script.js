
// fuction for google translate
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement(
//         {
//             pageLanguage: 'en'
//         },
//         'google_translate_element'
//     );
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const departureDateInput = document.getElementById("departureDateInput");
//     const returnDateInput = document.getElementById("return-date");
//     const passengerCountSelect = document.getElementById("passenger");
//     const form = document.querySelector("form");

//     if (!departureDateInput || !returnDateInput || !passengerCountSelect) {
//         console.error("Departure, return date input, or passenger select not found.");
//         return;
//     }

//     // Initialize departure date picker with the correct date format
//     $(departureDateInput).datepicker({
//         dateFormat: "yy-mm-dd",
//         showButtonPanel: true,
//     });

//     // Initialize return date picker with the correct date format
//     $(returnDateInput).datepicker({
//         dateFormat: "yy-mm-dd",
//         showButtonPanel: true,
//     });

//     // Function to scroll to flight results section
//     function scrollToFlightResults() {
//         const flightResultsSection = document.getElementById("flight-results");
//         flightResultsSection.scrollIntoView({ behavior: 'smooth' });
//     }

    var api_request= 'https://api.flightapi.io/roundtrip/6542a549a398868dacdb5960/SFO/SEA/2023-11-03/2023-11-07/8/0/0/Economy/USD';
    fetch(api_request)
        .then(function (response) {
             console.log("response", response);
             return response.json();
        })
        .then(function (data){
            console.log("data", data);
            for (let i = 0; i < 5; i++)
            {
                console.log(data.legs[i].airlineCodes);
                console.log(data.legs[i].departureTime);
                console.log(data.legs[i].arrivalTime);
            }
            
        });

        

    // Function to fetch and process flight data
//     function fetchFlightData() {
//         const api_key = "6541b87234d03694fc8237d2";
//         const Departure_flight_date = departureDateInput.value;
//         const Arrival_flight_date = returnDateInput.value;
//         const passengerCount = parseInt(passengerCountSelect.value, 10);

//         // Prepare the request parameters
//         const params = new URLSearchParams({
//             access_key: api_key,
//         });

//         // Construct the URL with the 'to' values
//         const to = document.getElementById("destination").value;

//         const flightAPIURL = `https://api.flightapi.io/roundtrip/${api_key}/$SFO/${to}/${Departure_flight_date}/${Arrival_flight_date}/${passengerCount}/0/0/Economy/USD`;

//         window.location.href = flightAPIURL;
//     }

//     // event listener for "Search" button
//     const searchButton = document.getElementById("search-button");
//     searchButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         form.reportValidity();
//         if (form.checkValidity()) {
//             fetchFlightData();
//         }
//     });

//     //  event listener for the form submission
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//     });
// });

