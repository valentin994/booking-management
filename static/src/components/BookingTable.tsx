import { Booking } from '../interfaces/Booking'
import { DataGrid, GridApi, GridCellValue, GridColDef } from '@mui/x-data-grid'
import { Box, Button } from '@mui/material'

type Props = {
    booking: Array<Booking>
}

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
        const onClick = (e: { stopPropagation: () => void }) => {
          e.stopPropagation() // don't select this row after clicking

          const api: GridApi = params.api
          const thisRow: Record<string, GridCellValue> = {}

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            )

          return alert(JSON.stringify(thisRow, null, 4))
        }

        return <Button onClick={onClick}>Remove</Button>
      }
    }
  ]

  return (
        <div>
            <Box sx={{ height: 720 }}>
                <DataGrid
                    rows={props.booking}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </Box>
        </div>
  )
}
export default BookingTable
