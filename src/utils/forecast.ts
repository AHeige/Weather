import { Forecast } from "../interface/forecast"
import { resolveWeatherIcon } from "./weather"
import moment from "moment"

export const resolveForecastData = (forecast: Forecast) => {
  const forecastData = forecast.forecast.list

  let forecastList: any = []

  //Turn time string into a weekday output
  const getWeekday = (dateFormat: any) => {
    //put them in Date method

    //and return weekday in long format
    const weekday = moment(dateFormat).format("ddd")

    return weekday
  }

  //Turn time string into hours and minutes
  const getTime = (timeData: any) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format("HH:mm")
    return time
  }

  const getDate = (timeData: any) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format("MM/dd/yyyy")
    return time
  }

  forecastData.forEach((data) => {
    const snapshot = {
      temp: data.main.temp + "°",
      day: getWeekday(data.dt_txt),
      time: getTime(data.dt_txt),
      date: getDate(data.dt_txt),
      key: data.dt,
      desc: data.weather[0].description,
      icon: resolveWeatherIcon(data.weather[0].icon),
    }
    forecastList.push(snapshot)
  })

  const resolveForecast = {
    list: forecastList,
  }

  function groupBy(objectArray: any, property: any) {
    return objectArray.reduce(function(acc: any, obj: any) {
      let key = obj[property]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(obj)
      return acc
    }, {})
  }

  //Groups array on date
  const week = groupBy(resolveForecast.list, "date")

  return resolveForecast
}
