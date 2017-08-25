var cel = false;
function displayTemp(fTemp, c){
  if (c) return Math.round((fTemp + 32) * (5/9)) + "F";
    return Math.round(fTemp) + "C"
}
function render(wd, cel){
      var currentLocation = wd.name;
      var currentWeather = wd.weather[0].description;
      var currentTemp = displayTemp(wd.main.temp,cel);
      var low = displayTemp(wd.main.temp_min, cel);
      var high = displayTemp(wd.main.temp_max, cel);
      var icon = wd.weather[0].icon;
  //call to the weather API
      
      $('#currentLocation').html("The current weather in " + currentLocation + " is");
      $('#currentTemp').html(currentTemp);
      $('#currentWeather').html(currentWeather);
      $('#high-low').html(high + "/" + low);
      $('#currentTemp').prepend('<img src=' + icon + '>');

}

$(function(){
  var loc;
  $.getJSON('https://ipinfo.io', function(d){
    loc = d.loc.split(',');
    console.log(loc);
    
    $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' + loc[0] + '&lon=' + loc[1], 
    function(wd){
      render(wd, cel)
    
      $('#toggle').click(function(){
       cel = !cel;     
       render(wd,cel);
                          })

    })
  })
})

//get lat and long
//https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139 