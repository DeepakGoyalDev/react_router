import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import Dashboard from "./pages/host/Dashboard";
import Layout from "./components/Layout";
import Error from "./components/Error";
import HostLayout from "./components/HostLayout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/host_vans/HostVans";
import VanDetails from "./pages/vans/VanDetails";
import HostVansDetails from "./pages/host/host_vans/HostVansDetails";
import HostVansLayout from "./components/HostVansLayout";
import HostVansPricing from "./pages/host/host_vans/HostVansPricing";
import HostVansPhotos from "./pages/host/host_vans/HostVansPhotos";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans/:id" element={<HostVansLayout />}>
              <Route index element={<HostVansDetails />} />
              <Route path="pricing" element={<HostVansPricing />} />
              <Route path="photos" element={<HostVansPhotos />} />
            </Route>
          </Route>
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
