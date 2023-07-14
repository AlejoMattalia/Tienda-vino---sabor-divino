import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);


  //Abrir modal para confirmar si el usuario esta registrado en la pagina
  const [modalShow, setModalShow] = useState(false);


  //Verificar si en el carrito hay al menos un producto
  const [verifyProductCart, setVerifyProductCart] = useState(false);

  //Agregar un producto al carrito
  const addToCart = (item) => {
    let exist = cart.some((el) => el.id === item.id);

    if (exist === true) {
      let newArray = cart.map((el) => {
        if (el.id === item.id) {
          return { ...el, quantity: el.quantity + item.quantity };
        } else {
          return el;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  //Borrar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  //Borrar un porducto del carrit0
  const clearOneProduct = (id) => {
    let newArray = cart.filter((el) => el.id !== id);
    setCart(newArray);
  };

  const data = {
    cart,
    setCart,
    addToCart,
    clearCart,
    clearOneProduct,
    setTotalDiscount,
    totalDiscount,
    setTotalProducts,
    totalProducts,
    setModalShow,
    modalShow,
    verifyProductCart,
    setVerifyProductCart
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
