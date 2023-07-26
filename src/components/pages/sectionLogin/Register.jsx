// import axios from "axios";
import { CardLogin } from "./card/CardLogin.jsx";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Login.css";
import { useFirebase } from "../../../hooks/useFirebase.js";
import { dataBase } from "../../../firebaseConfig.js";
import { collection, addDoc} from "firebase/firestore";

export function Register() {
  const [confirmRegister, setConfirmRegister] = useState(false);

  const {data: dataUsers} = useFirebase("users");

  const [emailVerify, setEmailVerify] = useState(false);
  const [nameUserVerify, setNameUserVerify] = useState(true); 
  const [timeMessage, setTimeMessage] = useState(false);


  //useEffect para mostrar por 5 segundos el aviso de que superaste el stock
  useEffect(() => {
    if (timeMessage) {
      const timeout = setTimeout(() => {
        setTimeMessage(false);
      }, 3500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [timeMessage]);

  const handleSubmitForm = (data) => {

    //Verificar si el email y name ya existen en la base de datos
    const verifyName = dataUsers.some((el)=> el.name === data.name);
    const verifyEmail = dataUsers.some((el)=> el.email === data.email);

    if(verifyName || verifyEmail){
      setTimeMessage(true)

      if(verifyName && verifyEmail === false){
        setNameUserVerify(true)
        setEmailVerify(false)
      }
      else if(verifyEmail && verifyName === false){
        setEmailVerify(true)
        setNameUserVerify(false)
      }
      else{
        setEmailVerify(true)
        setNameUserVerify(true)
      }
    }
    else{
      //Enviar los datos al servidor
      const registerCollection = collection(dataBase, "users");
      addDoc(registerCollection, data)
      setConfirmRegister(true)
    }
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
        emailVerify={emailVerify}
        nameUserVerify={nameUserVerify}
        timeMessage={timeMessage}
        setTimeMessage={setTimeMessage}
      />
    </>
  );
}
