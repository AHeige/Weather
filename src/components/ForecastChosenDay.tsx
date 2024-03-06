import { Grid, Card, CardHeader, CardContent } from '@mui/material'
import { ForeCastTime } from '../interface/forecast'

interface Props {
  day: ForeCastTime[]
}

const ForecastChosenDay: React.FC<Props> = ({ day }) => {
  return (
    <>
      {day.map((time) => (
        <Grid item xs={3} key={time.time}>
          <Card elevation={1} style={{ backgroundColor: `rgb(255,255,255, 0)` }}>
            <CardHeader subheader={time.time} style={{ paddingBottom: '0px' }} />
            <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
              <img
                style={{
                  width: '2.5em',
                }}
                alt={time.desc}
                //className={classes.weatherIcon}
                src={time.icon}
              ></img>
            </CardContent>
            <CardContent>{time.temp}</CardContent>
          </Card>
        </Grid>
      ))}
    </>
  )
}

export default ForecastChosenDay
