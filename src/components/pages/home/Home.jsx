import { Mask } from "./mask/Mask.jsx";
import { CarouselProducts } from "../../common/carousel/CarouselProducts.jsx";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import { useFetch } from "../../../hooks/useFetch.js";


export function Home() {
  let combos;

  const data = useFetch().data;

  if(data != null){
    combos = data.combos;
  }

  return (
    <>
      <Mask />
      <CarouselProducts title="COMBOS" array={combos}/>
      <CompanyInfo/>
      <CarouselProducts title="VINOS TINTOS" array={combos}/>
      <div style={{border: "2px solid #2e2e2e"}}></div>
      <CarouselProducts title="VINOS BLANCOS" array={combos}/>
    </>
  );
}
