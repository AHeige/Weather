export interface CitiesData {
  features: [
    {
      place_name: string
    }
  ]
}

export const resolveCitiesData = (citiesData: CitiesData) => {
  const cities = citiesData.features

  return cities.map((a) => a.place_name)
}
