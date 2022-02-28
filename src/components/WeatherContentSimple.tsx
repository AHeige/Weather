import React, { useContext, useEffect } from "react"

//Contexts
import weatherContext from "../contexts/weatherContext"

//Material-ui
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Avatar from "@mui/material/Avatar"
import Typography from "@mui/material/Typography"
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
    //countryCode,
  } = resolveWeatherData(weather)

  useEffect(() => {
    setWeatherType(weatherType)
  })

  return (
    <>
      <CardHeader
        style={{ backgroundColor: `rgb(255,255,255, 0.3)` }}
        title={
          <Grid container style={{ display: "flex", marginTop: "0.2em" }}>
            <Typography variant={"h6"} style={{ paddingTop: "0.5vw" }}>
              {city}
            </Typography>
            <Typography
              variant={"caption"}
              style={{ marginLeft: "0.2em", paddingTop: "0.5vw" }}>
              {country}
            </Typography>
          </Grid>
        }
      />
      <CardContent>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          <Grid item style={{ display: "flex" }}>
            <Typography variant={"h2"}>{temp}</Typography>
            <Typography variant={"caption"}>
              {tempMin} / {tempMax}
            </Typography>
          </Grid>
          <Grid item>
            <img
              style={{
                width: "5em",
              }}
              alt={weatherDescription}
              //className={classes.weatherIcon}
              src={weatherIcon}></img>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          <Typography variant={"overline"}>Feels like {feelsLike}</Typography>
          <Typography variant={"overline"}>{weatherDescription}</Typography>
        </Grid>
      </CardContent>
    </>
  )
}

export default WeatherContentSimple
