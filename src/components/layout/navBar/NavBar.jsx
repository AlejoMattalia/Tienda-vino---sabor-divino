import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { Search } from "./elementsNavBar/search/Search";

export function NavBar({
  classActive,
  toggleSearch,
  classUl,
  toggleMenu,
  menuOpen,
  toggleIcon,
}) {
  return (
    <>
      <header className="containerNavBar">
        <nav>
          <img
            src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1687406836/Pagina%20de%20vinos/SABOR__2_-removebg-preview_dqjnox.png"
            alt="Logo"
            style={{ width: "90px" }}
          />

          <ul className={classUl}>
            <li>
              <a href="" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Home</a>
            </li>
          </ul>

          <div>
            <SearchIcon
              onClick={toggleSearch}
              sx={{ color: "#fff", cursor: "pointer", fontSize: "30px" }}
              className="icon"
            />
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

            <div onClick={toggleIcon} style={{display: "inline-block"}}>
              {menuOpen ? (
                <CloseIcon
                  onClick={toggleMenu}
                  sx={{ color: "#fff", cursor: "pointer", fontSize: "30px" }}
                  className="icon iconMenu"
                />
              ) : (
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

      <Search classActive={classActive} />
    </>
  );
}
