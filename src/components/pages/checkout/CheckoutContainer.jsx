import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { useFormik } from "formik";
import * as Yup from "yup";

export function CheckoutContainer() {

  //Funcion para comprar los productos
  const {setModalShow, setCardData} = useContext(CartContext);
  const [showConfirmBuy, setShowConfirmBuy] = useState(false);
   
  const handleNumberCard = (event)=>{
    const inputText = event.target.value;
    const digitsOnly = inputText.replace(/\s/g, '');
    const formattedText = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ');
    formik.setFieldValue('numberCard', formattedText);
  }
    
  //Utilizamos formik
  let initialValues = {
    nameCard: "",
    dueDate: "",
    securityCode: "",
    typeCard: "",
    numberCard: ""
  }

  const onSubmit = (data)=>{
    setModalShow(true);
    setShowConfirmBuy(true);
    setCardData(data)
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      nameCard: Yup.string().required("Ingresa el nombre del titular de la tarjeta"),
      dueDate: Yup.string().required("Ingresa la fecha de vencimiento"),
      securityCode: Yup.number("Ingresa los números del código de seguridad").required("Ingresa el código de seguridad"),
      
      numberCard: Yup.number("Ingresa los números de la tarjeta").required("Ingresa el número de tarjeta"),
      typeCard: Yup.string().required("Ingresa el tipo de tarjeta")
    })
  })


  //Envimos la data al componente checkOut
  const data = {
    showConfirmBuy,
    handleNumberCard,
    formik
  };

  return (
    <Checkout data={data}/>
  )
}
