import React, { useEffect, useState } from 'react'

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
import { ForeCastTime, ForecastData } from '../interface/forecast'
import WeatherToday from './WeatherToday'
import { resolveForecastData } from '../utils/forecast'

interface Props {
  city: string | (string | null)[]
}

const WeatherCard: React.FC<Props> = ({ city }) => {
  const [weather, setWeather] = useState<WeatherData | undefined>()
  const [forecast, setForecast] = useState<ForecastData>()
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSearch = async (chosenCity: any) => {
    setIsLoading(true)
    setError(false)

    //New logic
    try {
      const weather = await getWeather(chosenCity)
      const forecast = await getForecast(chosenCity)
      setWeather(weather.data)

      setForecast(forecast.data)
      setIsLoading(false)
    } catch (error) {
      setError(true)
      setIsLoading(false)
      console.error(error)
    }
  }
  useEffect(() => {
    if (city) {
      handleSearch(city)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  const handleError = (city: any) => {
    return <SnackBar open={error} setError={setError} info={city + ' could not be found!'} />
  }

  const loadingSize = '70%'

  function getToday(fc: ForecastData): ForeCastTime[] {
    const resolved = resolveForecastData(fc)

    return Object.values(resolved)[0]
  }

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
          <WeatherToday forecast={getToday(forecast)} />
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
