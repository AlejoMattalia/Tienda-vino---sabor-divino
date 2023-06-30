import {
  FormControl,
  TextField,
} from "@mui/material";

export function Password({ onChange, values, errors, helperText }) {

  

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
      <TextField
        id="standard-basic"
        label="Contraseña"
        variant="standard"
        sx={{ borderBottom: "none" }}
        type="password"
        name="password"
        onChange={onChange}
        value={values}
        error={errors}
        helperText={helperText}
      />
    </FormControl>
  );
}
