import React, { useEffect, useState } from "react"

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"

//Material-UI
import Grid from "@mui/material/Grid"

//Components
//import WeatherCardContent from "./WeatherCardContent"
import WeatherContentSimple from "./WeatherContentSimple"

const WeatherCard = (city: any) => {
  const [weather, setWeather] = useState({})
  const [isDataFound, setIsDataFound] = useState<boolean>(false)

  useEffect(() => {
    if (city) {
      handleSearch(Object.values(city).toString())
    }
  }, [city])

  const handleSearch = async (chosenCity: any) => {
    /*     let weather = await weatherData
    if (weather) {
      setWeather(weather)
      setIsDataFound(true)
    } */
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
      {/*       <Grid item xs={12} style={{ fontSize: "2.5em" }}>
        {city.city}
      </Grid> */}
      <Grid item>
        {isDataFound && <WeatherContentSimple weather={weather} />}
        {/* {isDataFound && <WeatherCardContent weather={weather} />} */}
      </Grid>
    </>
  )
}

export default WeatherCard
