import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/common/Layout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import WorkDetails from "../pages/WorkDetails";
import Works from "../pages/Works";

function Routes() {
  const router = createHashRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "aboutus",
          exact: true,
          element: <AboutUs />,
        },
        {
          path: "contactus",
          exact: true,
          element: <ContactUs />,
        },
        {
          path: "works",
          exact: true,
          element: <Works />,
        },
        {
          path: "works/:workid",
          exact: true,
          element: <WorkDetails />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Routes;
