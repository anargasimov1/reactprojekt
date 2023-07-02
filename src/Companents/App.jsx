import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Companents/Layout/Pages/Home/Layout";
import Home from "./Layout/Pages/Home/Home";
import Second from "./Layout/Pages/Second/Second";
import { useState } from "react";
import Bloq from "./Layout/Pages/Bloq/Bloq";
import Footer from "./Layout/Pages/Footer/Footer";
import AboutUs from "./Layout/Pages/AboutUs/AboutUs";


export default function App() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/second" element={<Second wishlist={wishlist} setWishlist={setWishlist} />} />
            <Route path="/bloq" element={<Bloq />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/about" element={<AboutUs />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
