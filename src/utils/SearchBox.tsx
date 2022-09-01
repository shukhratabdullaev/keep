import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import { ChangeEvent } from "react";


type SearchBoxType = {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export const SearchBox = ({ handleSearch, value }: SearchBoxType) => {
  return (
    <>
      <TextField
        fullWidth
        variant="filled"
        label="Поиск"
        value={value}
        onChange={handleSearch}
        size={"small"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        sx={{ '& fieldset': { borderRadius: '10px' } }}
      />
    </>
  )
}



// export const SearchBox = ({ handleSearch, value }: SearchBoxType) => (
//   <form>
//     <TextField
//       value={value}
//       label="Поиск"
//       variant="outlined"
//       placeholder="Поиск..."
//       size="small"
//       onChange={handleSearch}
//     />
//     <IconButton type="submit" aria-label="search">
//       <SearchIcon style={{ fill: "blue" }} />
//     </IconButton>
//   </form>
// );