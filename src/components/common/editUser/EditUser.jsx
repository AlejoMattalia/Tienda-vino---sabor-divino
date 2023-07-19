import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { EmailEdit } from "./elementsEditUser/EmailEdit";
import { UserNameEdit } from "./elementsEditUser/UserNameEdit";
import { Password } from "./elementsEditUser/Password";
import { PasswordRepeat } from "./elementsEditUser/PasswordRepeat";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./EditUser.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export function EditUser(props) {
  //LLamamos a los datos desde el contexto
  const { userName, setUserName } = useContext(AuthContext);

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
      name: data.name || userName.name,
      email: data.email || userName.email,
      password: data.password || userName.password,
      repeatPassword: data.repeatPassword || userName.password,
    };

    if (
      information.name === userName.name &&
      information.email === userName.email &&
      information.password === userName.password
    ) {
      setDateEqual(true)

    } else {
      axios
        .patch(`http://localhost:4000/users/${userName.id}`, information)
        .then(() => {
          setUserName({
            ...userName,
            name: information.name,
            email: information.email,
            password: information.password,
          });
          setVerifyEditTrue(true);
        })
        .catch(() => {
          setErrorEditUser(true);
        });
    }
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    //Valores inciales
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },

    onSubmit: onSubmit,

    //Validaciones de los input
    validationSchema: Yup.object({
      name: Yup.string()
        .nullable()
        // .required("Debes ingresar un nombre de usuario")
        .min(5, "El nombre debe tener al menos 5 caracteres")
        .max(16, "El nombre debe tener menos de 16 caracteres"),

      email: Yup.string()
        .nullable()
        .matches(
          /^.+@.+\..+$/,
          'El correo electrónico debe tener un símbolo "@"'
        ),

      password: Yup.string()
        .nullable()
        .matches(
          /^(?=.*[A-Z])(?=.*\d).*$/,
          "La contraseña debe contener al menos un número y una letra mayúscula"
        ),

      repeatPassword: Yup.string()
        .nullable()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir"),
    }),
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Editar usuario
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form action="" className="form-container" onSubmit={handleSubmit}>
          <div className="divInput">
            <UserNameEdit
              name={userName.name}
              onChange={handleChange}
              error={errors.name}
            />
            <EmailEdit
              email={userName.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div className="divInput">
            <Password
              password={userName.password}
              onChange={handleChange}
              error={errors.password}
            />
            <PasswordRepeat
              password={userName.password}
              onChange={handleChange}
              error={errors.repeatPassword}
            />
          </div>

          <Button type="submit" className="button-form">
            Editar
          </Button>

          {dateEqual &&
            <div className="text-view-message-edit">
              <p>No pudiste editar el usuario, los datos son iguales.</p>
            </div>
          }

          {verifyEditTrue && (
            <div className="text-view-message-edit">
              <p>Salio todo bien, editaste correctamente al usuario.</p>
            </div>
          )}

          {errorEditUser &&
            <div className="text-view-message-edit">
              <p>Error no pudimos editar el usuario. Vuelve a intentarlo más tarde</p>
            </div>
          }
        </form>
      </Modal.Body>
    </Modal>
  );
}
