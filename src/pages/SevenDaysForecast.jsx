// // const SevenDaysForecast = () => {
// //   // Helper function to format date
// //   const formatDate = (date) => {
// //     return date.toLocaleDateString("en-US", {
// //       weekday: "long",
// //       month: "long",
// //       day: "numeric",
// //     });
// //   };

// //   // Generate dates for the next 7 days
// //   const today = new Date();
// //   const forecastData = Array.from({ length: 7 }).map((_, index) => ({
// //     day: formatDate(
// //       new Date(today.getFullYear(), today.getMonth(), today.getDate() + index)
// //     ),
// //     summary: "Sample Weather", // This would ideally vary
// //     temperature: `${20 + index * 2}°C`, // Example temperature increment
// //     precipitation: `${10 + index}%`, // Example precipitation increment
// //     wind: `${5 + index * 2} km/h`, // Example wind speed increment
// //   }));

// //   const handleDownload = () => {
// //     // Logic to handle download
// //     alert("Download functionality is not implemented yet.");
// //   };

// //   return (
// //     <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col items-center pt-24">
// //       <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold mb-4">
// //         7 Days Forecast
// //       </h1>

// //       {/* Download Button */}
// //       <button
// //         onClick={handleDownload}
// //         className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
// //       >
// //         Download
// //       </button>

// //       {/* Forecast Summary Cards */}
// //       <div className="forecast-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mb-8">
// //         {forecastData.map((forecast, index) => (
// //           <div
// //             key={index}
// //             className="forecast-card bg-white shadow-md rounded-lg p-4 text-center"
// //           >
// //             <h2 className="text-xl font-semibold text-blue-600">
// //               {forecast.day}
// //             </h2>
// //             <p className="text-gray-600">{forecast.summary}</p>
// //             <p className="text-2xl font-bold text-gray-900">
// //               {forecast.temperature}
// //             </p>
// //             <p className="text-sm text-gray-500">
// //               Precipitation: {forecast.precipitation}
// //             </p>
// //             <p className="text-sm text-gray-500">Wind: {forecast.wind}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Map Card */}
// //       <div className="map-card bg-white shadow-md rounded-lg p-4 w-full max-w-6xl">
// //         <h2 className="text-xl font-semibold text-blue-600 mb-2">
// //           Forecast Map
// //         </h2>
// //         <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80">
// //           <p className="text-center text-gray-700">Map goes here</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SevenDaysForecast;

// const SevenDaysForecast = () => {
//   // Helper function to format date
//   const formatDate = (date) => {
//     return date.toLocaleDateString("en-US", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   // Generate dates for the next 7 days
//   const today = new Date();
//   const forecastData = Array.from({ length: 7 }).map((_, index) => ({
//     day: formatDate(
//       new Date(today.getFullYear(), today.getMonth(), today.getDate() + index)
//     ),
//     summary: "Sample Weather", // This would ideally vary
//     temperature: `${20 + index * 2}°C`, // Example temperature increment
//     precipitation: `${10 + index}%`, // Example precipitation increment
//     wind: `${5 + index * 2} km/h`, // Example wind speed increment
//   }));

//   const handleDownload = () => {
//     // Logic to handle download
//     alert("Download functionality is not implemented yet.");
//   };

//   return (
//     <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col items-center pt-24">
//       <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold mb-4">
//         7 Days Forecast
//       </h1>

//       {/* Download Button */}
//       <button
//         onClick={handleDownload}
//         className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
//       >
//         Download
//       </button>

//       {/* Forecast Summary Cards */}
//       <div className="forecast-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mb-8">
//         {forecastData.map((forecast, index) => (
//           <div
//             key={index}
//             className="forecast-card bg-white shadow-md rounded-lg p-4 text-center"
//           >
//             <h2 className="text-xl font-semibold text-blue-600">
//               {forecast.day}
//             </h2>
//             <p className="text-gray-600">{forecast.summary}</p>
//             <p className="text-2xl font-bold text-gray-900">
//               {forecast.temperature}
//             </p>
//             <p className="text-sm text-gray-500">
//               Precipitation: {forecast.precipitation}
//             </p>
//             <p className="text-sm text-gray-500">Wind: {forecast.wind}</p>
//           </div>
//         ))}
//       </div>

//       {/* Map Card */}
//       <div className="map-card bg-white shadow-md rounded-lg p-4 w-full max-w-6xl">
//         <h2 className="text-xl font-semibold text-blue-600 mb-2">
//           Forecast Map
//         </h2>
//         <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80">
//           <p className="text-center text-gray-700">Map goes here</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SevenDaysForecast;

const SevenDaysForecast = () => {
  // Helper function to format date
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  // Generate dates for the next 7 days
  const today = new Date();
  const forecastData = Array.from({ length: 7 }).map((_, index) => ({
    day: formatDate(
      new Date(today.getFullYear(), today.getMonth(), today.getDate() + index)
    ),
    summary: "Sample Weather", // This would ideally vary
    temperature: `${20 + index * 2}°C`, // Example temperature increment
    precipitation: `${10 + index}%`, // Example precipitation increment
    wind: `${5 + index * 2} km/h`, // Example wind speed increment
  }));

  const handleDownload = () => {
    // Logic to handle download
    alert("Download functionality is not implemented yet.");
  };

  return (
    <div className="main-content bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-4 flex flex-col items-center pt-24">
      {/* Adjust padding-top based on the navbar height */}
      <div className="relative w-full max-w-6xl">
        <h1 className="text-blue-600 text-2xl sm:text-3xl font-bold mb-4">
          7 Days Forecast
        </h1>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700"
        >
          Download
        </button>

        {/* Forecast Summary Cards */}
        <div className="forecast-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-8">
          {forecastData.map((forecast, index) => (
            <div
              key={index}
              className="forecast-card bg-white shadow-md rounded-lg p-4 text-center"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {forecast.day}
              </h2>
              <p className="text-gray-600">{forecast.summary}</p>
              <p className="text-2xl font-bold text-gray-900">
                {forecast.temperature}
              </p>
              <p className="text-sm text-gray-500">
                Precipitation: {forecast.precipitation}
              </p>
              <p className="text-sm text-gray-500">Wind: {forecast.wind}</p>
            </div>
          ))}
        </div>

        {/* Map Card */}
        <div className="map-card bg-white shadow-md rounded-lg p-4 w-full">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Forecast Map
          </h2>
          <div className="map-container bg-gray-300 rounded-lg h-64 sm:h-80">
            <p className="text-center text-gray-700">Map goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SevenDaysForecast;
