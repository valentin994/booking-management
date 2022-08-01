import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Container,
  Box,
  InputLabel,
  FormControl,
  Input,
  MenuItem,
  Stack,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

function AddBookingDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
                fullWidth
              />
              <TextField
                autoFocus
                id="email"
                label="Email"
                type="email"
                variant="standard"
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
                fullWidth
              />
              <TextField
                autoFocus
                id="apt"
                label="Apt"
                select
                variant="standard"
                sx={{ width: "20%" }}
              >
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
              </TextField>
            </Stack>
            <Stack direction="row" spacing={2} pt={2} pb={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="dd/mm/yyyy"
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  inputFormat="dd/mm/yyyy"
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
