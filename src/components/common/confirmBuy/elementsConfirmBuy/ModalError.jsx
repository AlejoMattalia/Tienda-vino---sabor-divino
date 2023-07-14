import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

export function ModalError(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ background: "hsl(0, 0%, 8%)", color: "#fff" }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "#fff" }}
        ></Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          background: "hsl(0, 0%, 8%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4
          style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}
        >
          No pudiste comprar los productos
        </h4>
        <p style={{ color: "#fff" }}>
          Debes iniciar sesión para realizar la compra. Si no tenés una cuenta
          registrate{" "}
          <Link to={"/register"}>
            <span
              style={{
                color: "#B8860B",
                cursor: "pointer",
                borderBottom: "2px solid #B8860B",
              }}
            >
              AQUÍ
            </span>
          </Link>
          . Si ya tienes cuanta inicia sesión.
        </p>

        <Link to={"/login"}>
          <Button
            variant="outlined"
            style={{ background: "#B8860B", color: "#fff" }}
          >
            Iniciar Sesión
          </Button>
        </Link>
      </Modal.Body>
      <Modal.Footer style={{ background: "hsl(0, 0%, 8%)" }}></Modal.Footer>
    </Modal>
  );
}
