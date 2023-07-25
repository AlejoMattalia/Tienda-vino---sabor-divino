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
          {props.title}
        </h4>
        <p style={{ color: "#fff", fontSize: "13px" }}>
          {props.text}{" "}
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
            style={{ background: "#B8860B", color: "#fff", marginTop: "15px" }}
          >
            Iniciar Sesión
          </Button>
        </Link>
      </Modal.Body>
      <Modal.Footer style={{ background: "hsl(0, 0%, 8%)" }}></Modal.Footer>
    </Modal>
  );
}
