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
import backgroundImage from "../assets/images/Sunny.jpg";
import {
  FaCloudSun,
  FaThermometerHalf,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaCloudMoon,
  FaCloudRain,
  FaCloud,
} from "react-icons/fa";
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
import MyLink from "../components/MyLink";
import PropTypes from "prop-types";

const lowSeverityCoordinates = [
  // [7.3, 0.5], //northeast
  // [6.15, -0.2],
  // [4.88, -1.65], //south
  // [6.7, -3],
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

// eslint-disable-next-line react/prop-types
const WeatherIcon = ({ condition }) => {
  switch (condition) {
    case "Cloudy, Sunny Intervals":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="60"
          width="60"
        >
          <path
            fill="white"
            d="M640 258.3c0-51.6-40.2-93.5-89.6-93.5h-.5c-16.6-40.7-55.3-69.2-99.4-69.2-46.4 0-86.2 30.1-101.5 74.2-25.3 8.8-45.2 29.1-54.7 54.9-48.3 5-86.3 45.5-86.3 95.1 0 1.8.1 3.7.2 5.6-38 13.2-64.2 49.2-64.2 90.5 0 53 43.1 96.1 96 96.1h240c52.9 0 96-43.1 96-96.1 0-24.7-9.4-47.1-24.8-64.1 49-.5 88.8-42.2 88.8-93.5zM480 480H240c-35.3 0-64-28.7-64-64.1 0-31 22.2-57.5 52.8-62.9l16.5-2.9-3.6-16.3c-1.1-5-1.7-9.6-1.7-13.9 0-35.3 28.7-64.1 64-64.1 24.6 0 47.2 14.5 57.8 37l8.6 18.4 15.8-12.7c8.8-7 19.1-10.7 29.8-10.7 26.5 0 48 21.5 48 48v16h16c35.3 0 64 28.7 64 64.1S515.3 480 480 480zm70.4-160.2h-56.1c-7.5-36.5-39.7-64.1-78.3-64.1-12 0-23.7 2.7-34.4 7.9-13-18-32-30.8-53.2-36.5 9.6-17.3 26.7-29.1 46.7-30.1 5.6-39.3 37-69.4 75.3-69.4 40.3 0 72.9 33.3 75.9 75.5 7.4-3.7 15.3-6.3 24-6.3 31.8 0 57.6 27.5 57.6 61.5.1 34-25.7 61.5-57.5 61.5zm-384.9-7.7c-2.1-1-4.3-1.7-6.6-1.7-1 0-2.1.1-3.1.3l-63.2 12.5 12.5-63.2c1.2-6.3-1.4-12.8-6.8-16.5l-53.5-35.8 53.5-35.8c5.4-3.6 8-10.1 6.8-16.5L92.6 92.2l63.2 12.5c6.5 1.3 12.8-1.5 16.4-6.8L208 44.4 243.8 98c3.6 5.3 9.9 8.1 16.4 6.8l63.2-12.5-12.1 61.2c4.2-2.8 8.4-5.5 13-7.8 7.3-15.7 17.5-29.4 29.3-41.2l5.8-29.5c1-5.2-.6-10.6-4.4-14.4-3.8-3.8-9-5.5-14.4-4.4l-76.2 15.1-43.1-64.6c-6-8.9-20.6-8.9-26.6 0l-43.2 64.6-76.2-15.2c-5.3-1.1-10.6.7-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4l15.1 76.3-64.5 43.2c-4.4 3-7.1 8-7.1 13.3C0 213 2.7 218 7.1 221l64.5 43.2-15.1 76.2c-1 5.3.6 10.7 4.4 14.4s9.2 5.4 14.4 4.4l56.3-11.1c8.8-14 20.3-26.3 33.9-36zM208 149.8c28.8 0 52.5 21.2 56.9 48.8 2.4-.8 4.8-1.8 7.3-2.4 5-9 11.2-17.1 18-24.5-13.9-31.7-45.5-53.9-82.2-53.9-49.5 0-89.8 40.3-89.8 89.9 0 39.5 25.7 72.7 61.1 84.8 2.3-10.6 5.9-20.6 10.6-30.1-23-7.6-39.8-29.1-39.8-54.7.1-31.9 26-57.9 57.9-57.9z"
          ></path>
        </svg>
      );

    case "Rains, Sunny Intervals":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="60"
          width="60"
        >
          <path
            fill="white"
            d="M298.2 418.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zM192 140c26.4 0 48 20 51.1 45.6 4.8-3.6 9.8-6.9 15.1-9.9 1.5-8.4 3.9-16.5 6.8-24.3-14.3-25.7-41.5-43.4-73-43.4-46.2 0-83.7 37.6-83.7 83.8s37.5 83.8 83.7 83.8c.3 0 .6-.1.9-.1 1.1-11.4 3.7-22.4 7.7-32.8-2.8.5-5.6.9-8.5.9-28.5 0-51.7-23.2-51.7-51.7-.1-28.6 23.1-51.9 51.6-51.9zm-31.7 151.7c-3.6-5.3-9.9-8.1-16.4-6.8l-56 11.1L99 240c1.2-6.4-1.4-12.8-6.8-16.4l-47.4-31.8L92.2 160c5.4-3.6 8-10.1 6.8-16.4l-11.1-56 56 11.1c6.5 1.3 12.8-1.4 16.4-6.8L192 44.4l31.8 47.5c3.6 5.3 10 8.1 16.4 6.8L319.6 83c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.3-14.5-18.8-12.6l-68.9 13.6-39.2-58.5c-5.9-8.9-20.6-8.9-26.6 0l-39.1 58.5-69-13.7c-5.3-1.1-10.7.6-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.5l13.7 69-58.4 39.1c-4.4 3-7.1 7.9-7.1 13.3 0 5.3 2.7 10.3 7.1 13.3l58.4 39.1-13.7 69c-1 5.3.6 10.7 4.4 14.5 3.8 3.8 9 5.5 14.4 4.4l68.9-13.7 39.1 58.5c3.1 4.6 8.2 7.1 13.3 7.1 3.1 0 6.2-.9 8.9-2.7 7.3-4.9 9.3-14.9 4.4-22.2l-44.9-67.4zm329.9 126.4c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm85.1-220.8C570 158.2 536.5 128 496 128c-8.6 0-17 1.4-25.2 4.3C451.1 109.4 422.6 96 392 96c-56.5 0-102.7 45.3-104 101.6-37.8 13.3-64 49.3-64 90.4 0 52.9 43.1 96 96 96h224c52.9 0 96-43.1 96-96 0-41.3-26.6-77.6-64.7-90.7zM560 208.8zM544 352H320c-35.3 0-64-28.7-64-64 0-30.6 21.8-57 52-62.8l14.5-2.8-2-18c-.2-1.5-.4-2.9-.4-4.4 0-39.7 32.3-72 72-72 24.3 0 46.8 12.2 60.2 32.8l8.1 12.4 13-7.1c32.7-17.8 70.7 8.2 70.8 40.4l-.2 16.2 12.8 2.6c29.8 6 51.3 32.3 51.3 62.7-.1 35.3-28.8 64-64.1 64zm42.2 66.1c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8zm-192 0c-7.6-4.3-17.4-1.8-21.8 6l-36.6 64c-4.4 7.7-1.7 17.4 6 21.8 2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.9-8.1l36.6-64c4.4-7.7 1.7-17.4-6-21.8z"
          ></path>
        </svg>
      );

    case "Sunny Intervals":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="60"
          width="60"
        >
          <path
            fill="white"
            d="M558.2 185.6C542.1 151.5 507.4 128 468 128c-41.7 0-77.6 25.2-92.5 62.5-32.5 11.4-55.5 42.1-55.5 78.3 0 45.9 37.3 83.2 83.2 83.2h153.6c45.9 0 83.2-37.3 83.2-83.2 0-45.4-36.6-82.4-81.8-83.2zM556.8 320H403.2c-28.3 0-51.2-22.9-51.2-51.2 0-27.5 21.8-49.8 49-51 4.9-32.7 32.9-57.8 67-57.8 35.8 0 64.8 27.8 67.5 62.9 6.5-3.1 13.6-5.3 21.3-5.3 28.3 0 51.2 22.9 51.2 51.2S585.1 320 556.8 320zm-153.6 64c-.7 0-1.4-.2-2.1-.2l4.3 21.6-84.8-16.8c-6.6-1.3-12.8 1.4-16.4 6.8L256 467.2l-48.1-71.9c-3.6-5.3-9.9-8.1-16.4-6.8l-84.8 16.8 16.8-84.8c1.2-6.3-1.4-12.8-6.8-16.4L44.8 256l71.9-48.1c5.4-3.6 8-10.1 6.8-16.4l-16.8-84.8 84.8 16.8c6.5 1.3 12.8-1.5 16.4-6.8L256 44.8l48.1 71.9c3.6 5.3 9.9 8.1 16.4 6.8L428.8 102c8.7-1.7 14.3-10.1 12.6-18.8-1.7-8.7-10.1-14.4-18.8-12.6L324.8 90 269.3 7.1c-3-4.4-8-7.1-13.3-7.1s-10.3 2.7-13.3 7.1L187.2 90 89.4 70.6c-5.3-1.1-10.6.6-14.4 4.4s-5.4 9.2-4.4 14.4L90 187.2 7.1 242.7c-4.4 3-7.1 7.9-7.1 13.3s2.7 10.3 7.1 13.3L90 324.8l-19.4 97.8c-1 5.2.6 10.7 4.4 14.4 3.8 3.8 9.1 5.4 14.4 4.4l97.8-19.4 55.5 82.9c3 4.4 8 7.1 13.3 7.1s10.3-2.7 13.3-7.1l55.4-82.9 97.8 19.4c5.4 1.1 10.7-.6 14.4-4.4 3.8-3.8 5.4-9.2 4.4-14.4l-7.6-38.6h-30.5zM256 179.7c21 0 40 8.5 53.8 22.3 6.2-8.7 13.6-16.4 22-23.1-19.5-19.2-46.3-31.1-75.8-31.1-59.7 0-108.3 48.6-108.3 108.3S196.3 364.3 256 364.3c22.8 0 44-7.2 61.5-19.3-7.1-8-13.1-16.9-17.8-26.6-12.4 8.7-27.4 13.9-43.7 13.9-42.1 0-76.3-34.2-76.3-76.3s34.2-76.3 76.3-76.3z"
          ></path>
        </svg>
      );
    case "Sunny Intervals, Showers":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          height="60"
          width="60"
        >
          <path
            fill="white"
            d="M640 258.3c0-51.6-40.2-93.5-89.6-93.5h-.5c-16.6-40.7-55.3-69.2-99.4-69.2-46.4 0-86.2 30.1-101.5 74.2-25.3 8.8-45.2 29.1-54.7 54.9-48.3 5-86.3 45.5-86.3 95.1 0 1.8.1 3.7.2 5.6-38 13.2-64.2 49.2-64.2 90.5 0 53 43.1 96.1 96 96.1h240c52.9 0 96-43.1 96-96.1 0-24.7-9.4-47.1-24.8-64.1 49-.5 88.8-42.2 88.8-93.5zM480 480H240c-35.3 0-64-28.7-64-64.1 0-31 22.2-57.5 52.8-62.9l16.5-2.9-3.6-16.3c-1.1-5-1.7-9.6-1.7-13.9 0-35.3 28.7-64.1 64-64.1 24.6 0 47.2 14.5 57.8 37l8.6 18.4 15.8-12.7c8.8-7 19.1-10.7 29.8-10.7 26.5 0 48 21.5 48 48v16h16c35.3 0 64 28.7 64 64.1S515.3 480 480 480zm70.4-160.2h-56.1c-7.5-36.5-39.7-64.1-78.3-64.1-12 0-23.7 2.7-34.4 7.9-13-18-32-30.8-53.2-36.5 9.6-17.3 26.7-29.1 46.7-30.1 5.6-39.3 37-69.4 75.3-69.4 40.3 0 72.9 33.3 75.9 75.5 7.4-3.7 15.3-6.3 24-6.3 31.8 0 57.6 27.5 57.6 61.5.1 34-25.7 61.5-57.5 61.5zm-384.9-7.7c-2.1-1-4.3-1.7-6.6-1.7-1 0-2.1.1-3.1.3l-63.2 12.5 12.5-63.2c1.2-6.3-1.4-12.8-6.8-16.5l-53.5-35.8 53.5-35.8c5.4-3.6 8-10.1 6.8-16.5L92.6 92.2l63.2 12.5c6.5 1.3 12.8-1.5 16.4-6.8L208 44.4 243.8 98c3.6 5.3 9.9 8.1 16.4 6.8l63.2-12.5-12.1 61.2c4.2-2.8 8.4-5.5 13-7.8 7.3-15.7 17.5-29.4 29.3-41.2l5.8-29.5c1-5.2-.6-10.6-4.4-14.4-3.8-3.8-9-5.5-14.4-4.4l-76.2 15.1-43.1-64.6c-6-8.9-20.6-8.9-26.6 0l-43.2 64.6-76.2-15.2c-5.3-1.1-10.6.7-14.4 4.4-3.8 3.8-5.4 9.2-4.4 14.4l15.1 76.3-64.5 43.2c-4.4 3-7.1 8-7.1 13.3C0 213 2.7 218 7.1 221l64.5 43.2-15.1 76.2c-1 5.3.6 10.7 4.4 14.4s9.2 5.4 14.4 4.4l56.3-11.1c8.8-14 20.3-26.3 33.9-36zM208 149.8c28.8 0 52.5 21.2 56.9 48.8 2.4-.8 4.8-1.8 7.3-2.4 5-9 11.2-17.1 18-24.5-13.9-31.7-45.5-53.9-82.2-53.9-49.5 0-89.8 40.3-89.8 89.9 0 39.5 25.7 72.7 61.1 84.8 2.3-10.6 5.9-20.6 10.6-30.1-23-7.6-39.8-29.1-39.8-54.7.1-31.9 26-57.9 57.9-57.9z"
          ></path>
        </svg>
      );

    default:
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
  <div className="flex flex-col text-left justify-center gap-2 text-white px-4 sm:px-10 border-r border-r-white">
    <div className="flex gap-4 sm:gap-6 items-center justify-between">
      <h3 className="font-montserrat font-semibold text-base sm:text-lg w-14 h-14 sm:w-16 sm:h-16">
        {city}
      </h3>
      <WeatherIcon
        className="text-right text-lg sm:text-xl"
        condition={condition}
      />
    </div>
    <p className="text-sm sm:text-base font-montserrat">{condition}</p>
    <div className="flex items-center gap-2">
      <img
        className="mysvg"
        src={thermometer}
        alt="thermometer icon"
        height="24"
        width="24"
      />
      <p className="text-xs sm:text-sm">
        Temperature
        <br />
        Min: {minTemp}°C
        <br />
        Max: {maxTemp}°C
      </p>
    </div>
  </div>
);

