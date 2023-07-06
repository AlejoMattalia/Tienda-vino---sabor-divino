import { createContext, useEffect, useState } from "react";

export const ConfigContext = createContext();

export function ConfigContextProvider({ children }) {
  

  //Cuando se haga click en el menu, dar un valor de overflow: "hidden" o "auto" al :root para que la pagina cuando el menu este abiero no se pueda hacer scroll
  const [isClickOverflow, setIsClickOverflow] = useState(false);

  //Obtener el ancho de la pagina
  const [widthPage, setWidthPage] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const data = {
    widthPage,
    isClickOverflow,
    setIsClickOverflow,
  };

  return (
    <ConfigContext.Provider value={data}>
        {children}
    </ConfigContext.Provider>
  );
}
