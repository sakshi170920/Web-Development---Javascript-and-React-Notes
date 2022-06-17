//This file is for all interaction with weather api

class Forecast{
    constructor(){
        this.key = 'FEOYT79kLCZZGWeEjvtc8lMsvEdPvHsx';
        this.cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async getCityData(city)
    {
        const query = `?apikey=${this.key}&q=${city}`; //base_url/?query1_name=query1&query1_name=query1&query1_name=query1

        const response = await fetch(this.cityURL+query);
        if(response.status != 200)
            throw new Error;
        const data = await response.json();
        return data[0]; //it returns all matching cities in order of closest match , so first one is the closest match
    }
    async getWeatherDetails(key_code)
    {
        const query = `?apikey=${this.key}`; 
        const response = await fetch(this.weatherURL+key_code+ query);
        if(response.status != 200)
            throw new Error;
        const data = await response.json();
        return data; //it returns all matching cities in order of closest match , so first one is the closest match    
    }
    async updateCity(city){
    const cityDetails = await this.getCityData(city); //we can call them directly as forecast.js is written before app.js in index.html
    const weatherDetails = await this.getWeatherDetails(cityDetails.Key);
    // {
    //     cityDetails : cityDetails,
    //     weatherDetails : weatherDetails,
    // }
    // when object name is same as the value we can write only one value
    return {cityDetails,weatherDetails};
    }
}


// const key_code = getCityData('pune')
// .then((key_code)=> {
//     console.log(key_code);
//     return getWeatherDetails(key_code);
// })
// .then((data)=> console.log(data))
// .catch(err=> console.log(err.message));

