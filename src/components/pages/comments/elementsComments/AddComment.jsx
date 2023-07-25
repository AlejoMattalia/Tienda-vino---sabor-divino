import { Button, Rating, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import "../Comments.css";
import { AuthContext } from "../../../../context/AuthContext";
import { useFormik } from "formik";
import { collection, addDoc} from "firebase/firestore";
import { dataBase } from "../../../../firebaseConfig";
import { ModalError } from "../../../common/confirmBuy/elementsConfirmBuy/ModalError";
import * as Yup from "yup";


export function AddComment() {
  const { userName, confirmLogin } = useContext(AuthContext);
  const [value, setValue] = useState(5);
  const [verifylogin, setVerifyLogin] = useState(false);
  const [modalShow, setModalShow] = useState(false)

  const onSubmit = (comment) => {
    const data = {
      name: userName.name,
      value,
      comment: comment.comment,
    };

    if (confirmLogin) {
      if(comment.comment !== undefined){
        const commentCollection = collection(dataBase, "comment");
        addDoc(commentCollection, data);
        setVerifyLogin(false)
      }
    } else {
      setVerifyLogin(true)
      setModalShow(true)
    }
  };

  const {handleSubmit, handleChange, errors, values} = useFormik({
    initialValues: { comment: "" },
    onSubmit: onSubmit,
    validationSchema: Yup.object({
      comment: Yup.string().required("Debes escribir un comentario")
    })
  });


  return (
    <section className="container-addComment">
      <p className="titleAddComment">Agrega un comentario</p>

      <form onSubmit={handleSubmit}>
        <div>
          <Typography component="legend" style={{ color: "#e6e6e6" }}>
            Puntuación
          </Typography>
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
          label="Deja tu comentario"
          multiline
          rows={5}
          style={{ width: "100%", marginTop: "20px" }}
          name="comment"
          onChange={handleChange}
          value={values.comment}
          error={errors.comment}
          helperText={errors.comment}
        />

        <div className="container-button-comment">
          <Button
            type= "submit"
            variant="outlined"
            className="button-comment"
            onClick={onSubmit}
          >
            Comentar
          </Button>
        </div>
      </form>

      {
        verifylogin &&
        <ModalError show={modalShow} onHide={() => setModalShow(false)} text={"Debes iniciar sesión para comentar. Si no tenés una cuenta registrate AQUÍ. Si ya tienes cuanta inicia sesión."} title={"No pudiste comentar"}/>
      }
    </section>
  );
}
