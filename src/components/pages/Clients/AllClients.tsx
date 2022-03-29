import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { AddClients } from "./AddClients";
import { useEffect, useState } from "react";
import { ClientsService } from "../../../services/clients.service";
import { Clients } from "./interfaces";
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

export function AllClients() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [clients, setClients] = useState<Array<Clients>>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await ClientsService.getClients();
      setClients(response);
    };
    getData();
  }, []);
  if (!clients) {
    return <p>Loading data...</p>;
  }
  return (
    <>
    <Box 
 sx={{  display: "flex",justifyContent: "flex-end"}}>
      <Button onClick={handleOpen}>New Client</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow
                key={client.ID_CLIENT}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {client.ID_CLIENT}
                </TableCell>
                <TableCell align="right">{client.NAME}</TableCell>
                <TableCell align="right">{client.PHONE}</TableCell>
                <TableCell align="right">{client.ADDRESS}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ style }}>
            <AddClients />
          </Box>
        </Modal>
      </TableContainer>
    </>
  );
}
