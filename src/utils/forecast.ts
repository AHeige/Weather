import { Forecast } from "../interface/forecast";
import moment from "moment";

export const resolveForecastData = (forecast: Forecast) => {
  const forecastData = forecast.forecast.list;

  let forecastList: any = [];

  //Turn time string into a weekday output
  const getWeekday = (dateFormat: any) => {
    //put them in Date method
    const date = new Date(dateFormat);
    //and return weekday in long format
    const weekday = date.toLocaleString("default", { weekday: "short" });

    return weekday;
  };

  //Turn time string into hours and minutes
  const getTime = (timeData: any) => {
    // split date in non-digit chaarcters

    const time = moment(timeData).format("HH:mm");
    return time;
  };

  forecastData.forEach((data) => {
    const snapshot = {
      temp: data.main.temp + "°",
      day: getWeekday(data.dt_txt),
      time: getTime(data.dt_txt),
      key: data.dt,
    };
    forecastList.push(snapshot);
  });

  const resolveForecast = {
    list: forecastList,
  };

  function groupBy(objectArray: any, property: any) {
    return objectArray.reduce(function(acc: any, obj: any) {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const week = groupBy(resolveForecast.list, "day");
  console.log(week);

  return resolveForecast;
};
