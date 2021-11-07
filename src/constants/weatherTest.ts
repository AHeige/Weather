const weatherData = {
  coord: {
    lon: 18.0649,
    lat: 59.3326,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 6.88,
    feels_like: 4.39,
    temp_min: 6.17,
    temp_max: 7.95,
    pressure: 1002,
    humidity: 93,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 230,
  },
  clouds: {
    all: 90,
  },
  dt: 1635990986,
  sys: {
    type: 1,
    id: 1788,
    country: "SE",
    sunrise: 1636006474,
    sunset: 1636037280,
  },
  timezone: 3600,
  id: 2673730,
  name: "Stockholm",
  cod: 200,
}

export default weatherData
