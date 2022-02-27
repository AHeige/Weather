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
    time,
  } = resolveWeatherData(weather)

  useEffect(() => {
    setWeatherType(weatherType)
  })

  return (
    <>
      <CardHeader
        title={
          <Grid container style={{ display: "flex", marginTop: "0.2em" }}>
            <Typography variant={"h4"} style={{ marginRight: "1vh" }}>
              {temp}
            </Typography>
            <Typography variant={"h6"} style={{ paddingTop: "0.5vw" }}>
              {city}
            </Typography>
            <Typography
              variant={"caption"}
              style={{ marginLeft: "0.2em", paddingTop: "0.5vw" }}
            >
              {country}
            </Typography>
          </Grid>
        }
        avatar={
          <>
            <img
              style={{ width: "5.5vh", marginLeft: "1vh" }}
              alt={weatherDescription}
              //className={classes.weatherIcon}
              src={weatherIcon}
            ></img>
          </>
        }
      />
      <CardContent>
        <Grid style={{ display: "flex" }}>
          <Typography variant={"h6"}>{weatherDescription}</Typography>
        </Grid>
        <Grid style={{ display: "flex" }}>
          <Typography variant={"h6"}>{time}</Typography>
        </Grid>
      </CardContent>
    </>
  )
}

export default WeatherContentSimple
