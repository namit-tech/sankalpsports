import React from "react";
import "./App.css";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SwiperSlider from "./components/carousel/SwiperSlider";
import Aboutacademy from "./components/AboutAcademy/Aboutacademy";
import MoreAcademy from "./components/MoreAboutAcademy/MoreAcademy";
import Coaches from "./components/Coaches/Coaches";
import Facility from "./components/Facilities/Facility";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import AboutUs from "./components/About us/AboutUs";
import Contact from "./components/contact/Contact";
import NavCoaches from "./components/NavCoaches/NavCoaches";
import Gallery from "./components/Gallery/Gallery";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function Home() {
  return (
    <div>
      <SwiperSlider />
      <Navbar />
      <Aboutacademy />
      <MoreAcademy />
      <Coaches />
      <Facility />
      <Testimonial />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> {/* Add this right inside the Router */}
        <Navbar />
        <Routes>
          {/* All components displayed on the same home page */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/coaches" element={<NavCoaches />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;