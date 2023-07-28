import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { ModalConfirmBuy } from "./elementsConfirmBuy/ModalConfirmBuy";
import { ModalBuyCheck } from "./elementsConfirmBuy/ModalBuyCheck";

export function ConfirmBuy() {
  const { setCart, setModalShow, modalShow, verifyProductCart } =
    useContext(CartContext);
  const [modalShowBuyCheck, setModalShowBuyCheck] = useState(false);

  const handleCloseModals = () => {
    setModalShowBuyCheck(false);
    setModalShow(false);
    setCart([]);
  };

  return (
    <div>
      {verifyProductCart === false &&(
        <>
          <ModalConfirmBuy
            show={modalShow}
            onHide={() => setModalShow(false)}
            setModalShowBuyCheck={setModalShowBuyCheck}
          />
          <ModalBuyCheck show={modalShowBuyCheck} onHide={handleCloseModals} />
        </>
      )}
    </div>
  );
}
