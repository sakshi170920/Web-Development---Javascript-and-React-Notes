//This file is for all inds of dom manipulation

const cityForm = document.querySelector('.change-location');
const detailsForm = document.querySelector(".details");
const card = document.querySelector('.card');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

const updateUI = async (info)=>{

    const cityDetails = info.cityDetails;
    const weatherDetails = info.weatherDetails[0];

    /*******************Destructure Property*********************/
    //now as we want to store info object's two properties citydetals and weatherDetails
    //in the same const variable as their property name , we can jst desturcuture them

    //destructure property into const names
    // const {cityDetails,weatherDetails} = info;

    //it takes info object and searches cityDetails,weatherDetails properites
    //and then assign const variables of same name with their values
    
    //update city name

    // detailsForm.children[1].innerHTML = info['weatherDetails'][0].WeatherText;
    // detailsForm.children[2].children[0].innerHTML = info['weatherDetails'][0].Temperature.Metric.Value;
    detailsForm.innerHTML = 
    `<h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weatherDetails.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weatherDetails.Temperature.Metric.Value}</span>
        <!-- special code for degree sign -->
        <span>&deg;</span>  
    </div>`;

    let timeSrc = weatherDetails.IsDayTime  ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src',timeSrc);
    icon.setAttribute('src',`img/icons/${weatherDetails.WeatherIcon}.svg`);


    //display card
    if(card.classList.contains('d-none'))
        card.classList.remove('d-none');


}


cityForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const city = cityForm.city.value.trim();
    //console.log(city);
    forecast.updateCity(city).then( data => {
        console.log(data);
        return updateUI(data);
    })
    .then()
    .catch( err=> console.log(err));
    cityForm.reset();

    //store in local storage
    localStorage.setItem("city",city);
});

if(localStorage.getItem("city")){ //if there is a city in local storage , display that card
    forecast.updateCity(localStorage.getItem("city")).then(
        data => {
            console.log(data);
            return updateUI(data);
        })
        .then()
        .catch( err=> console.log(err));
}
