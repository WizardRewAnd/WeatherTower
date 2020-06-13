window.addEventListener('load', ()=> {
let long;
let lat;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        long = position.coords.longitude;
        lat = position.coords.latitude;

        const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
        exclude={part}&appid=10debf3b6ce86c4a9a95946f0f44055e`;

        fetch (api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
        });
    }
});