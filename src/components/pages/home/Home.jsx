import { Mask } from "./mask/Mask.jsx";
import { CarouselProducts } from "../../common/carousel/CarouselProducts.jsx";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import { Error } from "../../layout/Error.jsx";
import { Loading } from "../../layout/Loading.jsx";
import { useAxios } from "../../../hooks/useAxios.js";


export function Home() {
  const {
    data: dataCombos,
    loading,
    error,
  } = useAxios("http://localhost:3000/combos");
  const { data: dataVinos } = useAxios("http://localhost:3000/vinos");

 

  return (
    <>
      {/* Confirmar si los productos estan, sino mostrar cargando o directamente el error */}
      {!error && !loading && (
        <>
          <Mask />
          <CarouselProducts title="COMBOS" array={dataCombos}/>
          <CompanyInfo />
          {dataVinos !== null && (
            <>
              <CarouselProducts title="VINOS TINTOS" array={dataVinos.tintos} />
              <div style={{ border: "2px solid #2e2e2e" }}></div>
              <CarouselProducts
                title="VINOS BLANCOS"
                array={dataVinos.blancos}
              />
            </>
          )}
        </>
      )}
      {error && <Error />}
      {loading && <Loading />}
    </>
  );
}
