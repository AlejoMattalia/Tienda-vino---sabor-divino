import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { CartContext } from "../../../../context/CartContext";

export function ModalConfirmBuy(props) {
  const { totalProducts } = useContext(CartContext);
  
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
          ¿Confirmar Compra a ${totalProducts.toLocaleString()} ARS?
        </h4>
      </Modal.Body>
      <Modal.Footer style={{ background: "hsl(0, 0%, 8%)",display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
      <Button
          variant="outlined"
          style={{ background: "rgb(3, 211, 3)", color: "#fff" }}
          onClick={()=> props.setModalShowBuyCheck(true)}
        >
          COMPRAR
        </Button>
        <Button
          variant="outlined"
          style={{ background: "rgb(255, 20, 20)", color: "#fff" }}
          onClick={props.onHide}
        >
          CANCELAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
