import axios, { AxiosResponse } from 'axios'
import { Forecast } from '../interface/forecast'

const getForecast = async (city: string): Promise<AxiosResponse<Forecast>> => {
  return await axios
    .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_TOKEN}&units=metric`)
    .then((response: AxiosResponse<Forecast>) => {
      return response
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export default getForecast
