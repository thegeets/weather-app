const apiKey="5b1a68ebd4b708dbd33132bfb7a45a34";

const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{

let city=document.getElementById("city").value;

getWeather(city);

});

async function getWeather(city){

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response=await fetch(url);

if(!response.ok){

alert("City Not Found");

return;

}

const data=await response.json();

document.getElementById("cityName").innerHTML=data.name;

document.getElementById("temp").innerHTML=Math.round(data.main.temp)+"°C";

document.getElementById("description").innerHTML=data.weather[0].description;

document.getElementById("humidity").innerHTML=data.main.humidity+"%";

document.getElementById("wind").innerHTML=data.wind.speed+" km/h";

document.getElementById("feels").innerHTML=Math.round(data.main.feels_like)+"°C";

document.getElementById("icon").src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

}

getWeather("Pokhara");
