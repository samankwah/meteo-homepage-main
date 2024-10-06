/* eslint-disable react/prop-types */
import { CloudSun, CloudRainWind, Sun, Search } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import logo from "../assets/images/ghaaplogo.png";
import logo2 from "../assets/images/mofalog.png";
import logo3 from "../assets/images/fsrp.png";
import logo4 from "../assets/images/gmetlogo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import facebook from "../assets/icons/facebook.png";
import linkedIn from "../assets/icons/linkedin.png";
import xTwitter from "../assets/icons/x.png";
import youTube from "../assets/icons/youtube.png";
import whatsapp from "../assets/icons/whatsapp.png";
import thermometer from "../assets/images/thermometer.svg";
import event1 from "../assets/images/event1.png";
import event2 from "../assets/images/event2.png";
import event3 from "../assets/images/event3.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

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
const getFormattedDate = () => {
  const options = { day: "2-digit", month: "long", year: "numeric" };
  return new Date().toLocaleDateString("en-US", options);
};
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
      condition: "Sunny Intervals, Showers",
      minTemp: 23,
      maxTemp: 30,
    },
    {
      city: "Ho",
      condition: "Cloudy, Sunny Intervals",
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
      condition: "Partly Cloudy",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 mx-auto px-4 py-6 md:px-8 lg:px-12">
      <header className="bg-white  p-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 md:mb-0 md:ml-0">
          <img src={logo2} alt="Mofa logo" className="h-12 md:h-16" />
          <img src={logo3} alt="Fsrp logo" className="h-12 md:h-16" />
          <img src={logo4} alt="GMet logo" className="h-12 md:h-16" />
        </div>
        <nav className="space-x-2 md:space-x-4 text-sm">
          <div className="flex justify-center md:justify-end space-x-2 md:space-x-4 my-4">
            <a href="#">
              <img
                src={facebook}
                alt="Facebook"
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </a>
            <a href="#">
              <img
                src={linkedIn}
                alt="LinkedIn"
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </a>
            <a href="#">
              <img
                src={xTwitter}
                alt="XTwitter"
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </a>
            <a href="#">
              <img
                src={youTube}
                alt="YouTube"
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </a>
            <a href="#">
              <img
                src={whatsapp}
                alt="whatsapp"
                className="h-5 w-5 md:h-6 md:w-6"
              />
            </a>
            <Search className="inline-block w-4 h-4 text-blue-600" />
          </div>
        </nav>
      </header>

      <main className="container mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-white text-center my-4 md:my-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* <div className="col-span-3 bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-blue-600 font-bold mb-2">
              Today&apos;s Weather
            </h2>
            <MapContainer
              center={[7.9465, -1.0232]}
              zoom={6}
              className="h-96 md:h-[40rem] lg:h-[50rem] w-full"
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
              <Marker position={[7.3349, -2.3123]}>
                <Popup>Sunyani: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[6.8018, -2.5148]}>
                <Popup>Goaso: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[7.8014, -0.0513]}>
                <Popup>Kete Krachi: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[5.1231, -1.2689]}>
                <Popup>Cape Coast: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[10.7875, -0.858]}>
                <Popup>Bolgatanga: Sunny Intervals</Popup>
              </Marker>
              <Marker position={[6.0784, -0.2714]}>
                <Popup>Koforidua: Sunny Intervals</Popup>
              </Marker>
            </MapContainer>

            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md">
              Reset Map
            </button>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-screen">
            {/* Left Sidebar: Weather Warnings */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-lg p-4 overflow-auto">
              <h2 className="text-red-600 font-bold mb-4">
                <i className="fas fa-bell mr-2"></i> Latest Weather Warnings
              </h2>
              <ul className="space-y-4">
                <li className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-blue-700">
                      Ongoing: Thunderstorms/Squall lines (J...)
                    </p>
                    <p className="text-sm text-gray-500">Minor severity</p>
                  </div>
                  <i className="fas fa-arrow-right text-blue-500"></i>
                </li>
                <li className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-blue-700">
                      Ongoing: Thunderstorms/Squall lines (T...)
                    </p>
                    <p className="text-sm text-gray-500">Yellow severity</p>
                  </div>
                  <i className="fas fa-arrow-right text-blue-500"></i>
                </li>
                <li className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-blue-700">
                      Ongoing: Thunderstorms/Squall lines (K...)
                    </p>
                    <p className="text-sm text-gray-500">Minor severity</p>
                  </div>
                  <i className="fas fa-arrow-right text-blue-500"></i>
                </li>
                {/* Add more list items similarly */}
              </ul>
            </div>

            {/* Right: Interactive Map */}
            <div className="lg:col-span-3 bg-white rounded-lg shadow-lg p-4 relative">
              <h2 className="text-gray-700 font-bold mb-2">
                <i className="fas fa-calendar-alt mr-2"></i> Sat Oct 05 2024 -
                16:00
              </h2>
              <MapContainer
                center={[7.9465, -1.0232]}
                zoom={6}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Add your markers and popups here */}
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
                <Marker position={[7.3349, -2.3123]}>
                  <Popup>Sunyani: Sunny Intervals</Popup>
                </Marker>
                <Marker position={[6.8018, -2.5148]}>
                  <Popup>Goaso: Sunny Intervals</Popup>
                </Marker>
                <Marker position={[7.8014, -0.0513]}>
                  <Popup>Kete Krachi: Sunny Intervals</Popup>
                </Marker>
                <Marker position={[5.1231, -1.2689]}>
                  <Popup>Cape Coast: Sunny Intervals</Popup>
                </Marker>
                <Marker position={[10.7875, -0.858]}>
                  <Popup>Bolgatanga: Sunny Intervals</Popup>
                </Marker>
                <Marker position={[6.0784, -0.2714]}>
                  <Popup>Koforidua: Sunny Intervals</Popup>
                </Marker>
              </MapContainer>

              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md">
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
              </div>
            </div>
          </div>

          {/* Sidebar Forecast */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-blue-600 font-bold text-xl">Other Forecasts</h2>
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
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                  <img
                    src={image1}
                    alt="News 1"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                      Visit to GMet by Ministry of Environment, Climate Change
                      and Forestry CS Hon. Aden Duale and PS DR. Eng. Festus
                    </p>
                  </div>
                </div>

                {/* News Item 2 */}
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                  <img
                    src={image2}
                    alt="News 2"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                      National Assembly committee on Environment, Forestry and
                      Mining visit to the Meteorological Agency
                    </p>
                  </div>
                </div>

                {/* News Item 3 */}
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
                <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                  <img
                    src={event1}
                    alt="Event 1"
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                      WORLD METEOROLOGICAL ORGANIZATION(WMO) SATELLITE TRAINING
                      COURSE ON METEOSAT THIRD GENERATION (MTG)
                    </p>
                    <p className="text-sm text-gray-500">
                      20 Nov 2023 - 24 Nov 2023
                    </p>
                  </div>
                </div>

                {/* Event 2 */}
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
                      26 Feb 2024 - 01 Mar 2024
                    </p>
                  </div>
                </div>

                {/* Event 3 */}
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
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-900 text-white mb-1 mt-2 p-8 text-center md:text-left">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start ">
            <img src={logo} alt="Ghaap logo" className="h-16 mb-4" />
            <p className="text-sm">
              GhAAP is committed to providing top-notch solutions that drive
              business success. Stay connected and discover more about our
              services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-center">
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
        <div className="mt-8 border-t border-gray-700 pt-4 text-xs text-gray-400 flex justify-center">
          <p>&copy; 2024 GhAAP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
