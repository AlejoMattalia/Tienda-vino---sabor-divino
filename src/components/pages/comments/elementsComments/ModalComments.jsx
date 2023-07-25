import { Rating } from "@mui/material";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Comments.css";

export function ModalComment(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div style={{display: "flex", gap: "10px", height: "30px"}}>
            <p style={{color: "#000"}}>{props.object.name}</p>
            <Rating name="read-only" value={props.object.value} readOnly />{" "}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{padding: "25px 25px 0 25px"}}>
        <p>
            {props.object.comment}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
