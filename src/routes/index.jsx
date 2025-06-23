import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router";
import Home from "../pages/Home";
import App from "../App"
import HistoryDetail from "../pages/HistoryDetail";
import PostDetail from "../pages/PostDetail";

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
          {
            path: "/history/:id",
            element: <HistoryDetail />,
          },
          {
            path: "/posts/:id",
            element: <PostDetail />,
          },
        ],
      },
    ]);
    return <div> <RouterProvider router={router} /></div>;
}

