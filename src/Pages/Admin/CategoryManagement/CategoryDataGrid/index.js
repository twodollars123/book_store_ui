import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SwitchButton from "../../../../Layouts/AdminLayout/components/SwitchButton";
import { updateAGenre } from "../../../../ApiServices/genresApi";
import Button from "../../../../Components/Button";

// import { useState } from "react";

export default function CategoryDataGrid({ rows, allUsers, currentUser }) {
  // const [isCheck, setIsCheck] = useState(false);

  const handleChangeActive = async (e) => {
    const payload = { active: e.target.checked };
    await updateAGenre(e.target.id, payload, currentUser.accessToken);
  };

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
            <>
              {rows &&
                rows.length > 0 &&
                rows.map((row, index) => {
                  console.log("roe", row);
                  // setIsCheck(row.active);

                  const createBy = allUsers.find(
                    (item) => item._id === row.createdBy
                  );
                  return (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{index + 1}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.genreParentId}</TableCell>
                      <TableCell align="left">{row.books.length}</TableCell>
                      <TableCell align="left">
                        {createBy?.username || ""}
                      </TableCell>
                      <TableCell align="left">{row.createdAt}</TableCell>
                      <TableCell align="left">{row.updatedBy}</TableCell>
                      <TableCell align="left">{row.updatedAt}</TableCell>
                      <TableCell align="left">
                        {
                          <SwitchButton
                            id_togglebtn={row._id}
                            isCheck={row.active}
                            onClick={handleChangeActive}
                          />
                        }
                      </TableCell>
                      <TableCell align="left" className="category_col-action">
                        <Button leftIcon={<i className="fa fa-edit" />} />
                        <Button leftIcon={<i className="fa fa-trash" />} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
