/* eslint-disable react/prop-types */
import React from "react";
import { CloudSun, CloudRainWind, Sun, Search } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import weather from "../assets/images/weather warning.jpg";
import flood from "../assets/images/flood.png";
import logo from "../assets/images/ghaaplogo.png";
import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import thermometer from "../assets/images/thermometer.svg";
const WeatherIcon = ({ condition }) => {
  switch (condition) {
    case "Cloudy, Sunny Intervals":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="40"
          width="40"
        >
          <path
            fill="white"
            d="M558.2 185.6C542.1 151.5 507.4 128 468 128c-41.7 0-77.6 25.2-92.5 62.5-32.5 11.4-55.5 42.1-55.5 78.3 0 45.9 37.3 83.2 83.2 83.2h153.6c45.9 0 83.2-37.3 83.2-83.2 0-45.4-36.6-82.4-81.8-83.2zM556.8 320H403.2c-28.3 0-51.2-22.9-51.2-51.2 0-27.5 21.8-49.8 49-51 4.9-32.7 32.9-57.8 67-57.8 35.8 0 64.8 27.8 67.5 62.9 6.5-3.1 13.6-5.3 21.3-5.3 28.3 0 51.2 22.9 51.2 51.2S585.1 320 556.8 320zm-153.6 64c-.7 0-1.4-.2-2.1-.2l4.3 21.6-84.8-16.8c-6.6-1.3-12.8 1.4-16.4 6.8L256 467.2l-48.1-71.9c-3.6-5.3-9.9-8.1-16.4-6.8l-84.8 16.8 16.8-84.8c1.2-6.3-1.4-12.8-6.8-16.4L44.8 256l71.9-48.1c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.8 84.8 16.8c6.5 1.3 12.8-1.5 16.4-6.8L256 44.8l48.1 71.9c3.6 5.3 9.9 8.1 16.4 6.8L428.8 102c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.1-14.4-18.8-12.6L324.8 90 269.3 7.1c-3-4.4-8-7.1-13.3-7.1s-10.3 2.7-13.3 7.1L187.2 90 89.4 70.6c-5.3-1.1-10.6.6-14.4 4.4s-5.4 9.2-4.4 14.4L90 187.2 7.1 242.7c-4.4 3-7.1 7.9-7.1 13.3s2.7 10.3 7.1 13.3L90 324.8l-19.4 97.8c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.4 14.4 4.4l97.8-19.4 55.5 82.9c3 4.4 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.4-82.9 97.8 19.4c5.4 1.1 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4l-7.6-38.6h-30.5zM256 179.7c21 0 40 8.5 53.8 22.3 6.2-8.7 13.6-16.4 22-23.1-19.5-19.2-46.3-31.1-75.8-31.1-59.7 0-108.3 48.6-108.3 108.3S196.3 364.3 256 364.3c22.8 0 44-7.2 61.5-19.3-7.1-8-13.1-16.9-17.8-26.6-12.4 8.7-27.4 13.9-43.7 13.9-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3z"
          ></path>
        </svg>
      );
    case "Sunny Intervals , Showers":
      return <CloudRainWind className="w-8 h-8 text-white" />;
    case "Sunny Intervals":
      return <Sun className="w-8 h-8 text-white" />;
    default:
      return <CloudSun className="w-8 h-8 text-white" />;
  }
};

const WeatherCard = ({ city, condition, minTemp, maxTemp }) => (
  <div className="flex flex-col text-left  justify-center gap-2 text-white px-10 border-r border-r-white">
    <div className="flex gap-6 align-middle items-end ">
      <h3 className="text-left font-montserrat font-semibold text-lg">
        {city}
      </h3>

      <WeatherIcon className="text-right" condition={condition} />
    </div>
    <p className="text-sm font-montserrat">{condition}</p>
    <div className="flex align-middle items-center gap-2">
      <img className="mysvg" src={thermometer} alt="" height="30" width="30" />

      <p className="text-sm">
        Temperature
        <br />
        Min: {minTemp}°C
        <br />
        Max: {maxTemp}°C
      </p>
    </div>
  </div>
);

