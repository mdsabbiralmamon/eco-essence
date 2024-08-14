import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root/Root";
import Home from "../../pages/Home/Home";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    },
  ]);