import { useContext, useEffect } from "react";
import "../Cart.css";
import { CartContext } from "../../../../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { ConfigContext } from "../../../../context/configContext";
import { Link } from "react-router-dom";

export function CartProduct() {
  const { cart, clearOneProduct, setTotalDiscount, setTotalProducts, calculateTotalPrice, calculateDiscountPrice} =
    useContext(CartContext);
  const { widthPage } = useContext(ConfigContext);


  useEffect(() => {
    let accumulatedDiscount = 0,
      accumulatedTotal = 0;

    cart.forEach((el) => {
      let discount = calculateDiscountPrice(el.price, el.discount);
      let total = calculateTotalPrice(discount, el.quantity);

      accumulatedDiscount += (el.price - discount) * el.quantity;
      accumulatedTotal += total;
    });

    setTotalDiscount(accumulatedDiscount);
    setTotalProducts(accumulatedTotal);
  }, [cart]);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="container-product">
          <p className="cart-void">EL CARRITO ESTÁ VACIO</p>
        </div>
      ) : (
        <>
          {cart.map((el) => {
            let discount = calculateDiscountPrice(el.price, el.discount);
            let total = calculateTotalPrice(discount, el.quantity);

            return (
              <div key={el.id} className="container-product">
                <Link to={`/itemDetail/${el.id}`}><img src={el.img} alt="vino" /></Link>
                <div className="container-product-info">
                  <p className="title">{el.name}</p>

                  <div className="container-price">
                    <p className="price">${discount.toLocaleString()}</p>
                    <p className="price-total">${el.price.toLocaleString()}</p>
                  </div>
                </div>

                {widthPage < 525 && (
                  <>
                    <p className="quantity-word">Cantidad:</p>
                    <p className="total-word">Total:</p>
                  </>
                )}
                <p className="quantity">{el.quantity}</p>

                <p className="total">${total.toLocaleString()}</p>

                <DeleteIcon
                  onClick={() => clearOneProduct(el.id)}
                  style={{
                    color: "red",
                    cursor: "pointer",
                    fontSize: "30px",
                    position: "relative",
                    bottom: "12px",
                  }}
                  className="deleteIcon"
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
