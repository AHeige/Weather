import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

//utils
import { resolveForecastData } from '../utils/forecast'

//components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'

import { ForeCastTime } from '../interface/forecast'

interface Props {
  forecast: ForeCastTime[]
}

const WeatherToday: React.FC<Props> = ({ forecast }) => {
  const todayWeather = () => {
    return (
      <>
        {forecast.map((a: any) => (
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
        ))}
      </>
    )
  }

  return (
    <ScrollContainer horizontal hideScrollbars>
      <Grid
        container
        direction={'row'}
        style={{
          flexGrow: 1,
          gridColumn: 1,
        }}
      >
        <Grid item xs={12}>
          <p style={{ paddingLeft: '1em', margin: 0 }}>Today</p>
        </Grid>
        {todayWeather()}
      </Grid>
    </ScrollContainer>
  )
}

export default WeatherToday
