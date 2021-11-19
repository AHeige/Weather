import React from "react"

//Material-ui
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import ExposureIcon from "@mui/icons-material/Exposure"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import Tooltip from "@mui/material/Tooltip"
import { makeStyles } from "@mui/styles"
import Fade from "@mui/material/Fade"

//Utils
import { resolveWeatherData } from "../utils/weather"

const useStyles: any = makeStyles(() => ({
  weatherText: {
    fontSize: "1.5em",
  },
  weatherTextDetail: {
    marginLeft: "0.6em",
    fontSize: "1em",
  },
  weatherIcon: {
    marginLeft: "0.6em",
    width: "4em",
  },
}))

const WeatherCardContent = (weather: any) => {
  const classes = useStyles()

  const {
    /*     weatherDescription, */
    temp,
    tempMin,
    tempMax,
    feelsLike,
    /*     sunRise,
    sunSet, */
    weatherType,
    weatherIcon,
    weatherDescription,
  } = resolveWeatherData(weather)

  return (
    <Fade timeout={1000}>
      <>
        <Grid container direction='row' alignItems='center' spacing={4}>
          <Grid item>
            <AccessTimeIcon />
          </Grid>
          <Grid item>
            <span className={classes.weatherTextDetail}> Vädret just nu</span>
          </Grid>
        </Grid>
        <Card style={{ padding: "1em" }}>
          <Grid
            container
            direction='row'
            spacing={4}
            justifyContent='flex-start'
            alignItems='center'>
            <Grid item>
              <Tooltip arrow title={weatherDescription} placement='top'>
                <img className={classes.weatherIcon} src={weatherIcon}></img>
              </Tooltip>
            </Grid>
            <Grid item style={{ paddingLeft: "1em" }}>
              <DeviceThermostatIcon />
              <span className={classes.weatherText}>{temp}°</span>
              <span className={classes.weatherTextDetail}>
                Känns som {feelsLike}°
              </span>
            </Grid>
            <Grid item>
              <Tooltip title='Minus / Max' arrow placement='top'>
                <ExposureIcon />
              </Tooltip>
              <span className={classes.weatherText}>
                {tempMin}° / {tempMax}°
              </span>
            </Grid>
          </Grid>
        </Card>
      </>
    </Fade>
  )
}

export default WeatherCardContent
