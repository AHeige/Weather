import React, { useEffect, useState } from "react"

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"
import getForecast from "../services/forecastService"

//Material-UI
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import Typography from "@material-ui/core/Typography"

//Components
import WeatherContentSimple from "./WeatherContentSimple"
import ForecastCard from "./ForecastCard"
import ForecastToday from "./ForecastToday"
import SnackBar from "./SnackBar"

const WeatherCard = (city: any) => {
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [isDataFound, setIsDataFound] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>("")

  city = Object.values(city).toString()

  useEffect(() => {
    if (city) {
      handleSearch(city)
    }
  }, [city])

  const handleSearch = async (chosenCity: any) => {
    let weather = await getWeather(chosenCity)
    await handleForecast(chosenCity)
    setErrorText(chosenCity)
    setError(false)
    if (weather.data) {
      setWeather(weather.data)
      setIsDataFound(true)
    } else if (weather.error) {
      setIsDataFound(false)
      setError(true)
      console.error(weather.error)
    }
  }

  const handleForecast = async (chosenCity: any) => {
    let forecast = await getForecast(chosenCity)
    if (forecast.data) {
      setForecast(forecast.data)
    } else if (forecast.error) {
      console.error(forecast.error)
    }
  }

  const handleError = (city: any) => {
    return <SnackBar open={error} text={city + " could not be found!"} />
  }

  return (
    <>
      {isDataFound && (
        <>
          <Card
            style={{
              height: "fit-content",
              alignContent: "left",
              width: "30em",
              textAlign: "left",
              backgroundColor: `rgb(255,255,255,0.9)`,
            }}>
            <WeatherContentSimple weather={weather} />
            <ForecastToday forecast={forecast} />
            <Divider textAlign='left'>
              <Chip label='Forecast' />
            </Divider>
            <ForecastCard forecast={forecast} />
          </Card>
        </>
      )}
      {error && handleError(city)}
    </>
  )
}

export default WeatherCard
