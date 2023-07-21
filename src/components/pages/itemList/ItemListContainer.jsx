import { useFirebase } from "../../../hooks/useFirebase";
import { ItemList } from "./itemList";
import {useParams} from "react-router-dom"

export function ItemListContainer() {

  //Consumir api
  const { data: dataAllProducts, error } = useFirebase("products");
  const { data: dataCombos } = useFirebase("products", "combos");
  const { data: dataVinosTintos } = useFirebase("products", "tintos");
  const { data: dataVinosBlancos } = useFirebase("products", "blancos");


  const {type} = useParams();
  //Guardar en el array todos los productos
  let products = [];
  if (dataCombos !== null && dataVinosTintos !== null && dataVinosBlancos !== null) {

    if(type === "combos"){
      products = [...dataCombos]
    }
    else if(type === "tintos"){
      products = [...dataVinosTintos]
    }
    else if(type === "blancos"){
      products = [...dataVinosBlancos]
    }
    else{
      products = dataAllProducts;
      //Ordenar los productos aleatoriamente
      products = [...products].sort(() => Math.random() - 0.5);
    }
  }

  const data = {
    error,
    products
  }
  return (
    <ItemList data={data}/>
  )
}
