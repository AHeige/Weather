import axios, { AxiosResponse } from 'axios'
import { CitiesData } from '../utils/cities'

const getCity = async (city: string): Promise<AxiosResponse<CitiesData>> => {
  try {
    const response = axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?types=place&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export default getCity
