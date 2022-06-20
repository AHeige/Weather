import React from "react";
import { useState } from "react";
import { hot } from "react-hot-loader/root";
import WeatherPage from "./pages/weatherPage";
import weatherContext from "./contexts/weatherContext";

const App = () => {
  const [weatherType, setWeatherType] = useState("");
  return (
    <weatherContext.Provider value={{ weatherType, setWeatherType }}>
      <WeatherPage></WeatherPage>
    </weatherContext.Provider>
  );
};

export default hot(App);
