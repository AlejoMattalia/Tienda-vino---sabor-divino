import {CardLogin} from "./card/CardLogin.jsx"

export  function Login() {

  const submitForm = (data) => {
    console.log("Estoy en el inicio Sesion")
    console.log(data);
  };

  return (
    <CardLogin titleCard="Iniciar Sesión" textBotton="Iniciar Sesión" viewEmail={false} confirmAccount={false} submitForm={submitForm} validateEmail={false}/>
  )
}
