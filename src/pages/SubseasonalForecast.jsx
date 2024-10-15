import s2s from "../assets/images/s2s.png";

const SubseasonalForecast = () => {
  // Sample data for the subseasonal forecast
  const forecastData = {
    period: "October 4 - 17 2024",
    summary:
      "Mostly above-average rainfall expected across the region, with occasional dry spells. Temperature will generally remain near average.",
    temperatureOutlook: "Near to slightly above average",
    rainfallOutlook: "Above average in most areas",
    windOutlook: "Mild to moderate winds",
    advisories:
      "Farmers are advised to prepare for a wetter-than-usual season and take precautions to prevent flooding in low-lying areas.",
  };

  const handleDownload = () => {
    // Replace with the actual file download link or logic
    const fileUrl = "/S2S Forecast_04_10_24_mofa.pdf";
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="relative main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col items-center pt-24">
      {/* Download Button */}
      <div className="w-full flex justify-end">
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white text-lg px-6 py-3 rounded shadow hover:bg-blue-500 transition duration-300 focus:outline-none"
        >
          Download Forecast
        </button>
      </div>
      {/* Page Title */}
      <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold mb-4">
        Subseasonal Forecast
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Forecast for the period: {forecastData.period}
      </p>

      {/* Forecast Summary Card */}
      <div className="forecast-card bg-white shadow-md rounded-lg p-4 w-full max-w-4xl mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">Summary</h2>
        <p className="text-gray-700 mb-4">{forecastData.summary}</p>

        <div className="forecast-details grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Temperature Outlook
            </h3>
            <p className="text-gray-600">{forecastData.temperatureOutlook}</p>
          </div>
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Rainfall Outlook
            </h3>
            <p className="text-gray-600">{forecastData.rainfallOutlook}</p>
          </div>
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">
              Wind Outlook
            </h3>
            <p className="text-gray-600">{forecastData.windOutlook}</p>
          </div>
          <div className="forecast-item bg-gray-100 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-600">Advisories</h3>
            <p className="text-gray-600">{forecastData.advisories}</p>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="map-card bg-white shadow-md rounded-lg p-4 w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-blue-600 mb-2">
          Forecast Map
        </h2>
        <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80 flex items-center justify-center">
          <img
            src={s2s} // Replace this with the actual image path
            alt="Subseasonal Forecast Map"
            className="h-full w-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SubseasonalForecast;

// const SubseasonalForecast = () => {
//   // Sample data for the subseasonal forecast
//   const forecastData = {
//     period: "October - December 2024",
//     summary:
//       "Mostly above-average rainfall expected across the region, with occasional dry spells. Temperature will generally remain near average.",
//     temperatureOutlook: "Near to slightly above average",
//     rainfallOutlook: "Above average in most areas",
//     windOutlook: "Mild to moderate winds",
//     advisories:
//       "Farmers are advised to prepare for a wetter-than-usual season and take precautions to prevent flooding in low-lying areas.",
//   };

//   const handleDownload = () => {
//     const fileUrl = "/S2S_Forecast_04_10_24_mofa.pdf";
//     window.open(fileUrl, "_blank");
//   };

//   return (
//     <div className="relative main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-6 flex flex-col items-center pt-16">
//       {/* Page Title */}
//       <h1 className="text-blue-700 text-2xl sm:text-4xl font-bold mb-6 text-center">
//         Subseasonal Forecast
//       </h1>

//       {/* Period Description */}
//       <p className="text-gray-700 text-center mb-8 text-lg">
//         Forecast for the period:{" "}
//         <span className="font-semibold">{forecastData.period}</span>
//       </p>

//       {/* Forecast Summary and Details */}
//       <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6 mb-8">
//         {/* Forecast Summary Card */}
//         <div className="forecast-card bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
//           <h2 className="text-xl font-semibold text-blue-600 mb-4">Summary</h2>
//           <p className="text-gray-700 mb-4">{forecastData.summary}</p>

//           <div className="forecast-details grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="forecast-item bg-gray-100 rounded-lg p-4">
//               <h3 className="text-lg font-semibold text-blue-600">
//                 Temperature Outlook
//               </h3>
//               <p className="text-gray-600">{forecastData.temperatureOutlook}</p>
//             </div>
//             <div className="forecast-item bg-gray-100 rounded-lg p-4">
//               <h3 className="text-lg font-semibold text-blue-600">
//                 Rainfall Outlook
//               </h3>
//               <p className="text-gray-600">{forecastData.rainfallOutlook}</p>
//             </div>
//             <div className="forecast-item bg-gray-100 rounded-lg p-4">
//               <h3 className="text-lg font-semibold text-blue-600">
//                 Wind Outlook
//               </h3>
//               <p className="text-gray-600">{forecastData.windOutlook}</p>
//             </div>
//             <div className="forecast-item bg-gray-100 rounded-lg p-4">
//               <h3 className="text-lg font-semibold text-blue-600">
//                 Advisories
//               </h3>
//               <p className="text-gray-600">{forecastData.advisories}</p>
//             </div>
//           </div>
//         </div>

//         {/* Map Card */}
//         <div className="map-card bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
//           <h2 className="text-xl font-semibold text-blue-600 mb-4">
//             Forecast Map
//           </h2>
//           <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80 flex items-center justify-center">
//             <p className="text-center text-gray-700">
//               Map for subseasonal forecast goes here
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Download Button - Centered */}
//       <div className="w-full flex justify-center">
//         <button
//           onClick={handleDownload}
//           className="bg-blue-600 text-white text-lg px-6 py-3 rounded shadow hover:bg-blue-500 transition duration-300 focus:outline-none"
//         >
//           Download Forecast
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubseasonalForecast;
