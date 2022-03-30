import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getAllEmployees } from '../../../services/employees.service';
import { useEffect, useState } from 'react';
import { Employee } from './interfaces';

export const AllEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
 
  useEffect(() => {
    async function fetchEmployees(){
      setEmployees(await getAllEmployees());
    }
    fetchEmployees();
  }, []);

  if (!employees) {
    return <p>Loading data...</p>;
  }
    return (
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
        </TableContainer>
      );
    
};

