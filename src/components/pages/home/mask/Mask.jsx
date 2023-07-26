import "./Mask.css";
import "../../../../App.css";
import { Link } from "react-router-dom";


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
          <h3 className="text-white mt-4">Conocé Sabor Divino</h3>

          <div className="mt-5">
            <button className="buttons-links combos">
              <Link to={"/category/combos"}>Combos</Link>
            </button>
            <button className="buttons-links vinos">
              <Link to={"/category/itemList"}>Vinos</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
