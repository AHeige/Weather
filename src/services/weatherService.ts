import axios, { AxiosResponse } from 'axios'
import { WeatherData } from '../interface/weatherData'

const getWeather = async (city: string): Promise<AxiosResponse<WeatherData>> => {
  const response = await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_TOKEN}&units=metric`)
    .then((response: AxiosResponse<WeatherData>) => {
      return response
    })
    .catch((err) => {
      throw new Error(err)
    })

  return response
}

export default getWeather
