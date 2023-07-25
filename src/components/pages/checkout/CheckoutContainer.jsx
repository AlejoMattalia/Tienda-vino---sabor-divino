import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";

export function CheckoutContainer() {

    const {setModalShow} = useContext(CartContext);

  const [showConfirmBuy, setShowConfirmBuy] = useState(false);


    const functionBuy = ()=>{
        setModalShow(true);
        setShowConfirmBuy(true);
    } 
    
    
    const data = {
        functionBuy,
        showConfirmBuy
    }

  return (
    <Checkout data={data}/>
  )
}
