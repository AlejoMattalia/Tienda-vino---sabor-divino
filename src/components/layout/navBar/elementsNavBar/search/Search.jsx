import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

export function Search({classActiveSearch}) {

  // Buscador
  return (
    <section className="container-search">
      <div className={classActiveSearch}>
        <input type="text" placeholder="Buscar"/>
          <SearchIcon className="searchIcon" sx={{fontSize: "47px"}}/>
      </div>
    </section>
  );
}
