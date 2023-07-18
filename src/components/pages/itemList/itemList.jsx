import { Button, Grid, Skeleton } from "@mui/material";
import "./ItemList.css";
import { Card } from "../../common/card/Card";
// import { Loading } from "../../layout/Loading";
import { Error } from "../../layout/Error";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function ItemList({ data }) {
  const arrayLength = Array.from({ length: 3 });

  const { error, products } = data;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return (
    <>
      <section className="container-itemList">
        <Grid container spacing={2} className="container-button-itemList">
          <Grid item xl={3}>
            <Link to={"/itemList"}>
              <Button variant="contained" className="button-itemList">
                Todos
              </Button>
            </Link>
          </Grid>
          <Grid item xl={3}>
            <Link to={"/category/combos"}>
              <Button variant="contained" className="button-itemList">
                Combos
              </Button>
            </Link>
          </Grid>
          <Grid item xl={3}>
            <Link to={"/category/tintos"}>
              <Button variant="contained" className="button-itemList">
                Vinos Tintos
              </Button>
            </Link>
          </Grid>
          <Grid item xl={3}>
            <Link to={"/category/blancos"}>
              <Button variant="contained" className="button-itemList">
                Vinos Blancos
              </Button>
            </Link>
          </Grid>
        </Grid>

        {/* Confirmar si los productos estan, sino mostrar cargando o directamente el error */}
        {!error && (
          <div className="container-cards-elements">
            {loading === true ? (
              products.length !== 0 ? (
                products.map((el) => {
                  const formattedPrice = el.price.toLocaleString();

                  return (
                    <Card
                      key={el.id}
                      title={el.name}
                      price={formattedPrice}
                      image={el.img}
                      id={el.id}
                    />
                  );
                })
              ) : (
                <h1 className="productsNull">NO HAY PRODUCTOS</h1>
              )
            ) : (
              arrayLength.map((e) => {
                return (
                  <div key={e} style={{marginTop: "20px"}}>
                    <Skeleton
                      variant="rectangular"
                      width={280}
                      height={200}
                      style={{
                        backgroundColor: "#000",
                        opacity: 0.9,
                        margin: "20px",
                      }}
                    />

                    <Skeleton
                      variant="text"
                      style={{
                        backgroundColor: "#000",
                        opacity: 0.9,
                        fontSize: "20px",
                        margin: "-10px 20px 0px 20px",
                      }}
                    />

                    <Skeleton
                      variant="text"
                      style={{
                        backgroundColor: "#000",
                        opacity: 0.9,
                        fontSize: "15px",
                        margin: "20px 120px 10px 120px",
                      }}
                    />

                    <Skeleton
                      variant="text"
                      style={{
                        backgroundColor: "#000",
                        opacity: 0.9,
                        fontSize: "45px",
                        margin: "-20px 20px 10px 20px",
                      }}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
      </section>

      {error && <Error />}
    </>
  );
}
