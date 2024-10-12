// import { useState } from "react";
// import { Line, Bar } from "react-chartjs-2"; // Use react-chartjs-2 for charting

// const regionsOfGhana = [
//   "Greater Accra",
//   "Ashanti",
//   "Northern",
//   "Eastern",
//   "Western",
//   "Volta",
//   "Upper East",
//   "Upper West",
//   "Central",
//   "Brong Ahafo",
//   "Western North",
//   "Ahafo",
//   "Savannah",
//   "Oti",
//   "Bono East",
//   "North East",
// ];

// // Sample climate data
// const climateData = {
//   "Greater Accra": { temp: 30, humidity: 75, precipitation: 50 },
//   Ashanti: { temp: 28, humidity: 80, precipitation: 60 },
//   Northern: { temp: 35, humidity: 65, precipitation: 20 },
//   Eastern: { temp: 29, humidity: 70, precipitation: 55 },
//   Western: { temp: 27, humidity: 85, precipitation: 90 },
//   // Add similar data for other regions
// };

// // Sample chart data (e.g., temperature trends over months)
// const tempTrends = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],
//   datasets: [
//     {
//       label: "Temperature (°C)",
//       data: [28, 30, 32, 35, 33, 31, 30, 29, 28, 27, 26, 25],
//       borderColor: "rgba(75, 192, 192, 1)",
//       backgroundColor: "rgba(75, 192, 192, 0.2)",
//       fill: true,
//     },
//   ],
// };

// const ClimateReport = () => {
//   const [selectedRegion, setSelectedRegion] = useState("Greater Accra");
//   const [view, setView] = useState("current"); // Toggle between 'current' and 'historical'

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//   };

//   const handleViewChange = (event) => {
//     setView(event.target.value);
//   };

//   // Display selected region's climate data
//   const regionClimate = climateData[selectedRegion] || {};

//   return (
//     <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-8">
//       <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-blue-600 text-3xl font-bold mb-4 text-center">
//           Climate Report - {selectedRegion}
//         </h1>

//         {/* Dropdown for Region Selection */}
//         <div className="flex justify-between mb-6">
//           <div className="w-1/2 mr-4">
//             <label className="text-lg font-semibold mr-2">Select Region:</label>
//             <select
//               value={selectedRegion}
//               onChange={handleRegionChange}
//               className="border border-gray-300 rounded p-2 w-full"
//             >
//               {regionsOfGhana.map((region) => (
//                 <option key={region} value={region}>
//                   {region}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Dropdown for View Selection */}
//           <div className="w-1/2">
//             <label className="text-lg font-semibold mr-2">View:</label>
//             <select
//               value={view}
//               onChange={handleViewChange}
//               className="border border-gray-300 rounded p-2 w-full"
//             >
//               <option value="current">Current Climate</option>
//               <option value="historical">Historical Trends</option>
//             </select>
//           </div>
//         </div>

//         {/* Climate Data Display Cards */}
//         {view === "current" ? (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//             <div className="bg-blue-100 p-4 rounded-lg shadow">
//               <h3 className="text-blue-700 text-xl font-bold">Temperature</h3>
//               <p className="text-gray-800 text-2xl">
//                 {regionClimate.temp || "--"} °C
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow">
//               <h3 className="text-blue-700 text-xl font-bold">Humidity</h3>
//               <p className="text-gray-800 text-2xl">
//                 {regionClimate.humidity || "--"} %
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow">
//               <h3 className="text-blue-700 text-xl font-bold">Precipitation</h3>
//               <p className="text-gray-800 text-2xl">
//                 {regionClimate.precipitation || "--"} mm
//               </p>
//             </div>
//           </div>
//         ) : (
//           /* Historical Data Display (e.g., Temperature Trends) */
//           <div className="mb-6">
//             <h2 className="text-2xl font-semibold mb-4">
//               Historical Temperature Trends
//             </h2>
//             <Line
//               data={tempTrends}
//               options={{
//                 responsive: true,
//                 scales: {
//                   x: { title: { display: true, text: "Months" } },
//                   y: { title: { display: true, text: "Temperature (°C)" } },
//                 },
//               }}
//             />
//           </div>
//         )}

//         {/* Precipitation Bar Chart (as an example for historical view) */}
//         {view === "historical" && (
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">
//               Monthly Precipitation (mm)
//             </h2>
//             <Bar
//               data={{
//                 labels: tempTrends.labels, // Months
//                 datasets: [
//                   {
//                     label: "Precipitation (mm)",
//                     data: [50, 40, 60, 70, 90, 100, 110, 95, 80, 60, 50, 40],
//                     backgroundColor: "rgba(54, 162, 235, 0.6)",
//                   },
//                 ],
//               }}
//               options={{
//                 responsive: true,
//                 scales: {
//                   x: { title: { display: true, text: "Months" } },
//                   y: { title: { display: true, text: "Precipitation (mm)" } },
//                 },
//               }}
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClimateReport;
