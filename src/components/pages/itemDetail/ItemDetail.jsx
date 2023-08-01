import { Error } from "../../layout/Error";
import { Loading } from "../../layout/Loading";
import { CompanyInfo } from "../../common/companyInfo/CompanyInfo.jsx";
import "./ItemDetail.css";
import { CarouselProducts } from "../../common/carousel/CarouselProducts";
import { Counter } from "./elementsItemDetail/Counter";
import { Skeleton } from "@mui/material";

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
    loadingSkeletor,
  } = data;

  return (
    <>
      {/* Confirmar si los productos estan, sino mostrar cargando o directamente el error */}
      {!error && loading && <Loading />}
      {!error && !loading && (
        <article className="container-itemDetail">
          <div className="container-itemDetail-imgInfo">
            {loadingSkeletor ? (
              <img src={product.img} alt="img-vino" />
            ) : (
              <Skeleton
                variant="rectangular"
                width={350}
                height={350}
                style={{
                  backgroundColor: "rgb(65, 65, 65)",
                  opacity: 0.1,
                  margin: "40px 20px",
                  border: "3px solid #B8860B",
                  position: "relative",
                  left: "30px",
                }}
              />
            )}

            <div className="container-info-itemDetail">
              <section className="container-info-header-itemDetail">
                <h1>{product.name}</h1>
                <p>{product.discount}% OFF</p>
              </section>

              <section className="container-info-main-itemDetail">
                <div className="container-info-main-price-itemDetail">
                  {loadingSkeletor ? (
                    <>
                      <p>
                        Precio: <span>${formattedPriceDiscount}</span>
                      </p>
                      <p className="price">${formattedPrice}</p>
                    </>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <p>Precio: </p>
                      <Skeleton
                        variant="rectangular"
                        width={120}
                        height={20}
                        style={{
                          opacity: 0.9,
                          position: "relative",
                          left: "10px",
                          top: "2px",
                          marginRight: "20px",
                        }}
                      />

                      <Skeleton
                        variant="rectangular"
                        width={50}
                        height={20}
                        style={{
                          opacity: 0.9,
                          position: "relative",
                          left: "10px",
                          top: "2px",
                        }}
                      />
                    </div>
                  )}
                </div>

                <p style={{ display: "flex" }}>
                  Stock:{" "}
                  {loadingSkeletor ? (
                    product.stock > 6 ? (
                      <span>Quedan {product.stock} unidades</span>
                    ) : product.stock === 0 ? (
                      <span
                        style={{
                          color: "#dd5d30",
                          marginLeft: "12px",
                          fontSize: "20px",
                          position: "relative",
                          bottom: "5px",
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
                    )
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width={120}
                      height={20}
                      style={{
                        opacity: 0.9,
                        position: "relative",
                        left: "10px",
                        top: "2px",
                      }}
                    />
                  )}
                </p>

                {product !== undefined && (
                  <p>
                    Cantidad:{" "}
                    <Counter
                      product={product}
                      onAdd={onAdd}
                      loadingSkeletor={loadingSkeletor}
                    />
                  </p>
                )}
              </section>
            </div>
          </div>

          {dataCombos !== null &&
            dataVinosBlancos !== null &&
            dataVinosTintos !== null && (
              <>
                <CompanyInfo />
                <CarouselProducts title="COMBOS" array={dataCombos} />
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
            )}
        </article>
      )}
      {error && <Error />}
    </>
  );
}
