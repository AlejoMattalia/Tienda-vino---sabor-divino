import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { ModalError } from "./elementsConfirmBuy/ModalError.jsx";
import { CartContext } from "../../../context/CartContext";
import { ModalConfirmBuy } from "./elementsConfirmBuy/ModalConfirmBuy";
import { ModalBuyCheck } from "./elementsConfirmBuy/ModalBuyCheck";

export function ConfirmBuy() {
  const { confirmLogin } = useContext(AuthContext);
  const { setCart, setModalShow, modalShow, verifyProductCart } =
    useContext(CartContext);
  const [modalShowBuyCheck, setModalShowBuyCheck] = useState(false)  

  const handleCloseModals = ()=>{
    setModalShowBuyCheck(false);
    setModalShow(false);
    setCart([]);
  }

  return (
    <div>
      {verifyProductCart === false &&
        (confirmLogin ? (
          <>
            <ModalConfirmBuy show={modalShow} onHide={() => setModalShow(false)} setModalShowBuyCheck={setModalShowBuyCheck}/>
            <ModalBuyCheck show={modalShowBuyCheck} onHide={handleCloseModals}/>
          </>
        ) : (
          <ModalError show={modalShow} onHide={() => setModalShow(false)} />
        ))}
    </div>
  );
}
