import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import { ConfigContext } from "./context/configContext";
import { CartContextProvider } from "./context/CartContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const { widthPage, isClickOverflow } = useContext(ConfigContext);

  return (
    <>
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>

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
