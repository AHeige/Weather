import React from "react"

//Material-ui
import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"

//Utils
import { resolveWeatherData } from "../utils/weather"

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
}))

const WeatherContentSimple = (weather: any) => {
  const classes = useStyles()

  const {
    /*     weatherDescription, */
    temp,
    /*     
    tempMin,
    tempMax,
    feelsLike,
    sunRise,
    sunSet, */
    //weatherType,
    weatherIcon,
    weatherDescription,
  } = resolveWeatherData(weather)

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      //style={{ marginLeft: "1em" }}
    >
      <Grid item xs={12}>
        <span className={classes.weatherText}>{temp}°</span>
      </Grid>
      <Grid item xs={12}>
        <span className={classes.weatherTextDetail}>{weatherDescription}</span>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "-0.7em" }}>
        <img
          alt={weatherDescription}
          className={classes.weatherIcon}
          src={weatherIcon}
        ></img>
      </Grid>
    </Grid>
  )
}

export default WeatherContentSimple
