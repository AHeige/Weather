import React, { useContext, useEffect } from "react";

//Material-ui
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

//Utils
import { resolveForecastData } from "../utils/weather";

const WeatherForecast = (forecast: any) => {
  const foreCastTable = {};

  console.log(forecast);

  const headCell = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Day",
    },
  ];

  //Get back the resolved data from the util
  const { list } = resolveForecastData(forecast);

  console.log(list);

  // const forecastList = Object.values(list).forEach((list: any) => (
  //   <>
  //     <TableRow>{list.dt_text}</TableRow>
  //     <TableRow>{list.main.temp}</TableRow>
  //     <TableRow>{list.main.feels_like}</TableRow>
  //   </>
  // ));

  console.log(list);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {/* {headCell.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          ))} */}
        </TableRow>
      </TableHead>
      <TableBody></TableBody>
    </Table>
  );
};

export default WeatherForecast;
