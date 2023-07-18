import { TextField } from "@mui/material";

export function Password() {
  return (
    <TextField
      style={{margin: "20px 5.5px 0 5.5px"}}
      id="outlined-password-input"
      label="Contraseña"
      type="password"
      autoComplete="current-password"
    />
  );
}
