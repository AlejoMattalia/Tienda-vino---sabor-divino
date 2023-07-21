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
    dataVinosTintos,
    dataVinosBlancos,
    formattedPrice,
    formattedPriceDiscount,
    onAdd,
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
                  ) : product.stock === 0 ? (
                    <span
                      style={{
                        color: "#dd5d30",
                        marginLeft: "12px",
                        fontSize: "20px",
                      }}
                    >
                      No hay stock
                    </span>
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

          {dataCombos !== null && dataVinosBlancos !== null && dataVinosTintos !== null &&(
            <>
              <CompanyInfo />
              <CarouselProducts title="COMBOS" array={dataCombos} />
              <CarouselProducts title="VINOS TINTOS" array={dataVinosTintos} />
              <div style={{ border: "2px solid #2e2e2e" }}></div>
              <CarouselProducts
                title="VINOS BLANCOS"
                array={dataVinosBlancos}
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
