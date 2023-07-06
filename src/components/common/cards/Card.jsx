import "./Card.css";

export function Card({ title, image, price }) {

  // Diseño de las card

  return (
    <div className="container-card text-center">
      <img src={image} alt="" />

      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
      
      <button>VER DETALLES</button>
    </div>
  );
}
