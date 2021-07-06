
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
let weatherIcon = '';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      console.log(data.weather[0].main)

      if (data.weather[0].main == 'Clouds') {
        weatherIcon = '<i class="fas fa-cloud"></i>'
      } else if (data.weather[0].main == 'Rain') {
        weatherIcon = '<i class="fas fa-cloud-rain"></i>'
      } else if (data.weather[0].main == 'Clear') {
        weatherIcon = '<i class="fas fa-sun"></i>'
      } else if (data.weather[0].main == 'Snow') {
        weatherIcon = '<i class="fas fa-snowflake"></i>'
      };
      const temperture = data.main.temp.toFixed(1);
      weather.innerHTML = `${weatherIcon} ${temperture}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

if (data.weather[0].main == 'Clouds') {
  weatherIcon = '<i class="fas fa-cloud"></i>'
} else if (data.weather[0].main == 'Rain') {
  weatherIcon = '<i class="fas fa-cloud-rain"></i>'
} else if (data.weather[0].main == 'Clear') {
  weatherIcon = '<i class="fas fa-sun"></i>'
} else if (data.weather[0].main == 'Snow') {
  weatherIcon = '<i class="fas fa-snowflake"></i>'
};