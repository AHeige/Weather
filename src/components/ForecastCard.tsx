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
import { ForeCastTime, ForecastData } from '../interface/forecast'
import ForecastChosenDay from './ForecastChosenDay'

interface Props {
  forecast: ForecastData
}

interface DetailedElement {
  index: number
  day: ForeCastTime[]
}

const ForecastCard: React.FC<Props> = ({ forecast }) => {
  const resolvedForecastData = resolveForecastData(forecast)
  const [detailElement, setDetailElement] = useState<DetailedElement>()

  const clicked = (day: ForeCastTime[], i: number) => {
    const detailed = {
      index: i,
      day: day,
    }

    setDetailElement(detailed)
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
    return Object.values(resolvedForecastData).map((day, i: number) => (
      <Grid item xs={3} key={i}>
        <Card style={styles(i)} elevation={1} onClick={() => clicked(day, i)} className='foreCastCard'>
          <CardHeader title={day[0].day} subheader={day[day.length - 1].time} style={{ paddingBottom: '0px' }} />
          <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
            <img
              style={{
                width: '2.5em',
              }}
              alt={''}
              //className={classes.weatherIcon}
              src={day[day.length - 1].icon}
            ></img>
          </CardContent>
          <CardContent>{day[day.length - 1].temp}</CardContent>
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
            <Chip label={detailElement.day[0].dayLong} style={{ marginLeft: '4.2em', backgroundColor: 'rgb(218,218,218,1)', position: 'relative' }} />

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
              <ForecastChosenDay day={detailElement.day} />
            </Grid>
          </ScrollContainer>
        </div>
      )}
    </>
  )
}

export default ForecastCard
