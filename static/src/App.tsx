import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { Box, Button, CssBaseline } from '@mui/material'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import { v4 as uuidv4 } from 'uuid'
import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const [booking, setBooking] = useState([])
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'start_date', headerName: 'Start Date', width: 130 },
    { field: 'end_date', headerName: 'End Date', width: 130 },
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
        const onClick = (e) => {
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
    axios.get('http://localhost:8000/api/v1/booking').then(res => {
      setBooking(res.data)
    })
  }, [])

  return (
      <div>
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
          <CssBaseline />
          <Navbar></Navbar>
          <button onClick={changeTheme}>switch</button>
          <Box sx={{ width: '100%' }}>
        <Box sx={{ height: 720 }}>
            <DataGrid
                rows={booking}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Box>
          <Button variant="contained" onClick={onAdd}>
              Add
          </Button>
          </Box>
        </ThemeProvider>
      </div>
  )
}

export default App
