
//this is the API key to connect to google map
var geocodeAPIKey = "AIzaSyCwNaz5Bmslhow07fcVPJxuQLu6e1Diu50";

//this is the geocide to get the reverse
var geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json";

$(document).ready(function(){

  //This code will determine the player location
  navigator.geolocation.getCurrentPosition(gotCoordinatesData);
});

//the function is written here
function gotCoordinatesData (data) {

  //A string to add the player location
  var coords = data.coords.latitude + ',' + data.coords.longitude;

  //tell the program we are looking for an address
  var resultType = 'street_address';

  // Construct our querying URL
  var url = geocodeURL + '?latlng=' + coords + '&result_type=' + resultType + '&key=' + geocodeAPIKey;

  // Use getJSON to request geocoding data from Google
  $.getJSON(url,gotGeocodeData);
};

function gotGeocodeData (data) {
  //pull out the user address
  var address = data.results[0].formatted_address;

  console.log(address);

  // Check if they're in the good position (EV building Concordia)
  if (address.indexOf("1515 Saint-Catherine St W, Montreal, QC H3G 2W1") != -1) {
    // if so the display is true
    $('#true').css('display','block');
  }
  else {
    // They're not you get the "fail" message
    $('#fail').css('display','block');
  }
};
