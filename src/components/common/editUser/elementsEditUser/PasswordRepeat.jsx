import { TextField } from "@mui/material";

export function PasswordRepeat({password, onChange, error}) {
  return (
    <TextField
      id="outlined-password-input"
      label="Repetir contraseña"
      type="password"
      name="repeatPassword"
      autoComplete="current-password"
      defaultValue={password}
      onChange={onChange}
      helperText={error}
      error={error}
    />
  );
}
