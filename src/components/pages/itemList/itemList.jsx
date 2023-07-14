import { Button, Grid } from "@mui/material";
import "./ItemList.css";
import { Card } from "../../common/card/Card";
import { Loading } from "../../layout/Loading";
import { Error } from "../../layout/Error";
import { Link } from "react-router-dom";

export function ItemList({ data }) {
  const {loading, error, products} = data;

  return (
    <>
      {/* Confirmar si los productos estan, sino mostrar cargando o directamente el error */}
      {!error && !loading && (
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

          <div className="container-cards-elements">
            {products.map((el) => {
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
            })}
          </div>
        </section>
      )}

      {error && <Error />}
      {loading && <Loading />}
    </>
  );
}
