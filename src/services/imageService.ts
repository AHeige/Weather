import axios, { AxiosResponse } from 'axios'

interface PhotoData {
  photos: Photo[]
}

interface Photo {
  id: number
  width: number
  height: number
  url: string
  src: {
    original: string
    medium: string
    large: string
    landscape: string
  }
}

const getImage = async (city: string | (string | null)[]): Promise<string> => {
  try {
    const response: AxiosResponse<PhotoData> = await axios.get(`https://api.pexels.com/v1/search?query=${city}&per_page=5`, {
      headers: { Authorization: 'CGUITNqwq78A7J9puEXdXC4u1DTdVgyi9JuZTvW5d1wpsDeWJqyIwBxQ' },
    })
    console.log(response.data.photos[0].src.original)
    return response.data.photos[Math.floor(Math.random() * 4)].src.landscape
  } catch (error) {
    throw new Error(error)
  }
}

export default getImage
