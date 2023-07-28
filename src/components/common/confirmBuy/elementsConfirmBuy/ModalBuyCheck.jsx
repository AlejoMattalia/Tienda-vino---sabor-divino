import { Button, Skeleton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "../../../../context/CartContext";
import { Link } from "react-router-dom";

export function ModalBuyCheck(props) {
  const { cart, orderBuy } = useContext(CartContext);
  const [handleSkeletor, setHandleSkeletor] = useState(false);

  const handleButtonExit = () => {
    props.onHide();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 4000);
  };

  useEffect(() => {
    setTimeout(() => {
      setHandleSkeletor(true);
    }, 7000);
  }, []);

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
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
          style={{ color: "#fff", textAlign: "center", marginBottom: "40px" }}
        >
          <span style={{ borderBottom: "1px solid #fff" }}>
            Orden de compra:
          </span>

          {handleSkeletor ? (
            <>
            <br/>
            <span style={{ fontSize: "15px", color: "#d6d6d6" }}>
              {orderBuy}
            </span>
            </>
          ) : (
            <Skeleton
              variant="rectangular"
              width={200}
              height={20}
              style={{
                backgroundColor: "#5f5f5f",
                opacity: 0.1,
                marginTop: "10px"
              }}
            />
          )}
        </h4>
        <h5
          style={{
            color: "#fff",
            textAlign: "center",
            marginBottom: "15px",
            borderBottom: "1px solid #fff",
          }}
        >
          Compraste los productos:
        </h5>

        {cart.map((el) => {
          return (
            <p key={el.id} style={{ color: "#d6d6d6", textAlign: "center" }}>
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
            style={{
              background: "rgb(255, 20, 20)",
              color: "#fff",
              border: "none",
            }}
            onClick={handleButtonExit}
          >
            SALIR
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
