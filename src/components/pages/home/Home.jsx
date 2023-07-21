import { Mask } from "./mask/Mask.jsx";
import { CarouselProducts } from "../../common/carousel/CarouselProducts.jsx";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import { Error } from "../../layout/Error.jsx";
import { Loading } from "../../layout/Loading.jsx";
// import { useAxios } from "../../../hooks/useAxios.js";
import { useFirebase } from "../../../hooks/useFirebase.js";

export function Home() {
  const {
    data: dataCombos,
    loading,
    error,
  } = useFirebase("products", "combos");
  const { data: dataVinosTintos } = useFirebase("products", "tintos");
  const { data: dataVinosBlancos } = useFirebase("products", "blancos");


  return (
    <>
      {/* Confirmar si los productos estan, sino mostrar cargando o directamente el error */}
      {!error && !loading && (
        <>
          {dataCombos !== null &&
            dataVinosTintos !== null &&
            dataVinosBlancos !== null && (
              <>
                <Mask />
                <CarouselProducts title="COMBOS" array={dataCombos} />
                <CompanyInfo />

                <>
                  <CarouselProducts
                    title="VINOS TINTOS"
                    array={dataVinosTintos}
                  />
                  <div style={{ border: "2px solid #2e2e2e" }}></div>
                  <CarouselProducts
                    title="VINOS BLANCOS"
                    array={dataVinosBlancos}
                  />
                </>
              </>
            )}
        </>
      )}
      {error && <Error />}
      {loading && <Loading />}
    </>
  );
}
