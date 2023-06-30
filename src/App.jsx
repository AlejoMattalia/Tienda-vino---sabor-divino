import "./App.css";
import { NavBarContainer } from "./components/layout/navBar/NavBarContainer";
import { Footer } from "./components/layout/footer/Footer";
import { Home } from "./components/pages/home/Home";
import {Login} from "./components/pages/sectionLogin/Login.jsx";
import { useState, useEffect } from "react";
import { Register } from "./components/pages/sectionLogin/Register";
function App() {
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

  return (
    <>
      <NavBarContainer
        isClickOverflow={isClickOverflow}
        setIsClickOverflow={setIsClickOverflow}
        widthPage={widthPage}
      />
      <Home />
      <Login/>
      <Register/>
      <Footer />





      <style>
        {`
          :root {
            overflow: ${
              widthPage < 851 //Verificar si el ancho de la pagina es mayor o menor a 850
                ? isClickOverflow
                  ? "hidden"
                  : "auto" // Si se hizo click en el menu el valor es hidden
                : "auto" // Directamente el valor es auto
            };
          }
        `}
      </style>
    </>
  );
}

export default App;
