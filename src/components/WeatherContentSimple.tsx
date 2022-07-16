import React, { useContext, useEffect } from "react"

//Contexts
import weatherContext from "../contexts/weatherContext"

//Material-ui
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography"

//Utils
import { resolveWeatherData } from "../utils/weather"

const WeatherContentSimple = (weather: any) => {
  const { setWeatherType } = useContext(weatherContext)

  const {
    temp,
    tempMin,
    tempMax,
    feelsLike,
    sunRise,
    sunSet,
    weatherType,
    wind,
    weatherIcon,
    weatherDescription,
    city,
    country,
    riskOfRain,
    humidity,
    //countryCode,
  } = resolveWeatherData(weather)

  useEffect(() => {
    setWeatherType(weatherType)
  })

  console.log(sunRise)
  console.log(sunSet)

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
              style={{ marginLeft: "0.2em", paddingTop: "0.5vw" }}
            >
              {country}
            </Typography>
          </Grid>
        }
      />
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
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
              src={weatherIcon}
            ></img>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant={"overline"}>Feels like {feelsLike}</Typography>

          <Typography variant={"overline"}>{weatherDescription}</Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant={"overline"}>Humidity {humidity}</Typography>
          <Typography variant={"overline"}>Wind {wind}</Typography>
        </Grid>
        {riskOfRain && (
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant={"overline"}>Big risk of rain</Typography>
          </Grid>
        )}
      </CardContent>
    </>
  )
}

export default WeatherContentSimple
