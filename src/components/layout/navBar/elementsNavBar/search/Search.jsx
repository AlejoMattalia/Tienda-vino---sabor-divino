import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useEffect, useState } from "react";
import { useAxios } from "../../../../../hooks/useAxios.js";
import {SearchItems} from "./SearchItems/SearchItems.jsx";

export function Search({ classActiveSearch, input, setInput }) {
  const [searchResults, setSeacrhResults] = useState(null);
  const [searchItemsResults, setSearchItemsResults] = useState([])

  const { data: combosData } = useAxios("http://localhost:3000/combos");
  const { data: vinosData } = useAxios("http://localhost:3000/vinos");

  useEffect(() => {
    if (combosData && vinosData) {
      const nameCombos = combosData.map((item) => ({
        id: item.id,
        name: item.name,
        img: item.img,
      }));
      const nameVinosTintos = vinosData.tintos.map((item) => ({
        id: item.id,
        name: item.name,
        img: item.img,
      }));

      setSeacrhResults(nameCombos.concat(nameVinosTintos));
    }
  }, [combosData, vinosData]);

  useEffect(() => {
    if (searchResults) {
      const matchingResult = searchResults.filter((item) =>
        item.name.toLowerCase().includes(input.toLowerCase())
      );
      setSearchItemsResults(matchingResult);
    }
  }, [searchResults, input]);

  // Buscador
  return (
    <section className="container-search">
      <div className={classActiveSearch}>
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <SearchIcon className="searchIcon" sx={{ fontSize: "47px" }} />
      </div>

      <SearchItems searchItemsResults={searchItemsResults} input={input}/>
    </section>
  );
}
