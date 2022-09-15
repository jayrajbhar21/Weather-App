// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
key: "2a13eef860d9f3b916fd09cf58efa680",
baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}


// Event Listner Function on key press

// Get weather Report

//show weather Report

// Date manage


// Event Listner Function on key press

const searchInputBox = document.getElementById("inputBox");
searchInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode ==13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value)

    }
});

// Get weather Report

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

//show weather Report

function showWeatherReport(weather){
    console.log(weather);

    let city = document.querySelector('#city');
    // city.innerText
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temp = document.getElementById('temp');
    temp.innerText = `${weather.main.temp}`

    let tempminMax = document.getElementById('min-max');
    tempminMax.innerHTML =`${weather.(main.Math.floor(temp_min))}$degree;C / ${weather.main.(Math.ceil(temp_max))}$degree;C `
  
    // temp.innerText = `${weather.main.temp_min},${weather.main.temp_max}`
}

// function showWeatherReport(weather){
    // console.log(weather);
// } 