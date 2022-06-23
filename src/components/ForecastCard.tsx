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
        <Card elevation={1} style={{ backgroundColor: `rgb(255,255,255, 0)` }}>
          <CardHeader
            title={a.day}
            subheader={a.time}
            style={{ paddingBottom: "0px" }}
          />
          <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <img
              style={{
                width: "2.5em",
              }}
              alt={a.desc}
              //className={classes.weatherIcon}
              src={a.icon}></img>
          </CardContent>
          <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            {a.desc}
          </CardContent>
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
          height: "12em",
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
