import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import AddProduct from "../pages/AddProduct";
import BrandProductPage from "../pages/BrandProductPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCart from "../pages/MyCart";
import ProductDetails from "../pages/ProductDetails";
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
        path: "/add_product",
        element: <AddProduct />,
      },
      {
        path: "/my_cart",
        element: <MyCart />,
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
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
      },
      {
        path: "/products/update/:id",
        loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`),
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
      },
    ]
  },
]);

export default router;