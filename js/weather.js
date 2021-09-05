
const API_KEY = "56c2b049ce4d3ed759964ba9ed086cfa";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    ///api를 제공해주는 url로 가져온다. 
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ///fetch를 이용해서 원하는 데이터를 가져온다 . fetch then을 이용 
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}

function ONgeoError(){
    alert("Can't find you No weather for yoy")
}

navigator.geolocation.getCurrentPosition(onGeoOk, ONgeoError)


