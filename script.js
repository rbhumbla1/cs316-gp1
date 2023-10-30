// fuction for google translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en'
        },
        'google_translate_element'
    );
}

document.addEventListener("DOMContentLoaded", function () {
    const departureDateInput = document.getElementById("departureDateInput");
    const returnDateInput = document.getElementById("return-date");
    const passengerCountSelect = document.getElementById("passenger");
    const form = document.querySelector("form");

    if (!departureDateInput || !returnDateInput || !passengerCountSelect) {
        console.error("Departure, return date input, or passenger select not found.");
        return;
    }

    // Initialize departure date picker with the correct date format
    $(departureDateInput).datepicker({
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
    });

    // Initialize return date picker with the correct date format
    $(returnDateInput).datepicker({
        dateFormat: "yy-mm-dd",
        showButtonPanel: true,
    });

    // Function to scroll to flight results section
    function scrollToFlightResults() {
        const flightResultsSection = document.getElementById("flight-results");
        flightResultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to fetch and process flight data
    function fetchFlightData() {
        const api_key = "7a2608b855f0551157d5ecb1b6829e2c";
        const flight_date = departureDateInput.value;
        const passengerCount = parseInt(passengerCountSelect.value, 10);

        // Prepare the request parameters
        const params = new URLSearchParams({
            access_key: api_key,
            flight_date: flight_date,
        });

        // Construct the URL with the 'from' and 'to' values
        const from = document.getElementById("departure").value;
        const to = document.getElementById("destination").value;

        const unitedAirlinesURL = `https://www.united.com/en/us/fsr/choose-flights?f=${from}&t=${to}&d=${flight_date}&r=${returnDateInput.value}&sc=${passengerCount}&px=${passengerCount}&taxng=1&newHP=True&clm=7&st=bestmatches&tqp=R`;

        // Redirect to the unitedairlines.com website after fetching data
        window.location.href = unitedAirlinesURL;
    }

    // event listener for "Search" button
    const searchButton = document.getElementById("search-button");
    searchButton.addEventListener("click", function (event) {
        event.preventDefault();
        form.reportValidity();
        if (form.checkValidity()) {
            fetchFlightData();
        }
    });

    //  event listener for the form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
});
