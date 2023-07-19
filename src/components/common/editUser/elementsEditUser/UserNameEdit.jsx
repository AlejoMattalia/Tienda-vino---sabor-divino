import { TextField } from "@mui/material";

export function UserNameEdit({name, onChange, error}) {
  return (
    <TextField
      required
      id="outlined-required"
      label="Nombre de usuario"
      name="name"
      defaultValue={name}
      onChange={onChange}
      helperText={error}
      error={error}
    />
  );
}
