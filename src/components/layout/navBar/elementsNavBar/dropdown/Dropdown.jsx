import { NavDropdown } from "react-bootstrap";
import "./Dropdown.css";

export function Dropdown( {handleLiClick} ) {
  return (
    // Cuando se hace click en Catalogo, aparacen las opciones (combos o vinos)
    <>
      <NavDropdown
        className="dropDown-title"
        title="Catálogo"
        id="basic-nav-dropdown"
        onClick={handleLiClick}
      >
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
        <NavDropdown.Item
          href="#action/3.4"
          style={{
            color: "#000",
            border: "none",
            borderRadius: "0 0 10px 10px",
          }}
        >
          Vinos
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
