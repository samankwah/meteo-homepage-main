// import { FaDownload } from "react-icons/fa"; // For download icon
// import { useNavigate } from "react-router-dom";

// const MonthlyForecast = () => {
//   const issuedDate = "September 1, 2024";
//   const validPeriod = "September 2024";
//   const navigate = useNavigate();
//   const forecastData = [
//     {
//       month: "September",
//       description: "Above-average rainfall expected throughout the month.",
//       temperature: "25-30°C",
//     },
//     {
//       month: "October",
//       description: "Cooler temperatures with increased chances of rainfall.",
//       temperature: "20-28°C",
//     },
//     {
//       month: "November",
//       description: "Expected transition to dry conditions with warmer days.",
//       temperature: "22-31°C",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
//       <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate("/")}
//           className="text-teal-500 hover:text-teal-600 flex items-center gap-2 transition-colors mb-6"
//         >
//           <span>←</span>
//           <span className="text-sm font-medium">GO BACK</span>
//         </button>
//         <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-10 pt-20">
//           <h1 className="text-blue-900 text-4xl font-bold mb-4 text-center">
//             Monthly Weather Forecast
//           </h1>
//           <p className="text-md text-gray-700 text-center mb-8">
//             Issued Date: {issuedDate} | Valid Period: {validPeriod}
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {forecastData.map((forecast, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-50 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
//               >
//                 <h2 className="text-xl font-semibold text-blue-900 mb-6">
//                   {forecast.month}
//                 </h2>
//                 <p className="text-gray-600 mb-6">{forecast.description}</p>
//                 <p className="text-lg font-bold text-gray-800">
//                   Temperature: {forecast.temperature}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Download Section */}
//           <div className="bg-blue-50 p-6 rounded-lg shadow-md text-center">
//             <h2 className="text-2xl font-semibold text-blue-900 mb-6">
//               Download Full Forecast
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Access the detailed monthly forecast report.
//             </p>
//             <a
//               href="/path/to/monthly-forecast.pdf"
//               download
//               className="bg-blue-900 text-white text-sm px-3 py-2 rounded inline-flex items-center justify-center hover:bg-blue-700 transition duration-200"
//             >
//               <FaDownload className="mr-2" />
//               Download Report
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MonthlyForecast;

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Search,
  Wind,
  Thermometer,
  Eye,
  Droplets,
  Navigation,
  Settings,
  Menu,
  X,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Cloud,
  Zap,
  MapPin,
  Volume2,
  VolumeX,
  Archive,
  Camera,
  Video,
  Share2,
  Maximize2,
  Plus,
  Minus,
  RotateCcw,
  Info,
  Target,
  Mountain,
  Satellite,
  Radar,
  Globe,
  Layers,
  Loader,
} from "lucide-react";

const WindyClone = () => {
  const [selectedLayer, setSelectedLayer] = useState("radar");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [layersPanelOpen, setLayersPanelOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 5.6037,
    lng: -0.187,
    name: "Accra",
    temp: 29,
  });
  const [searchQuery, setSearchQuery] = useState("Accra");
  const [showLightning, setShowLightning] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [myLocationEnabled, setMyLocationEnabled] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("1h");
  const [mapZoom, setMapZoom] = useState(6);
  const [weatherData, setWeatherData] = useState(null);
  const [radarData, setRadarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mapCenter, setMapCenter] = useState([5.6037, -0.187]);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef(null);

  // Weather API configuration
  const WEATHER_API_KEY = "demo_key"; // Replace with your OpenWeatherMap API key
  const RADAR_API_URL = "https://api.openweathermap.org/data/2.5";

  // Map layer configurations
  const mapLayers = {
    osm: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "© OpenStreetMap contributors",
    },
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "© Esri",
    },
    terrain: {
      url: "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      attribution: "© OpenTopoMap",
    },
  };

  // Weather layers configuration
  const weatherLayers = [
    {
      id: "radar",
      name: "Radar+",
      icon: Radar,
      color: "from-blue-400 via-green-400 to-red-500",
    },
    {
      id: "satellite",
      name: "Satellite",
      icon: Satellite,
      color: "from-gray-600 to-gray-300",
    },
    {
      id: "wind",
      name: "Wind",
      icon: Wind,
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "rain-thunder",
      name: "Rain, thunder",
      icon: Zap,
      color: "from-blue-300 to-red-400",
    },
    {
      id: "temperature",
      name: "Temperature",
      icon: Thermometer,
      color: "from-blue-400 to-red-500",
    },
    {
      id: "pressure",
      name: "Pressure",
      icon: Navigation,
      color: "from-purple-400 to-pink-500",
    },
    {
      id: "clouds",
      name: "Clouds",
      icon: Cloud,
      color: "from-gray-400 to-white",
    },
    {
      id: "waves",
      name: "Waves",
      icon: Droplets,
      color: "from-blue-200 to-blue-800",
    },
    {
      id: "hurricane",
      name: "Hurricane tracker",
      icon: RotateCcw,
      color: "from-red-500 to-yellow-400",
    },
    {
      id: "rain-accumulation",
      name: "Rain accumulation",
      icon: Droplets,
      color: "from-blue-300 to-blue-700",
    },
  ];

  // Generate realistic radar data
  const generateRadarData = useCallback(() => {
    const data = [];
    const centerLat = selectedLocation.lat;
    const centerLng = selectedLocation.lng;

    // Create storm systems
    for (let storm = 0; storm < 3; storm++) {
      const stormLat = centerLat + (Math.random() - 0.5) * 4;
      const stormLng = centerLng + (Math.random() - 0.5) * 4;
      const stormIntensity = 50 + Math.random() * 50;

      // Generate points around storm center
      for (let i = 0; i < 50; i++) {
        const distance = Math.random() * 1.5;
        const angle = Math.random() * Math.PI * 2;

        data.push({
          lat: stormLat + Math.cos(angle) * distance,
          lng: stormLng + Math.sin(angle) * distance,
          intensity: stormIntensity * (1 - distance / 1.5) + Math.random() * 20,
          timestamp: Date.now() + Math.random() * 3600000,
        });
      }
    }

    setRadarData(data);
  }, [selectedLocation.lat, selectedLocation.lng]);

  // Load current weather data using API
  const loadWeatherData = useCallback(async () => {
    setLoading(true);
    try {
      // For demo purposes, simulate API calls
      // Replace with actual fetch calls when you have a real API key
      setTimeout(() => {
        setWeatherData({
          current: {
            temp: Math.round(25 + Math.random() * 10),
            humidity: Math.round(60 + Math.random() * 30),
            windSpeed: Math.round(5 + Math.random() * 15),
            windDirection: Math.round(Math.random() * 360),
            pressure: Math.round(1010 + Math.random() * 20),
            visibility: Math.round(8 + Math.random() * 7),
            cloudCover: Math.round(Math.random() * 100),
            description: "Partly cloudy",
          },
          forecast: [
            {
              day: "MON",
              high: 29,
              low: 25,
              icon: "⛈️",
              desc: "Thunderstorms",
            },
            { day: "TUE", high: 29, low: 25, icon: "⛈️", desc: "Rain" },
            { day: "WED", high: 28, low: 24, icon: "🌧️", desc: "Light Rain" },
            { day: "THU", high: 28, low: 24, icon: "🌧️", desc: "Cloudy" },
          ],
        });
        setLoading(false);
      }, 1000);

      /* Uncomment when you have a real API key:
      const weatherUrl = `${RADAR_API_URL}/weather?lat=${selectedLocation.lat}&lon=${selectedLocation.lng}&appid=${WEATHER_API_KEY}&units=metric`;
      const response = await fetch(weatherUrl);
      const data = await response.json();
      // Process real API data here
      */
    } catch (error) {
      console.error("Weather API error:", error);
      setLoading(false);
    }
  }, [
    selectedLocation.lat,
    selectedLocation.lng,
    RADAR_API_URL,
    WEATHER_API_KEY,
  ]);

  // Convert coordinates to screen position with map offset
  const coordToScreen = (lat, lng) => {
    const bounds = {
      north: mapCenter[0] + 3,
      south: mapCenter[0] - 3,
      east: mapCenter[1] + 3,
      west: mapCenter[1] - 3,
    };

    let x = ((lng - bounds.west) / (bounds.east - bounds.west)) * 100;
    let y = ((bounds.north - lat) / (bounds.north - bounds.south)) * 100;

    // Apply map offset for dragging
    x += mapOffset.x / 10;
    y += mapOffset.y / 10;

    return {
      x: Math.max(-50, Math.min(150, x)),
      y: Math.max(-50, Math.min(150, y)),
    };
  };

  // Handle map dragging
  const handleMouseDown = useCallback(
    (e) => {
      if (mapRef.current) {
        setIsDragging(true);
        setDragStart({
          x: e.clientX - mapOffset.x,
          y: e.clientY - mapOffset.y,
        });
      }
    },
    [mapOffset.x, mapOffset.y]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging && mapRef.current) {
        setMapOffset({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart.x, dragStart.y]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Get tile URL for current map layer
  const getCurrentMapTiles = () => {
    if (selectedLayer === "satellite") return mapLayers.satellite;
    if (selectedLayer === "terrain") return mapLayers.terrain;
    return mapLayers.osm;
  };

  // Generate map tiles grid with current map center
  const generateMapTiles = () => {
    const tiles = [];
    const zoom = Math.max(6, Math.min(mapZoom, 12));
    const centerTileX = Math.floor(
      ((mapCenter[1] + 180) / 360) * Math.pow(2, zoom)
    );
    const centerTileY = Math.floor(
      ((1 -
        Math.log(
          Math.tan((mapCenter[0] * Math.PI) / 180) +
            1 / Math.cos((mapCenter[0] * Math.PI) / 180)
        ) /
          Math.PI) /
        2) *
        Math.pow(2, zoom)
    );

    for (let x = centerTileX - 3; x <= centerTileX + 3; x++) {
      for (let y = centerTileY - 3; y <= centerTileY + 3; y++) {
        if (
          x >= 0 &&
          y >= 0 &&
          x < Math.pow(2, zoom) &&
          y < Math.pow(2, zoom)
        ) {
          let tileUrl = getCurrentMapTiles()
            .url.replace("{z}", zoom.toString())
            .replace("{x}", x.toString())
            .replace("{y}", y.toString());

          // Handle {s} subdomain for OpenStreetMap
          if (tileUrl.includes("{s}")) {
            const subdomains = ["a", "b", "c"];
            const subdomain = subdomains[(x + y) % subdomains.length];
            tileUrl = tileUrl.replace("{s}", subdomain);
          }

          tiles.push({
            url: tileUrl,
            x: (x - centerTileX + 3) * (100 / 7) + mapOffset.x / 15,
            y: (y - centerTileY + 3) * (100 / 7) + mapOffset.y / 15,
            zoom,
            tileX: x,
            tileY: y,
          });
        }
      }
    }
    return tiles;
  };

  // Search location function with better error handling
  const searchLocation = async (query) => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      // Simulate geocoding API - replace with real API like Nominatim
      const locations = {
        accra: { lat: 5.6037, lng: -0.187, name: "Accra, Ghana" },
        lagos: { lat: 6.5244, lng: 3.3792, name: "Lagos, Nigeria" },
        abuja: { lat: 9.0765, lng: 7.3986, name: "Abuja, Nigeria" },
        kumasi: { lat: 6.6885, lng: -1.6244, name: "Kumasi, Ghana" },
        london: { lat: 51.5074, lng: -0.1278, name: "London, UK" },
        paris: { lat: 48.8566, lng: 2.3522, name: "Paris, France" },
        "new york": { lat: 40.7128, lng: -74.006, name: "New York, USA" },
        tokyo: { lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan" },
        sydney: { lat: -33.8688, lng: 151.2093, name: "Sydney, Australia" },
      };

      const location = locations[query.toLowerCase()] || locations["accra"];
      setSelectedLocation({
        ...location,
        temp: Math.round(20 + Math.random() * 15),
      });
    } catch (error) {
      console.error("Geocoding error:", error);
    }
    setLoading(false);
  };

  // Handle search
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      searchLocation(searchQuery);
    }
  };

  // Get weather icon for layer
  const getWeatherIcon = (layer) => {
    const icons = {
      radar: "🌧️",
      satellite: "🛰️",
      wind: "💨",
      "rain-thunder": "⛈️",
      temperature: "🌡️",
      pressure: "📊",
      clouds: "☁️",
      waves: "🌊",
      hurricane: "🌀",
      "rain-accumulation": "🌧️",
    };
    return icons[layer] || "🌤️";
  };

  // Initialize map and weather data
  useEffect(() => {
    loadWeatherData();
    generateRadarData();
  }, [selectedLocation, generateRadarData]);

  // Update map center when location changes
  useEffect(() => {
    setMapCenter([selectedLocation.lat, selectedLocation.lng]);
    setMapOffset({ x: 0, y: 0 }); // Reset offset when location changes
  }, [selectedLocation]);

  // Add mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Render weather overlay based on selected layer
  const renderWeatherOverlay = () => {
    if (selectedLayer === "radar" && radarData.length > 0) {
      return (
        <div className="absolute inset-0 pointer-events-none">
          {radarData.map((point, index) => {
            const screen = coordToScreen(point.lat, point.lng);
            const intensity = Math.max(0, Math.min(100, point.intensity));
            const size = 8 + (intensity / 100) * 20;

            let color;
            if (intensity > 80) color = "rgb(220, 38, 127)";
            else if (intensity > 60) color = "rgb(239, 68, 68)";
            else if (intensity > 40) color = "rgb(251, 146, 60)";
            else if (intensity > 20) color = "rgb(34, 197, 94)";
            else color = "rgb(59, 130, 246)";

            return (
              <div
                key={index}
                className="absolute rounded-full opacity-70 animate-pulse"
                style={{
                  left: `${screen.x}%`,
                  top: `${screen.y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  transform: "translate(-50%, -50%)",
                  filter: "blur(2px)",
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: "3s",
                }}
              />
            );
          })}
        </div>
      );
    }

    if (selectedLayer === "wind") {
      return (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 100 }, (_, i) => {
            const x = (i % 10) * 10 + 5;
            const y = Math.floor(i / 10) * 10 + 5;
            const direction = Math.random() * 360;
            const speed = 5 + Math.random() * 15;

            return (
              <div
                key={i}
                className="absolute opacity-60"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${direction}deg)`,
                }}
              >
                <div
                  className="bg-blue-400 rounded-full"
                  style={{
                    width: "2px",
                    height: `${speed}px`,
                    transformOrigin: "center bottom",
                  }}
                />
              </div>
            );
          })}
        </div>
      );
    }

    if (selectedLayer === "temperature") {
      return (
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-yellow-400/30 to-red-500/30" />
        </div>
      );
    }

    if (selectedLayer === "clouds") {
      return (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute bg-white/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 80}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: "4s",
              }}
            />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-screen w-full bg-gray-900 text-white relative overflow-hidden">
      {/* Search Bar */}
      <div className="absolute top-4 left-4 z-50">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
            className="pl-10 pr-4 py-3 w-80 bg-white/90 backdrop-blur-sm text-gray-900 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
          {loading && (
            <Loader
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 animate-spin"
              size={18}
            />
          )}
        </div>
      </div>

      {/* Logo and Premium/Login */}
      <div className="absolute top-4 right-4 z-50 flex items-center space-x-3">
        <div className="flex items-center space-x-2 bg-red-600 px-3 py-1 rounded-full">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <Wind className="text-red-600" size={14} />
          </div>
          <span className="font-bold text-sm">Windy.com</span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full font-medium text-sm transition-colors">
          👑 Go Premium
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full font-medium text-sm transition-colors">
          Login
        </button>
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setLayersPanelOpen(true)}
        className="absolute top-20 right-4 z-50 bg-red-600 hover:bg-red-700 p-3 rounded-lg transition-colors shadow-lg"
      >
        <Menu size={20} />
        <span className="block text-xs mt-1">Menu</span>
      </button>

      {/* Weather Layers Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-96 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 z-40 ${
          layersPanelOpen ? "translate-x-0" : "translate-x-full"
        } border-l border-gray-700`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Weather Layers</h2>
            <button
              onClick={() => setLayersPanelOpen(false)}
              className="p-2 hover:bg-gray-700 rounded-lg"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-1">
            {weatherLayers.map((layer) => {
              return (
                <button
                  key={layer.id}
                  onClick={() => {
                    setSelectedLayer(layer.id);
                    if (layer.id === "radar") {
                      generateRadarData();
                    }
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
                    selectedLayer === layer.id
                      ? "bg-blue-600/20 border border-blue-500"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{getWeatherIcon(layer.id)}</span>
                    <span className="font-medium">{layer.name}</span>
                  </div>
                  {selectedLayer === layer.id && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-300 mb-3">
              Map Style
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedLayer("radar")}
                className={`w-full p-2 rounded-lg text-left ${
                  selectedLayer === "radar" || selectedLayer === "osm"
                    ? "bg-blue-600/20"
                    : "hover:bg-gray-800"
                }`}
              >
                🗺️ Street Map (OSM)
              </button>
              <button
                onClick={() => setSelectedLayer("satellite")}
                className={`w-full p-2 rounded-lg text-left ${
                  selectedLayer === "satellite"
                    ? "bg-blue-600/20"
                    : "hover:bg-gray-800"
                }`}
              >
                🛰️ Satellite
              </button>
              <button
                onClick={() => setSelectedLayer("terrain")}
                className={`w-full p-2 rounded-lg text-left ${
                  selectedLayer === "terrain"
                    ? "bg-blue-600/20"
                    : "hover:bg-gray-800"
                }`}
              >
                🏔️ Terrain
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Current Weather Panel */}
      <div className="absolute top-20 left-4 z-40 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 min-w-80 border border-gray-700">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl font-light">
            {loading
              ? "--"
              : weatherData?.current?.temp || selectedLocation.temp}
            °
          </div>
          <div className="text-gray-400 text-sm">
            {weatherData?.current?.windSpeed || 9} kt
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {(
            weatherData?.forecast || [
              { day: "MON", high: 29, low: 25, icon: "⛈️" },
              { day: "TUE", high: 29, low: 25, icon: "⛈️" },
              { day: "WED", high: 28, low: 24, icon: "🌧️" },
              { day: "THU", high: 28, low: 24, icon: "🌧️" },
            ]
          ).map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-400 mb-1">{day.day}</div>
              <div className="text-lg mb-1">{day.icon}</div>
              <div className="text-sm">
                <span className="font-medium">{day.high}°</span>
                <span className="text-gray-400">/{day.low}°</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400 h-2 rounded-full mb-2"></div>
        <div className="flex justify-between text-xs text-gray-400 mb-4">
          <span>●</span>
          <span>●</span>
          <span>●</span>
          <span>●</span>
        </div>

        <div className="bg-yellow-500 text-gray-900 p-3 rounded-lg flex items-center space-x-2">
          <Zap size={16} />
          <div className="text-sm">
            <div className="font-medium">Thunderstorms/Squall line</div>
            <div>Monday 8:00 - 15:00</div>
          </div>
        </div>

        {weatherData && (
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="bg-gray-800/50 p-2 rounded">
              <div className="text-gray-400">Humidity</div>
              <div className="font-medium">{weatherData.current.humidity}%</div>
            </div>
            <div className="bg-gray-800/50 p-2 rounded">
              <div className="text-gray-400">Pressure</div>
              <div className="font-medium">
                {weatherData.current.pressure} hPa
              </div>
            </div>
            <div className="bg-gray-800/50 p-2 rounded">
              <div className="text-gray-400">Visibility</div>
              <div className="font-medium">
                {weatherData.current.visibility} km
              </div>
            </div>
            <div className="bg-gray-800/50 p-2 rounded">
              <div className="text-gray-400">Clouds</div>
              <div className="font-medium">
                {weatherData.current.cloudCover}%
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Map */}
      <div className="absolute inset-0 bg-gray-800 overflow-hidden">
        <div
          ref={mapRef}
          className="w-full h-full relative cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* Base Map Tiles */}
          <div className="absolute inset-0">
            {generateMapTiles().map((tile, index) => (
              <img
                key={`${tile.zoom}-${tile.tileX}-${tile.tileY}-${selectedLayer}`}
                src={tile.url}
                alt="Map tile"
                className="absolute object-cover transition-opacity duration-300"
                style={{
                  left: `${tile.x}%`,
                  top: `${tile.y}%`,
                  width: `${100 / 7}%`,
                  height: `${100 / 7}%`,
                  transform: "translate(-50%, -50%)",
                  opacity: 0.9,
                }}
                onLoad={(e) => {
                  e.target.style.opacity = "1";
                }}
                onError={(e) => {
                  console.log("Tile failed to load:", tile.url);
                  e.target.style.opacity = "0.3";
                  e.target.style.backgroundColor = "#4a5568";
                }}
              />
            ))}
          </div>

          {/* Weather Overlay */}
          {renderWeatherOverlay()}

          {/* Location Marker */}
          <div
            className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
            style={{
              left: `${50 + mapOffset.x / 20}%`,
              top: `${50 + mapOffset.y / 20}%`,
            }}
          >
            <div className="flex flex-col items-center">
              <MapPin
                className="text-red-500 drop-shadow-lg animate-bounce"
                size={24}
              />
              <div className="bg-black/80 text-white px-2 py-1 rounded mt-1 text-xs font-medium">
                {selectedLocation.name}
              </div>
            </div>
          </div>

          {/* Grid overlay for coordinates */}
          {(selectedLayer === "radar" ||
            selectedLayer === "wind" ||
            selectedLayer === "temperature") && (
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={`lat-${i}`}
                  className="absolute w-full h-px bg-gray-400"
                  style={{ top: `${i * 5}%` }}
                ></div>
              ))}
              {[...Array(20)].map((_, i) => (
                <div
                  key={`lng-${i}`}
                  className="absolute h-full w-px bg-gray-400"
                  style={{ left: `${i * 5}%` }}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Time Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 border border-gray-700 flex items-center space-x-4">
          <button
            onClick={() =>
              setCurrentTime(new Date(currentTime.getTime() - 3600000))
            }
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <SkipBack size={18} />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>

          <button
            onClick={() =>
              setCurrentTime(new Date(currentTime.getTime() + 3600000))
            }
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <SkipForward size={18} />
          </button>

          <div className="flex space-x-1 bg-gray-800 p-1 rounded-lg">
            <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded">
              BLUE
            </button>
            <button className="px-2 py-1 text-xs text-gray-400 hover:text-white">
              VIS
            </button>
            <button className="px-2 py-1 text-xs text-gray-400 hover:text-white">
              INF
            </button>
          </div>

          <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-medium">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}{" "}
            - Live
          </div>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-32 right-8 z-50 flex flex-col space-y-2">
        <button
          onClick={() => setMapZoom(Math.min(mapZoom + 1, 15))}
          className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
        >
          <Plus size={18} />
        </button>
        <button
          onClick={() => setMapZoom(Math.max(mapZoom - 1, 3))}
          className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
        >
          <Minus size={18} />
        </button>
        <button
          onClick={() => setSelectedLocation({ ...selectedLocation })}
          className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
        >
          <Target size={18} />
        </button>
        <button className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
          <Maximize2 size={18} />
        </button>
      </div>

      {/* Control Toggles */}
      <div className="absolute bottom-20 left-8 z-50 space-y-2">
        <label className="flex items-center space-x-2 text-sm cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={myLocationEnabled}
              onChange={(e) => setMyLocationEnabled(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                myLocationEnabled
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-500"
              }`}
            >
              {myLocationEnabled && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
          </div>
          <span>My location</span>
        </label>

        <label className="flex items-center space-x-2 text-sm cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={showLightning}
              onChange={(e) => setShowLightning(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                showLightning
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-500"
              }`}
            >
              {showLightning && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
          </div>
          <span>Show lightning</span>
        </label>

        <label className="flex items-center space-x-2 text-sm cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={(e) => setSoundEnabled(e.target.checked)}
              className="sr-only"
            />
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                soundEnabled ? "bg-blue-500 border-blue-500" : "border-gray-500"
              }`}
            >
              {soundEnabled && (
                <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
              )}
            </div>
          </div>
          <span>Sound</span>
        </label>
      </div>

      {/* Archive and Time Selection */}
      <div className="absolute bottom-8 right-8 z-50 flex space-x-2">
        <button className="bg-gray-900/90 backdrop-blur-sm p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
          <Archive size={18} />
          <span className="block text-xs mt-1">Archive</span>
        </button>

        {["12h", "6h", "1h"].map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTimeframe(time)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedTimeframe === time
                ? "bg-orange-500 text-white"
                : "bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:bg-gray-700"
            }`}
          >
            {time}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-50 bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
        <div className="flex items-center space-x-2 text-xs">
          <span>0</span>
          <div className="w-16 h-3 bg-gradient-to-r from-blue-500 via-green-400 via-yellow-400 to-red-500 rounded"></div>
          <span>100</span>
          <span className="text-gray-400">
            {selectedLayer === "radar"
              ? "dBZ"
              : selectedLayer === "temperature"
              ? "°C"
              : selectedLayer === "wind"
              ? "m/s"
              : "units"}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-1/2 right-8 z-50 flex flex-col space-y-2 transform -translate-y-1/2">
        <button
          onClick={() =>
            navigator.geolocation?.getCurrentPosition((pos) => {
              const { latitude, longitude } = pos.coords;
              setSelectedLocation({
                lat: latitude,
                lng: longitude,
                name: "My Location",
                temp: 25,
              });
            })
          }
          className="bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
        >
          <Target size={18} />
        </button>
        <button className="bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
          <Camera size={18} />
        </button>
        <button className="bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
          <Video size={18} />
        </button>
        <button
          onClick={() => setLayersPanelOpen(false)}
          className="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg transition-colors"
        >
          <X size={18} />
        </button>
        <button className="bg-gray-900/90 backdrop-blur-sm p-3 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors">
          <span className="text-xs">•••</span>
        </button>
      </div>
    </div>
  );
};

export default WindyClone;
