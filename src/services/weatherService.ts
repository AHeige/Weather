import axios, { AxiosResponse } from 'axios'
import { WeatherData } from '../interface/weatherData'

const getWeather = async (city: string): Promise<AxiosResponse<WeatherData>> => {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_TOKEN}&units=metric`)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default getWeather
