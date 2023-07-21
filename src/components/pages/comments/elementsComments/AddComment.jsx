import { Rating, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import "../Comments.css";
import { AuthContext } from "../../../../context/AuthContext";

export function AddComment() {

  const {userName} = useContext(AuthContext);  
  const [value, setValue] = useState(5); 
  
   console.log(value)
   console.log(userName.name) 


  return (
    <section className="container-addComment">
      <p className="titleAddComment">Agrega un comentario</p>

      <div>
        <Typography component="legend" style={{color: "#e6e6e6"}}>Puntuación</Typography>
        <Rating
          className="starts-controller"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </div>

      <TextField
          className="textArea-addComment"
          id="outlined-multiline-static"
          label="Deja tu comentario"
          multiline
          rows={5}
        />
    </section>
  );
}
