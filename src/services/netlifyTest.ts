import axios, { AxiosResponse } from "axios"

const getTest = async () => {
  let status
  let data
  let error

  await axios
    .get(`../netlify/functions/test`)
    .then((response: AxiosResponse) => {
      data = response.data
      status = response.status
    })
    .catch((err) => {
      error = err
    })

  return { status, data, error }
}

export default getTest
