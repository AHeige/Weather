import React, { SetStateAction, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

//Services
import getCity from '../services/cityService'

//Utils
import { resolveCitiesData } from '../utils/cities'

//Material-UI
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)': {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: 'translate(34px, 20px) scale(1);',
    },
  },
  inputRoot: {
    width: '25em',
    color: '#000000',
    borderColor: '#000000',
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26,
      borderColor: '#000000',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      //borderColor: "transparent",
      //borderBottomColor: "#fff",
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000000',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#000000',
    },
  },
}))

interface Props {
  setCity: React.Dispatch<SetStateAction<string | (string | null)[] | null>>
}

const CitySearch: React.FC<Props> = ({ setCity }) => {
  const classes = useStyles()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()

  const [cities, setCities] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)

  const handleCitySearch = (search: any) => {
    citySearch(search)
  }

  const citySearch = async (search: string) => {
    if (search.length < 2) {
      return
    }

    try {
      const response = await getCity(search)
      setCities(resolveCitiesData(response.data))
    } catch (error) {
      setError(true)
    }
  }

  const handleChosenCity = (value: any) => {
    const citySearched = value
    if (value) {
      setCity(value)
      setSearchParams({ citySearched })
    }
  }

  return (
    <>
      <Autocomplete
        renderInput={(params) => <TextField error={error} helperText={error ? 'No city found' : ''} {...params} placeholder='Search any city' />}
        options={cities}
        onInputChange={(e, value: string) => handleCitySearch(value)}
        onChange={(e, value) => handleChosenCity(value)}
        classes={{ inputRoot: classes.inputRoot }}
      />
    </>
  )
}

export default CitySearch
