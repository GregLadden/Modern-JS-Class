class UI {
  constructor() {
    this.cityForecast = document.getElementById("city-forecast");
  }

  showWeather(city) {
    this.cityForecast.innerHTML = `
      <div class="flex justify-center">
        <p class="font-bold mr-4">City Temp: ${city.name}</p>
        <p class="mr-8">${Math.round(city.main.temp)}&#8457</p>
        <p class="mr-8"><span class="font-bold">Feels Like</span> ${Math.round(
          city.main.feels_like
        )}&#8457</p>
        <p><span class="font-bold">Wind speed</span> ${Math.round(
          city.wind.speed
        )}mph</p>
      </div>
    `;
  }
}
