// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url:
        "http://api.wunderground.com/api/c9885877ee425da0/geolookup/conditions/q/"+lat+","+long+".json",
         dataType : "jsonp",
        success : function(data) {
        var location = data.location.city;
        var state = data.location.state;
        var temp_f = data['current_observation']['temp_f'];
        var current_weather = data['current_observation']['weather'];
        var feelslike_t = data['current_observation']['feelslike_f'];
        var wind = data['current_observation']['wind_mph'];
        var precip = data['current_observation']['precip_today_string'];
        console.log("Current temperature in " + location + " is: " + temp_f);
        console.log(data);
 

            
    let city = document.getElementById("cityDisplay");
    let current_temp = document.getElementById("currentTemp");
    let cur_weather = document.getElementById("summary");
    let feels_t = document.getElementById("add1");
    let windSpeed = document.getElementById("add2");
    let precipitation = document.getElementById("add3");
            
      city.innerHTML = location + ", " + state;
      current_temp.innerHTML = Math.round(temp_f) + "°F";  
      cur_weather.innerHTML = current_weather;
      feels_t.innerHTML = "Feelslike: " + feelslike_t + "°F";
      windSpeed.innerHTML = "Wind: " + wind + "mph";
      precipitation.innerHTML = "precipitation: " + precip; 
      

    
    
      $("#cover").fadeOut(250);
    }
           });
      
  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
