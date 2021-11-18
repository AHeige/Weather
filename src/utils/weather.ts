export const resolveWeatherData = (weather: any) => {
  const weatherObject = weather.weather

  console.log(weatherObject)

  const resolveWeather = {
    weatherType: weatherObject.weather.main,
    weatherDescription: weatherObject.weather[0].description,
    temp: weatherObject.main.temp,
    tempMin: weatherObject.main.temp_min,
    tempMax: weatherObject.main.temp_max,
    feelsLike: weatherObject.main.feels_like,
    sunRise: weatherObject.sys.sunrise,
    sunSet: weatherObject.sys.sunSet,
  }

  return resolveWeather
}

/* {
   "weather":{
      "coord":{
         "lon":43.7064,
         "lat":37.15
      },
      "weather":[
         {
            "id":804,
            "main":"Clouds",
            "description":"overcast clouds",
            "icon":"04d"
         }
      ],
      "base":"stations",
      "main":{
         "temp":14.15,
         "feels_like":12.22,
         "temp_min":14.15,
         "temp_max":14.15,
         "pressure":1018,
         "humidity":23,
         "sea_level":1018,
         "grnd_level":883
      },
      "visibility":10000,
      "wind":{
         "speed":1.47,
         "deg":199,
         "gust":1.06
      },
      "clouds":{
         "all":85
      },
      "dt":1637229829,
      "sys":{
         "type":1,
         "id":7025,
         "country":"IQ",
         "sunrise":1637207236,
         "sunset":1637243623
      },
      "timezone":10800,
      "id":317953,
      "name":"Ale",
      "cod":200
   }
} */
