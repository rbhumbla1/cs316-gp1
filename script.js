
document.addEventListener("DOMContentLoaded", function () {
    const departureDateInput = document.getElementById("departure-date");
    const returnDateInput = document.getElementById("return-date");
    const departureDatePickerButton = document.getElementById("show-departure-datepicker");
    const returnDatePickerButton = document.getElementById("show-return-datepicker");

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

    departureDatePickerButton.addEventListener("click", function () {
        $(departureDateInput).datepicker("show");
    });

    returnDatePickerButton.addEventListener("click", function () {
        $(returnDateInput).datepicker("show");
    });
});
