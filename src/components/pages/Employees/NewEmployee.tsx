import Box from "@mui/material/Box";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { EmployeeFormInput, Employee } from './interfaces';
import { addEmployee } from "../../../services/employees.service";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    height: 48,
    margin: "0 auto",
  },
});

export const NewEmployee = () => {
  const classes = useStyles();
  const [added, setAdded] = useState(false);
  const [errorAdding, setErrorAdding] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<EmployeeFormInput>({
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      salary: 5000
    }
  });
  
  const onSubmit = (employee: EmployeeFormInput) => {
    //console.log(employee);
    async function sendEmployee(){
      const response = await addEmployee(employee);
      //console.log(response.rowAffected);
      if(response.rowAffected[0] === 1){
        //console.log('added')
        setAdded(true);
      }else{
        setErrorAdding(true);
      }
    }
    sendEmployee()
  };
  
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name")} placeholder="Name" required/>
          <input {...register("phone")} placeholder="Phone"  required/>
          <input {...register("address")} placeholder="Address" required/>
          <input {...register("salary")} placeholder="Salary" required/>
        </div>
        <Button className={classes.root} type="submit">
          Registrar
        </Button>
        {added && <p>Employee added successfully</p>}
        {errorAdding && <p>There was an error</p>}
      </form>
    </div>
    </Box>
  );
};
