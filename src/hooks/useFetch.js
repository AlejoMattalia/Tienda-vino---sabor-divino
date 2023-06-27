import {useState, useEffect} from "react";
import jsonData from "../products.json";


export function useFetch() {

    const [data, setData] = useState(null);
    const [error, setError] = useState("")

    useEffect(()=>{
      const items = new Promise((resolve, reject) => {
        try{
            resolve(jsonData)
        } 
        catch {
            reject("error")
        }

      });
  
      items
      .then((res) => setData(res))
      .catch((err) => setError(err))
    }, [])

  
  return {data, error}
}
