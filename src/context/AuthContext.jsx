import {createContext, useState} from "react";

export const AuthContext = createContext();


export function AuthContextProvider({children}) {

  //Contexto sobre el registro e inicio de sesion

  const [confirmLogin, setConfirmLogin] = useState(false);
  const [userName, setUserName] = useState({name: "", password: "", email: "", phone: ""});
  const [userNameGoogle, setUserNameGoogle] = useState({name: "", email: "", phone: "", photo: ""})
  const [loginGoogle, setLoginGoogle] = useState(false);

  const data = {
    userName,
    setUserName,
    setUserNameGoogle,
    userNameGoogle,
    confirmLogin,
    setConfirmLogin,
    loginGoogle, 
    setLoginGoogle
  }

  return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
  )
}
