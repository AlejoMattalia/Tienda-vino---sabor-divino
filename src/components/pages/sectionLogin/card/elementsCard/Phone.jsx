import { FormControl, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },

  "& .MuiInput-underline:before": {
    borderBottom: "2px solid #fff",
  },

  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff",
  },
});


export function Phone({ onChange, values, errors, helperText }) {
  //Input sobre el nombre de usuario
  return (
    <FormControl sx={{ m: 1, width: "25ch" }}>
      <CssTextField
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
        inputProps={{ style: { color: "#fff" } }}
        InputLabelProps={{
          style: {
            color: "#fff",
          },
        }}
      />
    </FormControl>
  );
}
