import React, { useContext, useEffect } from "react"

//Contexts
import weatherContext from "../contexts/weatherContext"

//Material-ui
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Avatar from "@mui/material/Avatar"
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
    city,
    country,
  } = resolveWeatherData(weather)

  useEffect(() => {
    setWeatherType(weatherType)
  })

  return (
    <>
      <CardHeader
        title={city + ",   " + country}
        avatar={
          <>
            <Avatar>{temp}</Avatar>
            <img
              style={{ width: "5.5vh", marginLeft: "1vh" }}
              alt={weatherDescription}
              //className={classes.weatherIcon}
              src={weatherIcon}
            ></img>
          </>
        }
      />

      <CardContent className={classes.weatherContainer}>
        <Grid item xs={12}>
          <span className={classes.weatherText}>{temp}</span>
          <span className={classes.weatherTextDetail}>Min {tempMin}</span>
          <span className={classes.weatherTextDetail}>Max {tempMax}</span>
          <span className={classes.weatherTextDetail}>
            Feels Like {feelsLike}
          </span>
          <span className={classes.weatherTextDetail}>Wind {wind}</span>
          <span
            className={classes.weatherTextDetail}
            style={{ textTransform: "capitalize" }}
          >
            {weatherDescription}
          </span>
        </Grid>
        <Grid item xs={12} style={{ marginTop: "-0.7em" }}></Grid>
      </CardContent>
    </>
  )
}

export default WeatherContentSimple
