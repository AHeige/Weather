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

  const forecastList = Object.values(list)

  const shifted = forecastList.shift()

  const forecastTable = () => {
    return forecastList.map((a: any) => (
      <Grid item xs={3} direction={"column"} key={a.key}>
        <Card elevation={1} style={{ backgroundColor: `rgb(255,255,255, 0)` }}>
          <CardHeader
            title={a
              .filter((time: any) => time.time == "12:00")
              .map((a: any) => a.day)}
            subheader={a
              .filter((time: any) => time.time == "12:00")
              .map((a: any) => a.time)}
            style={{ paddingBottom: "0px" }}
          />
          <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <img
              style={{
                width: "2.5em",
              }}
              alt={a
                .filter((time: any) => time.time == "12:00")
                .map((a: any) => a.desc)}
              //className={classes.weatherIcon}
              src={a
                .filter((time: any) => time.time == "12:00")
                .map((a: any) => a.icon)}
            ></img>
          </CardContent>
          <CardContent>
            {a
              .filter((time: any) => time.time == "12:00")
              .map((a: any) => a.temp)}
          </CardContent>
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
          height: "10.9em",
          flexGrow: 1,
          gridColumn: 1,
          marginTop: "0em",
        }}
      >
        {forecastTable()}
      </Grid>
    </ScrollContainer>
  )
}

export default ForecastCard
