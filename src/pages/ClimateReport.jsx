// import { useState } from "react";
// import { Line, Bar } from "react-chartjs-2"; // Use Line and Bar charts from react-chartjs-2

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

// // Climate data for each region including new metrics
// const climateData = {
//   "Greater Accra": {
//     temp: 30,
//     humidity: 75,
//     precipitation: 50,
//     windSpeed: 15,
//     airQuality: 85,
//     solarRadiation: 200,
//   },
//   Ashanti: {
//     temp: 28,
//     humidity: 80,
//     precipitation: 60,
//     windSpeed: 12,
//     airQuality: 78,
//     solarRadiation: 190,
//   },
//   Northern: {
//     temp: 35,
//     humidity: 65,
//     precipitation: 20,
//     windSpeed: 18,
//     airQuality: 90,
//     solarRadiation: 220,
//   },
//   Eastern: {
//     temp: 29,
//     humidity: 70,
//     precipitation: 55,
//     windSpeed: 14,
//     airQuality: 82,
//     solarRadiation: 205,
//   },
//   Western: {
//     temp: 27,
//     humidity: 85,
//     precipitation: 90,
//     windSpeed: 10,
//     airQuality: 75,
//     solarRadiation: 185,
//   },
//   // Add similar data for other regions
// };

// // Historical trends for temperature
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

// // Air quality data over months (example metric)
// const airQualityTrends = {
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
//       label: "Air Quality Index",
//       data: [85, 88, 80, 82, 81, 79, 77, 75, 78, 84, 86, 85],
//       borderColor: "rgba(255, 99, 132, 1)",
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       fill: true,
//     },
//   ],
// };

// const ClimateReport = () => {
//   const [selectedRegion, setSelectedRegion] = useState("Greater Accra");
//   const [view, setView] = useState("current");

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//   };

//   const handleViewChange = (event) => {
//     setView(event.target.value);
//   };

//   const regionClimate = climateData[selectedRegion] || {};

//   return (
//     <div className="bg-gray-100 min-h-screen p-8 pt-24">
//       {" "}
//       {/* pt-20 added to fix navbar overlap */}
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-blue-600 text-4xl font-bold mb-4 text-center">
//           Climate Report - {selectedRegion}
//         </h1>

//         {/* Region and View Selectors */}
//         <div className="flex justify-between mb-6">
//           <div className="w-1/2 mr-4">
//             <label className="text-lg font-semibold">Select Region:</label>
//             <select
//               value={selectedRegion}
//               onChange={handleRegionChange}
//               className="border border-gray-300 rounded p-2 w-full mt-2"
//             >
//               {regionsOfGhana.map((region) => (
//                 <option key={region} value={region}>
//                   {region}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="w-1/2">
//             <label className="text-lg font-semibold">View:</label>
//             <select
//               value={view}
//               onChange={handleViewChange}
//               className="border border-gray-300 rounded p-2 w-full mt-2"
//             >
//               <option value="current">Current Climate</option>
//               <option value="historical">Historical Trends</option>
//             </select>
//           </div>
//         </div>

//         {/* Current Climate Data Cards */}
//         {view === "current" ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
//             <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
//               <h3 className="text-blue-700 text-xl font-bold">Temperature</h3>
//               <p className="text-gray-800 text-3xl">
//                 {regionClimate.temp || "--"}°C
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
//               <h3 className="text-blue-700 text-xl font-bold">Humidity</h3>
//               <p className="text-gray-800 text-3xl">
//                 {regionClimate.humidity || "--"}%
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
//               <h3 className="text-blue-700 text-xl font-bold">Precipitation</h3>
//               <p className="text-gray-800 text-3xl">
//                 {regionClimate.precipitation || "--"} mm
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
//               <h3 className="text-blue-700 text-xl font-bold">Wind Speed</h3>
//               <p className="text-gray-800 text-3xl">
//                 {regionClimate.windSpeed || "--"} km/h
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
//               <h3 className="text-blue-700 text-xl font-bold">Air Quality</h3>
//               <p className="text-gray-800 text-3xl">
//                 {regionClimate.airQuality || "--"} AQI
//               </p>
//             </div>
//             <div className="bg-blue-100 p-4 rounded-lg shadow text-center">
//               <h3 className="text-blue-700 text-xl font-bold">
//                 Solar Radiation
//               </h3>
//               <p className="text-gray-800 text-3xl">
//                 {regionClimate.solarRadiation || "--"} W/m²
//               </p>
//             </div>
//           </div>
//         ) : (
//           /* Historical Data Visualization */
//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold mb-4">
//               Historical Climate Data
//             </h2>

//             {/* Temperature Trends */}
//             <div className="mb-6">
//               <h3 className="text-lg font-bold mb-2">Temperature Trends</h3>
//               <Line
//                 data={tempTrends}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: { title: { display: true, text: "Months" } },
//                     y: { title: { display: true, text: "Temperature (°C)" } },
//                   },
//                 }}
//               />
//             </div>

//             {/* Air Quality Trends */}
//             <div className="mb-6">
//               <h3 className="text-lg font-bold mb-2">Air Quality Trends</h3>
//               <Line
//                 data={airQualityTrends}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: { title: { display: true, text: "Months" } },
//                     y: {
//                       title: { display: true, text: "Air Quality Index (AQI)" },
//                     },
//                   },
//                 }}
//               />
//             </div>

//             {/* Precipitation Trends */}
//             <div>
//               <h3 className="text-lg font-bold mb-2">Monthly Precipitation</h3>
//               <Bar
//                 data={{
//                   labels: tempTrends.labels,
//                   datasets: [
//                     {
//                       label: "Precipitation (mm)",
//                       data: [50, 40, 60, 70, 90, 100, 110, 95, 80, 60, 50, 40],
//                       backgroundColor: "rgba(54, 162, 235, 0.6)",
//                     },
//                   ],
//                 }}
//                 options={{
//                   responsive: true,
//                   scales: {
//                     x: { title: { display: true, text: "Months" } },
//                     y: { title: { display: true, text: "Precipitation (mm)" } },
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ClimateReport;
