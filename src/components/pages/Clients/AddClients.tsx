import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

interface ClientFormInput {
  name: string;
  phone: string;
  address: string;
}
const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    height: 48,
    margin: "0 auto",
  },
});
export const AddClients = () => {
  const { control, handleSubmit } = useForm<ClientFormInput>();

  const onSubmit: SubmitHandler<ClientFormInput> = (data) => {
    console.log(data);
  };
  const classes = useStyles();

  return (
    <Box
      sx={{
        width: 500,
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}

    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField label="Nombre" variant="standard"       autoComplete="off"
              {...field} />
            )}
          />
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField label="Telefono" variant="standard"  autoComplete="off" {...field} />
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 20 }}
            render={({ field }) => (
              <TextField label="Dirección" variant="standard"  autoComplete="off" {...field} />
            )}
          />
        </div>
        <Button className={classes.root} type="submit">
          Registrar
        </Button>
      </form>
    </Box>
  );
};
