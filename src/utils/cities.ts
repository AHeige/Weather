type citiesData = {
  features: [
    {
      place_name: string
    }
  ]
}

export const resolveCitiesData = (citiesData: citiesData) => {
  const cities = citiesData.features

  const resolveCities = {
    cities: cities.map((a) => a.place_name),
  }

  return resolveCities
}
