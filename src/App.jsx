import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import ProductGallery from "./pages/products/ProductGallery";
import OrganizationalChart from "./pages/team/OrganizationalChart";
import ProductDescription from "./pages/products/ProductDescription";
import TechnicalWriteUp from "./pages/products/TechnicalWriteUp";
import MachineryList from "./pages/About/MachineryList";
import Certifications from "./pages/Certifications";
function App() {
  return (
    <div className="App text-slate-700">
      <Nav />

<div className="px-10">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us/introduction" element={<About />} />
        <Route path="/about-us/machinery-list" element={<MachineryList />} />

        <Route path="/our-products/gallery" element={<ProductGallery />} />
        <Route
          path="/our-products/description"
          element={<ProductDescription />}
        />
        <Route
          path="/our-products/technical-write-up"
          element={<TechnicalWriteUp />}
        />

        <Route
          path="/our-team/organisational-chart"
          element={<OrganizationalChart />}
        />
        <Route
          path="/our-certifications"
          element={<Certifications />}
        />
               

      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
