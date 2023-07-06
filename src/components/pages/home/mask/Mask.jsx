import "./Mask.css";
import "../../../../App.css";

export function Mask() {
   return (
    <div className="bg-image">
      <img
        src="https://s1.1zoom.me/big0/607/Wine_Black_background_Bottle_Stemware_512316_1280x923.jpg"
        className="w-100 img-mask"
        alt="Sample"
      />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="text-white mb-0">¿Querés un vino?</h1>
          <h2 className="text-white mt-4">Conocé Sabor Divino</h2>

          <div className="mt-5">
            <button className="buttons-links combos">
              <a href="">Combos</a>
            </button>
            <button className="buttons-links vinos">
              <a href="">Vinos</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
