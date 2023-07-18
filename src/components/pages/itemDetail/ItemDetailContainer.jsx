import { useContext, useEffect, useState } from "react";
import { useAxios } from "../../../hooks/useAxios";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";



export function ItemDetailContainer() {
  //variable para el array producto
  let arrayProducts;
  const {product, setProduct} = useContext(CartContext)


  const {id} = useParams();


  //Importamos los combos
  const {data: dataCombos, loading, error} = useAxios("http://localhost:3000/combos");
  //Importamos los vinos
  const { data: dataVinos } = useAxios("http://localhost:3000/vinos");


  //Guardamos en el array productos los combos y vinos
  if (dataCombos !== null && dataVinos !== null) {
    arrayProducts = dataCombos.concat(dataVinos.tintos, dataVinos.blancos);
  }

  //Funcionalidad para guardar la informacion del producto en la variable product
  useEffect(() => {
    if (dataCombos !== null && dataVinos !== null) {
      let selectProduct = arrayProducts.find((el) => el.id === +id);

      new Promise((res, rej) =>{
        try{
            res(selectProduct)
        }
        catch{
            rej("Error")
        }
      })
      .then((res)=> setProduct(res));
    }
  }, [id, arrayProducts, dataCombos, dataVinos]);


  //Formatear el precio, asi se colocan los puntos y queda el numero mas legible
  const [formattedPrice, setFormattedPrice] = useState("");
  const [formattedPriceDiscount, setFormattedPriceDiscount] = useState("");

  useEffect(() => {
    if (product.price !== undefined) {
      const discount = product.price - product.price * (product.discount / 100);

      setFormattedPriceDiscount(discount.toLocaleString());
      setFormattedPrice(product.price.toLocaleString());
    }
  }, [product]);


  //Enviar al contexto el producto con el elemento cantidad (quantity)
  const { addToCart } = useContext(CartContext);

  const onAdd = (quantity) => {
    let productCard = { ...product, quantity: +quantity };
    addToCart(productCard);
  };


  //Exportamos la informacion
  const data = {
    product,
    loading,
    error,
    dataCombos,
    dataVinos,
    formattedPrice,
    formattedPriceDiscount,
    onAdd
  };

  

  return <ItemDetail data={data} />;
}
