import { FormControl, InputAdornment, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: "#fff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#fff",
    },
  },
});

export function Email({ onChange, values, errors, helperText }) {
  //Input sobre el email
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
      <CssTextField
        id="custom-css-outlined-input"
        label="Email"
        variant= "outlined"
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
