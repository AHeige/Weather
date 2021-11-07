export const resolveWeatherData = (weather: any) => {
  const resolveWeather = {
    weatherType: weather.weather.main,
    weatherDescription: weather.weather.description,
    temp: weather.main.temp,
    tempMin: weather.main.temp_min,
    tempMax: weather.main.max,
    feelsLike: weather.main.feels_like,
    sunRise: weather.sys.sunrise,
    sunSet: weather.sys.sunSet,
  }

  return resolveWeather
}
