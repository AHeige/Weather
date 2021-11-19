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
    color: "#fff",
    borderColor: "#fff",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26,
      borderColor: "transparent",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      //borderBottomColor: "#fff",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
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
            style={{ color: "#fff" }}
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
