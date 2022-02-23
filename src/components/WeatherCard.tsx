import React, { useContext, useEffect, useState } from "react"

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"

//Material-UI
import Card from "@mui/material/Card"

//Components
import WeatherContentSimple from "./WeatherContentSimple"
import { Typography } from "@mui/material"

const WeatherCard = (city: any) => {
  const [weather, setWeather] = useState({})
  const [isDataFound, setIsDataFound] = useState<boolean>(false)

  city = Object.values(city).toString()

  useEffect(() => {
    if (city) {
      handleSearch(city)
    }
  }, [city])

  const handleSearch = async (chosenCity: any) => {
    let weather = await getWeather(chosenCity)
    if (weather.data) {
      setWeather(weather.data)
      setIsDataFound(true)
    } else if (weather.error) {
      console.error(weather.error)
    }
  }

  return (
    <>
      {isDataFound && (
        <Card
          style={{
            height: "fit-content",
            alignContent: "left",
            width: "60vh",
          }}>
          <Typography>{city}</Typography>
          <WeatherContentSimple weather={weather} />
        </Card>
      )}
    </>
  )
}

export default WeatherCard
