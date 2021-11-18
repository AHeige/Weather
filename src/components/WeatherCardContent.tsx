import React from "react"

//Material-ui
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"

//Utils
import { resolveWeatherData } from "../utils/weather"

const WeatherCardContent = (weather: any) => {
  const {
    weatherDescription,
    temp,
    tempMin,
    tempMax,
    feelsLike,
    sunRise,
    sunSet,
  } = resolveWeatherData(weather)

  return (
    <Card>
      <CardContent>{weatherDescription}</CardContent>
      <CardContent>{temp}</CardContent>
      <CardContent>{temp}</CardContent>
    </Card>
  )
}

export default WeatherCardContent
