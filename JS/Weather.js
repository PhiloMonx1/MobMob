const weather = document.querySelector("#weather :nth-child(1)");
const temp = document.querySelector("#weather :nth-child(2)");
const city = document.querySelector("#weather :nth-child(3)");
const API_KIY = "7cc8ea65903c70b222adfef5ce97e148";

function okGeo(event){
    const lat = event.coords.latitude;
    const lon = event.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KIY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        nowWeather = data.weather[0].main;
        nowTemp = data.main.temp;
        cityName = data.name;
        if(nowWeather === "Clear"){
            weather.innerText = "🌞";
        }else{
            weather.innerText = nowWeather;
        }
        temp.innerText = `${nowTemp}°C`;
        city.innerText = cityName;
    });
}
function notGeo(){
    alert("위치를 찾을 수 없습니다. 날씨 정보를 불러오지 못합니다")
}

navigator.geolocation.getCurrentPosition(okGeo, notGeo);