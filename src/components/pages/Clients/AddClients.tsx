import TextField from "@mui/material/TextField";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { ClientsService } from "../../../services/clients.service";
import { ClientFormInput } from "./interfaces";

interface propsChild{
 handleClose:  ()=> void;
}
const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    height: 48,
    margin: "0 auto",
  },
});


export const AddClients = ({handleClose}: propsChild)  => {
  const { control, handleSubmit } = useForm<ClientFormInput>();
  const onSubmit: SubmitHandler<ClientFormInput> = (data) => {
    ClientsService.addClient(data.name, data.phone, data.address);
  };
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
                <Button className={classes.root}  onClick={handleClose}>
          Cerrar
        </Button>
      </form>
    </Box>
  );
};
