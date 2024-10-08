import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home";
// import JobDetails from "../Blogs/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: '/blog/:id',
      //   element: <JobDetails></JobDetails>,
      //   loader: () => fetch('blogs.JSON')
      // },
      {

      }
    ],
  },
]);

export default router;
