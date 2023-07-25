import { AuthContext } from "../../../context/AuthContext.jsx";
import { CardLogin } from "./card/CardLogin.jsx";
import { useContext, useState } from "react";
import { useFirebase } from "../../../hooks/useFirebase.js";
import "./Login.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Login() {
  //Traemos variables del contexto Auth
  const { userName, setUserName, setConfirmLogin } = useContext(AuthContext);
  //Guardamos la informacion de los usuarios en la variable dataUser
  const {data: dataUser} = useFirebase("users");
  const [message, setMessage] = useState(undefined);

  console.log(dataUser)

  const submitForm = (data) => {
    //Traer al usuario para enviar el email
    const user = dataUser.find((user)=>user.name.trim() === data.name.trim());

    //Devuelve true si los datos que envio el usuario son iguales a los que se encuentra en el servidor
    const existsUser = dataUser.some((user) => {
      return (
        user.name.trim() === data.name.trim() &&
        user.password.trim() === data.password.trim()
      );
    });

    //Si es true, guardar los datos en la varible que se encuentra en el contexto
    if (existsUser === true) {
      setUserName({
        ...userName,
        name: data.name,
        password: data.password,
        email: user.email,
        id: user.id
      });

      //Confirmacion verdadera para posteriormente utilizar los datos en la app
      setConfirmLogin(true);
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  return (
    // Si los datos son correctos, se mustra en pantalla un aviso que se inicio correctamente y un boton donde te lleva al inicio
    <>
      {message === true && (
        <>
          <div className="container-message">
            <h1>Iniciaste sesión correctamente</h1>
            <Link to={"/"}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#B8860B" }}
                onClick={() => {
                  setMessage(undefined)

                  setTimeout(() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }, 1000);
                }}
              >
                Ir al inicio
              </Button>
            </Link>
          </div>

          <div className="background-message"></div>
        </>
      )}
      {/* Si los datos son incorrectos, se muestra en pantalla un aviso */}
      {message === false && (
        <>
          <div className="container-message">
            <h1>Usuario o contraseña incorrecta</h1>
            <Button
              variant="contained"
              onClick={() => setMessage(undefined)}
              style={{ backgroundColor: "#B8860B" }}
            >
              Volver a intentar
            </Button>
          </div>

          <div className="background-message"></div>
        </>
      )}

      <CardLogin
        titleCard="Iniciar Sesión"
        textBotton="Iniciar Sesión"
        viewEmail={false}
        confirmAccount={false}
        submitForm={submitForm}
        validateEmail={false}
      />
    </>
  );
}
