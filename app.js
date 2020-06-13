window.addEventListener('load', ()=> {
let long;
let lat;

if(nabigator.geolocation) {
    navigator.geolocation.getCurrentPositionPsition
    (position => {
        console.log(position);
        });
}
});