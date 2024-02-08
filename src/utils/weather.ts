import { countries } from 'country-data'
import moment from 'moment'
import { WeatherData } from '../interface/weatherData'

export const resolveWeatherData = (weatherData: WeatherData) => {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const getTime = (timeData: number) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format('HH:mm')
    return time
  }

  // Function to convert Unix timestamp to local time
  function convertUnixTimestampToLocalTime(timestamp: number, timezoneOffset: number): String {
    const utcDate = new Date(timestamp * 1000) // Convert Unix timestamp to milliseconds
    const localDate = new Date(utcDate.getTime() + timezoneOffset)

    const formatedDate = new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(localDate)

    return formatedDate
  }

  // Extract timezone offset from weather data
  const timezoneOffsetSeconds = weatherData.timezone

  // Convert Unix timestamp to local time at the specified location
  const currentLocalTime = convertUnixTimestampToLocalTime(weatherData.dt, timezoneOffsetSeconds)

  const resolveWeather = {
    weatherType: weatherData.weather[0].main,
    weatherDescription: capitalize(weatherData.weather[0].description),
    temp: Math.round(weatherData.main.temp) + '°',
    tempMin: weatherData.main.temp_min + '°',
    tempMax: weatherData.main.temp_max + '°',
    feelsLike: weatherData.main.feels_like + '°',
    sunRise: getTime(weatherData.sys.sunrise),
    sunSet: getTime(weatherData.sys.sunset),
    wind: weatherData.wind.speed + 'm/s',
    weatherIcon: resolveWeatherIcon(weatherData.weather[0].icon),
    city: weatherData.name,
    country: countries[weatherData.sys.country].name,
    countryCode: weatherData.sys.country,
    riskOfRain: weatherData.main.humidity >= 90,
    humidity: weatherData.main.humidity,
    localTime: currentLocalTime,
  }

  return resolveWeather
}

export const resolveWeatherIcon = (icon: string) => {
  const iconUrl = 'http://openweathermap.org/img/wn/'

  const iconImgType = '.png'

  interface IconList {
    [key: string]: string
  }

  const iconList: IconList = {
    '01d': '01d@2x',
    '02d': '02d@2x',
    '03d': '03d@2x',
    '04d': '04d@2x',
    '09d': '09d@2x',
    '10d': '10d@2x',
    '11d': '11d@2x',
    '13d': '13d@2x',
    '50d': '50d@2x',
    '01n': '01n@2x',
    '02n': '02n@2x',
    '03n': '03n@2x',
    '04n': '04n@2x',
    '09n': '09n@2x',
    '10n': '10n@2x',
    '11n': '11n@2x',
    '13n': '13n@2x',
    '50n': '50n@2x',
  }

  let weatherIcon = iconUrl.concat(iconList[icon], iconImgType)
  return weatherIcon
}