WeatherCard.propTypes = {
  city: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  minTemp: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
};

const Home = () => {
  const weatherData = [
    {
      city: "Koforidua",
      condition: "Rains, Sunny Intervals",
      minTemp: 23,
      maxTemp: 31,
    },
    {
      city: "Cape Coast",
      condition: "Rains, Sunny Intervals",
      minTemp: 24,
      maxTemp: 30,
    },
    {
      city: "Ho",
      condition: "Rains, Sunny Intervals",
      minTemp: 23,
      maxTemp: 31,
    },
    {
      city: "Takoradi",
      condition: "Rains, Sunny Intervals",
      minTemp: 25,
      maxTemp: 30,
    },
    {
      city: "Accra",
      condition: "Rains, Sunny Intervals",
      minTemp: 24,
      maxTemp: 30,
    },
    {
      city: "Bole",
      condition: "Cloudy, Sunny Intervals",
      minTemp: 24,
      maxTemp: 32,
    },
    {
      city: "Tamale",
      condition: "Sunny Intervals",
      minTemp: 24,
      maxTemp: 34,
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

    return () => clearInterval(timer);
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
    const formattedDate = today.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center mx-auto px-4 py-1 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Replace with your image path
      }}
    >
      <main className="flex-grow mt-16 container mx-auto">
        <div className="pt-2 md:pt-2">
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white text-center my-12 md:my-6">
            Customized Agro-Climatic Information Services
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
                  attribution='&copy; <a href="http://osm.org/copyright">FutureDev</a>'
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
                      <h2 className="location-title text-blue-900">Accra</h2>

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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 24 - 30°C
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
                            <strong>Morning:</strong> Mist (60%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 29°C
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
                            <strong>Morning:</strong> Rain (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 22 - 30°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 24 - 32°C
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
                            <strong>Morning:</strong> Mist (60%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 22 - 31°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 31°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 22 - 32°C
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
                            <strong>Morning:</strong> Mist (60%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 24 - 31°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 20 - 30°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 31°C
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
                            <strong>Morning:</strong> Mist (60%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 22 - 31°C
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
                            <strong>Morning:</strong> Mist (60%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 22 - 30°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 31°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSun className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> Sunny Periods
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 29°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (30%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 22 - 32°C
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
                            <strong>Morning:</strong> Partly Cloudy
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Afternoon Weather */}
                        <div className="weather-info flex items-center my-2">
                          <FaCloudSunRain className="weather-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Afternoon:</strong> TSRA (40%)
                          </p>
                        </div>

                        <hr className="border-gray-300" />

                        {/* Temperature Info */}
                        <div className="weather-info flex items-center">
                          <FaThermometerHalf className="temp-icon text-gray-900 text-xl mr-2" />
                          <p>
                            <strong>Temp:</strong> 23 - 30°C
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
            <div className="bg-white rounded-lg shadow-lg p-3">
              <h2 className="text-blue-600 font-bold text-xl">
                Other Forecasts
              </h2>
              <ul className="space-y-3">
                <li>
                  <MyLink
                    to="/5-days-forecast"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      5 Days Forecast
                    </h3>
                  </MyLink>
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
                <li>
                  <Link
                    to="/crop-advisory"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Crop Advisories
                    </h3>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/poultry-advisory"
                    className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition duration-200"
                  >
                    <h3 className="text-blue-600 font-semibold">
                      Poultry Advisories
                    </h3>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col space-y-4 m-8 p-4 max-w-full mx-auto">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              {/* News Section */}
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

              {/* Events Section */}
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
                  <a href="/events/poult-calendar" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={event1}
                        alt="Event 1"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          2025 POULTRY CALENDAR
                        </p>
                        <p className="text-sm text-gray-500">
                          20 Feb 2024 - 24 Nov 2024
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Event 2 */}
                  <a href="/events/crop-calen" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={event2}
                        alt="Event 2"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          2025 MAJOR SEASON CROP CALENDAR.
                        </p>
                        <p className="text-sm text-gray-500">
                          20 Feb 2024 - 24 Nov 2024
                        </p>
                      </div>
                    </div>
                  </a>

                  {/* Event 3 */}
                  <a href="/events/clim-rep-rel" className="block">
                    <div className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg hover:shadow-md transition duration-300 ease-in-out">
                      <img
                        src={event3}
                        alt="Event 3"
                        className="w-24 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="font-semibold text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out">
                          2024 CLIMATE REPORT
                        </p>
                        <p className="text-sm text-gray-500">26 Nov 2024</p>
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
