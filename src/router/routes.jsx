import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Root";
import AddProduct from "../pages/AddProduct";
import AllUsers from "../pages/AllUsers";
import BrandProductPage from "../pages/BrandProductPage";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyCart from "../pages/MyCart";
import ProductDetails from "../pages/ProductDetails";
import Register from "../pages/Register";
import UpdateProduct from "../pages/UpdateProduct";
import UserProducts from "../pages/UserProducts";
import PablicRoute from "./PablicRoute";
import PrivateRoute from "./PrivateRoute";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
        element: <PrivateRoute><MyCart /></PrivateRoute>,
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
        loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/brands/${params.id}`) ,
        element: <BrandProductPage />,
      },
      {
        path: "/products/detail/:id",
        loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/${params.id}`),
        element: <PrivateRoute><ProductDetails /></PrivateRoute>,
      },
      {
        path: "/products/update/:id",
        loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/products/${params.id}`),
        element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
      },
      {
        path: "/users/all",
        loader: ()=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/users/all`),
        element: <AllUsers />,
      },
      {
        path: "/users/:id",
        loader: ({params})=> fetch(`https://assignment-10-server-6yim5dfbc-aadelbanat8991-gmailcom.vercel.app/users/${params.id}`),
        element: <UserProducts />,
      },
    ]
  },
]);

export default router;