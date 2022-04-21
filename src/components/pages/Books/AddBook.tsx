import Box from "@mui/material/Box";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { BookFormInput } from "./interfaces";
import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { BooksService } from "../../../services/books.service";
import { useEffect } from "react";
import { AuthorLabel } from "./interfaces";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { display } from "@mui/system";
interface propsAddBook {
  handleClose: () => void;
}

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    height: 48,
    margin: "0 auto",
  },
});

export const AddBook = ({ handleClose }: propsAddBook) => {
  const [errors, setErrors] = useState<null | string>(null);
  const [authors, setAuthors] = useState<AuthorLabel[]>([]);
  const { control, handleSubmit } = useForm<BookFormInput>();

  const onSubmit: SubmitHandler<BookFormInput> = (data) => {
    BooksService.addBook(
      data.name,
      data.description,
      data.price,
      data.stock,
      data.author
    )
      .then((response) => {
        setErrors(null);
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setErrors("Referencias no encontradas, revisa los datos");
        }
      });
  };

  const generateSelectOptions = () => {
    return authors.map((author) => {
      return (
        <MenuItem key={author.id} value={author.label}>
          {author.label}
        </MenuItem>
      );
    });
  };
  useEffect(() => {
    const getAuthors = async () => {
      const response = await BooksService.getAuthors();
      let data: AuthorLabel[] = [];
      response.map((author) => {
        data.push({ label: author.NAME, id: author.ID_AUTHOR });
      });
      setAuthors(data);
    };
    getAuthors();
  }, []);

  const classes = useStyles();
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 50 }}
            render={({ field }) => (
              <TextField
                label="Titulo"
                variant="standard"
                autoComplete="off"
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 50 }}
            render={({ field }) => (
              <TextField
                label="Descripcion"
                variant="standard"
                autoComplete="off"
                {...field}
              />
            )}
          />
          <Controller
            name="price"
            defaultValue={0}
            control={control}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                type="number"
                label="Precio"
                variant="standard"
                autoComplete="off"
                {...field}
              />
            )}
          />
          <Controller
            defaultValue={0}
            name="stock"
            control={control}
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField
                type="number"
                label="Stock"
                variant="standard"
                autoComplete="off"
                {...field}
              />
            )}
          />
          

          <Controller
            defaultValue=""
            control={control}
            name="author"
            render={({ field: { onChange, value } }) => (
              <><InputLabel>Autor</InputLabel>
              <Select label='Autor'
              sx={{display:'block', padding:'0px', width:'75%'}}
              onChange={onChange} value={value}>
                {generateSelectOptions()}
              </Select>
              </>
            )}
          />
        </div>
        {errors}
        <Button className={classes.root} type="submit">
          Añadir
        </Button>
        <Button className={classes.root} onClick={handleClose}>
          Cerrar
        </Button>
      </form>
    </Box>
  );
};
