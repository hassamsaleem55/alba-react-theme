import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Finance from "./pages/Finance";
import AboutUs from "./pages/AboutUs";
import Warranty from "./pages/Warranty";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/stock",
        element: <Stock />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/warranty",
        element: <Warranty />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
