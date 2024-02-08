import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

//utils
import { resolveForecastData } from '../utils/forecast'

//components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { groupBy } from '../utils/arrayUtils'

import { ForecastData } from '../interface/forecast'

interface Props {
  forecast: ForecastData
}

const WeatherToday: React.FC<Props> = ({ forecast }) => {
  const list = resolveForecastData(forecast)

  const forecastlist = Object.values(list)[0]

  const grouped = groupBy(forecastlist, 'day')

  const today: any = Object.values(grouped)[0]

  const todayWeather = () => {
    return today.map((a: any) => (
      <Grid item xs={3} key={a.key}>
        <Card elevation={0} style={{ backgroundColor: `rgb(255,255,255, 0)` }}>
          <CardHeader title={a.time} style={{ paddingBottom: '0px' }} />
          <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <img
              style={{
                width: '2.5em',
              }}
              alt={a.desc}
              //className={classes.weatherIcon}
              src={a.icon}
            ></img>
          </CardContent>
          <CardContent style={{ paddingTop: '0px' }}>{a.temp}</CardContent>
        </Card>
      </Grid>
    ))
  }

  return (
    <ScrollContainer horizontal hideScrollbars>
      <Grid
        container
        direction={'column'}
        style={{
          height: '8.4em',
          flexGrow: 1,
          gridColumn: 1,
        }}
      >
        {todayWeather()}
      </Grid>
    </ScrollContainer>
  )
}

export default WeatherToday
