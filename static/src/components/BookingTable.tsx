import { Booking } from '../interfaces/Booking'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, Button, Alert, Snackbar } from '@mui/material'
import { deleteBooking } from '../api/api'
import React, { useState, SyntheticEvent } from 'react'

type Props = {
  booking: Array<Booking>;
  setBooking: React.Dispatch<React.SetStateAction<any>>;
};

function BookingTable (props: Props) {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'startDate', headerName: 'Start Date', width: 130 },
    { field: 'endDate', headerName: 'End Date', width: 130 },
    {
      field: 'apartment',
      headerName: 'Apartment',
      type: 'number',
      width: 130
    },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'email', headerName: 'email', width: 190 },
    { field: 'phone', headerName: 'Phone', width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        const handleRemoveBooking = (e: { stopPropagation: () => void }) => {
          e.stopPropagation() // don't select this row after clicking
          deleteBooking(params.row.id)
            .then(() => {
              props.setBooking(
                props.booking.filter(
                  (bookingItem) => bookingItem.id !== params.row.id
                )
              )
              setOpen(true)
            })
            .catch(() => {
              setOpenError(true)
              console.log(params.row.id)
            })
        }

        return <Button onClick={handleRemoveBooking}>Remove</Button>
      }
    }
  ]
  const [open, setOpen] = useState(false)
  const [openError, setOpenError] = useState(false)

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    setOpenError(false)
  }
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Successfully deleted booking!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Couldn`&apos;`t delete booking!
        </Alert>
      </Snackbar>

      <Box sx={{ height: 720 }}>
        <DataGrid
          rows={props.booking}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </div>
  )
}
export default BookingTable
