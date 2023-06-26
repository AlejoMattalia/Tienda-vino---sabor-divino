import { useState } from "react";
import { NavBar } from "./NavBar";

export function NavBarContainer( {isClickOverflow, setIsClickOverflow, widthPage} ) {

  const [classActiveSearch, setClassActiveSearch] = useState("");
  const [classUl, setClassUl] = useState("");
  const [menuOpnen, setMenuOpnen] = useState(false);
  const [classLi, setClassLi] = useState("");
  

  // Función para mostrar o ocultar el buscador 
  const toggleSearch = ()=> {
    classActiveSearch==="" ? setClassActiveSearch("classActive") : setClassActiveSearch("")
  }

  //función para abrir o cerrar el menu cuando la pagina sea menor a 850px
  const toggleMenu = ()=> {
    classUl === "" ? setClassUl("classUl") : setClassUl("");
    setIsClickOverflow(!isClickOverflow);
  }

  //Función para cambiar el icono de la pantalla
  const toggleIcon = () => {
    //MenuOpen funciona como condicion, cuando es true se muestra el icono equis, si es falso se muestra el menu hamburguesa
    setMenuOpnen(!menuOpnen)
  }

  //Función para que cuando se de click en la seccion catalogo y se muestren la opciones(combos, vinos), Los otros elementos li(blog, comentarios, contactos) se muevan 65px hacia abajo, cuando la pagina sea menor a 850px
  const handleLiClick = ()=> {
    if(widthPage < 851){
      classLi === "" ? setClassLi("handle-li") : setClassLi("");
    }
  }

  return (
    <NavBar toggleSearch={toggleSearch} classActiveSearch={classActiveSearch} classUl={classUl} toggleMenu={toggleMenu} menuOpen={menuOpnen} toggleIcon={toggleIcon} classLi={classLi} handleLiClick={handleLiClick}/>
  )
}