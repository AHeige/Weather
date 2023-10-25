import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

//utils
import { resolveForecastData } from '../utils/forecast'

//components
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'

const ForecastCard = (forecast: any) => {
  const list = resolveForecastData(forecast)
  const [detailElement, setDetailElement] = useState<any>()

  const forecastList = Object.values(list)

  const shifted = forecastList.shift()

  const clicked = (element: any, i: number) => {
    const detailed = {
      index: i,
      element: element,
    }

    setDetailElement(detailed)
  }

  const details = () => {
    if (detailElement) {
      return detailElement.element.map((a: any) => (
        <Grid item xs={3} direction={'column'} key={a.key}>
          <Card elevation={1} style={{ backgroundColor: `rgb(255,255,255, 0)` }}>
            <CardHeader subheader={a.time} style={{ paddingBottom: '0px' }} />
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
            <CardContent>{a.temp}</CardContent>
          </Card>
        </Grid>
      ))
    }
  }

  const checkLatestTime = (a: any) => {
    const latestTime = a[a.length - 1].time

    if (latestTime >= '12:00') {
      return '12:00'
    } else return a[a.length - 1].time
  }

  const styles = (i: number) => {
    let activeCard

    if (detailElement && i === detailElement.index) {
      activeCard = {
        backgroundColor: 'rgba(255,240,240,0.7)',
        borderTop: '4px solid rgba(255,215,215,1)',
      }
    }

    return activeCard
  }

  const forecastTable = () => {
    return forecastList.map((a: any, i: number) => (
      <Grid item xs={3} direction={'column'} key={a.filter((time: any) => time.time == checkLatestTime(a)).map((a: any) => a.key)}>
        <Card style={styles(i)} elevation={1} onClick={() => clicked(a, i)} className='foreCastCard'>
          <CardHeader
            title={a.filter((time: any) => time.time == checkLatestTime(a)).map((a: any) => a.day)}
            subheader={a.filter((time: any) => time.time == checkLatestTime(a)).map((a: any) => a.time)}
            style={{ paddingBottom: '0px' }}
          />
          <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <img
              style={{
                width: '2.5em',
              }}
              alt={a.filter((time: any) => time.time == checkLatestTime(a)).map((a: any) => a.desc)}
              //className={classes.weatherIcon}
              src={a.filter((time: any) => time.time == checkLatestTime(a)).map((a: any) => a.icon)}
            ></img>
          </CardContent>
          <CardContent>{a.filter((time: any) => time.time == checkLatestTime(a)).map((a: any) => a.temp)}</CardContent>
        </Card>
      </Grid>
    ))
  }

  return (
    <>
      <Grid
        container
        direction={'column'}
        style={{
          height: '10.9em',
          flexGrow: 1,
          gridColumn: 1,
          marginTop: '0em',
        }}
      >
        {forecastTable()}
      </Grid>
      {detailElement && (
        <div className='today' style={{ marginTop: '-1em' }}>
          {/* <Divider textAlign='left'>
            <Chip label={detailElement.element[0].dayLong} style={{ backgroundColor: 'rgb(218,218,218,1)', position: 'relative' }} />
          </Divider> */}
          <ScrollContainer horizontal hideScrollbars>
            <Chip label={detailElement.element[0].dayLong} style={{ marginLeft: '4.2em', backgroundColor: 'rgb(218,218,218,1)', position: 'relative' }} />

            <Grid
              // className='today'
              container
              direction={'column'}
              style={{
                height: '8.9em',
                flexGrow: 1,
                gridColumn: 1,
                marginTop: '-1em',
              }}
            >
              {details()}
            </Grid>
          </ScrollContainer>
        </div>
      )}
    </>
  )
}

export default ForecastCard
