const ui = new UI();
const weatherAPI = new WeatherAPI();

// weatherAPI.weather();

const city = document.getElementById("search-weather");

city.addEventListener("submit", function (e) {
  e.preventDefault();
  const cityValue = document.getElementById("city-value").value;
  const stateValue = document.getElementById("state-value").value;

  weatherAPI.weather(cityValue, stateValue).then((data) => {
    console.log(data.res);
    ui.showWeather(data.res);
  });
});
