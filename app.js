//init storage
const storage = new Storage();
//init weather object
const weather = new Weather('los angeles');
//init ui
const ui = new UI();



//get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event (button click)
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    
    localStorage.setItem("city", document.getElementById('city').value);
    weather.changeLocation(localStorage.getItem('city'));

    /* const city = document.getElementById('city').value;
    weather.changeLocation(city); */

    getWeather();

    //close modal
    $('#locModal').modal('hide');
});

/* //change location event (enter key pressed)
document.getElementById('locModal').addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("w-change-btn").click();
    }
});   */  

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.paint(results); 
    })
    .catch(err => console.log(err));
}



