import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { getAllEmployees } from '../../../services/employees.service';
import { useEffect, useState, Fragment } from 'react';
import { Employee } from './interfaces';
import { Box, Button, Modal } from '@mui/material';
import { NewEmployee } from './NewEmployee';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  maxWidth: '40px', 
  maxHeight: '40px', 
  minWidth: '30px', 
  minHeight: '30px'
};

export const AllEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
 
  useEffect(() => {
    async function fetchEmployees(){
      setEmployees(await getAllEmployees());
    }
    fetchEmployees();
  }, []);

  const handleModal = () => {
    setOpen(prev => !prev);
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - employees.length) : 0;

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!employees) {
    return <p>Loading data...</p>;
  }
    return (
      <Fragment>
        <Box sx={{  display: "flex", justifyContent: "flex-end"}}>
          <Button onClick={handleModal}>New Employee</Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Salary</TableCell>
                <TableCell colSpan={2} align="center" style={{width: 100}}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                  ? employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : employees
                ).map((employee) => (
                <TableRow
                  key={employee.ID_EMPLOYEE}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {employee.ID_EMPLOYEE}
                  </TableCell>
                  <TableCell align="left">{employee.NAME}</TableCell>
                  <TableCell align="left">{employee.PHONE}</TableCell>
                  <TableCell align="left">{employee.ADDRESS}</TableCell>
                  <TableCell align="left">{employee.SALARY}</TableCell>
                  <TableCell align="center" size='small'>
                    <Button variant="contained" style={buttonStyle}>
                      <EditIcon />
                    </Button>
                  </TableCell>
                  <TableCell align="center" size='small'>
                    <Button variant="contained" style={buttonStyle}>
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={employees.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
          <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{ style }}>
              <NewEmployee handleModal={handleModal} />
            </Box>
          </Modal>
        </TableContainer>
        </Fragment>
      );
    
};

