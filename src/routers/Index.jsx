import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Index";
import About from "../pages/About";
import Blog from "../pages/blog";
import Post from "../pages/blog/_id";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Post />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
