import axios, { AxiosResponse } from "axios";

import { token } from "../config";

const getWeather = async (city: string) => {
  let status;
  let data;
  let error;

  await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${token}&units=metric`
    )
    .then((response: AxiosResponse<any>) => {
      data = response.data;
      status = response.status;
    })
    .catch((err) => {
      error = err;
    });

  return { status, data, error };
};

export default getWeather;
