import {
  FaCloudSun,
  FaCloudRain,
  FaSnowflake,
  FaSun,
  FaCloud,
  FaThermometerHalf,
} from "react-icons/fa";
import jsPDF from "jspdf";

const weatherIcons = {
  "Partly Cloudy": <FaCloudSun className="text-yellow-500 text-3xl" />,
  Rainy: <FaCloudRain className="text-blue-500 text-3xl" />,
  Snowy: <FaSnowflake className="text-blue-300 text-3xl" />,
  Sunny: <FaSun className="text-yellow-400 text-3xl" />,
  Cloudy: <FaCloud className="text-gray-600 text-3xl" />,
};

const FiveDaysForecast = () => {
  const forecastData = [
    {
      day: "Day 1",
      condition: "Partly Cloudy",
      temp: "28°C",
      precipitation: "10%",
      wind: "15 km/h",
    },
    {
      day: "Day 2",
      condition: "Rainy",
      temp: "22°C",
      precipitation: "60%",
      wind: "10 km/h",
    },
    {
      day: "Day 3",
      condition: "Sunny",
      temp: "30°C",
      precipitation: "5%",
      wind: "12 km/h",
    },
    {
      day: "Day 4",
      condition: "Cloudy",
      temp: "25°C",
      precipitation: "20%",
      wind: "18 km/h",
    },
    {
      day: "Day 5",
      condition: "Snowy",
      temp: "-2°C",
      precipitation: "80%",
      wind: "8 km/h",
    },
  ];

  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("5-Day Weather Forecast", 20, 20);

    forecastData.forEach((data, index) => {
      const yPosition = 40 + index * 30;
      doc.setFontSize(14);
      doc.text(`${data.day}: ${data.condition}`, 20, yPosition);
      doc.setFontSize(12);
      doc.text(`Temperature: ${data.temp}`, 20, yPosition + 10);
      doc.text(`Precipitation: ${data.precipitation}`, 20, yPosition + 20);
      doc.text(`Wind: ${data.wind}`, 20, yPosition + 30);
    });

    doc.save("5-day-weather-forecast.pdf");
  };

  return (
    <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-6 sm:p-10 relative">
      {/* Title Section */}
      <h1 className="text-blue-800 text-3xl sm:text-4xl font-bold mb-4 text-center pt-12">
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
        className="bg-blue-600 text-white px-4 py-2 mb-4 rounded-lg shadow-lg transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Download
      </button>
      {/* Forecast Container */}
      <div className="forecast-grid grid grid-cols-2 gap-6 w-80% sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        {/* Forecast Card for each day */}
        {forecastData.map((data, index) => (
          <div
            key={index}
            className="forecast-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-1">
              {data.day}
            </h2>

            <div className="flex items-center justify-center mb-2">
              {weatherIcons[data.condition]}
              <p className="text-gray-600 ml-2">{data.condition}</p>
            </div>

            <div className="flex items-center justify-center mb-1">
              <FaThermometerHalf className="text-red-500 text-lg mr-1" />
              <p className="text-3xl font-bold text-gray-900">{data.temp}</p>
            </div>

            <p className="text-sm text-gray-500">
              Precipitation: {data.precipitation}
            </p>
            <p className="text-sm text-gray-500">Wind: {data.wind}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDaysForecast;

// import {
//   FaCloudSun,
//   FaCloudRain,
//   FaSnowflake,
//   FaSun,
//   FaCloud,
//   FaThermometerHalf,
// } from "react-icons/fa";
// import jsPDF from "jspdf";

// const weatherIcons = {
//   "Partly Cloudy": <FaCloudSun className="text-yellow-500 text-3xl" />,
//   Rainy: <FaCloudRain className="text-blue-500 text-3xl" />,
//   Snowy: <FaSnowflake className="text-blue-300 text-3xl" />,
//   Sunny: <FaSun className="text-yellow-400 text-3xl" />,
//   Cloudy: <FaCloud className="text-gray-600 text-3xl" />,
// };

// const FiveDaysForecast = () => {
//   const forecastData = [
//     {
//       day: "Day 1",
//       condition: "Partly Cloudy",
//       temp: "28°C",
//       precipitation: "10%",
//       wind: "15 km/h",
//     },
//     {
//       day: "Day 2",
//       condition: "Rainy",
//       temp: "22°C",
//       precipitation: "60%",
//       wind: "10 km/h",
//     },
//     {
//       day: "Day 3",
//       condition: "Sunny",
//       temp: "30°C",
//       precipitation: "5%",
//       wind: "12 km/h",
//     },
//     {
//       day: "Day 4",
//       condition: "Cloudy",
//       temp: "25°C",
//       precipitation: "20%",
//       wind: "18 km/h",
//     },
//     {
//       day: "Day 5",
//       condition: "Snowy",
//       temp: "-2°C",
//       precipitation: "80%",
//       wind: "8 km/h",
//     },
//   ];

//   const handleDownload = () => {
//     const doc = new jsPDF();

//     doc.setFontSize(18);
//     doc.text("5-Day Weather Forecast", 20, 20);

//     forecastData.forEach((data, index) => {
//       const yPosition = 40 + index * 30;
//       doc.setFontSize(14);
//       doc.text(`${data.day}: ${data.condition}`, 20, yPosition);
//       doc.setFontSize(12);
//       doc.text(`Temperature: ${data.temp}`, 20, yPosition + 10);
//       doc.text(`Precipitation: ${data.precipitation}`, 20, yPosition + 20);
//       doc.text(`Wind: ${data.wind}`, 20, yPosition + 30);
//     });

//     doc.save("5-day-weather-forecast.pdf");
//   };

//   return (
//     <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col items-center p-6 sm:p-10 relative pt-28">
//       {/* Increased padding top to avoid navbar overlap */}
//       {/* Title Section */}
//       <h1 className="text-blue-800 text-3xl sm:text-4xl font-bold mb-4 text-center">
//         5-Day Weather Forecast
//       </h1>
//       {/* Description Section */}
//       <p className="text-md sm:text-lg text-gray-700 text-center max-w-2xl mb-6">
//         Stay informed about the weather for the next five days, including
//         temperature trends, precipitation chances, and wind forecasts tailored
//         for your region.
//       </p>

//       {/* Download Button */}
//       <button
//         onClick={handleDownload}
//         className="bg-blue-600 text-white px-4 py-2 mb-4 rounded-lg shadow-lg transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//       >
//         Download Forecast
//       </button>

//       {/* Forecast Container */}
//       <div className="forecast-grid grid grid-cols-1 gap-6 w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
//         {/* Forecast Card for each day */}
//         {forecastData.map((data, index) => (
//           <div
//             key={index}
//             className="forecast-card bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
//           >
//             <h2 className="text-xl font-semibold text-blue-800 mb-1">
//               {data.day}
//             </h2>

//             <div className="flex items-center justify-center mb-2">
//               {weatherIcons[data.condition]}
//               <p className="text-gray-600 ml-2">{data.condition}</p>
//             </div>

//             <div className="flex items-center justify-center mb-1">
//               <FaThermometerHalf className="text-red-500 text-lg mr-1" />
//               <p className="text-3xl font-bold text-gray-900">{data.temp}</p>
//             </div>

//             <p className="text-sm text-gray-500">
//               Precipitation: {data.precipitation}
//             </p>
//             <p className="text-sm text-gray-500">Wind: {data.wind}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FiveDaysForecast;
