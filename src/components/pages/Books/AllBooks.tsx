import { useEffect, useState } from "react";
import { AddBook } from "./AddBook";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { AddAuthor } from "./AddAuthor";
import { BooksService } from "../../../services/books.service";
import { Books } from "./interfaces";
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

export const AllBooks = () => {
  const [openAuthor, setOpenAuthor] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [books, setBooks] = useState<Array<Books>>([]);
  const handleOpenAuthor = () => setOpenAuthor(true);
  const handleCloseAuthor = () => setOpenAuthor(false);
  const handleOpenBook = () => setOpenBook(true);
  const handleCloseBook = () => setOpenBook(false);
  useEffect(() => {
    const getData = async () => {
      const response = await BooksService.getBooks();
      setBooks(response);
    };
    getData();
  }, []);
  if (!books) {
    return <p>Loading data...</p>;
  }
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={handleOpenBook}>New Book</Button>
        <Button onClick={handleOpenAuthor}>New Author</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id Book</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Author</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow
                key={book.ID_BOOK}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {book.ID_BOOK}
                </TableCell>
                <TableCell align="right">{book.TITLE}</TableCell>
                <TableCell align="right">{book.PRICE}</TableCell>
                <TableCell align="right">{book.STOCK}</TableCell>
                <TableCell align="right">{book.AUTHOR}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      <Modal
        open={openBook}
        onClose={handleCloseBook}
      >
        <Box sx={{ style }}>
          <AddBook handleClose={handleCloseBook}/>
        </Box>
      </Modal>
      <Modal
        open={openAuthor}
        onClose={handleCloseAuthor}
      >
        <Box sx={{ style }}>
          <AddAuthor handleClose={handleCloseAuthor}/>
        </Box>
      </Modal>
      </TableContainer>
    </>
  );
};
