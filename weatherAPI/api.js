class WeatherAPI {
  constructor() {
    this.client_key = "638f24bfdcba6d2e495a079fe6fd882f";
  }

  async weather(city, state) {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${this.client_key}`
    );

    const res = await data.json();
    return {
      res,
    };
  }
}
