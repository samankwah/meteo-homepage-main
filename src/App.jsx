import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import Climate from "./pages/Climate";
import About from "./pages/About";
import CropCalendar from "./pages/CropCalendar";
import Weather from "./pages/Weather";
import NewsUpdates from "./pages/NewsUpdates";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/climate" element={<Climate />} />
            <Route path="/about" element={<About />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/crop-calendar" element={<CropCalendar />} />
            <Route path="/news" element={<NewsUpdates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
