import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

export function Search({classActive}) {

  return (
    <section className="container-search">
      <div className={classActive}>
        <input type="text" placeholder="Buscar"/>
          <SearchIcon className="searchIcon" sx={{fontSize: "45px"}}/>
      </div>
    </section>
  );
}
