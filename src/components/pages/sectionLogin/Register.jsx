import {CardLogin} from "./card/CardLogin.jsx";

export function Register() {

  const submitForm = (data) => {
    console.log("Estoy en el iRegistro")
    console.log(data);
  };

  return (
    <CardLogin titleCard="Registrarse" textBotton="Registrarse" viewEmail={true} confirmAccount={true} submitForm={submitForm} validateEmail={true}/>
  )
}
