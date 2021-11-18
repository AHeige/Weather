import React, { useState } from "react"

//Components
import CitySearch from "../components/CitySearch"
import WeatherCard from "../components/WeatherCard"

//Material-UI
import Grid from "@mui/material/Grid"

const WeatherPage = () => {
  const [city, setCity] = useState<string>("")

  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={4}>
          <CitySearch setCity={setCity} />
        </Grid>
        <Grid item xs={8}>
          {city && <WeatherCard city={city} />}
        </Grid>
      </Grid>
    </>
  )
}

export default WeatherPage
