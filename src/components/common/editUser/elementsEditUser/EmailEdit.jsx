import { TextField } from "@mui/material";

export function EmailEdit({email, onChange, error}) {
  return (
    <TextField
      required
      id="outlined-required"
      label="Email"
      name="email"
      defaultValue={email}
      onChange={onChange}
      helperText={error}
      error={error}
    />
  );
}
