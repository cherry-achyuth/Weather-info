const api = "http://api.openweathermap.org/data/2.5/weather?APPID=4a8e21b6dd51de6f5937b1c71e1a5f99&units=metric&q=";

const inputbox = document.querySelector("#search input");
const btn = document.querySelector("#search button");
let weather = document.querySelector("#icon");


async function checkWeather(city){
    let response = await fetch(api+`${city}`);
    let data = await  response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;;
   
     
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    

    document.querySelector("#humi-percentage").innerHTML=data.main.humidity+"%";

    document.querySelector("#wind-percentage").innerHTML=data.wind.speed+" Km/h"

    
    if(data.weather[0].main=="Clear"){
        weather.classList="fa-solid fa-sun"
    }else  if(data.weather[0].main=="Rain"){
        weather.classList="fa-solid fa-cloud-rain"
    }else  if(data.weather[0].main=="Drizzle"){
        weather.classList="fa-solid fa-cloud-sun-rain"
    }else  if(data.weather[0].main=="Mist"){
        weather.classList="fa-solid fa-cloud-sun    "
    }else if(data.weather[0].main=="Clouds"){
        weather.classList="fa-solid fa-cloud";
    }

    document.querySelector(".weather").style.display="block";    
}

btn.addEventListener("click",()=>{
    checkWeather(inputbox.value);
})


