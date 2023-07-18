import { TextField } from "@mui/material";

export function UserNameEdit({name}) {
  return (
    <TextField
      style={{margin: "5.5px"}}
      required
      id="outlined-required"
      label="Nombre de usuario"
      defaultValue={name}
    />
  );
}
