import React from "react";
import "./styles/Index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./pages/Home.jsx";
import Presentation from "./pages/Presentation.jsx";
import Projet from "./pages/Projet.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/Présentation",
          element: <Presentation />,
        },
        { path: "/Projet", element: <Projet /> },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
