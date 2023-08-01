import {collection, addDoc} from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig"
import {useAxios} from "../../../hooks/useAxios.js";

export function Dashboard() {
  const {data: dataProducts} = useAxios("http://localhost:3000/products");

  const fill = ()=>{
    dataProducts.forEach((product)=>{
      const collectionProduct = collection(dataBase, "products");
      addDoc(collectionProduct, product)
    })
  }

  return (
    <button onClick={fill}>Rellenar</button>
  )
}
