import {
    FormControl,
    InputAdornment,
    TextField,
  } from "@mui/material";
  
  export function Phone({ onChange, values, errors, helperText }) {
  
    //Input sobre el nombre de usuario
    return (
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <TextField
          id="standard-basic"
          label="Teléfono"
          variant="standard"
          sx={{ borderBottom: "none", color: "#fff" }}
          type="tel"
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          name="phone"
          onChange={onChange}
          value={values}
          error={errors}
          helperText={helperText}
        />
      </FormControl>
    );
  }
  