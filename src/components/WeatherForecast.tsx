import React, { useContext, useEffect } from "react";

//Material-ui
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

//Utils
import { resolveForecastData } from "../utils/weather";

const WeatherForecast = (weather: any) => {
  const foreCastTable = {
    //A table with the forecast
  };

  //Get back the resolved data from the util
  const { list } = resolveForecastData(weather);

  console.log(list);

  return <Typography>Test</Typography>;
};

export default WeatherForecast;
