import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Box, Button, CssBaseline, Container } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import Navbar from './components/Navbar'
import BookingTable from './components/BookingTable'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Booking } from './interfaces/Booking'
import { getBookings } from './api/api'
import AddBookingDialog from "./components/AddBookingDialog";

const light = {
  palette: {
    mode: 'light'
  }
}

const dark = {
  palette: {
    mode: 'dark'
  }
}

function App () {
  const [booking, setBooking] = useState<Array<Booking> | any>([])
  const [isDarkTheme, setIsDarkTheme] = useState(false)


  const onAdd = () => {
    const data = {
      id: uuidv4(),
      start_date: '2022-07-26',
      end_date: '2022-07-26',
      apartment: 0,
      email: 'user@example.com',
      name: 'string',
      phone: 0
    }
    axios.post('http://localhost:8000/api/v1/booking/booking/', data).then(res => {
      setBooking((booking) => [...booking, res.data])
      console.log(res)
    })
  }

  useEffect(() => {
    getBookings().then(res => {
      setBooking(res)
    })
  }, [])

  return (
      <div>
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
          <CssBaseline />
          <Navbar theme={isDarkTheme} changeTheme={setIsDarkTheme} />
          <Box>
            <Container>
          <BookingTable booking={booking} />
              <AddBookingDialog />
              <Button variant="contained" onClick={onAdd}>
                Add
              </Button>
            </Container>
          </Box>
        </ThemeProvider>
      </div>
  )
}

export default App
