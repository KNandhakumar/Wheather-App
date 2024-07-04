// API key
let API_KEY = "2d9faa8bd8edf65674a942029a9f1786";

// Function to get weather data
let getWeatherData = (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather';
  const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`; // Use metric units for Celsius
  const weatherPromise = fetch(Full_Url);
  
  return weatherPromise.then((response) => {
    return response.json();
  });
};

// Function to search for a city's weather
let searchCity = () => {
  const city = document.getElementById('city-input').value;

  getWeatherData(city)
    .then((response) => {
      showWeatherData(response);
    })
    .catch((err) => {
      console.log(err)
    });
};

// Function to display weather data
let showWeatherData = (weatherData) => {
  document.getElementById('city-name').textContent = weatherData.name;
  document.getElementById('weather-type').textContent = weatherData.weather[0].main;
  document.getElementById('temp').textContent = weatherData.main.temp;
  document.getElementById('min-temp').textContent = weatherData.main.temp_min;
  document.getElementById('max-temp').textContent = weatherData.main.temp_max;
};
