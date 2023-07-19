import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';

export function Alert(props) {
  const handleCancelClick = (event) => {
    event.stopPropagation(); // Detener la propagación del evento
    props.onHide(); // Ejecutar la función onHide
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={handleCancelClick}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{fontSize: "16px", textAlign: "center"}}>{props.text}</p>
      </Modal.Body>
      <Modal.Footer style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "20px"}}>
        <Button variant="outlined" onClick={handleCancelClick}>Cancelar</Button>
        <Button onClick={props.onClick} style={{background: "#B8860B", color: "#fff"}}>{props.textButton}</Button>
      </Modal.Footer>
    </Modal>
  );
}