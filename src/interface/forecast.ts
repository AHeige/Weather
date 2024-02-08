export interface ForecastData {
  list: [
    {
      clouds: {}
      dt: number
      dt_txt: string
      main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
      }
      pop: number
      sys: { pod: string }
      visibility: number
      weather: [
        {
          description: string
          icon: string
          id: number
          main: string
        }
      ]
      wind: {
        deg: number
        gust: number
        speed: number
      }
    }
  ]
}

export interface ForeCastDay {
  temp: string
  min: number
  max: number
  humidity: number
  riskOfRain: boolean
  wind: number
  day: string
  dayLong: string
  time: string
  date: string
  key: number
  desc: string
  icon: string
}
