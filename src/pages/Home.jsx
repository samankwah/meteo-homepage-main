/* eslint-disable react/prop-types */
import { CloudSun, CloudRainWind, Sun, CloudDrizzle } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/Rainy.jpg";
import { FaCloudSun, FaThermometerHalf } from "react-icons/fa";
import thermometer from "../assets/images/thermometer.svg";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import "../components/PopupStyles.css";
import { FaArrowRight, FaExclamationTriangle } from "react-icons/fa";
import cap from "../assets/icons/CAP.png";
import SeverityPolygon from "../components/SeverityPolygon";

const lowSeverityCoordinates = [
  // [7.9, -1.1],
  // [6.15, -0.2],
  // [5.88, -1.05],
];

const mediumSeverityCoordinates = [
  // [7.7, -1.3],
  // [7.65, -1.4],
  // [7.68, -1.2],
];

const highSeverityCoordinates = [
  // [7.5, -1.5],
  // [7.48, -1.6],
  // [7.52, -1.35],
];

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

    case "Rains, Sunny Intervals":
      return <CloudDrizzle className="w-8 h-8 text-white" />;

    default:
      return <CloudSun className="w-8 h-8 text-white" />;
  }
};

const getFormattedDate = () => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return new Date().toLocaleDateString("en-US", options);
};
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [12, 21],
  iconAnchor: [8, 21],
  popupAnchor: [1, 54],
  shadowSize: [21, 21],
});

L.Marker.prototype.options.icon = DefaultIcon;

