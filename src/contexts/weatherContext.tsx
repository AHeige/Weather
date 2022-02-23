import { createContext } from "react"

const weatherContext = createContext({
  weatherType: "",
  setWeatherType: (wType: any) => {},
})

export default weatherContext
