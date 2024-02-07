import axios, { AxiosResponse } from 'axios'
import { CitiesData } from '../utils/cities'

const getCity = async (city: string): Promise<AxiosResponse<CitiesData>> => {
  return await axios
    .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?types=place&access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
    .then((response: AxiosResponse) => {
      return response
    })
    .catch((err) => {
      throw new Error(err)
    })
}

export default getCity
