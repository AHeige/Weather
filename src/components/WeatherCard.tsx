import React, { useEffect, useState } from "react"

//Constants
import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"

//Material-UI
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import Grid from "@mui/material/Grid"

//Components
import WeatherCardContent from "./WeatherCardContent"

const WeatherCard = (city: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather] = useState({})
  const [isDataFound, setIsDataFound] = useState<boolean>(false)

  useEffect(() => {
    if (city) {
      handleSearch(Object.values(city).toString())
    }
  }, [city])

  const handleSearch = async (chosenCity: any) => {
    setIsLoading(true)
    /*     let weather = await weatherData
    if (weather) {
      setWeather(weather)
      setIsDataFound(true)
    } */
    let weather = await getWeather(chosenCity)
    if (weather.data) {
      setWeather(weather.data)
      setIsLoading(false)
      setIsDataFound(true)
    } else if (weather.error) {
      console.error(weather.error)
    }
  }

  return (
    <Card>
      <CardHeader title={city.city} />
      {isDataFound && <WeatherCardContent weather={weather} />}
    </Card>
  )
}

export default WeatherCard
