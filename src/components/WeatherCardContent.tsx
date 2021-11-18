import React from "react"

//Material-ui
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import ExposureIcon from "@mui/icons-material/Exposure"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import { makeStyles } from "@mui/styles"

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
}))

const WeatherCardContent = (weather: any) => {
  const classes = useStyles()

  const {
    weatherDescription,
    temp,
    tempMin,
    tempMax,
    feelsLike,
    sunRise,
    sunSet,
  } = resolveWeatherData(weather)

  return (
    <>
      <CardContent>
        <AccessTimeIcon />
        <span className={classes.weatherTextDetail}> Vädret just nu</span>
      </CardContent>
      <Card style={{ padding: "1em" }}>
        <Grid container direction='row' spacing={4} justifyContent='flex-start'>
          <Grid item>
            <DeviceThermostatIcon />{" "}
            <span className={classes.weatherText}>{temp}°</span>
            <span className={classes.weatherTextDetail}>
              Känns som {feelsLike}°
            </span>
          </Grid>
          <Grid item>
            <ExposureIcon />
            <span className={classes.weatherText}>
              {tempMin}° / {tempMax}°
            </span>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}

export default WeatherCardContent
