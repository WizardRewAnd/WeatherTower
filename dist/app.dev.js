"use strict";

window.addEventListener('load', function () {
  var _long;

  var lat;

  if (nabigator.geolocation) {
    navigator.geolocation.getCurrentPositionPsition(function (position) {
      console.log(position);
    });
  }
});