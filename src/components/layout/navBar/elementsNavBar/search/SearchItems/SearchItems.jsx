import { Link } from "react-router-dom";
import "./SearchItems.css";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { ConfigContext } from "../../../../../../context/configContext";
// import { useParams } from "react-router-dom";

export function SearchItems({ searchItemsResults, input }) {

  //Traemos del contexto la funcion para ocultar buscador
  const {setClassActiveSearch, setInput} = useContext(ConfigContext)

  //Funcion para ocultar buscador
  const handleViewSearch = ()=>{
    setClassActiveSearch("");
    setInput("");
  } 



  //Mostrar los productos en el buscador, el usuario escribe y se mapea los productos y se van mostrando en pantalla
  return (
    <div className="container-search-results">
      {input !== "" &&
        searchItemsResults.map((el) => {
          return (
            <>
              <Link to={`/itemDetail/${el.id}`} className="link" onClick={handleViewSearch}>
                <div key={el.id} className="container-items-results">
                  <SearchIcon className="search" />
                  <img src={el.img} alt="" />
                  <p>{el.name}</p>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
}
