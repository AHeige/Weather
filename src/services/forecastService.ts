import axios, { AxiosResponse } from 'axios'
import { ForecastData } from '../interface/forecast'

const getForecast = async (city: string): Promise<AxiosResponse<ForecastData>> => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_TOKEN}&units=metric`)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default getForecast
