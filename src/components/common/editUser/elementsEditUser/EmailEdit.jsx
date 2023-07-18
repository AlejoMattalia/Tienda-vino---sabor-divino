import { TextField } from "@mui/material";

export function EmailEdit({email}) {
  return (
    <TextField
      style={{margin: "5.5px"}}
      required
      id="outlined-required"
      label="Email"
      defaultValue={email}
    />
  );
}
