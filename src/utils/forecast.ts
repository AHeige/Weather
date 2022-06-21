import { Forecast } from "../interface/forecast"
import moment from "moment"

export const resolveForecastData = (forecast: Forecast) => {
  const forecastData = forecast.forecast.list

  let forecastList: any = []

  //Turn time string into a weekday output
  const getWeekday = (dateFormat: any) => {
    // split date in non-digit chaarcters
    let [d, m, y] = dateFormat.split(/\D/)

    //put them in Date method
    const date = new Date(y, m - 1, d)
    //and return weekday in long format
    const weekday = date.toLocaleString("default", { weekday: "short" })

    return weekday
  }

  //Turn time string into hours and minutes
  const getTime = (timeData: any) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format("HH:mm")
    return time
  }

  forecastData.forEach((data) => {
    const snapshot = {
      temp: data.main.temp + "°",
      day: getWeekday(data.dt_txt),
      time: getTime(data.dt_txt),
      key: data.dt,
    }
    forecastList.push(snapshot)
  })

  const resolveForecast = {
    list: forecastList,
  }

  return resolveForecast
}
