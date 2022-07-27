import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import { IconButton, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar () {
  const onLogout = () => {
    console.log('logout')
  }
  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Booking Management
                </Typography>
                <IconButton color="inherit" onClick={onLogout}>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar
