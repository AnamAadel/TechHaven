import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import AddProduct from "../pages/AddProduct";
import Blogs from "../pages/Blogs";
import BrandProductPage from "../pages/BrandProductPage";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Purchases from "../pages/Purchases";
import Register from "../pages/Register";
import UpdateProduct from "../pages/UpdateProduct";
import PablicRoute from "./PablicRoute";
import PrivateRoute from "./PrivateRoute";


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
        loader: ({params})=> fetch(`http://localhost:5000/brands/${params.id}`) ,
        element: <BrandProductPage />,
      },
      {
        path: "/products/detail/:id",
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
        element: <ProductDetails />,
      },
      {
        path: "/products/update/:id",
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
        element: <UpdateProduct />,
      },
    ]
  },
]);

export default router;