export const resolveWeatherData = (weather: any) => {
  const weatherObject = weather.weather

  console.log(weatherObject)

  const resolveWeather = {
    weatherType: weatherObject.weather[0].main,
    weatherDescription: resolveWeatherDescription(
      weatherObject.weather[0].description
    ),
    temp: Math.round(weatherObject.main.temp),
    tempMin: weatherObject.main.temp_min,
    tempMax: weatherObject.main.temp_max,
    feelsLike: weatherObject.main.feels_like,
    sunRise: weatherObject.sys.sunrise,
    sunSet: weatherObject.sys.sunSet,
    weatherIcon: resolveWeatherIcon(weatherObject.weather[0].icon),
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

const resolveWeatherDescription = (weatherDescription: string) => {
  const weatherTranslation: any = {
    "clear sky": "Klar himmel",
    "few clouds": "Några moln",
    "scattered clouds": "Spridda moln",
    "broken clouds": "Överskuggade moln",
    "overcast clouds": "Spridda moln",
    "shower rain": "Regnskur",
    rain: "Regn",
    thunderstorm: "Åskväder",
    snow: "Snö",
    mist: "Dimma",
  }

  return weatherTranslation[weatherDescription]
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
