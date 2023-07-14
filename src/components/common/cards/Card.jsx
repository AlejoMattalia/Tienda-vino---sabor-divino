import { Link } from "react-router-dom";
import "./Card.css";

export function Card({ title, image, price, id }) {
  // Diseño de las card

  return (
    <div className="container-card text-center">
      <img src={image} alt="" />

      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>

      {/* <button>VER DETALLES</button> */}
      <Link
        to={`/itemDetail/${id}`}
        className="link"
        onClick={() => {
          setTimeout(() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }, 1000);
        }}
      >
        <button>VER DETALLES</button>
      </Link>
    </div>
  );
}
