import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { CartProduct } from "./elementsCart/CartProduct.jsx";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { ModalErrorLogin } from "../../common/ModalErrorLogin";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Cart() {
  const {
    cart,
    clearCart,
    totalDiscount,
    totalProducts,
    setVerifyProductCart,
    verifyProductCart,
  } = useContext(CartContext);

  const { confirmLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const [showConfirmLogin, setShowConfirmLogin] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  //Cuando haga click en agregar al carrito hace ejecutar un componente que verifica si el usuario se registro
  const functionButtonCheckout = () => {
    if (cart.length === 0) {
      setVerifyProductCart(true);
      setTimeMessage(true);
    } else {
      setVerifyProductCart(false);
      if (confirmLogin) {
        navigate("/checkout");
      } else {
        setShowConfirmLogin(true);
        setModalShow(true);
      }
    }
  };

  const [timeMessage, setTimeMessage] = useState(false);
  //useEffect para mostrar por 5 segundos el aviso de que superaste el stock
  useEffect(() => {
    if (timeMessage) {
      const timeout = setTimeout(() => {
        setTimeMessage(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [timeMessage]);

  return (
    <article className="container-cart">
      <Link to="/" style={{ color: "#000", position: "absolute", left: "50px", top: "110px"}}>
        <p>
          <ArrowBackIcon /> VOLVER
        </p>
      </Link>
      <h3>Mi carrito</h3>

      <div className="container-cart-products">
        <section className="view-product-cart">
          <div className="view-product-cart-header">
            <p className="p">Producto</p>
            <div>
              <p className="c">Cantidad</p>
              <p className="t">Total</p>
            </div>
          </div>

          <div className="view-product-cart-main">
            <CartProduct />
          </div>
        </section>

        <section className="section-container-cart-total">
          <div className="container-cart-total">
            <div className="container-total-number">
              <p className="total-letter">TOTAL</p>
              <p className="total-number">
                ${totalProducts.toLocaleString()} ARS
              </p>
            </div>
            <p className="saved">
              ¡Ahorraste ${totalDiscount.toLocaleString()}!
            </p>
            <Button
              className="button-buy"
              variant="contained"
              onClick={functionButtonCheckout}
            >
              Finalizar compra
            </Button>
            {showConfirmLogin && (
              <ModalErrorLogin
                show={modalShow}
                onHide={() => setModalShow(false)}
                text={
                  "Debes iniciar sesión para finalizar la compra. Si no tenés una cuenta registrate"
                }
                title={"No pudiste finalizar la compra"}
              />
            )}

            {verifyProductCart && timeMessage && (
              <div className="text-ceroProducts">
                <p>Tienes que tener al menos un producto en el carrito.</p>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <Button
              variant="outlined"
              className="button-void-cart"
              onClick={clearCart}
            >
              Vaciar Carrito
            </Button>
          )}
        </section>
      </div>

      <CompanyInfo />
    </article>
  );
}
