import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Search } from "./elementsNavBar/search/Search";
import { Dropdown } from "./elementsNavBar/dropdown/Dropdown.jsx";
import { UserIcon } from "./elementsNavBar/userIcon/UserIcon.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ConfigContext } from "../../../context/configContext";
import { CartContext } from "../../../context/CartContext";
import { AuthContext } from "../../../context/AuthContext";

export function NavBar({
  classUl,
  toggleMenu,
  menuOpen,
  toggleIcon,
  classLi,
  handleLiClick,
  togglePages,
}) {
  const { classActiveSearch, input, setInput, toggleSearch } =
    useContext(ConfigContext);

  const { getTotalQuantity } = useContext(CartContext);

  const {userName} = useContext(AuthContext);

  let total = getTotalQuantity();

  return (
    <>
      <header className="containerNavBar">
        <nav>
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1687406836/Pagina%20de%20vinos/SABOR__2_-removebg-preview_dqjnox.png"
              alt="Logo"
              style={{ width: "90px" }}
            />
          </Link>

          {/* Listado de paginas */}
          <ul className={classUl}>
            <li onClick={togglePages}>
              <Link to={"/"} className="list-pages-active">
                Inicio
              </Link>
            </li>
            <li>
              <Dropdown
                handleLiClick={handleLiClick}
                togglePages={togglePages}
              />
            </li>
            <li className={classLi} onClick={togglePages}>
              <Link to={"/blog"} className="list-pages">
                Blog
              </Link>
            </li>
            <li className={classLi} onClick={togglePages}>
              <Link to={"/comments"} className="list-pages">
                Comentarios
              </Link>
            </li>
            <li className={classLi} onClick={togglePages}>
              <Link to={"/contact"} className="list-pages">
                Contacto
              </Link>
            </li>
          </ul>

          {userName.name === "admin" && (
            <Link to={"/dashboard"} className="admin">
              <p>Admin</p>
            </Link>
          )}

          <div>
            {/* Icono del buscador */}
            <SearchIcon
              onClick={toggleSearch}
              sx={{ color: "#fff", cursor: "pointer", fontSize: "30px" }}
              className="icon"
            />

            {/* Icono del carrito */}
            <Link to={"/cart"}>
              <Badge
                badgeContent={total}
                showZero
                color="secondary"
                sx={{ cursor: "pointer", margin: "0 20px", zIndex: "1" }}
              >
                <ShoppingCartIcon
                  className="icon"
                  sx={{ color: "#fff", fontSize: 28 }}
                />
              </Badge>
            </Link>

            <UserIcon />

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
