import { TextField } from "@mui/material";

export function Password({password, onChange, error}) {
  return (
    <TextField
      id="outlined-password-input"
      label="Contraseña"
      type="password"
      name="password"
      autoComplete="current-password"
      defaultValue={password}
      onChange={onChange}
      helperText={error}
      error={error}
    />
  );
}
