class Storage {
    constructor(){
        this.city;
        this.defaultCity = 'dallas';
    }

    

    setLocationData(city){
        localStorage.setItem('city', city);
    }
}