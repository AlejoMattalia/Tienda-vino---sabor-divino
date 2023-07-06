import { Outlet } from "react-router-dom";
import { Footer } from "./footer/Footer";
import { NavBarContainer } from "./navBar/NavBarContainer";

export function Layout() {
  return (
    <>
      <NavBarContainer />
      <Outlet />
      <Footer />
    </>
  );
}
