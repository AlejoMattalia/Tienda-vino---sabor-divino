import { useAxios } from "../../../hooks/useAxios";
import { ItemList } from "./itemList";
import {useParams} from "react-router-dom"

export function ItemListContainer() {

  //Consumir api
  const {data: dataCombos, loading, error} = useAxios("http://localhost:3000/combos");  
  const {data: dataVinos} = useAxios("http://localhost:3000/vinos");


  


  const {type} = useParams();
  console.log(type)
  //Guardar en el array todos los productos
  let products = [];
  if (dataCombos !== null && dataVinos !== null) {

    if(type === "combos"){
      products = [...dataCombos]
    }
    else if(type === "tintos"){
      products = [...dataVinos.tintos]
    }
    else if(type === "blancos"){
      products = [...dataVinos.blancos]
    }
    else{
      products = dataCombos.concat(dataVinos.tintos, dataVinos.blancos);
      //Ordenar los productos aleatoriamente
      products = [...products].sort(() => Math.random() - 0.5);
    }
  }

  const data = {
    loading, 
    error,
    dataCombos,
    dataVinos,
    products
  }
  return (
    <ItemList data={data}/>
  )
}
