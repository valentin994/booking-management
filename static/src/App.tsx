import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function App() {
    const [count, setCount] = useState(0)
    const [booking, setBooking] = useState([])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'start_date', headerName: 'Start Date', width: 130 },
        { field: 'end_date', headerName: 'End Date', width: 130 },
        {
            field: 'apartment',
            headerName: 'Apartment',
            type: 'number',
            width: 130,
        },

    ];

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/booking").then(res => {
            setBooking(res.data);
            console.log(booking);
        })
    }, [])

  return (
      <div style={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={booking}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
          />
      </div>
  )
}

export default App
