import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CategoryDataGrid({ rows }) {
  console.log("rows", rows);
  return (
    <Box
      sx={{
        minHeight: "520px",
        maxHeight: "520px",
        width: "95%",
        backgroundColor: "#eee",
        margin: "-30px 0 0 30px",
        borderRadius: "4px",
        padding: "20px",
        overflow: "auto ",
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Ordinal number</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Name of parent's genre</TableCell>

              <TableCell align="left">Quantity of books</TableCell>
              <TableCell align="left">Created By</TableCell>
              <TableCell align="left">Created At</TableCell>
              <TableCell align="left">Upadate By</TableCell>
              <TableCell align="left">Upadate At</TableCell>
              <TableCell align="left">Active</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows &&
              rows.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{index + 1}</TableCell>
                  <TableCell align="left">{row.name}</TableCell>
                  <TableCell align="left">{row.genreParentId}</TableCell>
                  <TableCell align="left">{row.books.length}</TableCell>
                  <TableCell align="left">{row.createdBy}</TableCell>
                  <TableCell align="left">{row.createdAt}</TableCell>
                  <TableCell align="left">{row.updatedBy}</TableCell>
                  <TableCell align="left">{row.updatedAt}</TableCell>
                  <TableCell align="left">true</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
