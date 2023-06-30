import { Mask } from "./mask/Mask.jsx";
import { CarouselProducts } from "../../common/carousel/CarouselProducts.jsx";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import { useFetch } from "../../../hooks/useFetch.js";
import { Error } from "../../layout/Error.jsx";
import { Loading } from "../../layout/Loading.jsx";

export function Home() {
  let combos, vinosTintos;

  const { data, loading, error } = useFetch("dbProducts.json");

  if (data != null) {
    combos = data.combos;
    vinosTintos = data.vinos.tintos
  }

  return (
    <>
      {!error && !loading &&(
        <>
          <Mask />
          <CarouselProducts title="COMBOS" array={combos} />
          <CompanyInfo />
          <CarouselProducts title="VINOS TINTOS" array={vinosTintos} />
          <div style={{ border: "2px solid #2e2e2e" }}></div>
          <CarouselProducts title="VINOS BLANCOS" array={combos} />
        </>
      )}
      {error && <Error />}
      {loading && <Loading/>}
    </>
  );
}
