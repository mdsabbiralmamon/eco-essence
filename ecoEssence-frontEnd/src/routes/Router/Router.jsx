import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Products from "../../pages/Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-products",
                element: <PrivateRoute><Products /></PrivateRoute>,
            },
            {
              path: "/signup",
              element: <SignUp />,
            },
            {
              path: "/signin",
              element: <SignIn />,
            }
        ],
    },
  ]);