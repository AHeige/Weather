import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

//Services
import getCity from "../services/cityService"

//Utils
import { resolveCitiesData } from "../utils/cities"

//Material-UI
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);",
    },
  },
  inputRoot: {
    width: "25em",
    color: "#000000",
    borderColor: "#000000",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26,
      borderColor: "#000000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      //borderColor: "transparent",
      //borderBottomColor: "#fff",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000000",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000000",
    },
  },
}))

const CitySearch = ({ setCity, city }: any) => {
  const classes = useStyles()
  const [searchParams, setSearchParams] = useSearchParams()

  const [cities, setCities] = useState<any>([])
  const [error, setError] = useState<boolean>(false)

  const handleCitySearch = (search: any) => {
    const citySearched = search
    citySearch(search)
    setSearchParams({ citySearched })
  }

  const citySearch = async (search: string) => {
    let result = await getCity(search)
    if (result.data) {
      const whaterver: any = result.data
      const { cities } = resolveCitiesData(whaterver)
      setCities(cities)
    } else if (!result.data) {
      setError(true)
    }
  }

  useEffect(() => {})

  return (
    <>
      <Autocomplete
        renderInput={(params) => (
          <TextField
            error={error}
            helperText={error ? "No city found" : ""}
            {...params}
            placeholder='Search any city'
          />
        )}
        options={cities}
        value={searchParams && city}
        onInputChange={(e, value) => handleCitySearch(value)}
        onChange={(e, value) => setCity(value)}
        classes={{ inputRoot: classes.inputRoot }}
      />
    </>
  )
}

export default CitySearch
