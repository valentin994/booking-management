import { useState, useEffect } from "react";
import "./App.css";
import { Box, CssBaseline, Container } from "@mui/material";
import Navbar from "./components/Navbar";
import BookingTable from "./components/BookingTable";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Booking } from "./interfaces/Booking";
import { getBookings } from "./api/api";
import AddBookingDialog from "./components/AddBookingDialog";

const light = {
  palette: {
    mode: "light",
  },
};

const dark = {
  palette: {
    mode: 'dark',
  },
};

function App() {
  const [booking, setBooking] = useState<Array<Booking> | any>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    getBookings().then((res) => {
      setBooking(res);
    });
  }, []);

  return (
    <div>
      <ThemeProvider
        theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
      >
        <CssBaseline />
        <Navbar theme={isDarkTheme} changeTheme={setIsDarkTheme} />
        <Box>
          <Container>
            <BookingTable booking={booking} setBooking={setBooking} />
            <AddBookingDialog booking={booking} setBooking={setBooking} />
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
