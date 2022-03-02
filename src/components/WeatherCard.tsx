import React, { useEffect, useState } from "react"

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"

//Material-UI
import Card from "@mui/material/Card"

//Components
import WeatherContentSimple from "./WeatherContentSimple"

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
      setIsDataFound(false)
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
            width: "30em",
            textAlign: "left",
            backgroundColor: `rgb(255,255,255,0.8)`,
          }}>
          <WeatherContentSimple weather={weather} />
        </Card>
      )}
    </>
  )
}

export default WeatherCard
