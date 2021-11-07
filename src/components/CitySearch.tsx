//Constants
import cities from "../constants/cities"

//Material-UI
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

const CitySearch = ({ handleSearch }: any) => {
  return (
    <>
      <Autocomplete
        renderInput={(params) => <TextField {...params} label="Sök stad" />}
        options={cities}
        onChange={(e, value) => handleSearch(value)}
        freeSolo
      />
    </>
  )
}

export default CitySearch
