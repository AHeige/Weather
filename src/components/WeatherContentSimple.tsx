import React, { useContext } from "react"

//Contexts
import weatherContext from "../contexts/weatherContext"

//Material-ui
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import { makeStyles } from "@mui/styles"

//Utils
import { resolveWeatherData } from "../utils/weather"

//Styles
const useStyles: any = makeStyles(() => ({
  weatherText: {
    fontSize: "4em",
  },
  weatherTextDetail: {
    fontSize: "1.5em",
  },
  weatherIcon: {
    width: "6em",
  },
  weatherContainer: { width: "100%" },
}))

const WeatherContentSimple = (weather: any) => {
  const classes = useStyles()
  const { setWeatherType } = useContext(weatherContext)

  const {
    temp,
    tempMin,
    tempMax,
    feelsLike,
    //sunRise,
    //sunSet,
    weatherType,
    wind,
    weatherIcon,
    weatherDescription,
  } = resolveWeatherData(weather)

  setWeatherType(weatherType)

  return (
    <CardContent className={classes.weatherContainer}>
      <Grid item xs={12}>
        <span className={classes.weatherText}>{temp}</span>
      </Grid>
      <Grid item xs={6}>
        <span className={classes.weatherTextDetail}>Min {tempMin}</span>
      </Grid>
      <Grid item xs={6}>
        <span className={classes.weatherTextDetail}>Max {tempMax}</span>
      </Grid>
      <Grid item xs={12}>
        <span className={classes.weatherTextDetail}>
          Feels Like {feelsLike}
        </span>
      </Grid>
      <Grid item xs={12}>
        <span className={classes.weatherTextDetail}>Wind {wind}</span>
      </Grid>
      <Grid item xs={12}>
        <span
          className={classes.weatherTextDetail}
          style={{ textTransform: "capitalize" }}>
          {weatherDescription}
        </span>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "-0.7em" }}>
        <img
          alt={weatherDescription}
          className={classes.weatherIcon}
          src={weatherIcon}></img>
      </Grid>
    </CardContent>
  )
}

export default WeatherContentSimple
