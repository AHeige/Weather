import React, { useState } from "react"

//Services
import getWeather from "../services/weatherService"

//Components
import CitySearch from "../components/CitySearch"
import WeatherCard from "../components/WeatherCard"

//Material-UI
import Grid from "@mui/material/Grid"

const WeatherPage = () => {
  const [city, setCity] = useState<string>("Göteborg")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [weather, setWeather] = useState({})

  const handleSearch = async (chosenCity: any) => {
    setCity(chosenCity)
    setIsLoading(true)
    let weather = await getWeather(chosenCity)
    if (weather.data) {
      setWeather(weather)
    } else if (weather.error) {
      console.error(weather.error)
    }
  }

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={4}>
          <CitySearch handleSearch={handleSearch} />
        </Grid>
        <Grid item xs={8}>
          {city && (
            <WeatherCard weather={weather} city={city} isLoading={isLoading} />
          )}
        </Grid>
      </Grid>
    </>
  )
}

export default WeatherPage
