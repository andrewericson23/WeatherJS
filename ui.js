class UI {

    paint(weather){
        document.getElementById('w-location').textContent = weather.name;
        document.getElementById('w-desc').textContent = weather.weather[0].main;
        document.getElementById('w-string').textContent = `${weather.main.temp | 0} °F`;
        document.getElementById('w-icon').setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
        document.getElementById('w-feels-like').textContent = `Feels Like ${weather.main.feels_like | 0} °F`;
        document.getElementById('w-humidity').textContent = `Relative Humidity: ${weather.main.humidity}%`;
        document.getElementById('w-wind').textContent = `Wind Speed: ${weather.wind.speed} mph`;
    }
    
}