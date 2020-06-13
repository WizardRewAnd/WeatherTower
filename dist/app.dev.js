"use strict";

window.addEventListener('load', function () {
  var _long;

  var lat;
  var temperatureDegree = document.querySelector(".temperature-degree");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      _long = position.coords.longitude;
      lat = position.coords.latitude;
      var api = "https://api.openweathermap.org/data/2.5/onecall?lat=".concat(lat, "&lon=").concat(_long, "&\n        exclude={part}&units=metric&appid=10debf3b6ce86c4a9a95946f0f44055e");
      fetch(api).then(function (response) {
        return response.json();
      }).then(function (data) {
        //const weatherTemp = data.current.temp;
        temperatureDegree.textContent = data.current.temp;
      });
    });
  }
});