import React, { useEffect, useState } from "react";

//Constants import weatherData from "../constants/weatherTest"

//Services
import getWeather from "../services/weatherService";

//Material-UI
import Card from "@mui/material/Card";

//Components
import WeatherContentSimple from "./WeatherContentSimple";
import SnackBar from "./SnackBar";

const WeatherCard = (city: any) => {
  const [weather, setWeather] = useState({});
  const [isDataFound, setIsDataFound] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");

  city = Object.values(city).toString();

  useEffect(() => {
    if (city) {
      handleSearch(city);
    }
  }, [city]);

  const handleSearch = async (chosenCity: any) => {
    let weather = await getWeather(chosenCity);
    setErrorText(chosenCity);
    setError(false);
    if (weather.data) {
      setWeather(weather.data);
      setIsDataFound(true);
    } else if (weather.error) {
      setIsDataFound(false);
      setError(true);
      console.error(weather.error);
    }
  };

  const handleError = (city: any) => {
    return <SnackBar open={error} text={city + " could not be found!"} />;
  };

  return (
    <>
      {isDataFound && (
        <Card
          style={{
            height: "fit-content",
            alignContent: "left",
            width: "30em",
            textAlign: "left",
            backgroundColor: `rgb(255,255,255,0.8)`,
          }}
        >
          <WeatherContentSimple weather={weather} />
        </Card>
      )}
      {error && handleError(city)}
    </>
  );
};

export default WeatherCard;
