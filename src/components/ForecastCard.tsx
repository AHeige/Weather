import React, { useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"

//utils
import { resolveForecastData } from "../utils/forecast"

//components
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"

const ForecastCard = (forecast: any) => {
  const list = resolveForecastData(forecast)
  const [detailElement, setDetailElement] = useState<any>()

  const forecastList = Object.values(list)

  const shifted = forecastList.shift()

  const clicked = (a: any) => {
    setDetailElement(a)
  }

  const details = () => {
    if (detailElement) {
      return detailElement.map((a: any) => (
        <Grid item xs={3} direction={"column"} key={a.key}>
          <Card
            elevation={1}
            style={{ backgroundColor: `rgb(255,255,255, 0)` }}
          >
            <CardHeader subheader={a.time} style={{ paddingBottom: "0px" }} />
            <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
              <img
                style={{
                  width: "2.5em",
                }}
                alt={a.desc}
                //className={classes.weatherIcon}
                src={a.icon}
              ></img>
            </CardContent>
            <CardContent>{a.temp}</CardContent>
          </Card>
        </Grid>
      ))
    }
  }

  const forecastTable = () => {
    return forecastList.map((a: any) => (
      <Grid
        item
        xs={3}
        direction={"column"}
        key={a
          .filter((time: any) => time.time == "12:00")
          .map((a: any) => a.key)}
      >
        <Card
          elevation={1}
          style={{ backgroundColor: `rgb(255,255,255, 0)` }}
          onClick={() => clicked(a)}
        >
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
    <>
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
      {detailElement && (
        <div style={{ marginTop: "-1em" }}>
          <Divider textAlign="left">
            <Chip
              label={detailElement[0].dayLong}
              style={{ backgroundColor: "rgb(218,218,218,1)" }}
            />
          </Divider>
          <ScrollContainer horizontal hideScrollbars>
            <Grid
              container
              direction={"column"}
              style={{
                height: "8.9em",
                flexGrow: 1,
                gridColumn: 1,
                marginTop: "-1em",
              }}
            >
              {details()}
            </Grid>
          </ScrollContainer>
        </div>
      )}
    </>
  )
}

export default ForecastCard
