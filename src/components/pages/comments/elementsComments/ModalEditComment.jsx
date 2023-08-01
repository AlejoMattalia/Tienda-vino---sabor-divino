import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Button, Rating, TextField, Typography } from "@mui/material";
import { dataBase } from "../../../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

export function ModalEditComment(props) {
  //   //LLamamos a los datos desde el contexto
  const {id, value, comment } = props.data;

  const [valueRating, setValueRating] = useState(value);

  useEffect(() => {
    setValueRating(value);
  }, [value]);

  //Si es la edicion del usuario salio correcta se muestra el mensaje que todo salio bien
  const [verifyEditTrue, setVerifyEditTrue] = useState(false);
  useEffect(() => {
    if (verifyEditTrue) {
      const timeout = setTimeout(() => {
        setVerifyEditTrue(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [verifyEditTrue]);

  //Si los datos son igales al usuario se muestra un aviso diciendole el problema que tuvo
  const [dateEqual, setDateEqual] = useState(false);
  useEffect(() => {
    if (dateEqual) {
      const timeout = setTimeout(() => {
        setDateEqual(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dateEqual]);

  const [errorEditUser, setErrorEditUser] = useState(false);
  useEffect(() => {
    if (errorEditUser) {
      const timeout = setTimeout(() => {
        setErrorEditUser(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [errorEditUser]);

  //Funcion onSubmit para editar el usuario
  const onSubmit = (data) => {
    const information = {
      value: valueRating || value,
      comment: data.comment || comment,
    };

    if (information.value === value && information.comment === comment) {
      setDateEqual(true);
    } else {
      data.comment = "";
        updateDoc(doc(dataBase, "comment", id), {
          value: information.value,
          comment: information.comment
        })
          .then(() => {
            setVerifyEditTrue(true);

            setTimeout(()=>{
              props.onHide();
            }, 5000)
          })
          .catch(() => {
            setErrorEditUser(true);
          });
    }
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    //Valores inciales
    initialValues: {
      comment: "",
    },

    onSubmit: onSubmit,
  });

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ background: "hsl(0, 0%, 8%)", color: "#fff" }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Editar comentario
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ background: "hsl(0, 0%, 8%)", color: "#fff" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <Typography component="legend" style={{ color: "#e6e6e6" }}>
              Puntuación
            </Typography>
            <Rating
              className="starts-controller"
              name="value"
              value={valueRating}
              onChange={(event, newValue) => {
                setValueRating(newValue);
              }}
            />
          </div>

          <TextField
            className="textArea-addComment"
            multiline
            label="Comentario"
            rows={5}
            style={{ width: "100%", marginTop: "20px" }}
            name="comment"
            onChange={handleChange}
            defaultValue={comment}
            error={errors.comment}
            helperText={errors.comment}
          />

          <div className="container-button-comment">
            <Button type="submit" variant="contained" className="button-comment-edit">
              Editar
            </Button>
          </div>

          {dateEqual && (
            <div className="text-view-message-edit-comment">
              <p>No pudiste editar el comentario, los datos son iguales.</p>
            </div>
          )}

          {verifyEditTrue && (
            <div className="text-view-message-edit-comment">
              <p>Salio todo bien, editaste correctamente el comentario.</p>
            </div>
          )}

          {errorEditUser && (
            <div className="text-view-message-edit-comment">
              <p>
                Error no pudimos editar el comentario. Vuelve a intentarlo más
                tarde
              </p>
            </div>
          )}
        </form>
      </Modal.Body>
    </Modal>
  );
}
