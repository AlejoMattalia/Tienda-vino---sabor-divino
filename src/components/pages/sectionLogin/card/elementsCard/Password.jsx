import {
  FormControl,
  TextField,
} from "@mui/material";
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
    borderBottomColor: "#ffff",
  },
});


export function Password({ onChange, values, errors, helperText }) {

  //Input sobre la contraseña
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
      <CssTextField
        id="standard-basic"
        label="Contraseña"
        variant="standard"
        sx={{ borderBottom: "none" }}
        type="password"
        name="password"
        onChange={onChange}
        value={values}
        error={errors}
        helperText={helperText}
        inputProps={{ style: { color: "#fff" } }}
        InputLabelProps={{
          style:{
            color: "#fff"
          }
        }}
      />
    </FormControl>
  );
}
