import { Error } from "../../layout/Error";
import { Loading } from "../../layout/Loading";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import "./ItemDetail.css";
import { CarouselProducts } from "../../common/carousel/CarouselProducts";
import { Counter } from "./elementsItemDetail/counter";

export function ItemDetail({ data }) {

  const {
    product,
    loading,
    error,
    dataCombos,
    dataVinos,
    formattedPrice,
    formattedPriceDiscount,
    onAdd
  } = data;

  

  return (
    <>
      {/* Confirmar si los productos estan, sino mostrar cargando o directamente el error */}
      {!error && !loading && (
        <article className="container-itemDetail">
          <div className="container-itemDetail-imgInfo">
            <img src={product.img} alt="img-vino" />

            <div className="container-info-itemDetail">
              <section className="container-info-header-itemDetail">
                <h1>{product.name}</h1>
                <p>{product.discount}% OFF</p>
              </section>

              <section className="container-info-main-itemDetail">
                <div className="container-info-main-price-itemDetail">
                  <p>
                    Precio: <span>${formattedPriceDiscount}</span>
                  </p>
                  <p className="price">${formattedPrice}</p>
                </div>

                <p>
                  Stock:{" "}
                  {product.stock > 6 ? (
                    <span>Quedan {product.stock} unidades</span>
                  ) : (
                    <span
                      style={{
                        color: "#dd5d30",
                        marginLeft: "12px",
                        fontSize: "13px",
                      }}
                    >
                      Solo quedan {product.stock} unidades
                    </span>
                  )}
                </p>

                {product !== undefined && (
                  <p>
                    Cantidad: <Counter product={product} onAdd={onAdd} />
                  </p>
                )}
              </section>
            </div>
          </div>

          <CompanyInfo />
          <CarouselProducts title="COMBOS" array={dataCombos} />

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
        </article>
      )}
      {error && <Error />}
      {loading && <Loading />}
    </>
  );
}
