import React, { useContext, useEffect } from 'react'

//Material-ui
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'

//Utils
import { resolveWeatherData } from '../utils/weather'
import { WeatherData } from '../interface/weatherData'

interface Props {
  weather: WeatherData
}

const WeatherContentSimple: React.FC<Props> = ({ weather }) => {
  const {
    temp,
    tempMin,
    tempMax,
    feelsLike,
    sunRise,
    sunSet,
    weatherType,
    wind,
    weatherIcon,
    weatherDescription,
    city,
    country,
    riskOfRain,
    humidity,
    localTime: updated,
    //countryCode,
  } = resolveWeatherData(weather)

  return (
    <div style={{ position: 'relative' }}>
      <Typography variant={'caption'} style={{ opacity: 0.5, position: 'absolute', right: 0 }}>
        Updated: {updated}
      </Typography>
      <CardHeader
        style={{ backgroundColor: `rgb(255,255,255, 0.3)` }}
        title={
          <Grid container style={{ display: 'flex', marginTop: '0.2em' }}>
            <Typography variant={'h6'} style={{ paddingTop: '0.5vw' }}>
              {city}
            </Typography>
            <Typography variant={'caption'} style={{ marginLeft: '0.2em', paddingTop: '0.5vw' }}>
              {country}
            </Typography>
          </Grid>
        }
      />
      <CardContent>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item style={{ display: 'flex' }}>
            <Typography variant={'h2'}>{temp}</Typography>
            <Typography variant={'caption'}>
              {tempMin} / {tempMax}
            </Typography>
          </Grid>
          <Grid item>
            <img
              style={{
                width: '5em',
              }}
              alt={weatherDescription}
              //className={classes.weatherIcon}
              src={weatherIcon}
            ></img>
          </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant={'overline'}>Feels like {feelsLike}</Typography>

          <Typography variant={'overline'}>{weatherDescription}</Typography>
        </Grid>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant={'overline'}>Humidity {humidity}</Typography>
          <Typography variant={'overline'}>Wind {wind}</Typography>
        </Grid>
        {riskOfRain && (
          <Grid container direction='row' justifyContent='space-between' alignItems='center'>
            <Typography variant={'overline'}>Big risk of rain</Typography>
          </Grid>
        )}
      </CardContent>
    </div>
  )
}

export default WeatherContentSimple
