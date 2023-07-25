import { NavDropdown } from "react-bootstrap";
import "./Dropdown.css";
import { Link } from "react-router-dom";

export function Dropdown({ handleLiClick }) {
  return (
    // Cuando se hace click en Catalogo, aparacen las opciones (combos o vinos)
    <>
      <NavDropdown
        className="dropDown-title"
        title="Catálogo"
        id="basic-nav-dropdown"
        onClick={handleLiClick}
      >
        <Link to={"/category/combos"}>
          <NavDropdown.Item
            className="item-dropDown"
            href="#action/3.1"
            style={{
              color: "#000",
              border: "none",
              borderRadius: "10px 10px 0 0",
            }}
          >
            Combos
          </NavDropdown.Item>
        </Link>

        <Link to={"/category/tintos"}>
          <NavDropdown.Item
            href="#action/3.4"
            style={{
              color: "#000",
              border: "none"
            }}
          >
            Vinos Tintos
          </NavDropdown.Item>
        </Link>

        <Link to={"/category/blancos"}>
          <NavDropdown.Item
            href="#action/3.4"
            style={{
              color: "#000",
              border: "none",
              borderRadius: "0 0 10px 10px",
            }}
          >
            Vinos Blancos
          </NavDropdown.Item>
        </Link>
      </NavDropdown>
    </>
  );
}
