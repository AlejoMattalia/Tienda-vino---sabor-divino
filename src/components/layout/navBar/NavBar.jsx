import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Search } from "./elementsNavBar/search/Search";
import { Dropdown } from "./elementsNavBar/dropdown/Dropdown.jsx";
import {UserIcon} from "./elementsNavBar/userIcon/UserIcon.jsx"
import { Link } from "react-router-dom";

export function NavBar({
  classActiveSearch,
  toggleSearch,
  classUl,
  toggleMenu,
  menuOpen,
  toggleIcon,
  classLi,
  handleLiClick,
  input,
  setInput,
}) {
  return (
    <>
      <header className="containerNavBar">
        <nav>
          {/* Logo */}
          <img
            src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1687406836/Pagina%20de%20vinos/SABOR__2_-removebg-preview_dqjnox.png"
            alt="Logo"
            style={{ width: "90px" }}
          />

          {/* Listado de paginas */}
          <ul className={classUl}>
            <li>
              <Link to={"/"} className="list-pages-active">
                Inicio
              </Link>
            </li>
            <li>
              <Dropdown handleLiClick={handleLiClick} />
            </li>
            <li className={classLi}>
              <a href="" className="list-pages">
                Blog
              </a>
            </li>
            <li className={classLi}>
              <a href="" className="list-pages">
                Comentarios
              </a>
            </li>
            <li className={classLi}>
              <a href="" className="list-pages">
                Contacto
              </a>
            </li>
          </ul>

          <div>
            {/* Icono del buscador */}
            <SearchIcon
              onClick={toggleSearch}
              sx={{ color: "#fff", cursor: "pointer", fontSize: "30px" }}
              className="icon"
            />

            {/* Icono del carrito */}
            <Badge
              badgeContent={4}
              color="error"
              sx={{ cursor: "pointer", margin: "0 20px", zIndex: "1" }}
            >
              <ShoppingCartIcon
                className="icon"
                sx={{ color: "#fff", fontSize: 28 }}
              />
            </Badge>

            <UserIcon/>

            {/* Iconos del menu desplegable cuando la pagina sea menor a 850px */}
            <div onClick={toggleIcon} style={{ display: "inline-block" }}>
              {/* Si se abre el menu, se muestra el icono equis */}
              {menuOpen ? (
                <CloseIcon
                  onClick={toggleMenu}
                  sx={{ color: "#fff", cursor: "pointer", fontSize: "30px" }}
                  className="icon iconMenu"
                />
              ) : (
                // Si se cierra el menu, se muestra el icono del menu hamburguesa
                <MenuIcon
                  onClick={toggleMenu}
                  sx={{ color: "#fff", cursor: "pointer", fontSize: "30px" }}
                  className="icon iconMenu"
                />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Buscador */}
      <Search
        classActiveSearch={classActiveSearch}
        input={input}
        setInput={setInput}
      />
    </>
  );
}
