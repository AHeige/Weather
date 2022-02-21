import React, { useState } from "react"

//Components
import CitySearch from "../components/CitySearch"
import WeatherCard from "../components/WeatherCard"

//Material-UI
import Grid from "@mui/material/Grid"
import AppBar from "@mui/material/AppBar"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import CloudIcon from "@mui/icons-material/Cloud"
import LooksIcon from "@mui/icons-material/Looks"
import AcUnitIcon from "@mui/icons-material/AcUnit"

const WeatherPage = () => {
  const [city, setCity] = useState<string>("")

  return (
    <>
      <AppBar
        position='fixed'
        elevation={0}
        style={{
          color: "#000000",
          padding: "1em",
          justifyContent: "center",
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
        alignItems='center'
        style={{ marginTop: "6em" }}>
        {city && <WeatherCard city={city} />}
      </Grid>
    </>
  )
}

export default WeatherPage
