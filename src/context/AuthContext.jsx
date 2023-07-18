import {createContext, useState} from "react";

export const AuthContext = createContext();


export function AuthContextProvider({children}) {

  //Contexto sobre el registro e inicio de sesion

  const [confirmLogin, setConfirmLogin] = useState(false);
  const [userName, setUserName] = useState({name: "", password: "", email: ""}); 

  const data = {
    userName,
    setUserName,
    confirmLogin,
    setConfirmLogin
  }
  
  return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
  )
}
