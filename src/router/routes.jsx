import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import AddProduct from "../pages/AddProduct";
import Blogs from "../pages/Blogs";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Purchases from "../pages/Purchases";
import Register from "../pages/Register";
import PablicRoute from "./PablicRoute";
import PrivateRoute from "./PrivateRoute";
import BrandProductPage from "../pages/BrandProductPage";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><Details /></PrivateRoute> ,
      },
      {
        path: "/purchases",
        // loader: ()=> fetch("service.json"),
        element: <PrivateRoute><Purchases /></PrivateRoute> ,
      },
      {
        path: "/blogs/:id",
        element: <PrivateRoute><Blogs /></PrivateRoute> ,
      },
      {
        path: "/add_product",
        element: <AddProduct />,
      },
      {
        path: "/register",
        element: <PablicRoute><Register /></PablicRoute> ,
      },
      {
        path: "/login",
        element: <PablicRoute> <Login /></PablicRoute>,
      },
      {
        path: "/brand_products/:id",
        element: <BrandProductPage />,
      },
    ]
  },
]);

export default router;