const Home = () => {
  const weatherData = [
    {
      city: "Koforidua",
      condition: "Cloudy, Sunny Intervals",
      minTemp: 22,
      maxTemp: 32,
    },
    {
      city: "Cape Coast",
      condition: "Sunny Intervals , Showers",
      minTemp: 23,
      maxTemp: 30,
    },
    { city: "Ho", condition: "Sunny Intervals", minTemp: 19, maxTemp: 32 },
    {
      city: "Takoradi",
      condition: "Sunny Intervals",
      minTemp: 21,
      maxTemp: 33,
    },
    {
      city: "Accra",
      condition: "Sunny Intervals",
      minTemp: 23,
      maxTemp: 31,
    },
    {
      city: "Bole",
      condition: "Cloudy, Sunny Intervals",
      minTemp: 25,
      maxTemp: 37,
    },
    {
      city: "Tamale",
      condition: "Sunny Intervals",
      minTemp: 24,
      maxTemp: 36,
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 ">
      <header className="bg-white p-4 flex flex-col md:flex-row justify-between items-center ">
        <div className="flex items-center ml-52 space-x-4">
          <img src={logo2} alt="Mofa logo" className="h-12 md:h-16" />
          <img src={logo3} alt="Fsrp logo" className="h-12 md:h-16" />
          <img src={logo4} alt="GMet logo" className="h-12 md:h-16" />
          {/* <div>
            <h1 className="text-red-600 font-bold text-lg md:text-xl">
              MoFA-FSRP
            </h1>
            <h2 className="text-green-600 font-bold text-md md:text-lg">
              AND GMet
            </h2>
            <p className="text-sm">GhAAP</p>
          </div> */}
        </div>
        <nav className="space-x-2 md:space-x-4 mr-52 text-sm mt-4 md:mt-0">
          <a href="#" className="text-blue-600">
            HOME
          </a>
          <a href="#" className="text-blue-600">
            FORECAST
          </a>
          <a href="#" className="text-blue-600">
            CLIMATE
          </a>
          <a href="#" className="text-blue-600">
            CONTACT US
          </a>
          <Search className="inline-block w-4 h-4 text-blue-600" />
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl text-white text-center my-4 md:my-6">
          Climate Information Services
        </h1>

        {/* Social Icons - Responsive */}
        <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 my-4">
          <a href="#">
            <img
              src="/path-to-facebook-icon.png"
              alt="Facebook"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a href="#">
            <img
              src="/path-to-twitter-icon.png"
              alt="Twitter"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a href="#">
            <img
              src="/path-to-instagram-icon.png"
              alt="Instagram"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
          <a href="#">
            <img
              src="/path-to-ncap-icon.png"
              alt="NCAP"
              className="h-5 w-5 md:h-6 md:w-6"
            />
          </a>
        </div>

        <div className="bg-[#11487e] rounded-lg shadow-lg p-4 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg md:text-xl">
              Weather for 11 Sep 2024, Afternoon
            </h2>
            {/* <button className="bg-blue-600 text-white px-3 md:px-4 py-1 md:py-2 rounded">
              More Towns &gt;&gt;
            </button> */}
          </div>

          <div className="slider-container">
            <Slider {...settings}>
              {weatherData.map((data, index) => {
                return <WeatherCard key={index} {...data} />;
              })}
            </Slider>
          </div>
        </div>

        {/* Responsive Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-blue-600 font-bold mb-2">
              Today&apos;s Weather
            </h2>
            <MapContainer
              center={[7.9465, -1.0232]}
              zoom={6}
              className="h-64 md:h-96"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[5.614818, -0.205874]}>
                <Popup>Accra: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[4.9016, -1.7831]}>
                <Popup>Takoradi: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[6.6666, -1.6163]}>
                <Popup>Kumasi: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[9.4034, -0.8424]}>
                <Popup>Tamale: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[6.6101, 0.4785]}>
                <Popup>Ho: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[7.5909, -1.9344]}>
                <Popup>Techiman: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[10.3516, -0.7985]}>
                <Popup>Walewale: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[6.2159, -2.4851]}>
                <Popup>Sefwi Wiawso: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[10.0601, -2.5099]}>
                <Popup>Wa: Sunny Intervals</Popup>
              </Marker>

              <Marker position={[9.0913, -1.827]}>
                <Popup>Damongo: Sunny Intervals</Popup>
              </Marker>
            </MapContainer>

            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
              Reset Map
            </button>
          </div>

          {/* Sidebar Forecast */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-blue-600 font-bold mb-2">Other Forecasts</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-600">
                  5 Days Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  7 Days Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Agrometeorological Bulletins
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Flood and Drought Bulletins
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Subseasonal 2 Seasonal Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Monthly Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Seasonal Forecast
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  State of the Climate Report 2023
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  Regional Crop & Poulty Calendar 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  District Crop & Poulty Calendar 2024
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-8 mt-24">
          <div className="bg-yellow-600 p-4 rounded-lg text-center w-80 md:w-auto">
            <h3 className="font-bold text-base">Daily Weather Forecast</h3>
            <img
              src={weather}
              alt="Weather Alert"
              className="mt-2 w-80 h-70 object-cover"
            />
          </div>
          <div className="bg-yellow-600 p-4 rounded-lg text-center w-80 md:w-auto">
            <h3 className="font-bold text-base">Weekly Forecast</h3>
            <img
              src={weather}
              alt="Weather Alert"
              className="mt-2 w-80 h-70 object-cover"
            />
          </div>
          <div className="bg-yellow-600 p-4 rounded-lg text-center w-80 md:w-auto">
            <h3 className="font-bold text-base">
              Get Weather Advisories & Alerts
            </h3>
            <img
              src={flood}
              alt="Weather Alert"
              className="mt-2 w-80 h-70 object-cover"
            />
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white mt-8 p-8 text-center md:text-left">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Ghaap logo" className="h-16 mb-4" />
            <p className="text-sm">
              GhAAP is committed to providing top-notch solutions that drive
              business success. Stay connected and discover more about our
              services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-semibold mb-3 text-lg">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-semibold mb-3 text-lg">Connect With Us</h5>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-gray-400" aria-label="Facebook">
                <i className="fab fa-facebook h-6 w-6"></i>
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="Twitter">
                <i className="fab fa-twitter h-6 w-6"></i>
              </a>
              <a href="#" className="hover:text-gray-400" aria-label="LinkedIn">
                <i className="fab fa-linkedin h-6 w-6"></i>
              </a>
            </div>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/privacy" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-gray-400 align-middle">
          <p>&copy; 2024 GhAAP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
