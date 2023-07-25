import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { getDoc, doc, collection } from "firebase/firestore";
import { useFirebase } from "../../../hooks/useFirebase";
import { dataBase } from "../../../firebaseConfig";

export function ItemDetailContainer() {
  //Llamamos al array de productos
  const { data: dataCombos, error } = useFirebase("products", "combos");
  const { data: dataVinosTintos } = useFirebase("products", "tintos");
  const { data: dataVinosBlancos } = useFirebase("products", "blancos");

  const loading = !(dataCombos !== null && dataVinosTintos !== null && dataVinosBlancos !== null);
  const [loadingSkeletor, setLoadingSkeletor] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setLoadingSkeletor(true)
    }, 4000)
  })


  const { product, setProduct } = useContext(CartContext);
  const { id } = useParams();

  //Funcionalidad para guardar la informacion del producto en la variable product
  useEffect(() => {
      const productsCollection = collection(dataBase, "products")
      const productRef = doc(productsCollection, id);

      getDoc(productRef).then((res) => {
        let product = {...res.data(), id: res.id}
        setProduct(product);
      });
  }, [id]);

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
    dataVinosTintos,
    dataVinosBlancos,
    formattedPrice,
    formattedPriceDiscount,
    onAdd,
    loadingSkeletor
  };

  return <ItemDetail data={data} />;
}
