import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import {routes} from "./routes.js";
// import { Home } from "../components/pages/home/Home";
// import { Register } from "../components/pages/sectionLogin/Register";
// import { Login } from "../components/pages/sectionLogin/Login";
// import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";
// import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
// import { Blog } from "../components/pages/blog/Blog";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>

        {
            routes.map(({id, path, Element})=>(
                <Route key={id} path={path} element={<Element/>}/>
            ))
            // routes.map(({id, path, Element})=>{
            //     <Route key={id} path={path} element={<Element/>}/>
            // })
        }

        {/* <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/itemList" element={<ItemListContainer />} />
        <Route path="/category/:type" element={<ItemListContainer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} /> */}
      </Route>

      <Route path="*" element={<h1>404 Found</h1>} />
    </Routes>
  );
}
