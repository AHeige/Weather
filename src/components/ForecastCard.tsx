import React from "react"
import ScrollContainer from "react-indiana-drag-scroll"

//utils
import { resolveForecastData } from "../utils/forecast"

//components
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"

const ForecastCard = (forecast: any) => {
  const list = resolveForecastData(forecast)

  const forecastlist = Object.values(list)[0]

  const forecastTable = () => {
    return forecastlist.map((a: any) => (
      <Grid item xs={3} direction={"column"} key={a.key}>
        <Card style={{ backgroundColor: `rgb(255,255,255, 0)` }}>
          <CardHeader title={a.day} subheader={a.time} />
          <CardContent>{a.desc}</CardContent>
          <CardContent>{a.temp}</CardContent>
        </Card>
      </Grid>
    ))
  }

  return (
    <ScrollContainer horizontal hideScrollbars>
      <Grid
        container
        direction={"column"}
        style={{
          height: "12.3em",
          flexGrow: 1,
          gridColumn: 1,
          marginTop: "0em",
        }}>
        {forecastTable()}
      </Grid>
    </ScrollContainer>
  )
}

export default ForecastCard
