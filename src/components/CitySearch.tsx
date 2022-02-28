import React from "react"

//Constants
import cities from "../constants/cities"

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
    color: "#000000",
    borderColor: "#000000",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26,
      borderColor: "#000000",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
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

const CitySearch = ({ setCity }: any) => {
  const classes = useStyles()

  return (
    <>
      <Autocomplete
        renderInput={(params) => (
          <TextField
            error={false}
            helperText={""}
            {...params}
            placeholder="Sök stad"
          />
        )}
        options={cities}
        onChange={(e, value) => setCity(value)}
        freeSolo
        classes={{ inputRoot: classes.inputRoot }}
      />
    </>
  )
}

export default CitySearch
