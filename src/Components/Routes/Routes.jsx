import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home";
import BlogDetails from "../Blogs/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch('blogs.JSON')
      }
    ],
  },
]);

export default router;
