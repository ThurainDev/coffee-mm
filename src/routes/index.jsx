import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Home from "../pages/Home";
import App from "../App"

export default function Routes() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
    ]);
    return <div> <RouterProvider router={router} /></div>;
}

