import { TextField } from "@mui/material";

export function Phone({phone, onChange, error}) {
  return (
    <TextField
      required
      id="outlined-required"
      label="Teléfono"
      name="phone"
      defaultValue={phone}
      onChange={onChange}
      helperText={error}
      error={error}
    />
  );
}