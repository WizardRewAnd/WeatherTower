window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let locationTimeZone = document.querySelector(".location-timezone");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
            exclude={part}&units=metric&appid=10debf3b6ce86c4a9a95946f0f44055e`;

            fetch (api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    temperatureDegree.textContent = data.current.temp;
                    temperatureDescription.textContent = data.current.weather.shift().description;
                    locationTimeZone.textContent = data.timezone;

                    console.log(data)

                    //setIcons(temperatureDescription, document.querySelector('.icon'));
                });
            });
            //setIcons(document.querySelector(".icon"));
        }

        let skycons = new Skycons({"color": "white"});
        skycons.add("icon", Skycons.RAIN);
        skycons.play();

});