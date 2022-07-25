import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams, GridApi, GridCellValue } from '@mui/x-data-grid';

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
        { field: "name", headerName: "Name", width: 130},
        { field: "email", headerName: "email", width: 190},
        { field: "phone", headerName: "Phone", width: 130},
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    const api: GridApi = params.api;
                    const thisRow: Record<string, GridCellValue> = {};

                    api
                        .getAllColumns()
                        .filter((c) => c.field !== '__check__' && !!c)
                        .forEach(
                            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
                        );

                    return alert(JSON.stringify(thisRow, null, 4));
                };

                return <Button onClick={onClick}>Remove</Button>;
            }
        }
    ];

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/booking").then(res => {
            setBooking(res.data);
            console.log(booking);
        })
    }, [])

  return (
      <div>
        <Box style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={booking}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Box>
      </div>
  )
}

export default App
