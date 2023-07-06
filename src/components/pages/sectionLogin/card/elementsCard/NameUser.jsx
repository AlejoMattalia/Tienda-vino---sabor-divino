import {
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";

export function NameUser({ onChange, values, errors, helperText }) {

  //Input sobre el nombre de usuario
  return (
    <FormControl sx={{ m: 1, width: "25ch" }}>
      <TextField
        id="standard-basic"
        label="Nombre de usuario"
        variant="standard"
        sx={{ borderBottom: "none", color: "#fff" }}
        type="text"
        endAdornment={<InputAdornment position="end"></InputAdornment>}
        name="name"
        onChange={onChange}
        value={values}
        error={errors}
        helperText={helperText}
      />
    </FormControl>
  );
}
