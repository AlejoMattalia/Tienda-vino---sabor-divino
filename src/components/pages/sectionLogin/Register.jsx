import axios from "axios";
import { CardLogin } from "./card/CardLogin.jsx";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";


export function Register() {
  const [confirmRegister, setConfirmRegister] = useState(false);

  const handleSubmitForm = (data) => {
    //Enviar los datos al servidor
    axios.post("http://localhost:4000/users", data);
    setConfirmRegister(true)
  };

  return (
    <>
      {
        // Si la confirmacion del registro es true, se muestra en pantalla un aviso y un botón donde te lleva para poder iniciar sesión
        confirmRegister &&
        <>
          <div className="container-message">
            <h1 style={{ fontSize: "35px" }}>Te registraste correctamente</h1>
            <Link to={"/login"}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#B8860B" }}
              >
                Iniciar Sesión
              </Button>
            </Link>
          </div>

          <div className="background-message"></div>
        </>
      }
      <CardLogin
        titleCard="Registrarse"
        textBotton="Registrarse"
        viewEmail={true}
        confirmAccount={true}
        submitForm={handleSubmitForm}
        validateEmail={true}
      />
    </>
  );
}
