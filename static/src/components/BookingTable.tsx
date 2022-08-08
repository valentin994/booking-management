import { Booking } from "../interfaces/Booking";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, Alert, Collapse } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { deleteBooking } from "../api/api";
import { useState } from "react";

type Props = {
  booking: Array<Booking>;
};

function BookingTable(props: Props) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "startDate", headerName: "Start Date", width: 130 },
    { field: "endDate", headerName: "End Date", width: 130 },
    {
      field: "apartment",
      headerName: "Apartment",
      type: "number",
      width: 130,
    },
    { field: "name", headerName: "Name", width: 130 },
    { field: "email", headerName: "email", width: 190 },
    { field: "phone", headerName: "Phone", width: 130 },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: (params) => {
        const handleRemoveBooking = (e: { stopPropagation: () => void }) => {
          e.stopPropagation(); // don't select this row after clicking
          // deleteBooking(params.row.id).then((res) => {
          //   console.log(res);
          // });
          console.log(params.row.id);
        };

        return <Button onClick={handleRemoveBooking}>Remove</Button>;
      },
    },
  ];
  return (
    <div>
      <Box sx={{ height: 720 }}>
        <DataGrid
          rows={props.booking}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Box>
    </div>
  );
}
export default BookingTable;
