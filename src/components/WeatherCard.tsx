import React, { useContext, useEffect, useState } from "react"

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"

//Material-UI
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"

//Components
import WeatherContentSimple from "./WeatherContentSimple"

//Contexts
import weatherContext from "../contexts/weatherContext"

//Utils
import weatherImg from "../utils/weatherImg"

const WeatherCard = (city: any) => {
  const { weatherType } = useContext(weatherContext)

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

  console.log(weatherImg(weatherType))

  return (
    <>
      {isDataFound && (
        <Card
          style={{
            height: "fit-content",
            alignContent: "left",
            width: "60vh",
            textAlign: "left",
          }}
        >
          <WeatherContentSimple weather={weather} />
        </Card>
      )}
    </>
  )
}

export default WeatherCard
