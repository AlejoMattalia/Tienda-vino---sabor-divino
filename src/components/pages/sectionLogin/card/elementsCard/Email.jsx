import { FormControl, InputAdornment, TextField } from "@mui/material";

export function Email({ onChange, values, errors, helperText }) {

  //Input sobre el email
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        sx={{ borderBottom: "none" }}
        type="text"
        endAdornment={<InputAdornment position="end"></InputAdornment>}
        name="email"
        onChange={onChange}
        value={values}
        error={errors}
        helperText={helperText}
      />
    </FormControl>
  );
}
