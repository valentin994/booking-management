import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  TextField,
  Container,
  Box,
  Select,
  InputLabel,
  MenuItem
} from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function AddBookingDialog () {
  const [open, setOpen] = useState<boolean>(false)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Add</Button>
            <Dialog open={open} onClose={handleClose}>
                <Box p={2}>
                    <DialogTitle>Add Booking</DialogTitle>
                    <Container>
                        <TextField autoFocus id="name" label="Name" type="text" variant="standard" fullWidth />
                        <TextField autoFocus id="email" label="Email" type="email" variant="standard" fullWidth />
                        <TextField autoFocus id="number" label="Number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" fullWidth />
                        <InputLabel id="apartment">Apartment</InputLabel>
                        <Select labelId="apartment"
                                label="Age"
                        variant="standard">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={(newValue) => {
                                  setStartDate(newValue)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => {
                                    setEndDate(newValue)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Container>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Box>
            </Dialog>
        </div>
  )
}

export default AddBookingDialog
