import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  //Mostrar alerta de stock mayor
  const [viewAlertStockHigher, setViewAlertStockHigher] = useState(false);
  //O mostrar un mensaje que agregaste al carrito
  const [viewAlertAddProductCart, setViewAlertAddProductCart] = useState(false);
  
  //Variable para guardar el id, que sera la orden de compra
  const [orderBuy, setOrderBuy] = useState("");

  //Guardar los datos de la tarjeta
  const [cardData, setCardData] = useState({});

  //Variable donde se guardara el producto con su información
  const [product, setProduct] = useState({});

  //Abrir modal para confirmar si el usuario esta registrado en la pagina
  const [modalShow, setModalShow] = useState(false);

  //Verificar si en el carrito hay al menos un producto
  const [verifyProductCart, setVerifyProductCart] = useState(false);

  //Agregar un producto al carrito
  const addToCart = (item) => {
    let exist = cart.some((el) => el.id === item.id);

    if (exist === true) { //Si el producto ya esta en el carrito se ejecuta la condicion
      let newArray = cart.map((el) => { //Mapeamos todos los productos de array
        if (el.id === item.id) { //A traves del id, entramos a la info del producto
          let quantity = el.quantity + item.quantity;

          if (quantity <= product.stock) {//Verificamos si la cantidad supera al stock
            setViewAlertAddProductCart(true);

            return { ...el, quantity: quantity };
          } else {
            setViewAlertStockHigher(true);
            return el;
          }
        } else {
          return el;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
      setViewAlertAddProductCart(true);
    }
  };

  //Borrar todo el carrito
  const clearCart = () => {

    Swal.fire({
      title: "¿Estás seguro de vaciar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, vaciar carrito",
      confirmButtonColor: "#B8860B",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setCart([]);
      }
    });
  };

  //Borrar un porducto del carrito
  const clearOneProduct = (id) => {
    let newArray = cart.filter((el) => el.id !== id);
    setCart(newArray);
  };



  //Funcion para calcular el total
  const calculateTotalPrice = (discount, quantity) => {
    return discount * quantity;
  };


  //Funcion para calcular el descuento
  const calculateDiscountPrice = (price, discount) => {
    return price - price * (discount / 100);
  };


  //Calcular la cantidad de items
  const getTotalQuantity = ()=>{
    let totalQuantity = cart.reduce((acc, el)=>{
      return acc + el.quantity;
    }, 0)

    return totalQuantity
  }


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
    setVerifyProductCart,
    product,
    setProduct,
    viewAlertStockHigher,
    setViewAlertStockHigher,
    viewAlertAddProductCart,
    setViewAlertAddProductCart,
    calculateTotalPrice,
    calculateDiscountPrice,
    getTotalQuantity,
    cardData, 
    setCardData,
    setOrderBuy,
    orderBuy
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
