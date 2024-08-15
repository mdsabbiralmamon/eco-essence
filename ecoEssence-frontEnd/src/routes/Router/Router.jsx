import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../pages/Home/Home";
import SignUp from "../../pages/SignUp/SignUp";
import SignIn from "../../pages/SignIn/SignIn";

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