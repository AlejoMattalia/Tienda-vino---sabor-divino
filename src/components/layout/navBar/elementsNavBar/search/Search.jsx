import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useEffect, useState } from "react";
import {SearchItems} from "./SearchItems/SearchItems.jsx";
import {useFirebase} from "../../../../../hooks/useFirebase.js"

export function Search({ classActiveSearch, input, setInput }) {
  const [searchResults, setSeacrhResults] = useState(null);
  const [searchItemsResults, setSearchItemsResults] = useState([])

  const { data: dataAllProducts} = useFirebase("products");


  useEffect(() => {

    if(dataAllProducts){
      const captureInfoItems = dataAllProducts.map((item)=>({
        id: item.id,
        name: item.name,
        img: item.img,
      }))
      setSeacrhResults(captureInfoItems)
    }
  }, [dataAllProducts]);

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
