"use strict";window.addEventListener("load",function(){var n,a;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(o){n=o.coords.longitude,a=o.coords.latitude;var t="https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&\n        exclude={part}&appid=10debf3b6ce86c4a9a95946f0f44055e");fetch(t).then(function(o){return o.json()}).then(function(o){console.log(o)})})});