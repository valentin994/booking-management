import { ChangeEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Container,
  Box,
  MenuItem,
  Stack,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Booking } from "../interfaces/Booking";
import { hr } from "date-fns/locale";

function AddBookingDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [booking, setBooking] = useState<Partial<Booking>>({
    startDate: new Date(),
    endDate: new Date(),
    apartment: 1
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    console.log(booking);
    // setOpen(false);
  };
  const [datePickerValue, setDatePickerValue] = useState<Date | null>(
    new Date()
  );
  const aptArray = [1, 2, 3];
  // @ts-ignore
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="xs">
        <Box p={4} pb={2}>
          <DialogTitle>Add Booking</DialogTitle>
          <Container>
            <Stack spacing={2}>
              <TextField
                autoFocus
                id="name"
                label="Name"
                type="text"
                variant="standard"
                onChange={(e) =>
                  setBooking({ ...booking, name: e.target.value })
                }
                fullWidth
              />
              <TextField
                autoFocus
                id="email"
                label="Email"
                type="email"
                variant="standard"
                onChange={(e) =>
                  setBooking({ ...booking, email: e.target.value })
                }
                fullWidth
              />
            </Stack>
            <Stack direction="row" spacing={4} pt={2} pb={2}>
              <TextField
                autoFocus
                id="number"
                label="Number"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                variant="standard"
                onChange={(e) =>
                  setBooking({ ...booking, phone: e.target.value })
                }
                fullWidth
              />
              <TextField
                autoFocus
                id="apt"
                label="Apt"
                select
                variant="standard"
                value={booking.apartment}
                onChange={(e) => {
                  console.log(booking);
                  setBooking({ ...booking, apartment: Number(e.target.value) });
                }}
                sx={{ width: "20%" }}
              >
                {aptArray.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack direction="row" spacing={2} pt={2} pb={2}>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={hr}
              >
                <DatePicker
                  value={booking.startDate}
                  onChange={(newValue) =>
                    setBooking({ ...booking, startDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} />}
                />{" "}
                <DatePicker
                  label="End Date"
                  value={booking.endDate}
                  onChange={(newValue) =>
                    setBooking({ ...booking, endDate: newValue })
                  }
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Stack>
          </Container>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

export default AddBookingDialog;
