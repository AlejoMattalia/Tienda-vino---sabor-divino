import "./App.css";
import { Home } from "./components/pages/home/Home";
import { Login } from "./components/pages/sectionLogin/Login.jsx";
import { Register } from "./components/pages/sectionLogin/Register";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { useContext } from "react";
import { ConfigContext } from "./context/ConfigContext";

function App() {
  const { widthPage, isClickOverflow } = useContext(ConfigContext);

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>

            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="*" element={<h1>404 Found</h1>} />
            
          </Routes>
        </BrowserRouter>
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
