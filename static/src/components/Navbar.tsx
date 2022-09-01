import React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import { IconButton, Switch, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

function Navbar (props: any) {
  const onLogout = () => {
    console.log('logout')
  }

  const onThemeChange = () => {
    props.changeTheme(!props.theme)
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Booking Management
          </Typography>
          <Switch onClick={onThemeChange} />
          <IconButton color="inherit" onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
