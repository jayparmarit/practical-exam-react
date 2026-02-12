import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Routes/Layout";
import Home from "./Components/Ui/Home";
import ProductForm from "./Components/pages/ProductForm";
import ProductList from "./Components/pages/ProductList";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "ProductForm",
          element: <ProductForm />,
        },
        {
          path: "ProductList",
          element: <ProductList />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
