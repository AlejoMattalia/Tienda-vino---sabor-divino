import Form from "react-bootstrap/Form";
import { Modal } from "./Modal";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import "../ItemDetail.css";
import { CartContext } from "../../../../context/CartContext";

export function Counter({ product, onAdd }) {
  const {
    cart,
    viewAlertStockHigher,
    setViewAlertStockHigher,
    viewAlertAddProductCart,
    setViewAlertAddProductCart,
  } = useContext(CartContext);
  const [optionsNumbersCounter, setOptionsNumbersCounter] = useState([]);
  const [counter, setCounter] = useState(1);

  //useEffect para guardar en optionsNumbersCounter cuanto stock hay del producto para luego mapearlo
  useEffect(() => {
    if (product.stock !== undefined) {
      const newOptions = [1];
      for (let i = 2; i <= product.stock; i++) {
        newOptions.push(i);
      }
      setOptionsNumbersCounter(newOptions);
    }
  }, [product.stock]);

  //Colocar el inical del contador segun la cantidad agragados en el  carrito
  const [initailCounterItemDetail, setInitailCounterItemDetail] = useState(1);
  useEffect(() => {
    const objetInfo = cart.find((el) => el?.id === product?.id);
    if (objetInfo) {
      setInitailCounterItemDetail(objetInfo.quantity);
    } else {
      setInitailCounterItemDetail(1);
    }
  }, [product.id, cart]);

  //useEffect para mostrar por 5 segundos el aviso de que superaste el stock
  useEffect(() => {
    if (viewAlertStockHigher) {
      const timeout = setTimeout(() => {
        setViewAlertStockHigher(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [viewAlertStockHigher]);

  useEffect(() => {
    if (viewAlertAddProductCart) {
      const timeout = setTimeout(() => {
        setViewAlertAddProductCart(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [viewAlertAddProductCart]);


  const handleButtonAddCart = () => {
    //Agregar a la funcion onAdd el numero de productos que eligio el usuario
    onAdd(counter);
  };

  return (
    <>
      <Form.Select
        style={{ width: "80px", display: "inline-block", marginLeft: "10px" }}
        onChange={(e) => setCounter(e.target.value)}
      >
        {
          // Mapeo de la cantidad de stock
          optionsNumbersCounter.map((option) => (
            <option
              key={option}
              value={option}
              selected={option === initailCounterItemDetail}
            >
              {option}
            </option>
          ))
        }
      </Form.Select>

      <Modal description={product.description} />
      <Button
        className="button-addCart"
        variant="contained"
        onClick={handleButtonAddCart}
      >
        Agregar al carrito
      </Button>

      {viewAlertStockHigher && (
        <div className="text-view-action">
          <p>No hay más stock de este producto.</p>
        </div>
      )}

      {viewAlertAddProductCart && (
        <div className="text-view-action">
          <p>Agregaste el producto al carrito</p>
        </div>
      )}
    </>
  );
}
