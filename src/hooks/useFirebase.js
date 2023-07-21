// import axios from "axios";
import { useEffect, useState } from "react";
import {dataBase} from "../firebaseConfig.js";
import { getDocs, collection, query, where} from "firebase/firestore";

//Función para obtener datos de una api
export function useFirebase(collectionDB, category) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let itemsComplete = collection(dataBase, collectionDB);

    let consult;
    if(category === undefined){
        consult = itemsComplete;
    }
    else{
        consult = query(itemsComplete, where("category", "==", category));
    }

    getDocs(consult)
      .then((res) => {
        let products = res.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
        })
        setData(products)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [collectionDB, category]);

  return {data, loading, error};
}

