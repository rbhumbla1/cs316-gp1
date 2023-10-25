//adds both the url and the api key, While also returning response from jsfile
const api_url = "https://api.aviationstack.com/v1/flights?access_key=7a2608b855f0551157d5ecb1b6829e2c&flight_date=datepicker";

// example of api resonse given by the website
const apiResponse = response.data;
if (Array.isArray(apiResponse['results'])) {
    apiResponse['results'].forEach(flight => {
        if (!flight['live']['is_ground']) {
            console.log(`${flight['airline']['name']} flight ${flight['flight']['iata']}`,
                `from ${flight['departure']['airport']} (${flight['departure']['iata']})`,
                `to ${flight['arrival']['airport']} (${flight['arrival']['iata']}) is in the air.`);
        }
    });
}
