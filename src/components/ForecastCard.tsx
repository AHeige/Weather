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

  console.log(forecastlist)

  const forecastTable = () => {
    return forecastlist
      .filter((a: any) => a.day !== "ån")
      .map((a: any) => (
        <Grid item xs={3} direction={"column"} key={a.key}>
          <Card>
            <CardHeader title={a.time} subheader={a.day} />
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
          height: "9.1em",
          flexGrow: 1,
          gridColumn: 1,
        }}>
        {forecastTable()}
      </Grid>
    </ScrollContainer>
  )
}

export default ForecastCard
