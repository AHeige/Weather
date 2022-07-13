import React, { useEffect, useState } from "react"

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService"
import getForecast from "../services/forecastService"

//Material-UI
import Card from "@mui/material/Card"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"
import CircularProgress from "@mui/material/CircularProgress"

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
  const [isLoading, setIsLoading] = useState<boolean>(false)

  city = Object.values(city).toString()

  useEffect(() => {
    if (city) {
      handleSearch(city)
    }
  }, [city])

  const handleSearch = async (chosenCity: any) => {
    setIsLoading(true)

    let weather = await getWeather(chosenCity)

    await handleForecast(chosenCity)

    setErrorText(chosenCity)
    setError(false)
    if (weather.data) {
      setIsLoading(false)
      setWeather(weather.data)
      setIsDataFound(true)
    } else if (weather.error) {
      setIsLoading(false)
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

  const loadingSize = "70%"

  return (
    <>
      {isLoading && (
        <>
          <Card
            elevation={0}
            style={{
              width: "30em",
              textAlign: "center",
              backgroundColor: `rgb(255,255,255,0.0)`,
              alignSelf: "flex-start",
              marginTop: "10vh",
            }}
          >
            <CircularProgress
              color={"success"}
              style={{ width: loadingSize, height: loadingSize }}
            ></CircularProgress>
          </Card>
        </>
      )}
      {!isLoading && isDataFound && (
        <Card
          style={{
            height: "fit-content",
            alignContent: "left",
            width: "30em",
            textAlign: "left",
            backgroundColor: `rgb(255,255,255,0.9)`,
          }}
        >
          <WeatherContentSimple weather={weather} />
          <ForecastToday forecast={forecast} />
          <Divider textAlign="left">
            <Chip label="Forecast" />
          </Divider>
          <ForecastCard forecast={forecast} />
        </Card>
      )}
      {error && handleError(city)}
    </>
  )
}

export default WeatherCard
