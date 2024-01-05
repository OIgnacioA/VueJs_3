import { ref } from 'vue';

class WeatherService {
  constructor() {
    this.weatherData = ref({});
    this.apiKey = 'ccfaa7014a75a2117230c8727a5ef60b';
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  }

  async fetchWeather(city) {
    try {
      const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error al obtener datos del clima: ${response.status}`);
      }

      const json = await response.json();
      this.weatherData.value = json;
    } catch (error) {
      console.error(error);
    }
  }

  getWeatherData() {
    return this.weatherData;
  }
}

export default WeatherService;
