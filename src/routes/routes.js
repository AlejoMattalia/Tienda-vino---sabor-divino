import { Blog } from "../components/pages/blog/Blog";
import { Contact } from "../components/pages/contact/Contact";
import { Home } from "../components/pages/home/Home";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";
import { Login } from "../components/pages/sectionLogin/Login";
import { Register } from "../components/pages/sectionLogin/Register";
import { Cart } from "../components/pages/cart/Cart.jsx"
import { CommentsContainer } from "../components/pages/comments/CommentsContainer.jsx";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: Home
    },

    {
        id: "register",
        path: "/register",
        Element: Register
    },

    {
        id: "login",
        path: "/login",
        Element: Login
    },

    {
        id: "itemList",
        path: "/itemList",
        Element: ItemListContainer
    },

    {
        id: "category",
        path: "/category/:type",
        Element: ItemListContainer
    },

    {
        id: "blog",
        path: "/blog",
        Element: Blog
    },

    {
        id: "itemDetail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },

    {
        id: "contact",
        path: "/contact",
        Element: Contact
    },

    {
        id:"cart",
        path: "/cart",
        Element: Cart
    },

    {
        id:"comments",
        path:"/comments",
        Element: CommentsContainer
    },

    {
        id:"checkout",
        path: "/checkout",
        Element: CheckoutContainer
    }
]