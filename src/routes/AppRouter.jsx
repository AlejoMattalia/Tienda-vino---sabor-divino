import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import {routes} from "./routes.js";
import { Dashboard } from "../components/pages/dashboard/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {
            routes.map(({id, path, Element})=>(
                <Route key={id} path={path} element={<Element/>}/>
            ))
        }
      </Route>

      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>  

      <Route path="*" element={<h1>404 Found</h1>} />
    </Routes>
  );
}
