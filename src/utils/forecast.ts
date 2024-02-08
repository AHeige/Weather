import { ForeCastDay, ForecastData } from '../interface/forecast'
import { groupBy } from './arrayUtils'
import { resolveWeatherIcon } from './weather'
import moment from 'moment'

export const resolveForecastData = (forecast: ForecastData) => {
  const forecastData = forecast.list

  let forecastList: ForeCastDay[] = []

  //Turn time string into a weekday output
  const getWeekday = (dateFormat: any) => {
    //put them in Date method

    //and return weekday in long format
    const weekday = moment(dateFormat).format('ddd')

    return weekday
  }

  const getWeekdayLong = (dateformat: any) => {
    const weekdayLong = moment(dateformat).format('dddd')
    return weekdayLong
  }

  //Turn time string into hours and minutes
  const getTime = (timeData: any) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format('HH:mm')
    return time
  }

  const getDate = (timeData: any) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format('MM/dd/yyyy')
    return time
  }

  forecastData.forEach((data) => {
    const snapshot = {
      temp: data.main.temp + '°',
      min: data.main.temp_min,
      max: data.main.temp_max,
      humidity: data.main.humidity,
      riskOfRain: data.main.humidity >= 90,
      wind: data.wind.speed,
      day: getWeekday(data.dt_txt),
      dayLong: getWeekdayLong(data.dt_txt),
      time: getTime(data.dt_txt),
      date: getDate(data.dt_txt),
      key: data.dt,
      desc: data.weather[0].description,
      icon: resolveWeatherIcon(data.weather[0].icon),
    }

    forecastList.push(snapshot)
  })

  //Groups array on date
  const week = groupBy(forecastList, 'day')

  return week
}
