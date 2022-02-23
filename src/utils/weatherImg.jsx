import CloudyDay from "../assets/WeatherPics/Cloudy/CloudyDay.jpg"
import RainyDay from "../assets/WeatherPics/Rainy/RainyDay.jpg"
import SunnyDay from "../assets/WeatherPics/Sunny/SunnyDay.jpg"
import SunnyDayWinter from "../assets/WeatherPics/Sunny/SunnyDayWinter.jpg"

const weatherImg = (weatherType) => {
  //Return image to use from imagelist

  const weatherList = {
    Thunderstorm: RainyDay,
    Drizzle: RainyDay,
    Rain: RainyDay,
    Snow: SunnyDayWinter,
    Clouds: CloudyDay,
    Clear: SunnyDay,
    Mist: RainyDay,
  }

  const image = weatherList[weatherType]

  return image
}

export default weatherImg
