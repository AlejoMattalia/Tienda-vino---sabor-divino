import { Button } from "@mui/material";
import { useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

export function ModalBuyCheck(props) {
  const { cart } = useContext(CartContext);

  const handleButtonExit = ()=>{
    props.onHide();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 1000);
  }

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
          Felicitaciones!! Compraste los productos:
        </h4>

        {cart.map((el) => {
          return (
            <p key={el.id} style={{ color: "#e7e7e7", textAlign: "center" }}>
              {el.quantity} {el.name}
            </p>
          );
        })}
      </Modal.Body>
      <Modal.Footer
        style={{
          background: "hsl(0, 0%, 8%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Link to="/">
          <Button
            variant="outlined"
            style={{ background: "rgb(255, 20, 20)", color: "#fff", border: "none"}}
            onClick={handleButtonExit}
          >
            SALIR
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