const WeatherCard = ({ city, condition, minTemp, maxTemp }) => (
  <div className="flex flex-col text-left  justify-center gap-2 text-white px-10 border-r border-r-white">
    <div className="flex gap-6 align-middle items-end ">
      <h3 className="text-left font-montserrat font-semibold text-lg  w-16 h-16">
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
      condition: "Cloudy, Sunny Intervals",
      minTemp: 23,
      maxTemp: 30,
    },
    {
      city: "Ho",
      condition: "Rains, Sunny Intervals",
      minTemp: 19,
      maxTemp: 32,
    },
    {
      city: "Takoradi",
      condition: "Rainfall",
      minTemp: 21,
      maxTemp: 33,
    },
    {
      city: "Accra",
      condition: "Sun",
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
      condition: "Partly Cloudy",
      minTemp: 24,
      maxTemp: 36,
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200, // At screen width less than 1200px
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // At screen width less than 992px (tablet)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // At screen width less than 768px (large mobile)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // At screen width less than 576px (mobile)
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "short", // "Sat"
    month: "short", // "Oct"
    day: "numeric", // "05"
    year: "numeric", // "2024"
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    // Auto update date in the format you want
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center mx-auto px-4 py-6 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Replace with your image path
      }}
    >
      <main className="container mx-auto">
        <div className="pt-16 md:pt-20">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white text-center my-4 md:my-6">
            Climate Information Services
          </h1>

          <div className="bg-[#11487e] rounded-lg shadow-lg p-4 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-lg md:text-xl">
                Weather for {getFormattedDate()}
              </h2>
            </div>

            <div className="slider-container">
              <Slider {...settings}>
                {weatherData.map((data, index) => (
                  <WeatherCard key={index} {...data} />
                ))}
              </Slider>
            </div>
          </div>

          {/* Responsive Map Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Left Sidebar: Weather Warnings */}
            <div className="lg:col-span-0 bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-red-600 text-1xl font-bold mb-4 flex items-center">
                <img src={cap} alt="Ghaap logo" className="h-6 w-6 mr-2" />
                <i className="fas fa-bell mr-2"></i> Latest Weather Warnings
              </h2>
              <ul className="space-y-4">
                <li className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <FaExclamationTriangle className="text-red-500 mr-2" />
                    <p className="font-bold text-blue-700">
                      No active alerts currently
                    </p>
                  </div>
                  <FaArrowRight className="text-blue-500" />
                </li>
              </ul>
            </div>

            {/* Right: Interactive Map */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4 sticky h-full">
              <h2 className="text-gray-700 font-bold mb-2">
                <i className="fas fa-calendar-alt mr-2"></i>
                {`${formattedDate} - ${formattedTime}`}
              </h2>

              <MapContainer
                center={[7.9465, -1.0232]}
                zoom={7}
                className="h-96 lg:h-[780px] w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> Future'
                />
                {/* Low severity zone */}
                <SeverityPolygon
                  coordinates={lowSeverityCoordinates}
                  severity="low"
                  message="Light Rainfall: 10-20mm"
                />

                {/* Medium severity zone */}
                <SeverityPolygon
                  coordinates={mediumSeverityCoordinates}
                  severity="medium"
                  message="Moderate Rainfall: 20-50mm"
                />

                {/* High severity zone */}
                <SeverityPolygon
                  coordinates={highSeverityCoordinates}
                  severity="high"
                  message="Heavy Rainfall: 50mm+"
                />

                {/* Add your markers and popups here */}
                <Marker position={[5.614818, -0.205874]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title">Accra</h2>

                      {/* Horizontal Rule */}
                      <hr className="my-2 border-gray-300" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="my-2 border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-yellow-500 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="my-2 border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-yellow-500 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="my-2 border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center my-2">
                          <FaThermometerHalf className="temp-icon text-red-500 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 30°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[4.9016, -1.7831]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Takoradi</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={[6.6666, -1.6163]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Kumasi</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={[9.4034, -0.8424]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Tamale</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={[6.6101, 0.4785]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Ho</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[7.5909, -1.9344]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Techiman</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[10.3516, -0.7985]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Walewale</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={[6.2159, -2.4851]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">
                        Sefwi Wiawso
                      </h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={[10.0601, -2.5099]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Wa</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>

                <Marker position={[9.0913, -1.827]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Damongo</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[7.3349, -2.3123]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Sunyani</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[6.8018, -2.5148]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">Goaso</h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[7.8014, -0.0513]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">
                        Kete-Krachi
                      </h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[5.1231, -1.2689]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">
                        Cape Coast
                      </h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[10.7875, -0.858]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">
                        Bolgatanga
                      </h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <Marker position={[6.0784, -0.2714]}>
                  <Popup>
                    <div className="popup-content flex flex-col">
                      {/* Location and weather info */}
                      <h2 className="location-title text-blue-900">
                        Koforidua
                      </h2>

                      {/* Horizontal Rule */}
                      <hr className="border-blue-500" />

                      {/* Date Section */}
                      <p className="text-blue-600 font-bold">{currentDate}</p>

                      {/* Horizontal Rule */}
                      <hr className="border-gray-300" />

                      <div className="weather-details">
                        {/* Morning Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Morning:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Intervals
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 33°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
              {/* <div className="static bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
                <h3 className="text-sm font-bold">Alert Severity</h3>
                <ul className="text-xs">
                  <li className="flex items-center">
                    <span className="block w-4 h-4 bg-red-600 mr-2"></span>{" "}
                    Extreme
                  </li>
                  <li className="flex items-center">
                    <span className="block w-4 h-4 bg-orange-600 mr-2"></span>{" "}
                    Severe
                  </li>
                  <li className="flex items-center">
                    <span className="block w-4 h-4 bg-yellow-500 mr-2"></span>{" "}
                    Moderate
                  </li>
                  <li className="flex items-center">
                    <span className="block w-4 h-4 bg-blue-300 mr-2"></span>{" "}
                    Minor
                  </li>
                </ul>
              </div> */}
            </div>
            {/* </div> */}

            {/* Sidebar Forecast */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-blue-600 font-bold text-xl">
                Other Forecasts
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/5-days-forecast"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      5 Days Forecast
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/7-days-forecast"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      7 Days Forecast
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/agro-bulletins"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Agrometeorological Bulletins
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/flood-drought"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Flood and Drought Bulletins
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/subseasonal-forecast"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Subseasonal 2 Seasonal Forecast
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/monthly-forecast"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Monthly Forecast
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/seasonal-forecast"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Seasonal Forecast
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/climate-report"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      State of the Climate Report 2023
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/crop-calendar"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Crop Calendar 2024
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poultry-calendar"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Poultry Calendar 2024
                    </h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-4 m-8 p-4">
            {/* <div className="bg-blue-500 text-white p-4 rounded-lg"></div> */}

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Card Header */}
                <div className="p-4 border-b bg-blue-50">
                  <h3 className="text-lg font-semibold text-blue-600">
                    Latest News
                  </h3>
                </div>

                {/* News List */}
                <div className="p-4 space-y-6">
                  {/* News Item 1 */}
                  <a href="/blog/gmet-visit" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={image1}
                        alt="News 1"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          Visit to GMet by Ministry of Environment, Climate
                          Change. Hon. Stephen Amankwah and PS DR. Eng. Festus
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* News Item 2 */}
                  <a href="/blog/national-assembly-visit" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={image2}
                        alt="News 2"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          National Assembly committee on Environment, Forestry
                          and Mining visit to the Meteorological Agency
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* News Item 3 */}
                  <a href="/blog/son-forecast" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={image3}
                        alt="News 3"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div className="text-sm">
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          Release of the SON seasonal forecast
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b border-gray-200 bg-blue-50">
                  <h3 className="text-lg font-semibold text-blue-600">
                    Upcoming Events
                  </h3>
                </div>

                {/* Event List */}
                <div className="p-4 space-y-6">
                  {/* Event 1 */}
                  <a href="/events/wmo-training" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={event1}
                        alt="Event 1"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          WORLD METEOROLOGICAL ORGANIZATION(WMO) SATELLITE
                          TRAINING COURSE ON METEOSAT THIRD GENERATION (MTG)
                        </p>
                        <p className="text-sm text-gray-500">
                          20 Nov 2024 - 24 Nov 2024
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Event 2 */}
                  <a href="/events/climate-data-training" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={event2}
                        alt="Event 2"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          CLIMATE DATA TRAINING COURSE AT ACCRA-GHANA
                        </p>
                        <p className="text-sm text-gray-500">
                          26 Nov 2024 - 01 Dec 2024
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Event 3 */}
                  <a href="/events/world-met-day" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={event3}
                        alt="Event 3"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          World Meteorological Day 2024
                        </p>
                        <p className="text-sm text-gray-500">23 Mar 2024</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Home;
