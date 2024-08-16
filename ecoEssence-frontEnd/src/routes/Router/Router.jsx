import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";
import Products from "../../pages/Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../../pages/Error/Error";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import Blog from "../../pages/Blog/Blog";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
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
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
            {
              path: "/blog",
              element: <Blog />,
            }
        ],
    },
  ]);