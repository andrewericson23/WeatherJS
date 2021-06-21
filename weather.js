class Weather {
    constructor(city){
        this.apiKey = '9d4eb254d9a366453cf66c897cd62695';
        this.city = city;
    }

    //Fetch weather from API
    async getWeather(){
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

        const responseData = await response.json();
        return responseData;
    }

    //Change weather location
    changeLocation(city){
        this.city = city;
  }

}