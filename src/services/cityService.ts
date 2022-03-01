import axios, { AxiosResponse } from "axios"

//Config
import { tokenMapBox } from "../config"

const getCity = async (city: string) => {
  let status
  let data
  let error

  await axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?types=place&access_token=${tokenMapBox}`
    )
    .then((response: AxiosResponse) => {
      data = response.data
      status = response.status
    })
    .catch((err) => {
      error = err
    })

  return { status, data, error }
}

export default getCity
