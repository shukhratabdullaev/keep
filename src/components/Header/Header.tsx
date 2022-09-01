import AppsIcon from '@mui/icons-material/Apps'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import MenuIcon from '@mui/icons-material/Menu'
import { Avatar, IconButton } from '@mui/material'
import AppBar from "@mui/material/AppBar/AppBar"
import Box from "@mui/material/Box/Box"
import Grid from "@mui/material/Grid/Grid"
import Typography from "@mui/material/Typography/Typography"
import { useContext } from "react"
import CardContext from "../../context/card-context"
import { SearchBox } from "../../utils/SearchBox"





export const Header = () => {
  const { handleSearch, searchText, isSideBarOpen, toggleSideBarOpen } = useContext(CardContext)

  const imageStyle = {
    height: 40,
    width: 40,
    m: 1
  }

  return (
    <>
      <AppBar position="relative">
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ ml: 1.5 }} onClick={toggleSideBarOpen}>
              <MenuIcon sx={{ color: 'white' }} fontSize='medium' >
                {isSideBarOpen ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
              </MenuIcon>
            </IconButton>
            <Box
              component="img"
              sx={imageStyle}
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              alt="Logo"
            />
            <Typography variant="h6">Keep</Typography>
          </Grid>
          <Grid item xs={5} sx={{ display: 'flex', alignItems: 'center' }}>
            <SearchBox value={searchText} handleSearch={handleSearch} />
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <IconButton sx={{color: 'white'}} size='medium'>
              <AppsIcon />
            </IconButton>
            <IconButton>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ mr: 2 }} />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}