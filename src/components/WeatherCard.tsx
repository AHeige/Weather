import React, { SetStateAction, useEffect, useState } from 'react'

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from '../services/weatherService'
import getForecast from '../services/forecastService'

//Material-UI
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import CircularProgress from '@mui/material/CircularProgress'

//Components
import WeatherContentSimple from './WeatherContentSimple'
import ForecastCard from './ForecastCard'
import SnackBar from './SnackBar'

//Interfaces
import { WeatherData } from '../interface/weatherData'
import { ForecastData } from '../interface/forecast'
import WeatherToday from './WeatherToday'

interface Props {
  city: string | (string | null)[]
  setWeatherType: React.Dispatch<SetStateAction<string>>
}

const WeatherCard: React.FC<Props> = ({ city, setWeatherType }) => {
  const [weather, setWeather] = useState<WeatherData | undefined>()
  const [forecast, setForecast] = useState<ForecastData>()
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (city) {
      handleSearch(city)
    }
  }, [city])

  const handleSearch = async (chosenCity: any) => {
    setIsLoading(true)
    setError(false)

    //New logic
    try {
      const weather = await getWeather(chosenCity)
      const forecast = await getForecast(chosenCity)
      setWeather(weather.data)
      setWeatherType(weather.data.weather[0].main)
      setForecast(forecast.data)
      setIsLoading(false)
    } catch (error) {
      setError(true)
      setIsLoading(false)
      console.error(error)
    }
  }

  const handleError = (city: any) => {
    return <SnackBar open={error} setError={setError} info={city + ' could not be found!'} />
  }

  const loadingSize = '70%'

  return (
    <>
      {isLoading && (
        <>
          <Card
            elevation={0}
            style={{
              width: '30em',
              textAlign: 'center',
              backgroundColor: `rgb(255,255,255,0.0)`,
              alignSelf: 'flex-start',
              marginTop: '10vh',
            }}
          >
            <CircularProgress color={'success'} style={{ width: loadingSize, height: loadingSize }}></CircularProgress>
          </Card>
        </>
      )}
      {!isLoading && weather && forecast && (
        <Card
          style={{
            height: 'fit-content',
            alignContent: 'left',
            width: '30em',
            textAlign: 'left',
            backgroundColor: `rgb(255,255,255,0.9)`,
          }}
        >
          <WeatherContentSimple weather={weather} />
          <WeatherToday forecast={forecast} />
          <Divider textAlign='left'>
            <Chip label='Forecast' />
          </Divider>
          <ForecastCard forecast={forecast} />
        </Card>
      )}
      {error && handleError(city)}
    </>
  )
}

export default WeatherCard
