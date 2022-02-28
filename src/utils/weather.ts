import { countries } from "country-data"

export const resolveWeatherData = (weather: any) => {
  const weatherObject = weather.weather

  const capitalize = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const resolveWeather = {
    weatherType: weatherObject.weather[0].main,
    weatherDescription: capitalize(weatherObject.weather[0].description),
    temp: Math.round(weatherObject.main.temp) + "°",
    tempMin: weatherObject.main.temp_min + "°",
    tempMax: weatherObject.main.temp_max + "°",
    feelsLike: weatherObject.main.feels_like + "°",
    sunRise: weatherObject.sys.sunrise,
    sunSet: weatherObject.sys.sunSet,
    wind: weatherObject.wind.speed + "m/s",
    weatherIcon: resolveWeatherIcon(weatherObject.weather[0].icon),
    city: weatherObject.name,
    country: countries[weatherObject.sys.country].name,
    countryCode: weatherObject.sys.country,
  }

  return resolveWeather
}

export const resolveWeatherIcon = (icon: string) => {
  const iconUrl = "http://openweathermap.org/img/wn/"

  const iconImgType = ".png"

  const iconList: any = {
    "01d": "01d@2x",
    "02d": "02d@2x",
    "03d": "03d@2x",
    "04d": "04d@2x",
    "09d": "09d@2x",
    "10d": "10d@2x",
    "11d": "11d@2x",
    "13d": "13d@2x",
    "50d": "50d@2x",
    "01n": "01n@2x",
    "02n": "02n@2x",
    "03n": "03n@2x",
    "04n": "04n@2x",
    "09n": "09n@2x",
    "10n": "10n@2x",
    "11n": "11n@2x",
    "13n": "13n@2x",
    "50n": "50n@2x",
  }

  let weatherIcon = iconUrl.concat(iconList[icon], iconImgType)
  return weatherIcon
}
