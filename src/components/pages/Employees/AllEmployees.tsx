import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getAllEmployees } from '../../../services/employees.service';
import { useEffect, useState, Fragment } from 'react';
import { Employee } from './interfaces';
import { Box, Button, Modal } from '@mui/material';
import { NewEmployee } from './NewEmployee';

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

export const AllEmployees = () => {

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    async function fetchEmployees(){
      setEmployees(await getAllEmployees());
    }
    fetchEmployees();
  }, []);

  const handleModal = () => {
    setOpen(prev => !prev);
  }

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
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee) => (
                <TableRow
                  key={employee.ID_EMPLOYEE}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {employee.ID_EMPLOYEE}
                  </TableCell>
                  <TableCell align="right">{employee.NAME}</TableCell>
                  <TableCell align="right">{employee.PHONE}</TableCell>
                  <TableCell align="right">{employee.ADDRESS}</TableCell>
                  <TableCell align="right">{employee.SALARY}</TableCell>
                </TableRow>
              ))}
            </TableBody>
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

