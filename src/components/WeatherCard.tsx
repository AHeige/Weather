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
import ForecastToday from './ForecastToday'
import SnackBar from './SnackBar'
import { WeatherData } from '../interface/weatherData'

interface Props {
  city: string | (string | null)[]
  setWeatherType: React.Dispatch<SetStateAction<string>>
}

const WeatherCard: React.FC<Props> = ({ city, setWeatherType }) => {
  const [weather, setWeather] = useState<WeatherData | undefined>()
  const [forecast, setForecast] = useState({})
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

    await getWeather(chosenCity)
      .then((response) => {
        setWeather(response.data)
        setWeatherType(response.data.weather[0].main)

        getForecast(chosenCity)
          .then((response) => {
            setForecast(response.data)
            setIsLoading(false)
          })
          .catch((e) => {
            console.error(e)
          })
      })
      .catch(() => {
        setIsLoading(false)
        setError(true)
      })
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
      {!isLoading && weather && (
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
          <ForecastToday forecast={forecast} />
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
