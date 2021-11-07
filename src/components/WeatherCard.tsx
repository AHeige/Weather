import React, { useEffect } from "react"

//Constants
import weatherData from "../constants/weatherTest"

//Services
import weatherService from "../services/weatherService"

//Utils
import { resolveWeatherData } from "../utils/weather"

//Material-UI
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
//import CardMedia from "@mui/material/CardMedia"
import CardActionArea from "@mui/material/CardActionArea"
//import CardActions from "@mui/material/CardActions"

const WeatherCard = (city: any, weather: any, isLoading: boolean) => {
  const {
    weatherDescription,
    temp,
    tempMin,
    tempMax,
    feelsLike,
    sunRise,
    sunSet,
  } = resolveWeatherData(weather)

  useEffect(() => {
    if (city) {
      console.log(city.city)
      /* 
        setIsLoading(true)
        let weather = await weatherService(chosenCity)
      if (weather.status === 200) {
        setIsLoading(false)
        console.log(weather)
      } else console.log(weather.error) */
    }
  }, [city])

  return (
    <Card>
      <CardActionArea>
        <CardHeader title={city.city} />

        <Card>
          <CardContent>{weatherDescription}</CardContent>
          <CardContent>{temp}</CardContent>
          <CardContent>{temp}</CardContent>
        </Card>
      </CardActionArea>
    </Card>
  )
}

export default WeatherCard
