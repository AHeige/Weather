import React, { useState, useContext } from "react"

//Components
import CitySearch from "../components/CitySearch"
import WeatherCard from "../components/WeatherCard"
import Mountains from "../assets/mountains.svg"
//import CloudyDay from "../assets/WeatherPics/Cloudy/CloudyDay.jpg"

//Contexts
import weatherContext from "../contexts/weatherContext"

//Utils
import weatherImg from "../utils/weatherImg"

//Material-UI
import Grid from "@mui/material/Grid"
import AppBar from "@mui/material/AppBar"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import CloudIcon from "@mui/icons-material/Cloud"
import LooksIcon from "@mui/icons-material/Looks"
import AcUnitIcon from "@mui/icons-material/AcUnit"

const WeatherPage = () => {
  const [city, setCity] = useState<string>("")
  const { weatherType } = useContext(weatherContext)

  return (
    <Grid
      container
      style={{
        backgroundImage: weatherType
          ? `url(${weatherImg(weatherType)})`
          : `url(${Mountains})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}>
      <AppBar
        position='fixed'
        elevation={0}
        style={{
          color: "#000000",
          padding: "1em",
          justifyContent: "center",
          opacity: "0.75",
        }}
        color='inherit'>
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          spacing={2}>
          <Grid item>
            <WbSunnyIcon />
          </Grid>
          <Grid item>
            <CloudIcon />
          </Grid>
          <Grid item>
            <LooksIcon />
          </Grid>
          <Grid item>
            <AcUnitIcon />
          </Grid>
          <Grid item xs={6} lg={1.8} style={{ maxWidth: "13em" }}>
            <CitySearch setCity={setCity} />
          </Grid>
        </Grid>
      </AppBar>
      <Grid
        container
        direction='row'
        justifyContent='center'
        //alignItems='center'
        style={{
          marginTop: "6em",
          //backgroundImage: `url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*)`,
        }}>
        {city && <WeatherCard city={city} />}
      </Grid>
    </Grid>
  )
}

export default WeatherPage
