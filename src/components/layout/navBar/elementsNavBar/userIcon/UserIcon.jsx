import { useState, useContext, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./UserIcon.css";
import { Button } from "@mui/material";
import { AuthContext } from "../../../../../context/AuthContext";
import { Link } from "react-router-dom";
import { EditUser } from "../../../../common/editUser/EditUser";

export function UserIcon() {
  //Se trae del contexto el nombre con el que se registro el usuario, y la confirmacion si inicio sesion
  const { confirmLogin, userName } = useContext(AuthContext);
  const [viewFrame, setViewFrame] = useState(false); //Variable para mostrar o ocultar el cuadro
  const [editUserConfirm, setEditUserConfirm] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  //Funcion para mostrar o ocultar cuadro
  const toggleFrame = () => {
    setViewFrame(!viewFrame);
  };

  const handleButtonEdit = ()=>{
    setEditUserConfirm(true)
    setViewFrame(false)
    setModalShow(true)
  }


  useEffect(()=>{
    const rootElement = document.documentElement;
    const currentOverflow = rootElement.style.overflow;

    if (currentOverflow === "hidden" && modalShow === false) {
      rootElement.style.overflow = "";
    } else {
      rootElement.style.overflow = "hidden";
    }
  },[modalShow])

  return (
    // Icono del usuario
    <div style={{ position: "relative", display: "inline-block" }}>
      <AccountCircleIcon
        onClick={toggleFrame}
        sx={{
          color: "#fff",
          cursor: "pointer",
          fontSize: "30px",
          marginRight: "15px",
        }}
        className="icon"
      />
      {/* Cuando el usuario haga click en el icono, se mostrara el cuadro */}
      {viewFrame && (
        <>
          <div className="triangle"></div>
          
          {/* Confirmacion de inicio de sesion, si inicio correctamente, se muestra el nombre de usuario y una opción para editarlo */}
          {confirmLogin ? (
            <div className="frame">
              <span>{userName.name}</span>
              <Button variant="outlined" onClick={handleButtonEdit}>Editar</Button>
              <Button variant="contained" onClick={handleButtonEdit} className="button-delete-account">Eliminar Cuenta</Button>
            </div>
          ) 
          // Si todavia no inicio sesión, se mostrara que no inicio sesión y le da la opcion para iniciar sesión
          : (
            <div
              className="frame"
              style={{ width: "205px", padding: "20px 10px" }}
            >
              <span style={{ fontSize: "17px" }}>No iniciaste sesión</span>
              <Link to={"/login"}>
                <Button
                  variant="contained"
                  style={{ fontSize: "13px" }}
                  onClick={() => setViewFrame(false)}
                >
                  Iniciar Sesión
                </Button>
              </Link>
            </div>
          )}
        </>
      )}

      {
        editUserConfirm &&
        <EditUser show={modalShow}  onHide={() => setModalShow(false)}/>
      }
    </div>
  );
}
