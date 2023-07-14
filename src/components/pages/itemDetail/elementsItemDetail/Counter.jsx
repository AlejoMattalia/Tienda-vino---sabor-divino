import Form from "react-bootstrap/Form";
import { Modal } from "./Modal";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import "../ItemDetail.css";
// import { CartContext } from "../../../../context/CartContext";

export function Counter({ product, onAdd}) {
  // const {discountArray} = useContext(CartContext);

  const [optionsNumbersCounter, setOptionsNumbersCounter] = useState([1]);
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


  const [niIdea, setNiIdea] = useState(false);

  //useEffect para mostrar por 5 segundos el aviso de que superaste el stock
  useEffect(() => {
    if (niIdea) {
      const timeout = setTimeout(() => {
        setNiIdea(false);
      }, 2500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [niIdea]);

  const handleButtonAddCart = () => {
    //Agregar a la funcion onAdd el numero de productos que eligio el usuario
    onAdd(counter);
    setNiIdea(!niIdea);
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
          <option key={option}>{option}</option>
        ))}
      </Form.Select>

      <Modal description={product.description} />
      <Button
        className="button-addCart"
        variant="contained"
        onClick={handleButtonAddCart}
      >
        Agregar al carrito
      </Button>
     
      {niIdea && (
        <div className="text-maxStock">
          <p>No hay más stock de este producto.</p>
        </div>
      )}
    </>
  );
}
