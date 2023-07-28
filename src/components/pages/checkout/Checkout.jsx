import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { ConfirmBuy } from "../../common/confirmBuy/ConfirmBuy";
import "./Checkout.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function Checkout({ data }) {
  const { cart, calculateDiscountPrice } = useContext(CartContext);
  const {
    showConfirmBuy,
    handleNumberCard,
    formik,
  } = data;

  return (
    <section className="checkout-container">
      <Link to="/cart" style={{ color: "#fff" }}>
        <p>
          <ArrowBackIcon /> VOLVER
        </p>
      </Link>

      <div className="checkout-info">
        <form className="data-cardCredit" onSubmit={formik.handleSubmit}>
          <p>Completa los campos</p>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tarjeta</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="typeCard"
                value={formik.values.typeCard}
                label="Tarjeta"
                onChange={formik.handleChange}
                error={
                  formik.touched.typeCard && Boolean(formik.errors.typeCard)
                }
              >
                <MenuItem value="MasterCard">MasterCard</MenuItem>
                <MenuItem value="Visa">Visa</MenuItem>
              </Select>
              {formik.touched.typeCard && formik.errors.typeCard && (
                <div
                  style={{
                    color: "#d32f2f",
                    fontSize: "0.75rem",
                    marginTop: "3px",
                    marginRight: "14px",
                    marginLeft: "14px",
                  }}
                >
                  {formik.errors.typeCard}
                </div>
              )}
            </FormControl>
          </Box>

          <TextField
            id="outlined-basic"
            label="Nombre titular de la tarjeta"
            variant="outlined"
            style={{ color: "#fff" }}
            name="nameCard"
            onChange={formik.handleChange}
            value={formik.values.nameCard}
            error={formik.errors.nameCard}
            helperText={formik.errors.nameCard}
          />
          <TextField
            id="outlined-basic"
            label="Numero de tarjeta"
            variant="outlined"
            name="numberCard"
            onChange={handleNumberCard}
            value={formik.values.numberCard}
            error={formik.errors.numberCard}
            helperText={formik.errors.numberCard}
            inputProps={{
              maxLength: 19,
            }}
          />
          <TextField
            id="outlined-basic"
            label="Fecha de vencimiento"
            variant="outlined"
            style={{ color: "#fff" }}
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="MM-AA"
            inputProps={{ maxLength: 24}}
            name="dueDate"
            onChange={formik.handleChange}
            value={formik.values.dueDate}
            error={formik.errors.dueDate}
            helperText={formik.errors.dueDate}
          />
          <TextField
            id="outlined-basic"
            label="Código de seguridad"
            variant="outlined"
            style={{ color: "#fff" }}
            name="securityCode"
            onChange={formik.handleChange}
            value={formik.values.securityCode}
            error={formik.errors.securityCode}
            helperText={formik.errors.securityCode}
            inputProps={{
              maxLength: 4,
            }}
          />

          <Button
            type="submit"
            className="button-buy"
            variant="contained"
          >
            Comprar
          </Button>
        </form>

        <section className="checkout-viewProducts">
          {cart.map((el) => {
            let discount = calculateDiscountPrice(el.price, el.discount);

            return (
              <div className="checkout-product" key={el.id}>
                <img
                  src={el.img}
                  alt=""
                  style={{ width: "65px", height: "65px" }}
                />

                <div style={{ height: "65px" }}>
                  <p className="name">{el.name}</p>
                  <div className="price-quantity">
                    <p className="quantity">
                      Cantidad: <span>{el.quantity}</span>
                    </p>
                    <p className="price">
                      Precio:{" "}
                      <span>
                        ${discount}
                        {el.quantity > 1 && <span> C/U</span>}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      {showConfirmBuy && <ConfirmBuy />}
    </section>
  );
}
