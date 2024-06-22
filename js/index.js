const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const tempreture = document.querySelector('.tempreture');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('weather-body');


 async function checkWeather(city){
    const api_key = "35c6b9eb6f8536b955591a365b7979bd";
    const url = 'https://api.openweathermap.org/data/3.0/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}';

    const weather_data = await fetch(`${url}`).then(responce => responce.json());



   if(weather_data.cod === `404`){
    // location_not_found.style.display = "flex";
    // weather_body.style.display = "none";
    console.log("error");
    return;
   }



//    location_not_found.style.display = "none";
//     weather_body.style.display = "flex";
   tempreture.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
   description.innerHTML = `${weather_data.weather[0].desc}`;
   humidity.innerHTML = `${weather_data.main.humidity}%`;
   wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;


   switch(weather_data.weather[0].min){
    case 'Clouds':
        weather_img.src = "/assets/cloud.png";
        break;
    case 'Clear':
        weather_img.src = "/assets/clear.png";
        break;
    case 'Rain':
        weather_img.src = "/assets/rain.png";
        break;
    case 'Mist':
        weather_img.src = "/assets/mist.png";
        break;
    case 'Snow':
        weather_img.src = "/assets/snow.png";
        break;
   }
   console.log(weather_data);

}


document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('inputBox').Values;
    checkWeather(city);
});