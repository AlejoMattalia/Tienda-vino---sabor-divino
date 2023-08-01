import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function ProtectedRoutes() {
  const { userName } = useContext(AuthContext);

  return (
    <div>{userName.name !== "admin" ? <Navigate to="/" /> : <Outlet />}</div>
  );
}
