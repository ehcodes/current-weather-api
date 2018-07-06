//what can the user do?
// what does the user expect?
// What can the user see?

$('form').on("submit", function(e){
  e.preventDefault();

  let city = $("#cityIn").val();
  let country = $("#CountryIn").val();
  let apiKey = "";
  let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=" + apiKey + '&units=imperial';

  $.ajax({
    url: apiUrl,
    success: function(response) {
      $("h2").html("It is now " + response.main.temp + " degrees in " + response.name);// server response
      console.log(response)
    },
    error: function(r){
      console.log('error')
    }
  })
});











// $(h1).attr("src", response.hdurl);
