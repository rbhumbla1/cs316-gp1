
$(document).ready(function() {
  // Select the trip type dropdown and return date input
  var tripTypeSelect = $('#trip-type');
  var returnDateInput = $('#return-date');

  // Listen for changes in the selected trip type
  tripTypeSelect.change(function() {
      // Check if the selected value is "one-way"
      if (tripTypeSelect.val() === 'one-way') {
          // Disable the "Return" date input
          returnDateInput.prop('disabled', true);
      } else {
          // Enable the "Return" date input
          returnDateInput.prop('disabled', false);
      }
  });
});




    var api_request = 'https://api.flightapi.io/roundtrip/65430fd7e654fd8dad608c8a/SFO/SEA/2023-11-03/2023-11-07/8/0/0/Economy/USD';

    fetch(api_request)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Select the #result element using jQuery
            var resultContainer = $('#result');
    
            for (let i = 0; i < 7; i++) {
                // Create a new div element to display flight data
                var flightDataDiv = $('<div>');
                flightDataDiv.html(
                    'Airline Codes: ' + data.legs[i].airlineCodes + '<br>' +
                    'Departure Time: ' + data.legs[i].departureTime + '<br>' +
                    'Arrival Time: ' + data.legs[i].arrivalTime
                );
                flightDataDiv.css('margin-bottom', '15px');
                flightDataDiv.css('border', '1px solid black');
                flightDataDiv.css('padding', '5px');
                flightDataDiv.css('border-radius', '5px');
                flightDataDiv.css('background-color', 'lightgray');
                flightDataDiv.css('font-size', '15px');
                flightDataDiv.css('text-align', 'left');
                flightDataDiv.css('color', 'black');
              
                // Append the flight data to the result container
                resultContainer.append(flightDataDiv);
            }
        });



    
