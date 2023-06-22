import { useState } from "react";
import { NavBar } from "./navBar";

export function NavBarContainer() {
  const [classActive, setClassActive] = useState("");
  const [classUl, setClassUl] = useState("");
  const [menuOpnen, setMenuOpnen] = useState(false)

  const toggleSearch = ()=> {
    classActive==="" ? setClassActive("classActive") : setClassActive("")
  }

  const toggleMenu = ()=> {
    classUl === "" ? setClassUl("classUl") : setClassUl("")
  }

  const toggleIcon = () => {
    setMenuOpnen(!menuOpnen)
  }

  return (
    <NavBar toggleSearch={toggleSearch} classActive={classActive} classUl={classUl} toggleMenu={toggleMenu} menuOpen={menuOpnen} toggleIcon={toggleIcon}/>
  )
}