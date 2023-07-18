import "./CardLogin.css";
import { Password } from "./elementsCard/Password.jsx";
import { NameUser } from "./elementsCard/NameUser.jsx";
import { Email } from "./elementsCard/Email";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export function CardLogin({
  titleCard,
  textBotton,
  viewEmail,
  confirmAccount,
  submitForm,
  validateEmail,
  emailVerify,
  nameUserVerify,
  timeMessage
}) {
  //Valor iniciar del usuario
  const valueInitial = {
    name: "",
    email: "",
    password: "",
  };

  //Validaciones
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: valueInitial,

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Debes ingresar un nombre de usuario")
        .min(5, "El nombre debe tener al menos 5 caracteres")
        .max(16, "El nombre debe tener menos de 16 caracteres"),

      email:
        validateEmail &&
        Yup.string()
          .required("Debes ingresar un email")
          .matches(
            /^.+@.+\..+$/,
            'El correo electrónico debe tener un símbolo "@"'
          ),

      password: Yup.string()
        .required("Debes ingresar una contraseña")
        .matches(
          /^(?=.*[A-Z])(?=.*\d).*$/,
          "La contraseña debe contener al menos un número y una letra mayúscula"
        ),
    }),

    onSubmit: submitForm,
  });

  return (
    <section className="container-global-register">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className="Title">Sabor Divino</h2>
        <img
          className="image"
          src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1688079562/Pagina%20de%20vinos/fotor-ai-20230623122342_ffadye.jpg"
          alt="Vaso de vino"
        />
      </div>

      <form className="container-register" onSubmit={handleSubmit}>
        <div className="container-header-card">
          <div className="container-icon">
            <PersonIcon className="iconUser" />
          </div>
          <p>{titleCard}</p>
        </div>

        <div className="inputs">
          <NameUser
            onChange={handleChange}
            values={values.name}
            errors={errors.name}
            helperText={errors.name}
          />

          {viewEmail && (
            <Email
              onChange={handleChange}
              values={values.email}
              errors={errors.email}
              helperText={errors.email}
            />
          )}

          <Password
            onChange={handleChange}
            values={values.password}
            errors={errors.password}
            helperText={errors.password}
          />
        </div>

        <Button className="button-register" variant="contained" type="submit">
          {textBotton}
        </Button>

        {(emailVerify === true || nameUserVerify === true) && timeMessage && (
          <div className="text-confirmRegister">
            {emailVerify === true && nameUserVerify === true ? (
              <p>El nombre de usuario y el email ya fueron utilizados.</p>
            ) : emailVerify && !nameUserVerify ? (
              <p>El email ya fue utilizado.</p>
            ) : !emailVerify && nameUserVerify ? (
              <p>El nombre de usuario ya fue utilizado.</p>
            ) : null}
          </div>
        )}

        {/* Se muestra este mensaje cuando el usuario ya tiene una cuenta y tiene que iniciar sesión */}
        {confirmAccount ? (
          <Link to={"/login"}>
            <p className="confirmAccount">
              Si ya tenes una cuenta, <a>Inicia Sesión</a>
            </p>
          </Link>
        ) : (
          //Se muestra este mensaje cuando el usuario no tiene cuanta y tiene que registrarse
          <Link to={"/register"}>
            <p className="confirmAccount">
              Si no tenes una cuenta, <a>Registrate</a>
            </p>
          </Link>
        )}
      </form>
    </section>
  );
}
