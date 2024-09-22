import {
  FaCloudSun,
  FaCloudRain,
  FaSnowflake,
  FaSun,
  FaCloud,
  FaThermometerHalf,
} from "react-icons/fa";

const weatherIcons = {
  "Partly Cloudy": <FaCloudSun className="text-yellow-500 text-3xl" />,
  Rainy: <FaCloudRain className="text-blue-500 text-3xl" />,
  Snowy: <FaSnowflake className="text-blue-300 text-3xl" />,
  Sunny: <FaSun className="text-yellow-400 text-3xl" />,
  Cloudy: <FaCloud className="text-gray-600 text-3xl" />,
};

const FiveDaysForecast = () => {
  const handleDownload = () => {
    // Logic to handle download
    alert("Download functionality is not implemented yet.");
  };

  return (
    <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-6 sm:p-10 relative">
      {/* Title Section */}
      <h1 className="text-blue-800 text-3xl sm:text-4xl font-bold mb-4 text-center">
        5-Day Weather Forecast
      </h1>

      {/* Description Section */}
      <p className="text-md sm:text-lg text-gray-700 text-center max-w-2xl mb-6">
        Stay informed about the weather for the next five days, including
        temperature trends, precipitation chances, and wind forecasts tailored
        for your region.
      </p>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Download
      </button>

      {/* Forecast Container */}
      <div className="forecast-grid grid grid-cols-2 gap-6 w-80% sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {/* Forecast Card for each day */}
        {["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"].map((day, index) => {
          const weatherCondition = "Partly Cloudy"; // Example condition, can be dynamic
          return (
            <div
              key={index}
              className="forecast-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-1">
                {day}
              </h2>

              <div className="flex items-center justify-center mb-2">
                {weatherIcons[weatherCondition]}
                <p className="text-gray-600 ml-2">{weatherCondition}</p>
              </div>

              <div className="flex items-center justify-center mb-1">
                <FaThermometerHalf className="text-red-500 text-lg mr-1" />
                <p className="text-3xl font-bold text-gray-900">28°C</p>
              </div>

              <p className="text-sm text-gray-500">Precipitation: 10%</p>
              <p className="text-sm text-gray-500">Wind: 15 km/h</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiveDaysForecast;
