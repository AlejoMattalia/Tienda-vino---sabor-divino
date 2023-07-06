import "./SearchItems.css";
import SearchIcon from "@mui/icons-material/Search";

export function SearchItems({ searchItemsResults, input }) {


  //Mostrar los productos en el buscador, el usuario escribe y se mapea los productos y se van mostrando en pantalla

  return (
    <div className="container-search-results">
      {
        input !== "" &&
        searchItemsResults.map((el, id) => {
        return (
          <div key={id} className="container-items-results">
            <SearchIcon className="search"/>
            <img src={el.img} alt="" />
            <p>{el.name}</p>
          </div>
        );
      })}
    </div>
  );
}
