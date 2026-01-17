import React from "react";
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import PNF from "./pages/PNF";
import Futured from "./pages/Futured";
import Mens from "./pages/Mens";
import Productz from "./components/Productz";

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/futured" element={<Futured />} />
          <Route path="/mens" element={<Mens/>} />
          <Route path="product/:id" element={<Productz />} />
        </Route>
        <Route path="*" element={<PNF />} />
      </>
    )
  )

  return <RouterProvider router={routes} />;
};

export default App;
