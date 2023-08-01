import { createContext, useEffect, useState } from "react";

//Contexto
export const ConfigContext = createContext();

export function ConfigContextProvider({ children }) {
  //Buscador (variables y funciones)
  const [classActiveSearch, setClassActiveSearch] = useState("");
  const [input, setInput] = useState("");
  // Función para mostrar o ocultar el buscador
  const toggleSearch = () => {
    classActiveSearch === ""
      ? setClassActiveSearch("classActive")
      : setClassActiveSearch("");
    setInput("");
  };



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


  //objeto para exportar las funcionalidades
  const data = {
    widthPage,
    isClickOverflow,
    setIsClickOverflow,
    classActiveSearch,
    setClassActiveSearch,
    input,
    setInput,
    toggleSearch
  };

  return (
    <ConfigContext.Provider value={data}>{children}</ConfigContext.Provider>
  );
}
